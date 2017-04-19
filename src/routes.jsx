
import React from 'react';
import Home from './modules/Home/container';
import About from './modules/About/container';
import Thunk from './modules/Thunk/container';
import Saga from './modules/Saga/container';
import Observable from './modules/Observable/container';

/**
 * Sample nesting:
 * const routes = [
 *   { component: Root,
 *     routes: [
 *       { path: '/',
 *         exact: true,
 *         component: Home
 *       },
 *       { path: '/child/:id',
 *         component: Child,
 *         routes: [
 *           { path: '/child/:id/grand-child',
 *             component: GrandChild
 *           }
 *         ]
 *       }
 *     ]
 *   }
 *  ]
 */

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    exact: true,
    name: 'About',
    component: About
  },
  {
    path: '/thunk',
    exact: true,
    name: 'Thunk',
    component: Thunk
  },
  {
    path: '/saga',
    exact: true,
    name: 'Saga',
    component: Saga
  },
  {
    path: '/observable',
    exact: true,
    name: 'Observable',
    component: Observable
  }
];

export default routes;
