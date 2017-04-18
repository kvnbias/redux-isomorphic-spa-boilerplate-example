
import * as config from '../../../config';
import axios from 'axios';

import * as actions from './actions';

import { call, put, takeEvery } from 'redux-saga/effects';

function register(action) {
  return axios.post(`${ config.api.host }/register`, action.data);
}

/** WORKER: will be fired on REGISTER_ATTEMPT actions */
function* attemptRegister(data) {
    try {
      const user = yield call(register, data);
      yield put({ type: actions.REGISTER_SUCCESS });
    } catch(err) {
      yield put({
        type: actions.REGISTER_ERROR,
        err: err.response.data
      });
    }
    finally {
      yield put({ type: actions.REGISTER_DONE });
    }
}

/**
 * WATCHER:
 * takeEvery(pattern, saga, ...args) :
 * Spawns a saga on each action dispatched to the Store that
 * matches pattern. Hence spammable events however beware
 * that the promises will finish not in order.
 *
 * takeLatest(pattern, saga, ...args) :
 * Spawns a saga on each action dispatched to the Store that
 * matches pattern. And automatically cancels any previous
 * saga task started previous if it's still running.
 * Good for spammable functionalities where you
 * would want to abandon the previous response
 * of your requests (e.g. Facebook's gallery)
 *
 * throttle(ms, pattern, saga, ...args) :
 * Throttles input. (Too complex to explain lol). This is
 * good for functionalities like autocompleted where you
 * need to make a call to the server, but at the same time
 * you also want the server to be protected by the user's
 * spamming input. Another example is checking if the
 * user's email exists before proceeding to he registration.
 */
export default function* registerSaga() {
  yield [
    /**
     * Arguments of REGISTER_SAGA_ATTEMPT will
     * be passed on attemptRegister function.
     */
    takeEvery(actions.REGISTER_SAGA_ATTEMPT, attemptRegister)
  ];
}
