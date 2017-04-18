
export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_DONE = 'REGISTER_DONE';

export function userAttemptRegister(isAttempting) {
  return { type: REGISTER_ATTEMPT };
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
