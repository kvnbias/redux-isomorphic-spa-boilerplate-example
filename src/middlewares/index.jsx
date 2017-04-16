
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

export function get(history) {
  const routeMiddleware = routerMiddleware(history);

  return applyMiddleware(
    routeMiddleware
  );
}
