
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { USERS }            from '../../constants';
import * as actions         from './actions';
import Users                from './component';

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveModule: () => dispatch(
      setActiveModule(USERS)
    ),
    fetch: (page, limit) => dispatch(
      actions.fetchUsers(page, limit)
    ),
    cancel: () => dispatch(
      actions.fetchUsersCancel()
    )
  };
}

const mapStateToProps = function(state, props) {
  const { isFetching, users, page } = state.ssr;
  return { isFetching, users, page };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
