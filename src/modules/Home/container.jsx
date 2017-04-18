
import { connect } from 'react-redux';
import { setActiveModule } from '../../actions';
import { HOME } from '../../constants';
import Home from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(setActiveModule(HOME))
  };
}

const mapStateToProps = function(state, props) {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
