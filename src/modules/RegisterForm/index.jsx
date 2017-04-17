
import { REGISTER_ATTEMPT } from './actions';
import { REGISTER_SUCCESS } from './actions';
import { REGISTER_ERROR } from './actions';
import { REGISTER_DONE } from './actions';

const defaultState = { isAttempting: false, errors: {}, isSuccessful: false };
export default function register(state, action) {
  switch(action.type){
    case REGISTER_ATTEMPT:
      return Object.assign({}, state, {
        isAttempting: action.isAttempting,
        isSuccessful: action.isSuccessful
      });
      break;
    case REGISTER_DONE:
      return Object.assign({}, state, { isAttempting: action.isAttempting });
      break;
    case REGISTER_ERROR:
      return Object.assign({}, state, { errors: action.err });
      break;
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { isSuccessful: action.isSuccessful });
      break;
    default:
      return state || defaultState;
  }
};
