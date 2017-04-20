
import { combineEpics }     from 'redux-observable';
import { registerUserEpic } from '../modules/RegisterForm/epics';
import { fetchUsersEpic }   from '../modules/Fetcher/epics';

/** Combine epics here */
const rootEpic = combineEpics(registerUserEpic, fetchUsersEpic);
export default rootEpic;
