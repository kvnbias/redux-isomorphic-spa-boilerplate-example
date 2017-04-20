
import * as config  from '../../../config';
import { ajax }     from 'rxjs/observable/dom/ajax';
import { of }       from 'rxjs/observable/of'
import { concat }   from 'rxjs/observable/concat'

import * as actions from './actions';

function registerUser(body) {
  return ajax({
    url: `${ config.api.host }/register`,
    method: 'POST',
    crossDomain: true,
    body
  })
  .map(response => actions.userRegisterSuccess())
  .catch(err => Observable.of(
    actions.userRegisterFailed(err.xhr.response)
  ));
}

export function registerUserEpic(action$) {
  return action$.ofType(actions.REGISTER_OBSERVABLE_ATTEMPT)
    .mergeMap(action =>
      concat(
        registerUser(action.data),
        Observable.of(actions.userRegisterDone())
      )
    )
}
