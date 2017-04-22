
import { connect }          from 'react-redux';
import { ABOUT }            from '../../constants';
import { setActiveModule }  from '../../actions';
import About                from './component';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(ABOUT)
  )
})

const mapStateToProps = (state, props) => {
  const { counter } = state;

  return { counter };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
