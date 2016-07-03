/** @flow */

import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import { fromJS } from 'immutable';
import initialize from './store';

let initialState: Object = window.__INITIAL_STATE__;

Object.keys(initialState).forEach((key: string) => {
  initialState[key] = fromJS(initialState[key]);
});

const store: Object = initialize(initialState);

/**
 * You can use hashHistory (http://localhost:8080/#/target-route) to handle hot reloads however,
 * browserHistory (http://localhost:8080/target-route) is more prefered
 */
const history: Object = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={ store } history={ history } />,
  document.getElementById('react-view')
);
