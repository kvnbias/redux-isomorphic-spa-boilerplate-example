
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './modules/Home/container';
import About from './modules/About/container';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/thunk' component={ Home } />
    <Route exact path='/saga' component={ Home } />
    <Route exact path='/observable' component={ Home } />
  </Switch>
);
