/** @flow */

import express from 'express';
import path from 'path';
import React from 'react';
import { match } from 'react-router';
import routes from './routes';
import * as reducers from './reducers';
import FetchComponentData from './lib/FetchComponentData';
import initialize from './store';
import ViewHandler from './lib/ViewHandler';

/** Initialize express */
let app :Object = express();

/** render static assets */
app.use(express.static(path.join(__dirname, '../static')));

app.use((req: Object, res: Object) :void => {

  /** Initialize store */
  const store = initialize();

  /** Route handler */
  match({
    routes,
    location: req.originalUrl /** current route */
  }, (err: Object, redirectLocation: String, renderProps: Object) :void => {

    /** If error occured return 500 */
    if (err) return res.status(500).end('Internal server error');

    /** Not found */
    if (!renderProps) return res.status(404).end('Not found.');

    const viewHandler: ViewHandler = new ViewHandler;

    /** Fetch data that needs to be fetched and render HTML */
    FetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(() :string => viewHandler.renderView({ store, renderProps }))
      .then((html: string) :string => res.end(html))
      .catch((err: Object) :string => res.end(err.message));
  });
});

module.exports = app;
