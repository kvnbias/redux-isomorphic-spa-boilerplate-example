
import { combineEpics } from 'redux-observable';
import { registerUserEpic } from '../modules/RegisterForm/epics';

/** Combine epics here */
const rootEpic = combineEpics(registerUserEpic);
export default rootEpic;
