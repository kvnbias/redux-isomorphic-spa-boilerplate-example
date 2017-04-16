
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import routes from './routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history } routes={ routes }>
          <div id='routes'>
            { routes }
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
