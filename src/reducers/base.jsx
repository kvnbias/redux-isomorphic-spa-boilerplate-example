
import { SET_ACTIVE_MODULE } from '../actions';
import { HOME } from '../constants';

export const activeModule = function(state = HOME, action) {
  switch(action.type){
  case SET_ACTIVE_MODULE:
    return action.activeModule;
  default:
    return state;
  }
};
