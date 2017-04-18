
import * as config from '../../../config';
import * as actions from './actions';
import axios from 'axios';

/** A thunk action */
export default function thunkAttemptRegister(data) {

  return async function(dispatch) {
    try {
      dispatch(actions.userThunkAttemptRegister());
      const response = await axios.post(`${ config.api.host }/register`, data);
      dispatch(actions.userRegisterSuccess());
    }
    catch(err) {
      dispatch(actions.userRegisterFailed(err.response.data));
    }
    finally {
      dispatch(actions.userRegisterDone());
    }
  };
}
