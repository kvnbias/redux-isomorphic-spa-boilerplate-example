
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import _                    from 'underscore';
import ErrorHandler         from '../ErrorHandler/component';

/**
 * This component will use its local state for the form fields
 * since it is a waste to put those states in the store (imo).
 * However, the registration status (REGISTER_ATTEMPT,
 * REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_DONE)
 * will be taken cared by the thunk, saga or
 * observable for the sake of demonstration.
 */
export default class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const field = e.target.id;
    const value = e.target.value;

    this.setState(Object.assign({[field]: value}));
  }

  onSubmit(e) {
    this.props.attemptRegister(this.state);
  }

  /**
   * Ill make conditional statements instead of dumb
   * components to make it more straightforward
   * and simple.
   */
  render() {
    const { isAttempting, isSuccessful } = this.props;
    const buttonText = isAttempting? 'Attempting' : 'Submit';
    const buttonAction = !isAttempting? this.onSubmit : null;
    const success = isSuccessful ?
      (<div key='success' class='success'>Registration Success</div>) : null;

    return (
      <div class='mdl-cell mdl-cell--4-col register-form'>
        <div id='register-container'>
          <h5>Register</h5>
          <ErrorHandler errors={ this.props.errors } />
          { success }
          <div class='mdl-textfield mdl-js-textfield'>
            <input onChange={ this.onChange } class='mdl-textfield__input' type='text' id='first_name' placeholder='First Name' />
          </div>
          <div class='mdl-textfield mdl-js-textfield'>
            <input onChange={ this.onChange } class='mdl-textfield__input' type='text' id='last_name' placeholder='Last Name' />
          </div>
          <div class='mdl-textfield mdl-js-textfield'>
            <input onChange={ this.onChange } class='mdl-textfield__input' type='email' id='email' placeholder='Email Address' />
          </div>
          <div class='mdl-textfield mdl-js-textfield'>
            <input onChange={ this.onChange } class='mdl-textfield__input' type='password' id='password' placeholder='Password' />
          </div>
        </div>
        <button onClick={ buttonAction } class='mdl-button mdl-button--colored mdl-js-button'>
          { buttonText }
        </button>
      </div>
    );
  }
};

RegisterForm.propTypes = {
  attemptRegister:  PropTypes.func.isRequired,
  isAttempting:     PropTypes.bool.isRequired,
  isSuccessful:     PropTypes.bool.isRequired,
  errors:           PropTypes.object.isRequired
};
