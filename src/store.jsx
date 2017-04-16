
import { createStore, compose } from 'redux';
import { get } from './middlewares';
import rootReducer from './reducers';

export default function initialize(preloadedState, history) {
  const middlewares = get(history);
  const enhancers = compose(middlewares);
  return createStore(rootReducer, preloadedState, enhancers);
};
