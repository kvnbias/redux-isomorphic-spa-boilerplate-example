
/**
 * NOTE:
 * In combineReducers the routerReducer needs to have
 * a key of 'router'
 */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { activeModule } from './base';

const rootReducer = combineReducers({
  activeModule,
  router
});

export default rootReducer;
