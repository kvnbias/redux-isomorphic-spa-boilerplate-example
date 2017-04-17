
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

/**
 * This component will use its local state for the form fields
 * since it is a waste to put those states in the store.
 * However, the registration status (REGISTER_ATTEMPT,
 * REGISTER_SUCCESS, REGISTER_ERROR) will be taken
 * cared by the thunk, saga or observable
 * for the sake of demonstration.
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

  render() {
    let button = null;

    if (false === this.props.isAttempting) {
      button = <button onClick={ this.onSubmit } class='mdl-button mdl-button--colored mdl-js-button'>
        Submit
      </button>
    }
    else {
      button = <button class='mdl-button mdl-button--colored mdl-js-button'>
        Attempting
      </button>
    }

    let errors = [];
    if (_.keys(this.props.errors).length > 0) {
      for (let error in this.props.errors) {
        if (this.props.errors.hasOwnProperty(error)) {
          errors.push(<div class='error' key={ error }>{ this.props.errors[error].message }</div>);
        }
      }
    }

    let success = [];
    if (this.props.isSuccessful) {
      success.push(<div class='success'>Registration Success</div>);
    }

    return (
      <div class='mdl-cell mdl-cell--4-col register-form'>
        <div id='register-container'>
          <h5>Register</h5>
          { errors }
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
        { button }
      </div>
    );
  }
};

RegisterForm.propTypes = {
  attemptRegister: PropTypes.func.isRequired,
  isAttempting: PropTypes.bool.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};
