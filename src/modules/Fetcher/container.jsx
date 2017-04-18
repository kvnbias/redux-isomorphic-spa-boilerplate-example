
import { connect } from 'react-redux';
import Fetcher from './component';

const mapDispatchToProps = function(dispatch) {
  return { dispatch };
}

const mapStateToProps = function(state, props) {
  const { fetch, cancel, isFetching, users, errors, page } = props;
  return { fetch, cancel, isFetching, users, errors, page };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher);
