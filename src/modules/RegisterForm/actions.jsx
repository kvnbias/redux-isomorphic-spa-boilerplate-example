
import * as config  from '../../../config';
import * as actions from './actions';
import axios        from 'axios';

export const REGISTER_OBSERVABLE_ATTEMPT  = 'REGISTER_OBSERVABLE_ATTEMPT';
export const REGISTER_THUNK_ATTEMPT       = 'REGISTER_THUNK_ATTEMPT';
export const REGISTER_SAGA_ATTEMPT        = 'REGISTER_SAGA_ATTEMPT';

export const RESET_REGISTER_STATE         = 'RESET_REGISTER_STATE';
export const REGISTER_SUCCESS             = 'REGISTER_SUCCESS';
export const REGISTER_ERROR               = 'REGISTER_ERROR';
export const REGISTER_DONE                = 'REGISTER_DONE';

export const userThunkAttemptRegister = () =>
  ({ type: REGISTER_THUNK_ATTEMPT })

export const userObservableAttemptRegister = data =>
  ({ type: REGISTER_OBSERVABLE_ATTEMPT, data })

export const userSagaAttemptRegister = data =>
  ({ type: REGISTER_SAGA_ATTEMPT, data })

export const resetRegisterState = () =>
  ({ type: RESET_REGISTER_STATE })

export const userRegisterSuccess = () =>
  ({ type: REGISTER_SUCCESS })

export const userRegisterDone = () =>
  ({ type: REGISTER_DONE })

export const userRegisterFailed = err =>
  ({ type: REGISTER_ERROR, err })

export const attemptRegisterByThunk = data => async (dispatch) => {
  try {
    dispatch(actions.userThunkAttemptRegister());
    const response = await axios.post(`${ config.api.host }/register`, data);
    dispatch(actions.userRegisterSuccess());
  }
  catch(err) {
    dispatch(actions.userRegisterFailed(err.response.data));
  }
  finally {
    dispatch(actions.userRegisterDone());
  }
}
