
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li class='mdl-list__item'>
        <span class='mdl-list__item-primary-content'>
          { this.props.name }
        </span>
      </li>
    );
  }
};

UserListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default UserListItem;
