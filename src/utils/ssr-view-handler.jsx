
import React              from 'react';
import Helmet             from 'react-helmet';
import ReactDOMServer     from 'react-dom/server';
import { Provider }       from 'react-redux';
import { StaticRouter }   from 'react-router';
import { renderRoutes }   from 'react-router-config';

import routes             from '../routes';

/** Server side view handler */
export default class ViewHandler {

  /** Set up provider and static router */
  getInitialComponent(store, context) {
    return (
      <Provider store={ store }>
        <StaticRouter location={ context.request.originalUrl } context={ context }>
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    );
  }

  /** Get HTML skeleton */
  getHTMLPrototype(component, initialState) {
    const componentHTML = ReactDOMServer.renderToString(component);

    /**
     * Prevent memory leak.
     * See https://github.com/nfl/react-helmet#server-usage
     */
    const head = Helmet.renderStatic();

    return `
      <!DOCTYPE html>
      <html lang='en-us'>
        <head>
          ${ head.title }
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          ${ head.meta }
          ${ head.link }
          ${ head.script }
          <link rel='stylesheet' type='text/css' href='/dist/css/material.min.css' />
          <link rel='stylesheet' type='text/css' href='/dist/css/main.css' />
        </head>
        <body>
          <div id='root-contianer' class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>${ componentHTML }</div>
          <script type='application/javascript'>
            window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) };
          </script>
          <script type='application/javascript' src='/dist/js/material.min.js'></script>
          <script type='application/javascript' src='/dist/index.js'></script>
        </body>
      </html>
    `;
  }

  /** Get HTML altogether with current state */
  renderView(store, context) {
    const InitialComponent = this.getInitialComponent(store, context);
    const initialState = store.getState();

    return this.getHTMLPrototype(InitialComponent, initialState);
  }
}
