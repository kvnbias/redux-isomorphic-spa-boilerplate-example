
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

let NavItem = class NavItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {name, target} = this.props.navItem;

    return (
      <NavLink class='mdl-navigation__link' to={ target }
        exact={ true } activeClassName='active'>
          {name}
      </NavLink>
    );
  }
};

NavItem.propTypes = {
  navItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired
  }).isRequired
}

export default NavItem;
