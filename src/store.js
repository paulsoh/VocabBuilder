import {
    createStore,
    applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(
    thunk,
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
  )(createStore);
}

const store = createStoreWithMiddleware(reducers);
export default store;
