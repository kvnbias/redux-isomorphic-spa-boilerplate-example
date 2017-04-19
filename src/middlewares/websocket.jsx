
import * as actions from '../actions';
import Socket from '../utils/socket';

export default function websocketMiddleware(store) {
  const socket = new Socket(store);

  return function(next) {
    return function(action) {
      switch (action.type) {
        case actions.EMIT_EVENT:
          socket.emit(
            action.namespace,
            action.eventName,
            action.message
          );
          break;
        case actions.SOCKET_CONNECT:
          socket.start(action.namespace);
          break;
        case actions.SOCKET_DISCONNECT:
          socket.stop(action.namespace);
          break;
      }

      next(action);
    }
  }
}
