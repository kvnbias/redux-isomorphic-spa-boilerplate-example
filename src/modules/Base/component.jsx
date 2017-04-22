
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { renderRoutes }     from 'react-router-config';
import PropTypes            from 'prop-types';
import Nav                  from '../Nav/component';
import Footer               from '../Footer/component';
import routes               from '../../routes';

class Base extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props;

    return (
      <div class='base-container'>
        <Nav navItems={ routes } />
        <main class='mdl-layout__content'>
          { renderRoutes(routes) }
        </main>
        <Footer />
      </div>
    );
  }
};

Base.propTypes = {
  routes: PropTypes.array.isRequired
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = (state, props) => {
  const { routes } = props.route;

  return { routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(Base);
