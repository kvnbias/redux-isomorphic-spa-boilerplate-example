
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Nav from './modules/Nav/component';
import Footer from './modules/Footer/component';

export default class Root extends Component {
  render() {
    const { store, history } = this.props

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history } routes={ routes }>
          <div id='main-content'>
            <Nav navItems={ routes } />
            <main class='mdl-layout__content'>
              { renderRoutes(routes) }
            </main>
            <Footer />
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
