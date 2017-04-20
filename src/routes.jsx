
import React      from 'react';
import Base       from './modules/Base/container';
import Home       from './modules/Home/container';
import About      from './modules/About/container';
import Thunk      from './modules/Thunk/container';
import Saga       from './modules/Saga/container';
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
      }
    ]
  }
];

/** NOTE: All must be have the exact key */
export default routes;
