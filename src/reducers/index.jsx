
/**
 * NOTE:
 * In combineReducers the routerReducer needs to have
 * a key of 'router'
 */
import { combineReducers }          from 'redux';
import { routerReducer as router }  from 'react-router-redux';
import activeModule                 from './base';
import counter                      from '../modules/Counter';
import register                     from '../modules/RegisterForm';
import user                         from '../modules/Fetcher';
import feed                         from '../modules/Feed';

const rootReducer = combineReducers({
  activeModule,
  router,
  counter,
  register,
  user,
  feed
});

export default rootReducer;
