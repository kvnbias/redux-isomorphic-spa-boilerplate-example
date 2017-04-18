
import { connect } from 'react-redux';
import { setActiveModule } from '../../actions';
import { THUNK } from '../../constants';
import { resetRegisterState } from '../RegisterForm/actions';
import thunkAttemptRegister from '../RegisterForm/thunk';
import Thunk from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    resetRegisterState: () => dispatch(resetRegisterState()),
    setActiveModule: () => dispatch(setActiveModule(THUNK)),
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
