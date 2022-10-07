import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import ediblesAPIUsermiddleware from '../../middlewares/ediblesAPIUser';
import ediblesAPIProductMiddleware from '../../middlewares/ediblesAPIProduct';
import ediblesAPIStockMiddleware from '../../middlewares/ediblesAPIStock';

const middlewares = [ediblesAPIUsermiddleware, ediblesAPIProductMiddleware, ediblesAPIStockMiddleware];

const composeEnhancers = composeWithDevTools({});

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancers);

export default store;
