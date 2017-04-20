
import { connect }  from 'react-redux';
import Counter      from './component';

import * as actions from './actions';

const mapDispatchToProps = function(dispatch) {
  return {
    incrementHomeCounter: (counter) => dispatch(
      actions.incrementHomeCounter(counter)
    ),
    decrementHomeCounter: (counter) => dispatch(
      actions.decrementHomeCounter(counter)
    ),

    incrementAboutCounter: (counter) => dispatch(
      actions.incrementAboutCounter(counter)
    ),
    decrementAboutCounter: (counter) => dispatch(
      actions.decrementAboutCounter(counter)
    )
  };
}

const mapStateToProps = function(state, props) {
  const { counter } = state;
  return { counter };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
