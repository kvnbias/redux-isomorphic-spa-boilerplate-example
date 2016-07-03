/** @flow */

/** NOTE: In combineReducers the routerReducer needs to have a key of 'routing' */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { activeModule } from "./base";

const rootReducer: Object = combineReducers({
  activeModule,
  routing
});

export default rootReducer;
