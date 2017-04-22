
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import UserListItem         from '../UserListItem/component';
import ErrorHandler         from '../ErrorHandler/component';
import FetchingButton       from '../FetchingButton/component';

export default class Fetcher extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const users = this.props.users.map(user => {
      const name = `${ user.first_name } ${ user.last_name }`;
      return <UserListItem key={ user._id } name={ name } />
    });

    return (
      <div class='mdl-cell mdl-cell--4-col fetcher-container'>
        <div id='user-list-container'>
          <h5>Users</h5>
          <ErrorHandler errors={ this.props.errors } />
          <FetchingButton { ...this.props } />
          <ul class='mdl-list'>
            { users }
          </ul>
        </div>
      </div>
    );
  }
};

Fetcher.propTypes = {
  page:       PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  users:      PropTypes.array.isRequired,
  errors:     PropTypes.object.isRequired,
  fetch:      PropTypes.func.isRequired,
  cancel:     PropTypes.func.isRequired
};
