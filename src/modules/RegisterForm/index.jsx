
import * as actions from './actions';

const defaultState = { isAttempting: false, errors: {}, isSuccessful: false };
const register = (state, action) => {

  switch(action.type){
    case actions.REGISTER_THUNK_ATTEMPT:
    case actions.REGISTER_SAGA_ATTEMPT:
    case actions.REGISTER_OBSERVABLE_ATTEMPT:
      return Object.assign({}, defaultState, { isAttempting: true });
      break;
    case actions.REGISTER_ERROR:
      return Object.assign({}, state, { errors: action.err });
      break;
    case actions.REGISTER_SUCCESS:
      return Object.assign({}, state, { isSuccessful: true });
      break;
    case actions.REGISTER_DONE:
      return Object.assign({}, state, { isAttempting: false });
      break;
    case actions.RESET_REGISTER_STATE:
      return defaultState;
      break;
    default:
      return state || defaultState;
  }

};

export default register;
