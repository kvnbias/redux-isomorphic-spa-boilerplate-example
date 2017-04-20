
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { NavLink }          from 'react-router-dom';

export default class NavItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, path } = this.props.navItem;

    return (
      <NavLink class='mdl-navigation__link' to={ path }
        exact={ true } activeClassName='active'>
          {name}
      </NavLink>
    );
  }
};

NavItem.propTypes = {
  navItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
}
