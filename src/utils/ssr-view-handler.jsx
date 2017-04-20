
import React              from 'react';
import { Provider }       from 'react-redux';
import { StaticRouter }   from 'react-router';
import { renderToString } from 'react-dom/server';
import { renderRoutes }   from 'react-router-config';
import routes             from '../routes';
import Head               from './ssr-head-handler';

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
  getHTMLPrototype(componentHTML, initialState) {
    const header = renderToString(<Head />);
    const content = renderToString(componentHTML);

    return `
      <!DOCTYPE html>
      <html lang="en-us">
        ${ header }
        <body>
          <!-- IMPORTANT! This container shouldnt have a white space! -->
          <div id="root-contianer" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">${ content }</div>
          <script type="application/javascript">
            window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) };
          </script>
          <script type="application/javascript" src="/dist/js/material.min.js"></script>
          <script type="application/javascript" src="/dist/index.js"></script>
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
