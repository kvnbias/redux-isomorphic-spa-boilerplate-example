
import { connect } from 'react-redux';
import { setActiveModule } from '../../actions';
import { SAGA } from '../../constants';
import { userSagaAttemptRegister, resetRegisterState } from '../RegisterForm/actions';
import Saga from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    resetRegisterState: () => dispatch(resetRegisterState()),
    setActiveModule: () => dispatch(setActiveModule(SAGA)),
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
