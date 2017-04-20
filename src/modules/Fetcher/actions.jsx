
export const FETCH_OBSERVABLE_ATTEMPT = 'FETCH_OBSERVABLE_ATTEMPT';
export const FETCH_THUNK_ATTEMPT      = 'FETCH_THUNK_ATTEMPT';
export const FETCH_SAGA_ATTEMPT       = 'FETCH_SAGA_ATTEMPT';

export const FETCH_SUCCESS            = 'FETCH_SUCCESS';
export const FETCH_ERROR              = 'FETCH_ERROR';
export const FETCH_DONE               = 'FETCH_DONE';
export const FETCH_CANCEL             = 'FETCH_CANCEL';

export const FETCH_CANCELED_BY_THUNK  = 'FETCH_CANCELED_BY_THUNK';

export function fetchThunkAttempt() {
  return { type: FETCH_THUNK_ATTEMPT };
}

export function fetchObservableAttempt(page) {
  return { type: FETCH_OBSERVABLE_ATTEMPT, page };
}

export function fetchSagaAttempt(page) {
  return { type: FETCH_SAGA_ATTEMPT, page };
}

export function fetchCanceledByThunk() {
  return { type: FETCH_CANCELED_BY_THUNK };
}

export function fetchSuccess(users) {
  return { type: FETCH_SUCCESS, users };
}

export function fetchDone() {
  return { type: FETCH_DONE };
}

export function fetchCancel() {
  return { type: FETCH_CANCEL };
}

export function fetchFailed(err) {
  return { type: FETCH_ERROR, err };
}
