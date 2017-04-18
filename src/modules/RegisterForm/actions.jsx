
export const REGISTER_THUNK_ATTEMPT = 'REGISTER_THUNK_ATTEMPT';
export const REGISTER_SAGA_ATTEMPT = 'REGISTER_SAGA_ATTEMPT';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_DONE = 'REGISTER_DONE';

export function userThunkAttemptRegister() {
  return { type: REGISTER_THUNK_ATTEMPT };
}

export function userSagaAttemptRegister(data) {
  return { type: REGISTER_SAGA_ATTEMPT, data };
}

export function userRegisterSuccess() {
  return { type: REGISTER_SUCCESS };
}

export function userRegisterDone() {
  return { type: REGISTER_DONE };
}

export function userRegisterFailed(err) {
  return { type: REGISTER_ERROR, err };
}
