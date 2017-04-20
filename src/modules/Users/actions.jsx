
import axios        from 'axios';
import Promise      from 'bluebird';
import * as config  from '../../../config';

export const FETCH_USERS          = 'FETCH_USERS';
export const FETCH_USERS_DONE     = 'FETCH_USERS_DONE';
export const FETCH_USERS_CANCEL   = 'FETCH_USERS_CANCEL';

/** These actions will be executed by the promise middleware */
export const FETCH_USERS_ATTEMPT  = 'FETCH_USERS_ATTEMPT';
export const FETCH_USERS_SUCCESS  = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR    = 'FETCH_USERS_ERROR';

export function fetchUsersAttempt() {
  return { type: FETCH_USERS_ATTEMPT }
}

export function fetchUsersSuccess(res) {
  return { type: FETCH_USERS_SUCCESS, res }
}

export function fetchUsersError(err) {
  return { type: FETCH_USERS_ERROR, err }
}

export function fetchUsersDone() {
  return { type: FETCH_USERS_DONE }
}

/**
 * I created a thunk because, I prefer to use thunks on SSR
 * then use sagas/observable in the client for cancellation
 * using sagas/observable in SSR will only make things
 * complicated.
 */
export default function fetchUserThunk(page, limit) {
  return function(dispatch) {
    return new Promise(async function(resolve, reject) {
      try {
        dispatch(fetchUsersAttempt());
        const response = await axios.get(`${ config.api.host }/users?page=${ page }&limit=${ limit }`);
        dispatch(fetchUsersSuccess(response.data));
      }
      catch (err) {
        dispatch(fetchUsersError(err.response.data));
      }
      finally {
        dispatch(fetchUsersDone());
        resolve(true);
      }
    });
  };
}
