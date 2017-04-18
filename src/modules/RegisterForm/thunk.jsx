
import * as config from '../../../config';
import axios from 'axios';

import { userAttemptRegister } from './actions';
import { userRegisterSuccess } from './actions';
import { userRegisterFailed } from './actions';
import { userRegisterDone } from './actions';

export default function thunkAttemptRegister(data) {

  return async function(dispatch) {

    try {
      dispatch(userAttemptRegister());
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
