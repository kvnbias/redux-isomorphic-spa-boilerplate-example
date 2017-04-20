
import * as config  from '../../../config';
import { ajax }     from 'rxjs/observable/dom/ajax';
import { concat }   from 'rxjs/observable/concat'

import * as actions from './actions';

function fetchUsers(action$, page) {
  return ajax({
    url: `${ config.api.host }/users?page=${ page }`,
    method: 'GET',
    crossDomain: true
  })
  .flatMap(res => [
    actions.fetchSuccess(res.response),
    actions.fetchDone()
  ])
  .takeUntil(action$.ofType(actions.FETCH_CANCEL))
  .catch(err => Observable.of(
    actions.fetchFailed(err.xhr.response)
  ));
}

export function fetchUsersEpic(action$) {
  return action$.ofType(actions.FETCH_OBSERVABLE_ATTEMPT)
  .mergeMap(action => fetchUsers(action$, action.page));
}
