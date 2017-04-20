
import * as config  from '../../../config';
import axios        from 'axios';

import * as actions from './actions';

import { call, put, take, fork, cancel, cancelled, takeEvery, takeLatest } from 'redux-saga/effects';

function fetch(page) {
  return axios.get(`${ config.api.host }/users?page=${ page }&limit=1`);
}

/** WORKER */
function* attemptFetch(page) {
  try {
    const response = yield call(fetch, page);
    yield put(actions.fetchSuccess(response.data));
  }
  catch(err) {
    yield put(actions.fetchFailed(err.response.data));
  }
  finally {
    if (yield cancelled())
      yield put(actions.fetchCancel());
    else
      yield put(actions.fetchDone());
  }
}

function* cancelWorkerSaga (task) {
  yield cancel(task)
}

/**
 * WATCHER
 * Using fork:
 * const action = yield take(actions.FETCH_SAGA_ATTEMPT);
 * const state = yield select();
 * const attemptFetchTask = yield fork(attemptFetch, action.page);
 */
export default function* fetcherSaga() {
  while(true) {
    /**
     * Get the action if ever you need to pass
     * an argument in the worker
     */
    const action = yield take(actions.FETCH_SAGA_ATTEMPT);

    /** Get the task of the function */
    const attemptFetchTask = yield fork(attemptFetch, action.page);

    /**
     * Create an async function that will call cancelWorkerSaga
     * upon calling `actions.FETCH_CANCEL` action
     */
    yield fork(
      takeLatest,
      [actions.FETCH_CANCEL],
      cancelWorkerSaga,
      attemptFetchTask
    );
  }
}
