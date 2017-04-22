
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { OBSERVABLE }       from '../../constants';
import Observable           from './component';
import * as registerActions from '../RegisterForm/actions';
import * as fetcherActions  from '../Fetcher/actions';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(OBSERVABLE)
  ),

  resetRegisterState: () => dispatch(
    registerActions.resetRegisterState()
  ),
  attemptRegister: data => dispatch(
    registerActions.userObservableAttemptRegister(data)
  ),

  fetch: page => dispatch(
    fetcherActions.fetchObservableAttempt(page)
  ),
  cancel: () => dispatch(
    fetcherActions.fetchCancel()
  )
})

const mapStateToProps = (state, props) => {
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
