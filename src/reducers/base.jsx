// @flow
"use strict";

import { Modules, SET_ACTIVE_MODULE } from "../actions/base";

let { HOME }: { HOME: string } = Modules;

export const activeModule = (
  state: string = HOME,
  action: { type: string, activeModule: string }
) :string => {
  switch(action.type){
  case SET_ACTIVE_MODULE:
    return action.activeModule;
  default:
    return state;
  }
};
