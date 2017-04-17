
export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_DONE = 'REGISTER_DONE';
export const REGISTER_ERROR = 'REGISTER_ERROR';

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
