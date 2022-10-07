import {
  SAVE_USER_STOCKS, TOGGLE_STOCK_SETTINGS, SET_CURRENT_STOCK, SET_DEFAULT_STOCK, TOGGLE_EDIT_MODE, SET_DISPLAYED_PRODUCTS, CLEAR_DISPLAYED_PRODUCTS, SET_NEW_PRODUCT_DATA, TOGGLE_DELETE_MODAL, DELETE_PRODUCT, SET_RENAMED_STOCK, SET_NEWSTOCK_NAME, CLEAR_AFTER_STOCK_UPDATE,
} from '../actions/stock';

export const initialState = {
  userStocks: [],
  currentStock: {},
  defaultStock: {},
  productsDisplayed: [],
  isSettingsOpen: false,
  renamedStock: '',
  newStockName: '',
  editedProductID: '',
  editMode: false,
  newName: '',
  newQuantity: '',
  newExpirationDate: '',
  newStockID: '',
  isDeleteModalOpen: false,
};

const stockReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_STOCKS:
      return {
        ...state,
        userStocks: action.stocks,
      };
    case SET_CURRENT_STOCK:
      return {
        ...state,
        currentStock: action.stock,
      };
    case SET_DEFAULT_STOCK:
      return {
        ...state,
        defaultStock: action.stock,
      };
    case SET_RENAMED_STOCK:
      return {
        ...state,
        renamedStock: action.name,
      };
    case SET_NEWSTOCK_NAME:
      return {
        ...state,
        newStockName: action.name,
      };
    case SET_DISPLAYED_PRODUCTS:
      return {
        ...state,
        productsDisplayed: action.products,
      };
    case CLEAR_DISPLAYED_PRODUCTS:
      return {
        ...state,
        productsDisplayed: [],
      };
    case CLEAR_AFTER_STOCK_UPDATE:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
        renamedStock: '',
        newStockName: '',
      };
    case TOGGLE_STOCK_SETTINGS:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    case TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode,
        editedProductID: state.editedProductID ? '' : action.productId,
        newName: state.newName ? '' : state.newName,
        newQuantity: state.newQuantity ? '' : state.newQuantity,
        newExpirationDate: state.newExpirationDate ? '' : state.newExpirationDate,
        newStockID: state.newStockID ? '' : state.newStockID,
      };
    case SET_NEW_PRODUCT_DATA:
      return {
        ...state,
        [action.name]: action.value,
      };
    case TOGGLE_DELETE_MODAL:
    case DELETE_PRODUCT:
      return {
        ...state,
        isDeleteModalOpen: !state.isDeleteModalOpen,
      };
    default:
      return state;
  }
};

export default stockReducer;
