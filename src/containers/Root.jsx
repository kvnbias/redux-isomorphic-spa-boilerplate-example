/** @flow */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends Component {

  props: Object;

  render() :any {
    const { store, history }: {
      store: Object,
      history: Object
    } = this.props;

    return (
      <Provider store={ store }>
        <Router history={ history } routes={ routes } />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
