
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Nav from '../Nav/component';
import Footer from '../Footer/component';
import routes from '../../routes';

export default class Base extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='base-container'>
        <Nav navItems={ this.props.route.routes } />
        <main class='mdl-layout__content'>
          { renderRoutes(this.props.route.routes) }
        </main>
        <Footer />
      </div>
    );
  }
};

Base.propTypes = {
  route: PropTypes.object.isRequired
}
