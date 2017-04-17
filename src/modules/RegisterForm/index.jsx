
import {
  REGISTER_ATTEMPT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_DONE,
  RESET_FORM_FLAGS
} from './actions';

const defaultState = { isAttempting: false, errors: {}, isSuccessful: false };
export default function register(state, action) {
  switch(action.type){
    case REGISTER_ATTEMPT:
    case REGISTER_DONE:
      return Object.assign({}, state, { isAttempting: action.isAttempting });
      break;
    case REGISTER_ERROR:
      return Object.assign({}, state, { errors: action.err });
      break;
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { isSuccessful: action.isSuccessful });
      break;
    case RESET_FORM_FLAGS:
      return defaultState;
    default:
      return state || defaultState;
  }
};
