
import { connect }          from 'react-redux';

import { setActiveModule }  from '../../actions';
import { OBSERVABLE }       from '../../constants';

import { resetRegisterState, userObservableAttemptRegister } from '../RegisterForm/actions';
import { fetchObservableAttempt, fetchCancel } from '../Fetcher/actions';

import Observable from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(
      setActiveModule(OBSERVABLE)
    ),

    resetRegisterState: () => dispatch(
      resetRegisterState()
    ),
    attemptRegister: data => dispatch(
      userObservableAttemptRegister(data)
    ),

    fetch: page => dispatch(
      fetchObservableAttempt(page)
    ),
    cancel: () => dispatch(
      fetchCancel()
    )
  };
}

const mapStateToProps = function(state, props) {
  const { register, user, feed }        = state;
  const { isAttempting, isSuccessful }  = register;
  const { isFetching, list, page }      = user;

  return {
    isAttempting,
    isSuccessful,
    registrationErrors: register.errors,

    isFetching,
    page,
    users: list,
    userListErrors: user.errors,

    feed
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Observable);
