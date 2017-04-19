
export const FEED_RECEIVE_USER = 'FEED_RECEIVE_USER';

export function feedReceiveUser(user) {
  return { type: FEED_RECEIVE_USER, user };
}
