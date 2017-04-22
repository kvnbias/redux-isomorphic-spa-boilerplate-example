
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { HOME }             from '../../constants';
import Home                 from './component';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(HOME)
  )
})

const mapStateToProps = (state, props) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
