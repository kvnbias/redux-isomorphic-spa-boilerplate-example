
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

export function get(...middlewares) {

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    return applyMiddleware(...middlewares, thunk, logger)
  }

  return applyMiddleware(...middlewares, thunk);
}
