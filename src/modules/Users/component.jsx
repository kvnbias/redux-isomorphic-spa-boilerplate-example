
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import AppHelmet            from '../AppHelmet/component';
import fetchUserThunk       from './actions';

export default class Users extends Component {

  getMeta() {
    return [
      {
        'name': 'description',
        'content': 'Sample description here!'
      }
    ];
  };

  getLink() {
    return [
      {
        'rel': 'canonical',
        'href': 'http://www.your-website.xyz/home'
      }
    ];
  };

  getScript() {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org'
        }`
      }
    ];
  };

  /** Will only be dispatched on SSR. Must be static */
  static required = [
    { action: fetchUserThunk, params: [1, 5] }
  ];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { setActiveModule } = this.props;
    setActiveModule();
  }

  fetchUsers() {

  }

  render() {
    const { users } = this.props;
    const userList = [];
    users.map(function(user) {
      userList.push(
        <tr key={ user._id }>
          <td class='mdl-data-table__cell--non-numeric'>
            { user._id }
          </td>
          <td class='mdl-data-table__cell--non-numeric'>
            { `${ user.first_name} ${ user.last_name }` }
          </td>
          <td class='mdl-data-table__cell--non-numeric'>
            { user.email }
          </td>
          <td class='mdl-data-table__cell--non-numeric'>
            { user.created_at }
          </td>
        </tr>
      )
    });

    return (
      <div class='centered-text mdl-grid'>
        <AppHelmet
          title='Users'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        <h6>
          This is `Users` fragment. If this component is rendered
          in the server side. `5` users must be in the list below
          upon loading. How ever if the component is not loaded via
          SSR the user's list must be empty.
        </h6>
        <table class='mdl-data-table mdl-shadow--2dp user-list-table'>
        <thead>
          <tr>
            <th class='mdl-data-table__cell--non-numeric'>ID</th>
            <th class='mdl-data-table__cell--non-numeric'>Name</th>
            <th class='mdl-data-table__cell--non-numeric'>Email</th>
            <th class='mdl-data-table__cell--non-numeric'>Date Registered</th>
          </tr>
        </thead>
        <tbody>
          { userList }
        </tbody>
      </table>
      </div>
    );
  }
}

Users.propTypes = {
  setActiveModule:  PropTypes.func.isRequired,
  isFetching:       PropTypes.bool.isRequired,
  users:            PropTypes.array.isRequired,
  page:             PropTypes.number.isRequired
}
