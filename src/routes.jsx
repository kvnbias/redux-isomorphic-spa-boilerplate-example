
import React      from 'react';
import Base       from './modules/Base/component';
import Home       from './modules/Home/container';
import About      from './modules/About/container';
import Thunk      from './modules/Thunk/container';
import Saga       from './modules/Saga/container';
import Observable from './modules/Observable/container';
import Users      from './modules/Users/container';

/**
 * NOTE: `name` is just used for my `NavItem`
 * component and SSR checking if its unique.
 * It is not an actual option
 */
const routes = [
  {
    name: 'Base',
    component: Base,
    routes: [
      {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        exact: true,
        component: About
      },
      {
        path: '/thunk',
        name: 'Thunk',
        exact: true,
        component: Thunk
      },
      {
        path: '/saga',
        name: 'Saga',
        exact: true,
        component: Saga
      },
      {
        path: '/observable',
        name: 'Observable',
        exact: true,
        component: Observable
      },
      {
        path: '/users',
        name: 'Users',
        exact: true,
        component: Users
      }
    ]
  }
];

/** NOTE: All must be have the exact key */
export default routes;
