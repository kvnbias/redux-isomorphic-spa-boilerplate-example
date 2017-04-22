
import * as actions from '../actions';
import Socket       from '../utils/socket';

const websocketMiddleware = store => {
  const socket = new Socket(store);

  return next => action => {
    const { type, namespace, eventName, message } = action;

    switch(type) {
      case actions.EMIT_EVENT:
        socket.emit(namespace, eventName, message);
        break;
      case actions.SOCKET_CONNECT:
        socket.start(namespace);
        break;
      case actions.SOCKET_DISCONNECT:
        socket.stop(namespace);
        break;
    }

    next(action);
  }
}

export default websocketMiddleware;
