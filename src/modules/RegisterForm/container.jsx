
import { connect }  from 'react-redux';
import RegisterForm from './component';

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = (state, props) => {
  const { attemptRegister, isAttempting, isSuccessful, errors } = props;

  return { attemptRegister, isAttempting, isSuccessful, errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
