
import * as actions from './actions';
import _ from 'underscore';

const defaultState = {
  isFetching: false,
  errors: {},
  list: [],
  page: 1,
  /** used by thunk, kinda dirty actually */
  shouldCancel: false
};

export default function user(state, action) {
  switch(action.type){
    case actions.FETCH_OBSERVABLE_ATTEMPT:
    case actions.FETCH_THUNK_ATTEMPT:
    case actions.FETCH_SAGA_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
        shouldCancel: false
      });
      break;
    case actions.FETCH_ERROR:
      return Object.assign({}, state, { errors: action.err });
      break;
    case actions.FETCH_SUCCESS:
      if (!state.shouldCancel) {
        return Object.assign({}, state, {
          list: _.uniq(
            state.list.concat(action.users),
            (item, key, a) => item._id.toString()
          )
        });
      }
      else return state;
      break;
    case actions.FETCH_DONE:
      if (!state.shouldCancel) {
        return Object.assign({}, state, {
          isFetching: false,
          page: ++state.page
        });
      }
      else return state
      break;
    case actions.FETCH_CANCELED_BY_THUNK:
      return Object.assign({}, state, {
        isFetching: false,
        shouldCancel: true
      });
      break;
    case actions.FETCH_CANCEL:
      return Object.assign({}, state, { isFetching: false });
      break;
    default:
      return state || defaultState;
  }
};
