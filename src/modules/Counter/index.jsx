
import { INCREMENT_HOME_COUNTER } from './actions';
import { DECREMENT_HOME_COUNTER } from './actions';

import { INCREMENT_ABOUT_COUNTER } from './actions';
import { DECREMENT_ABOUT_COUNTER } from './actions';

import { INCREMENT_FOOTER_COUNTER } from './actions';
import { DECREMENT_FOOTER_COUNTER } from './actions';

import { HOME, ABOUT, FOOTER } from '../../constants';

const defaultState = { [HOME]: 0, [ABOUT]: 0, [FOOTER]: 0 };

export default function counter(state, action) {
  switch(action.type){
  case INCREMENT_HOME_COUNTER:
    return Object.assign({}, state, { [HOME]: ++action.counter });
  case DECREMENT_HOME_COUNTER:
    return Object.assign({}, state, { [HOME]: --action.counter });
  case INCREMENT_ABOUT_COUNTER:
    return Object.assign({}, state, { [ABOUT]: ++action.counter });
  case DECREMENT_ABOUT_COUNTER:
    return Object.assign({}, state, { [ABOUT]: --action.counter });
  case INCREMENT_FOOTER_COUNTER:
    return Object.assign({}, state, { [FOOTER]: ++action.counter });
  case DECREMENT_FOOTER_COUNTER:
    return Object.assign({}, state, { [FOOTER]: --action.counter });
  default:
    /** Only return defaultState if the state is undefined */
    return state || defaultState;
  }
};
