
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './modules/Home/container';
import About from './modules/About/container';
import Thunk from './modules/Thunk/container';
import Saga from './modules/Saga/container';
import Observable from './modules/Observable/container';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/thunk' component={ Thunk } />
    <Route exact path='/saga' component={ Saga } />
    <Route exact path='/observable' component={ Observable } />
  </Switch>
);
