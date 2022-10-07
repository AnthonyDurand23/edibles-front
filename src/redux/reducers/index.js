import { combineReducers } from 'redux';

// Reducers import
import openFoodFactReducer from './openFoodFacts';
import interfaceReducer from './interface';
import userReducer from './user';
import barcodeScannerReducer from './barcodeScanner';
import productReducer from './product';
import stockReducer from './stock';

const rootReducer = combineReducers({
  openFoodFacts: openFoodFactReducer,
  interface: interfaceReducer,
  user: userReducer,
  barcodeScanner: barcodeScannerReducer,
  product: productReducer,
  stock: stockReducer,
});

export default rootReducer;
