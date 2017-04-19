
import { connect } from 'react-redux';
import { setActiveModule } from '../../actions';

import { THUNK } from '../../constants';

import { resetRegisterState } from '../RegisterForm/actions';
import thunkAttemptRegister from '../RegisterForm/thunk';

import { fetchCanceledByThunk } from '../Fetcher/actions';
import thunkAttemptFetch from '../Fetcher/thunk';

import Thunk from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(setActiveModule(THUNK)),

    resetRegisterState: () => dispatch(resetRegisterState()),
    attemptRegister: (data) => dispatch(thunkAttemptRegister(data)),

    fetch: (page) => dispatch(thunkAttemptFetch(page)),
    cancel: () => dispatch(fetchCanceledByThunk())
  };
}

const mapStateToProps = function(state, props) {
  const { register, user, feed } = state;

  const { isAttempting, isSuccessful } = register;

  const { isFetching, list, page } = user;

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
