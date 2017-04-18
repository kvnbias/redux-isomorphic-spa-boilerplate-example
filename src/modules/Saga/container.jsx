
import { connect } from 'react-redux';

import { setActiveModule } from '../../actions';
import { SAGA } from '../../constants';

import { userSagaAttemptRegister, resetRegisterState } from '../RegisterForm/actions';
import { fetchSagaAttempt, fetchCancel } from '../Fetcher/actions';

import Saga from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(setActiveModule(SAGA)),

    resetRegisterState: () => dispatch(resetRegisterState()),
    attemptRegister: (data) => dispatch(userSagaAttemptRegister(data)),

    fetch: (page) => dispatch(fetchSagaAttempt(page)),
    cancel: () => dispatch(fetchCancel())
  };
}

const mapStateToProps = function(state, props) {
  const { register, user } = state;

  const { isAttempting, isSuccessful } = register;

  const { isFetching, list, page } = user;

  return {
    isAttempting,
    isSuccessful,
    registrationErrors: register.errors,

    isFetching,
    page,
    users: list,
    userListErrors: user.errors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Saga);
