
import { createStore, compose } from 'redux';

import createSagaMiddleware     from 'redux-saga';
import { routerMiddleware }     from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer              from './reducers';
import apply                    from './middlewares';

import registerSaga             from './modules/RegisterForm/sagas';
import fetcherSaga              from './modules/Fetcher/sagas';
import userSaga                 from './modules/Users/sagas';

import rootEpic                 from './epics';

const initialize = (preloadedState = {}, history = null) => {

  /** Initiate middlewares */
  const sagaMiddleware  = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  const epicMiddleware  = createEpicMiddleware(rootEpic);

  const middlewares = apply(
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

export default initialize
