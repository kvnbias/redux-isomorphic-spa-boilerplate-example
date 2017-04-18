
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/container';
import Fetcher from '../Fetcher/container';

export default class Thunk extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setActiveModule();
    this.props.resetRegisterState();
  }

  render() {

    return (
      <div class='centered-text mdl-grid'>
        <h6>
          This is `Thunk` fragment. This should change on nav click.
          However the current users for this page should stay
          the same on revisit. Added `Users` should append upon submitting
          the form if there are no errors.
        </h6>
        <RegisterForm
          attemptRegister={ this.props.attemptRegister }
          isAttempting={ this.props.isAttempting }
          isSuccessful={ this.props.isSuccessful }
          errors={ this.props.registrationErrors }
        />
        <Fetcher
          fetch={ this.props.fetch }
          cancel={ this.props.cancel }
          page={ this.props.page }
          isFetching={ this.props.isFetching }
          users={ this.props.users }
          errors={ this.props.userListErrors }
        />
      </div>
    );
  }
};

Thunk.propTypes = {
  setActiveModule: PropTypes.func.isRequired,

  resetRegisterState: PropTypes.func.isRequired,
  attemptRegister: PropTypes.func.isRequired,
  isAttempting: PropTypes.bool.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
  registrationErrors: PropTypes.object.isRequired,

  page: PropTypes.number.isRequired,
  fetch: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  userListErrors: PropTypes.object.isRequired
}
