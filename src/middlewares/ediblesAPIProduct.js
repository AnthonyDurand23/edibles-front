import axios from 'axios';

import {
  ADD_PRODUCT_TO_STOCK, GET_ALL_STOCKS, setStockArray, setSuccessMessage, setErrorMessage, resetAllProductUtils,
} from '../redux/actions/product';
import { resetModal } from '../redux/actions/interface';
import { SAVE_PRODUCT_MODIFICATIONS, getProductsFromStock, DELETE_PRODUCT, setCurrentStock } from '../redux/actions/stock';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_EDIBLES_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token || '';
  return config;
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_STOCK: {
      const {
        product: {
          name,
          // barCode,
          pictureUrl,
          quantity,
          expirationDate,
          stockId,
        },
      } = store.getState();
      axiosInstance.post('/product',
        {
          // code: barCode,
          name,
          quantity: parseInt(quantity, 10),
          expirationDate,
          stockId,
          url_picture: pictureUrl,
        })
        .then(() => {
          store.dispatch(setSuccessMessage('Produit(s) ajouté à votre stock'));
          setTimeout(() => {
            store.dispatch(resetModal());
            store.dispatch(resetAllProductUtils());
            const { stock: { defaultStock } } = store.getState();
            store.dispatch(setCurrentStock(defaultStock));
            action.history.push('/stock');
          }, 1500);
        })
        .catch(() => store.dispatch(setErrorMessage('Oups ! Une erreur est survenue')));
      next(action);
      break;
    }
    case GET_ALL_STOCKS: {
      axiosInstance.get('/stock')
        .then((response) => {
          store.dispatch(setStockArray(response.data));
        })
        .catch((error) => console.log(error));
      next(action);
      break;
    }
    case SAVE_PRODUCT_MODIFICATIONS: {
      axiosInstance.patch(`/product/${action.id}`, action.modifications)
        .then(() => {
          const { stock: { currentStock: { id } } } = store.getState();
          store.dispatch(getProductsFromStock(id));
        })
        .catch((error) => console.log(error));
      next(action);
      break;
    }
    case DELETE_PRODUCT: {
      axiosInstance.delete(`/product/${action.id}`)
        .then(() => {
          const { stock: { currentStock: { id } } } = store.getState();
          store.dispatch(getProductsFromStock(id));
        })
        .catch((error) => console.log(error));
      next(action);
      break;
    }
    default:
      next(action);
  }
};
