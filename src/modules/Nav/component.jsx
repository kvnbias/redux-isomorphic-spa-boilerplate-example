
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavItem from '../NavItem/component';

const Nav = class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {navItems} = this.props;
    const items = navItems.map(function(navItem, index) {
      return (<NavItem key={index} navItem={navItem} />);
    });

    return (
      <header class='mdl-layout__header mdl-layout__header--scroll'>
        <div class='mdl-layout__header-row'>
          <span class='mdl-layout-title'>FooBarBaz</span>
          <div class='mdl-layout-spacer'></div>
          <nav class='mdl-navigation'>
            {items}
          </nav>
        </div>
      </header>
    );
  }
};

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired
  }).isRequired)
}

export default Nav;
