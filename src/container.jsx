
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Provider }         from 'react-redux';
import { ConnectedRouter }  from 'react-router-redux';
import { renderRoutes }     from 'react-router-config';
import routes               from './routes';
import Base                 from './modules/Base/container';

export default class Root extends Component {
  render() {
    const { store, history } = this.props

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history } routes={ routes[0].routes }>
          { renderRoutes(routes) }
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store:    PropTypes.object.isRequired,
  history:  PropTypes.object.isRequired
}
