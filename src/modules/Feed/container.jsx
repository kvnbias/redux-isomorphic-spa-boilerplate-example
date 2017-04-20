
import { connect }  from 'react-redux';
import Feed         from './component';

const mapDispatchToProps = function(dispatch) {
  return { dispatch };
}

const mapStateToProps = function(state, props) {
  const { feed } = props;
  return { users: feed.users };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
