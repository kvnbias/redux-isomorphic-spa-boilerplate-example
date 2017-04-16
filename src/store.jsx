
import { createStore } from 'redux';
import { get } from './middlewares';
import rootReducer from './reducers';

export default function initialize(preloadedState, history) {
  const middlewares = get(history);
  return createStore(rootReducer, preloadedState, middlewares);
};
