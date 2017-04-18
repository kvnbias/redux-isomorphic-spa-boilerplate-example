
import * as config from '../../../config';
import axios from 'axios';

import { userThunkAttemptRegister } from './actions';
import { userRegisterSuccess } from './actions';
import { userRegisterFailed } from './actions';
import { userRegisterDone } from './actions';

/** A thunk action */
export default function thunkAttemptRegister(data) {

  return async function(dispatch) {
    try {
      dispatch(userThunkAttemptRegister());
      const response = await axios.post(`${ config.api.host }/register`, data);
      dispatch(userRegisterSuccess());
    }
    catch(err) {
      dispatch(userRegisterFailed(err.response.data));
    }
    finally {
      dispatch(userRegisterDone());
    }
  };
}
