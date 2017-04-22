
import * as actions     from './actions';
import { HOME, ABOUT }  from '../../constants';

const defaultState = { [HOME]: 0, [ABOUT]: 0 };

const counter = (state, action) => {

  switch(action.type){
    case actions.INCREMENT_HOME_COUNTER:
      return Object.assign({}, state, { [HOME]: ++action.counter });
    case actions.DECREMENT_HOME_COUNTER:
      return Object.assign({}, state, { [HOME]: --action.counter });
    case actions.INCREMENT_ABOUT_COUNTER:
      return Object.assign({}, state, { [ABOUT]: ++action.counter });
    case actions.DECREMENT_ABOUT_COUNTER:
      return Object.assign({}, state, { [ABOUT]: --action.counter });
    default:
      return state || defaultState;
  }

};

export default counter;
