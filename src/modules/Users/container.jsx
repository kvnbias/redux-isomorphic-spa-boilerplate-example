
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { USERS }            from '../../constants';
import Users                from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(
      setActiveModule(USERS)
    )
  };
}

const mapStateToProps = function(state, props) {
  const { isFetching, users, page } = state.ssr;
  return { isFetching, users, page };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
