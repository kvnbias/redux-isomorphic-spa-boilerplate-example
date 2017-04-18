
import { connect } from 'react-redux';
import { setActiveModule } from '../../actions';
import { OBSERVABLE } from '../../constants';
import { resetRegisterState, userObservableAttemptRegister } from '../RegisterForm/actions';
import Observable from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    resetRegisterState: () => dispatch(resetRegisterState()),
    setActiveModule: () => dispatch(setActiveModule(OBSERVABLE)),
    attemptRegister: (data) => dispatch(userObservableAttemptRegister(data)),
  };
}

const mapStateToProps = function(state, props) {
  const { register } = state;
  const { isAttempting, isSuccessful, errors } = register;
  return { isAttempting, isSuccessful, errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(Observable);
