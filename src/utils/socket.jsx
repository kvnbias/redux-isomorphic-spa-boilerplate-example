
import * as config      from '../../config';
import * as constants   from '../constants';
import io               from 'socket.io-client';
import * as feedActions from '../modules/Feed/actions';

/** Kinda dirty */
export default class Socket {

  constructor(store) {
    this.socket = [];
    this.store = store;
  }

  emit(namespace, eventName, message) {
    this.socket[namespace].emit(eventName, message);
  }

  stop(namespace) {
    this.socket[namespace].disconnect();
  }

  start(namespace) {
    if (typeof this.socket[namespace] === 'undefined'){
      this.socket[namespace] = io.connect(`${ config.api.ws }/${ namespace }`);

      this.attachDispatcher(namespace, this.store.dispatch);
    }
    else this.socket[namespace].open();
  }

  attachDispatcher(namespace, cb) {
    switch(namespace) {
      case constants.NS_FRONTEND:
        this.attachFrontendDispatchers(cb);
        break;
    }
  }

  attachFrontendDispatchers(cb) {
    this.socket[constants.NS_FRONTEND]
      .on(constants.EV_USER_REGISTERED, function(user) {
        cb(feedActions.feedReceiveUser(user));
      });
  }
}
