
import { connect } from 'react-redux';
import { setActiveModule } from '../../actions';
import { ABOUT } from '../../constants';
import About from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(setActiveModule(ABOUT))
  };
}

const mapStateToProps = function(state, props) {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
