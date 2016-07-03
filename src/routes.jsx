/** @flow */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './containers/base/Base';

import Home from './containers/home/Home';
import Users from './containers/users/Users';

export default (
    <Route path='/' component={ Base }>
        <IndexRoute component={ Home } />
        <Route path='/users' component={ Users } />
    </Route>
);
