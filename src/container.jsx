
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import routes from './routes';
import Nav from './modules/Nav/component';
import Footer from './modules/Footer/component';

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    const navItems = [
      { name: 'Home', target: '/' },
      { name: 'About', target: '/about' },
      { name: 'Thunk', target: '/thunk' },
      { name: 'Saga', target: '/saga' },
      { name: 'Observable', target: '/observable' },
    ]

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history } routes={ routes }>
          <div id='main-content'>
            <Nav navItems={ navItems } />
            <main class='mdl-layout__content'>
              { routes }
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
