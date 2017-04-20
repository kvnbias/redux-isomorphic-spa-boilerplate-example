
import * as actions from './actions';
import _            from 'underscore';

const defaultState = { users: [] };

export default function feed(state, action) {
  switch(action.type){
    case actions.FEED_RECEIVE_USER:
      return Object.assign({}, state, {
        users: _.uniq(
          state.users.concat(action.user),
          item => item._id.toString()
        )
      });
      break;
    default:
      return state || defaultState;
  }
};
