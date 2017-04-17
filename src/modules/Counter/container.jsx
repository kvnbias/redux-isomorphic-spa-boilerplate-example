
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';
import Counter from './component';

const mapDispatchToProps = function(dispatch) {
  return { dispatch };
}

const mapStateToProps = function(state, props) {
  const { counter } = state;
  return { counter };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
