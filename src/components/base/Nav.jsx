/** @flow */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Nav = class Nav extends Component {

  props: Object;

  render() {
    const { activeModule }: { activeModule: string } = this.props;

    return (
      <nav>
        <ul>
          <li className={ activeModule == 'home'? 'active':'' }>
            <Link to='/'>Home</Link>
          </li>
          <li className={ activeModule == 'users'? 'active':'' }>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

Nav.propTypes = {
  activeModule: PropTypes.string.isRequired,
  children: PropTypes.node
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { activeModule }: { activeModule: string } = state;
  return { activeModule };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
