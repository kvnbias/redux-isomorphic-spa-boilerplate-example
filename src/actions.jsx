
/** websocket actions */
export const EMIT_EVENT         = 'EMIT_EVENT';
export const SOCKET_CONNECT     = 'SOCKET_CONNECT';
export const SOCKET_DISCONNECT  = 'SOCKET_DISCONNECT';

export const emitEvent = (namespace, eventName, message) =>
  ({ type: EMIT_EVENT, namespace, eventName, message })

export const socketConnect = namespace =>
  ({ type: SOCKET_CONNECT, namespace })

export const socketDisconnect = namespace =>
  ({ type: SOCKET_DISCONNECT, namespace })

/** module actions */
export const SET_ACTIVE_MODULE = 'SET_ACTIVE_MODULE';

export const setActiveModule = activeModule =>
  ({ type: SET_ACTIVE_MODULE, activeModule })
