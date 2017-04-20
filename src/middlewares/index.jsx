
import { applyMiddleware }  from 'redux';
import { createLogger }     from 'redux-logger'
import thunk                from 'redux-thunk';
import websocketMiddleware  from './websocket';

export function get(...middlewares) {

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    return applyMiddleware(
      ...middlewares,
      websocketMiddleware,
      thunk,
      logger
    );
  }

  return applyMiddleware(
    ...middlewares,
    websocketMiddleware,
    thunk
  );
}
