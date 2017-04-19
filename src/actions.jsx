
/** websocket actions */
export const EMIT_EVENT = 'EMIT_EVENT';
export const SOCKET_CONNECT = 'SOCKET_CONNECT';
export const SOCKET_DISCONNECT = 'SOCKET_DISCONNECT';

export function emitEvent(namespace, eventName, message) {
  return { type: EMIT_EVENT, namespace, eventName, message };
}

export function socketConnect(namespace) {
  return { type: SOCKET_CONNECT, namespace };
}

export function socketDisconnect(namespace) {
  return { type: SOCKET_DISCONNECT, namespace };
}

/** module actions */
export const SET_ACTIVE_MODULE = 'SET_ACTIVE_MODULE';

export function setActiveModule(activeModule) {
  return { type: SET_ACTIVE_MODULE, activeModule };
}
