/* eslint-disable camelcase */
import axios from 'axios';

import {
  GET_USER_STOCKS, saveUserStocks, getUserStocks, CREATE_NEW_STOCK, DELETE_STOCK, UPDATE_STOCK, GET_PRODUCTS_FROM_STOCK, setDisplayedProducts, setCurrentStock, setDefaultStock, clearAfterStockUpdate,
} from '../redux/actions/stock';

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
    case GET_USER_STOCKS: {
      axiosInstance.get('/stock')
        .then((response) => {
          store.dispatch(saveUserStocks(response.data));
          const { stock: { userStocks } } = store.getState();
          const { user: { user: { default_stock } } } = store.getState();
          const foundStock = userStocks.find((stock) => stock.name === default_stock);
          store.dispatch(setDefaultStock(foundStock));
          store.dispatch(setCurrentStock(foundStock));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case CREATE_NEW_STOCK: {
      axiosInstance.post('/stock', { name: action.name })
        .then(() => {
          store.dispatch(clearAfterStockUpdate());
          store.dispatch(getUserStocks());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case UPDATE_STOCK: {
      axiosInstance.patch(`/stock/${action.id}`, { name: action.newName })
        .then(() => {
          store.dispatch(clearAfterStockUpdate());
          store.dispatch(getUserStocks());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case DELETE_STOCK: {
      axiosInstance.delete(`/stock/${action.id}`)
        .then(() => {
          store.dispatch(clearAfterStockUpdate());
          store.dispatch(getUserStocks());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case GET_PRODUCTS_FROM_STOCK: {
      axiosInstance.get(`/stock/${action.stockId}/product`)
        .then((response) => {
          store.dispatch(setDisplayedProducts(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
