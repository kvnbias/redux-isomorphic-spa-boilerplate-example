
import * as config from '../../../config';
import axios from 'axios';
import * as Promise from 'promise.prototype.finally';

import { userAttemptRegister } from './actions';
import { userRegisterSuccess } from './actions';
import { userRegisterFailed } from './actions';
import { userRegisterDone } from './actions';

Promise.default.shim();

export default function thunkAttemptRegister(data) {

  return (dispatch) => {
    dispatch(userAttemptRegister());

    axios.post(`${ config.api.host }/register`, data)
      .then(response => dispatch(userRegisterSuccess()))
      .catch(err => dispatch(userRegisterFailed(err.response.data)))
      .finally(() => dispatch(userRegisterDone()));
  };
}
