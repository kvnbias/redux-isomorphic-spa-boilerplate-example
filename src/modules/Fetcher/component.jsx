
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import UserListItem from '../UserListItem/component';

export default class Fetcher extends Component {

  constructor(props) {
    super(props);

    this.fetch = this.fetch.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  fetch() {
    const { fetch, page } = this.props;
    fetch(page);
  }

  cancel() {
    const { cancel } = this.props;
    cancel();
  }

  render() {
    let button = null;

    if (false === this.props.isFetching) {
      button =
      <button onClick={ this.fetch } class='mdl-button mdl-js-button mdl-button--raised'>
        Fetch more!
      </button>
    }
    else {
      button =
      <button onClick={ this.cancel } class='mdl-button mdl-js-button mdl-button--raised'>
        Cancel!
      </button>
    }

    let errors = [];
    if (_.keys(this.props.errors).length > 0) {
      for (let error in this.props.errors) {
        if (this.props.errors.hasOwnProperty(error)) {
          errors.push(<div class='error' key={ error }>{ this.props.errors[error] }</div>);
        }
      }
    }

    const users = this.props.users.map((user) => {
      const name = `${ user.first_name } ${ user.last_name }`;
      return <UserListItem key={ user._id } name={ name } />
    });

    return (
      <div class='mdl-cell mdl-cell--4-col fetcher-container'>
        <div id='user-list-container'>
          <h5>Users</h5>
          { errors }
          { button }
          <ul class='mdl-list'>
            { users }
          </ul>
        </div>
      </div>
    );
  }
};

Fetcher.propTypes = {
  page: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  fetch: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};
