
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger'

export function get(history) {
  const routeMiddleware = routerMiddleware(history);

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    return applyMiddleware(routeMiddleware, logger)
  }

  return applyMiddleware(routeMiddleware);
}
