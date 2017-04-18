
import { connect } from 'react-redux';
import { userSagaAttemptRegister } from '../RegisterForm/actions';
import Saga from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    attemptRegister: (data) => dispatch(userSagaAttemptRegister(data)),
    dispatch
  };
}

const mapStateToProps = function(state, props) {
  const { register } = state;
  const { isAttempting, isSuccessful, errors } = register;
  return { isAttempting, isSuccessful, errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(Saga);
