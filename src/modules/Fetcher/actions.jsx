
import * as config  from '../../../config';
import * as actions from './actions';
import axios        from 'axios';

export const FETCH_OBSERVABLE_ATTEMPT = 'FETCH_OBSERVABLE_ATTEMPT';
export const FETCH_THUNK_ATTEMPT      = 'FETCH_THUNK_ATTEMPT';
export const FETCH_SAGA_ATTEMPT       = 'FETCH_SAGA_ATTEMPT';

export const FETCH_SUCCESS            = 'FETCH_SUCCESS';
export const FETCH_ERROR              = 'FETCH_ERROR';
export const FETCH_DONE               = 'FETCH_DONE';
export const FETCH_CANCEL             = 'FETCH_CANCEL';

export const FETCH_CANCELED_BY_THUNK  = 'FETCH_CANCELED_BY_THUNK';

export const fetchThunkAttempt = () =>
  ({ type: FETCH_THUNK_ATTEMPT })

export const fetchSagaAttempt = page =>
  ({ type: FETCH_SAGA_ATTEMPT, page })

export const fetchObservableAttempt = page =>
  ({ type: FETCH_OBSERVABLE_ATTEMPT, page })

export const fetchDone = () =>
  ({ type: FETCH_DONE })

export const fetchCancel = () =>
  ({ type: FETCH_CANCEL })

export const fetchSuccess = users =>
  ({ type: FETCH_SUCCESS, users })

export const fetchFailed = err =>
  ({ type: FETCH_ERROR, err })

export const fetchCanceledByThunk = () =>
  ({ type: FETCH_CANCELED_BY_THUNK })

export const attemptFetchByThunk = page => async (dispatch) => {
  try {
    const endpoint = `${ config.api.host }/users?page=${ page }&limit=1`;
    dispatch(actions.fetchThunkAttempt());

    const response = await axios.get(endpoint);
    dispatch(actions.fetchSuccess(response.data));
  }
  catch(err) {
    dispatch(actions.fetchFailed(err.response.data));
  }
  finally {
    dispatch(actions.fetchDone());
  }
}
