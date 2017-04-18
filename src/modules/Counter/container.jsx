
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';
import Counter from './component';

import { incrementHomeCounter } from './actions';
import { decrementHomeCounter } from './actions';

import { incrementAboutCounter } from './actions';
import { decrementAboutCounter } from './actions';

const mapDispatchToProps = function(dispatch) {
  return {
    incrementHomeCounter: (counter) => dispatch(incrementHomeCounter(counter)),
    decrementHomeCounter: (counter) => dispatch(decrementHomeCounter(counter)),

    incrementAboutCounter: (counter) => dispatch(incrementAboutCounter(counter)),
    decrementAboutCounter: (counter) => dispatch(decrementAboutCounter(counter))
  };
}

const mapStateToProps = function(state, props) {
  const { counter } = state;
  return { counter };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
