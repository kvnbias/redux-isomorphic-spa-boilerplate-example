
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { THUNK }            from '../../constants';
import Thunk                from './component';
import * as registerActions from '../RegisterForm/actions';
import * as fetcherActions  from '../Fetcher/actions';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(THUNK)
  ),

  resetRegisterState: () => dispatch(
    registerActions.resetRegisterState()
  ),
  attemptRegister: data => dispatch(
    registerActions.attemptRegisterByThunk(data)
  ),

  fetch: page => dispatch(
    fetcherActions.attemptFetchByThunk(page)
  ),
  cancel: () => dispatch(
    fetcherActions.fetchCanceledByThunk()
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

export default connect(mapStateToProps, mapDispatchToProps)(Thunk);
