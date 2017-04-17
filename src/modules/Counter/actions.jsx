
export const INCREMENT_HOME_COUNTER = 'INCREMENT_HOME_COUNTER';
export const DECREMENT_HOME_COUNTER = 'DECREMENT_HOME_COUNTER';

export const INCREMENT_ABOUT_COUNTER = 'INCREMENT_ABOUT_COUNTER';
export const DECREMENT_ABOUT_COUNTER = 'DECREMENT_ABOUT_COUNTER';


export const incrementHomeCounter = function(counter) {
  return { type: INCREMENT_HOME_COUNTER, counter };
}

export const decrementHomeCounter = function(counter) {
  return { type: DECREMENT_HOME_COUNTER, counter };
}

export const incrementAboutCounter = function(counter) {
  return { type: INCREMENT_ABOUT_COUNTER, counter };
}

export const decrementAboutCounter = function(counter) {
  return { type: DECREMENT_ABOUT_COUNTER, counter };
}
