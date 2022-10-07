/* eslint-disable no-console */
import axios from 'axios';

import { useDispatch } from 'react-redux';

import {
  setResultFromOffApi,
  setLoadingOffApi,
} from '../redux/actions/openFoodFacts';

export const useOpenFoodFactAPI = (search) => {
  const dispatch = useDispatch();
  let url = '';

  const fetchDataOFFApi = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(search)) {
      url = `${process.env.REACT_APP_OPENFOODFACTS_API_BARCODE_URL}${search}`;
      try {
        await axios
          .get(url)
          .then((result) => {
            let parsedData = [result.data.product];
            if (!parsedData[0]) parsedData = [];
            dispatch(setResultFromOffApi(parsedData));
            dispatch(setLoadingOffApi());
          })
          .catch((error) => {
            dispatch(setResultFromOffApi([]));
            dispatch(setLoadingOffApi());
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      const concatenatedSearch = search.split(' ').join('+');
      url = `${process.env.REACT_APP_OPENFOODFACTS_API_TERMS_URL + concatenatedSearch}&json=1`;
      try {
        await axios
          .get(url)
          .then((result) => {
            dispatch(setResultFromOffApi(result.data.products));
            dispatch(setLoadingOffApi());
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return fetchDataOFFApi;
};
