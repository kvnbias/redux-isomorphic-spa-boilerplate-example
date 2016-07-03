/** @flow */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import * as middlewares from '../middlewares';
import rootReducer from '../reducers';

const loggerMiddleware: Function = createLogger();

export default function initialize(
  preloadedState: Object = {}
) :Object {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
};
