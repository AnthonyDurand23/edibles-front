export const TOGGLE_STOCK_SETTINGS = 'TOGGLE_STOCK_SETTINGS';
export const GET_USER_STOCKS = 'GET_USER_STOCKS';
export const SAVE_USER_STOCKS = 'SAVE_USER_STOCKS';
export const SET_CURRENT_STOCK = 'SET_CURRENT_STOCK';
export const SET_DISPLAYED_PRODUCTS = 'SET_DISPLAYED_PRODUCTS';
export const SET_DEFAULT_STOCK = 'SET_DEFAULT_STOCK';
export const CREATE_NEW_STOCK = 'CREATE_NEW_STOCK';
export const SET_RENAMED_STOCK = 'SET_RENAMED_STOCK';
export const SET_NEWSTOCK_NAME = 'SET_NEWSTOCK_NAME';
export const UPDATE_STOCK = 'UPDATE_STOCK';
export const DELETE_STOCK = 'DELETE_STOCK';
export const CLEAR_AFTER_STOCK_UPDATE = 'CLEAR_AFTER_STOCK_UPDATE';

export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const GET_PRODUCTS_FROM_STOCK = 'GET_PRODUCTS_FROM_STOCK';
export const CLEAR_DISPLAYED_PRODUCTS = 'CLEAR_DISPLAYED_PRODUCTS';
export const SET_NEW_PRODUCT_DATA = 'SET_NEW_PRODUCT_DATA';
export const SAVE_PRODUCT_MODIFICATIONS = 'SAVE_PRODUCT_MODIFICATIONS';
export const TOGGLE_DELETE_MODAL = 'TOGGLE_DELETE_MODAL';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const toggleStockSettings = () => ({
  type: TOGGLE_STOCK_SETTINGS,
});

export const toggleEditMode = (productId) => ({
  type: TOGGLE_EDIT_MODE,
  productId,
});

export const getUserStocks = () => ({
  type: GET_USER_STOCKS,
});

export const saveUserStocks = (stocks) => ({
  type: SAVE_USER_STOCKS,
  stocks,
});

export const setCurrentStock = (stock) => ({
  type: SET_CURRENT_STOCK,
  stock,
});

export const setDefaultStock = (stock) => ({
  type: SET_DEFAULT_STOCK,
  stock,
});

export const setDisplayedProducts = (products) => ({
  type: SET_DISPLAYED_PRODUCTS,
  products,
});

export const setRenamedStock = (name) => ({
  type: SET_RENAMED_STOCK,
  name,
});

export const setNewStockName = (name) => ({
  type: SET_NEWSTOCK_NAME,
  name,
});

export const createNewStock = (name) => ({
  type: CREATE_NEW_STOCK,
  name,
});

export const updateStock = (id, newName) => ({
  type: UPDATE_STOCK,
  id,
  newName,
});

export const deleteStock = (id) => ({
  type: DELETE_STOCK,
  id,
});

export const clearAfterStockUpdate = () => ({
  type: CLEAR_AFTER_STOCK_UPDATE, 
});

export const getProductsFromStock = (stockId) => ({
  type: GET_PRODUCTS_FROM_STOCK,
  stockId,
});

export const clearDisplayedProducts = () => ({
  type: CLEAR_DISPLAYED_PRODUCTS,
});

export const setNewProductData = (name, value) => ({
  type: SET_NEW_PRODUCT_DATA,
  name,
  value,
});

export const saveProductModifications = (id, modifications) => ({
  type: SAVE_PRODUCT_MODIFICATIONS,
  id,
  modifications,
});

export const toggleDeleteModal = () => ({
  type: TOGGLE_DELETE_MODAL,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});
