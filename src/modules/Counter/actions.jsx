
export const INCREMENT_HOME_COUNTER = 'INCREMENT_HOME_COUNTER';
export const DECREMENT_HOME_COUNTER = 'DECREMENT_HOME_COUNTER';

export const INCREMENT_ABOUT_COUNTER = 'INCREMENT_ABOUT_COUNTER';
export const DECREMENT_ABOUT_COUNTER = 'DECREMENT_ABOUT_COUNTER';


export function incrementHomeCounter(counter) {
  return { type: INCREMENT_HOME_COUNTER, counter };
}

export function decrementHomeCounter(counter) {
  return { type: DECREMENT_HOME_COUNTER, counter };
}

export function incrementAboutCounter(counter) {
  return { type: INCREMENT_ABOUT_COUNTER, counter };
}

export function decrementAboutCounter(counter) {
  return { type: DECREMENT_ABOUT_COUNTER, counter };
}
