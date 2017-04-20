
import { SET_ACTIVE_MODULE }  from '../actions';
import { HOME }               from '../constants';

export default function activeModule(state = HOME, action) {
  switch(action.type){
  case SET_ACTIVE_MODULE:
    return action.activeModule;
  default:
    return state;
  }
};
