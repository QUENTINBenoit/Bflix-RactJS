import { createStore, applyMiddleware, compose } from 'redux';

import apiMiddleware from 'src/middlewares/api';
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(apiMiddleware),
);
const store = createStore(reducer, enhancers);

export default store;
