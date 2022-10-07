import {
  SET_PRODUCT_FIELD, SET_STOCK_ARRAY, SET_SUCCESS_MESSAGE, SET_ERROR_MESSAGE, RESET_ALL_PRODUCT_UTILS,
} from '../actions/product';

export const initialState = {
  name: '',
  barCode: '',
  pictureUrl: '',
  quantity: '1',
  expirationDate: '',
  stockId: 0,
  stocks: [],
  successMessage: '',
  errorMessage: '',
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_STOCK_ARRAY:
      return {
        ...state,
        stocks: action.value,
      };
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.value,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.value,
      };
    case RESET_ALL_PRODUCT_UTILS:
      return {
        ...state,
        successMessage: '',
        errorMessage: '',
        quantity: '1',
        expirationDate: '',
      };
    default:
      return state;
  }
};

export default productReducer;
