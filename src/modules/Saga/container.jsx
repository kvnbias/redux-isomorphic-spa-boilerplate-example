
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { SAGA }             from '../../constants';
import * as registerActions from '../RegisterForm/actions';
import * as fetcherActions  from '../Fetcher/actions';

import Saga from './component';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(SAGA)
  ),

  resetRegisterState: () => dispatch(
    registerActions.resetRegisterState()
  ),
  attemptRegister: data => dispatch(
    registerActions.userSagaAttemptRegister(data)
  ),

  fetch: page => dispatch(
    fetcherActions.fetchSagaAttempt(page)
  ),
  cancel: () => dispatch(
    fetcherActions.fetchCancel()
  )
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Saga);
