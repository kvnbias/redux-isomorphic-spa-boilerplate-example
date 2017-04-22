
import { connect }    from 'react-redux';
import Feed           from './component';
import * as actions   from '../../actions';
import * as constants from '../../constants';

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(
    actions.socketConnect(constants.NS_FRONTEND)
  ),
  disconnect: () => dispatch(
    actions.socketDisconnect(constants.NS_FRONTEND)
  ),
  emit: (eventName, message) => dispatch(
    actions.emitEvent(constants.NS_FRONTEND, eventName, message)
  )
})

const mapStateToProps = (state, props) => {
  const { feed }  = props;
  const { users } = feed;

  return { users };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
