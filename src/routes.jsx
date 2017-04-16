
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './modules/Home/container';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
  </Switch>
);
