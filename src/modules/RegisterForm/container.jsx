
import { connect } from 'react-redux';
import RegisterForm from './component';

const mapDispatchToProps = function(dispatch) {
  return { dispatch };
}

const mapStateToProps = function(state, props) {
  const { attemptRegister, isAttempting, isSuccessful, errors } = props;
  return { attemptRegister, isAttempting, isSuccessful, errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
