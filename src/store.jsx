
import { createStore, compose } from 'redux';
import { get } from './middlewares';
import rootReducer from './reducers';

import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'

import registerSaga from './modules/RegisterForm/sagas';

export default function initialize(preloadedState, history) {
  /** Initiate middlewares */
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);

  const middlewares = get(
    sagaMiddleware,
    routeMiddleware
  );

  const enhancers = compose(middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(registerSaga);

  return store;
};
