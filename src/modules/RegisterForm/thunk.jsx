
import * as config from '../../../config';
import fetch from 'isomorphic-fetch';

import { userAttemptRegister } from './actions';
import { userRegisterSuccess } from './actions';
import { userRegisterFailed } from './actions';
import { userRegisterDone } from './actions';

export default function thunkAttemptRegister(data) {

  return (dispatch) => {
    dispatch(userAttemptRegister(true));
    dispatch(userRegisterFailed({}));

    fetch(`${ config.api.host }/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status >= 400) {
        response.json().then(errors => {
          dispatch(userRegisterFailed(errors));
          dispatch(userRegisterDone(false));
        });
      }
      else {
        response.json().then(response => {
          dispatch(userRegisterSuccess(true))
          dispatch(userRegisterDone(false))
        });
      }
    });
  };
}
