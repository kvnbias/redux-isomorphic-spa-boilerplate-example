
import { connect } from 'react-redux';
import Base from './component';

const mapDispatchToProps = function(dispatch) {
  return { dispatch };
}

const mapStateToProps = function(state, props) {
  const { route } = props;
  return { route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Base);
