
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Root from './container';
import initialize from './store';

let initialState = window.__INITIAL_STATE__;

/**
 * Use history/createBrowserHistory:
 * http://your-host/target-route
 * Use history/createHashHistory:
 * http://your-host/#/target-route
 */
const history = createHistory();
const store = initialize(initialState, history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root-contianer')
);
