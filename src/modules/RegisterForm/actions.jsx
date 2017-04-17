
import * as config from '../../../config';
import fetch from 'isomorphic-fetch';

export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_DONE = 'REGISTER_DONE';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const RESET_FORM_FLAGS = 'RESET_FORM_FLAGS';

export function userAttemptRegister(isAttempting) {
  return { type: REGISTER_ATTEMPT, isAttempting };
}

export function userRegisterDone(isAttempting) {
  return { type: REGISTER_DONE, isAttempting };
}

export function userRegisterSuccess(isSuccessful) {
  return { type: REGISTER_SUCCESS, isSuccessful };
}

export function userRegisterFailed(err) {
  return { type: REGISTER_ERROR, err };
}

export function resetFormFlags() {
  return { type: RESET_FORM_FLAGS };
}

export function thunkAttemptRegister(data) {

  return (dispatch) => {
    dispatch(resetFormFlags());

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
