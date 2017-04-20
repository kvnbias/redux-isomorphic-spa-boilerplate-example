
import { createStore, compose } from 'redux';
import { get }                  from './middlewares';
import rootReducer              from './reducers';

import { routerMiddleware }     from 'react-router-redux';
import createSagaMiddleware     from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

import registerSaga             from './modules/RegisterForm/sagas';
import fetcherSaga              from './modules/Fetcher/sagas';
import userSaga                 from './modules/Users/sagas';
import rootEpic                 from './epics';

export default function initialize(preloadedState = {}, history = null) {
  /** Initiate middlewares */
  const routeMiddleware = routerMiddleware(history);
  const sagaMiddleware  = createSagaMiddleware();
  const epicMiddleware  = createEpicMiddleware(rootEpic);

  const middlewares = get(
    sagaMiddleware,
    routeMiddleware,
    epicMiddleware
  );

  const enhancers = compose(middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(registerSaga);
  sagaMiddleware.run(fetcherSaga);
  sagaMiddleware.run(userSaga);

  return store;
};
