
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { USERS }            from '../../constants';
import Users                from './component';
import * as actions         from './actions';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(USERS)
  ),
  fetch: (page, limit) => dispatch(
    actions.fetchUsers(page, limit)
  ),
  cancel: () => dispatch(
    actions.fetchUsersCancel()
  )
})

const mapStateToProps = (state, props) => {
  const { isFetching, users, page } = state.ssr;

  return { isFetching, users, page };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
