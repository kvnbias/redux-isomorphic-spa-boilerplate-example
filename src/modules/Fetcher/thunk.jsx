
import * as config  from '../../../config';
import * as actions from './actions';
import axios        from 'axios';

/** A thunk action */
export default function thunkAttemptFetch(page) {

  return async function(dispatch) {
    try {
      dispatch(actions.fetchThunkAttempt());
      const response = await axios.get(`${ config.api.host }/users?page=${ page }&limit=1`);
      dispatch(actions.fetchSuccess(response.data));
    }
    catch(err) {
      dispatch(actions.fetchFailed(err.response.data));
    }
    finally {
      dispatch(actions.fetchDone());
    }
  };
}
