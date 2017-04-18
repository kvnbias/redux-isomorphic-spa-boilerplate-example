
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/container';

export default class Saga extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class='mdl-cell mdl-cell--12-col centered-text'>
        <h6>
          This is `Saga` fragment. This should change on nav click.
          However the current users for this page should stay
          the same on revisit. Added `Users` should append upon submitting
          the form if there are no errors.
        </h6>
        <RegisterForm
          attemptRegister={ this.props.attemptRegister }
          isAttempting={ this.props.isAttempting }
          isSuccessful={ this.props.isSuccessful }
          errors={ this.props.errors }
        />
      </div>
    );
  }
};

Saga.propTypes = {
  attemptRegister: PropTypes.func.isRequired,
  isAttempting: PropTypes.bool.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
}
