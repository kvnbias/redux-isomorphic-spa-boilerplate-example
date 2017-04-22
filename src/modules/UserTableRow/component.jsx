
import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export default class UserTableRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
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
    );
  }
}

UserTableRow.propTypes = {
  user:  PropTypes.object.isRequired
}
