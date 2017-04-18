
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/container';

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
      <div class='mdl-cell mdl-cell--12-col centered-text'>
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
          errors={ this.props.errors }
        />
      </div>
    );
  }
};

Thunk.propTypes = {
  resetRegisterState: PropTypes.func.isRequired,
  setActiveModule: PropTypes.func.isRequired,
  attemptRegister: PropTypes.func.isRequired,
  isAttempting: PropTypes.bool.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
}
