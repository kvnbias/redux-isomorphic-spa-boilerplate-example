// @flow

export const Modules: Object = {
  HOME: 'home',
  USERS: 'users'
};

export const SET_ACTIVE_MODULE: string = 'SET_ACTIVE_MODULE';
export const setActiveModule: Function = (activeModule: string) :Object => {
  return { type: SET_ACTIVE_MODULE, activeModule };
};
