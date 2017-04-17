
import { connect } from 'react-redux';
import { thunkAttemptRegister } from '../RegisterForm/actions';
import Thunk from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    attemptRegister: (data) => dispatch(thunkAttemptRegister(data)),
    dispatch
  };
}

const mapStateToProps = function(state, props) {
  const { register } = state;
  const { isAttempting, isSuccessful, errors } = register;
  return { isAttempting, isSuccessful, errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(Thunk);
