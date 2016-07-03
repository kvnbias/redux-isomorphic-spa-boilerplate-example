/** @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import Head from './Head';

export default class ViewHandler {

  /** Set up provider and router context */
  getInitialComponent({ store, renderProps }: {
    store: { getState: Function },
    renderProps: Object
  }) :Object {
    return (
      <Provider store={store}>
          <RouterContext {...renderProps} />
      </Provider>
    );
  }

  /** Get HTML skeleton */
  getHTMLPrototype(componentHTML: Object, initialState: Object) :string {
    const header: string = renderToString(<Head />);
    const content: string = renderToString(componentHTML);

    return `
      <!DOCTYPE html>
      <html lang="en-us">
        ${header}
        <body>
          <div id="react-view">${content}</div>
          <script src="/socket.io/socket.io.js"></script>
          <script type="application/javascript">
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
          <script type="application/javascript" src="/dist/js/index.min.js"></script>
        </body>
      </html>
    `;
  }

  /** Get HTML altogether with current state */
  renderView({ store, renderProps }: {
    store: { getState: Function },
    renderProps: Object
  }) :string {
    const InitialComponent: Object = this.getInitialComponent({
      store,
      renderProps
    });

    const initialState: Object = store.getState();
    return this.getHTMLPrototype(InitialComponent, initialState);
  }
}
