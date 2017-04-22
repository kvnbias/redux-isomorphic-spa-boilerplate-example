
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import AppHelmet            from '../AppHelmet/component';
import RegisterForm         from '../RegisterForm/container';
import Fetcher              from '../Fetcher/container';
import Feed                 from '../Feed/container';

export default class Observable extends Component {

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

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { setActiveModule, resetRegisterState } = this.props;

    setActiveModule();
    resetRegisterState();
  }

  render() {
    const { registrationErrors, userListErrors, feed } = this.props;

    return (
      <div class='centered-text mdl-grid'>
        <AppHelmet title='Observable' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <h6>
          This is `Observable` fragment. This should change on nav click.
          However the current users for this page should stay
          the same on revisit. Added `Users` should append upon submitting
          the form if there are no errors, However by leaving this page
          the socket connection between you and the server will be closed,
          hence you wont be able to receive real-time feed of new users.
          Socket connection should be reopened upon the feeds remount.
          By pressing the `PING` button the api server must log `PONG`
        </h6>
        <RegisterForm errors={ registrationErrors } { ...this.props } />
        <Fetcher errors={ userListErrors } { ...this.props } />
        <Feed { ...this.props } />
      </div>
    );
  }
};

Observable.propTypes = {
  setActiveModule:    PropTypes.func.isRequired,

  resetRegisterState: PropTypes.func.isRequired,
  attemptRegister:    PropTypes.func.isRequired,
  isAttempting:       PropTypes.bool.isRequired,
  isSuccessful:       PropTypes.bool.isRequired,
  registrationErrors: PropTypes.object.isRequired,

  page:               PropTypes.number.isRequired,
  fetch:              PropTypes.func.isRequired,
  cancel:             PropTypes.func.isRequired,
  isFetching:         PropTypes.bool.isRequired,
  users:              PropTypes.array.isRequired,
  userListErrors:     PropTypes.object.isRequired,

  feed:               PropTypes.object.isRequired
}
