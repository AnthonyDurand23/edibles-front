export const SET_PRODUCT_FIELD = 'SET_PRODUCT_FIELD';
export const ADD_PRODUCT_TO_STOCK = 'ADD_PRODUCT_TO_STOCK';
export const GET_ALL_STOCKS = 'GET_ALL_STOCKS';
export const SET_STOCK_ARRAY = 'SET_STOCK_ARRAY';
export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const RESET_ALL_PRODUCT_UTILS = 'RESET_ALL_PRODUCT_UTILS';

export const setProductField = (value, name) => ({
  type: SET_PRODUCT_FIELD,
  value,
  name,
});

export const addProductToStock = (history) => ({
  type: ADD_PRODUCT_TO_STOCK,
  history,
});
export const getALlSotcks = () => ({
  type: GET_ALL_STOCKS,
});

export const setStockArray = (value) => ({
  type: SET_STOCK_ARRAY,
  value,
});

export const setSuccessMessage = (value) => ({
  type: SET_SUCCESS_MESSAGE,
  value,
});
export const setErrorMessage = (value) => ({
  type: SET_ERROR_MESSAGE,
  value,
});

export const resetAllProductUtils = () => ({
  type: RESET_ALL_PRODUCT_UTILS,
});
