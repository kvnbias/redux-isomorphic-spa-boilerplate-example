
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/component';
import * as actions from '../../actions';
import * as constants from '../../constants';

export default class Feed extends Component {

  constructor(props) {
    super(props);

    this.ping = this.ping.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    /**
     * Initialize socket connection. Establish
     * connection to `frontend` namespace
     */
    dispatch(actions.socketConnect(constants.NS_FRONTEND));
  }

  componentDidMount() {
    const { dispatch } = this.props;

    /**
     * Will join the room `redux-isomorphic-feed` under
     * the namespace `frontend` via `initialize` event.
     */
    dispatch(actions.emitEvent(
      constants.NS_FRONTEND,
      constants.EV_INITIALIZE,
      constants.CH_FEED
    ));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actions.socketDisconnect(
      constants.NS_FRONTEND
    ));
  }

  ping() {
    const { dispatch } = this.props;
    dispatch(actions.emitEvent(
      constants.NS_FRONTEND,
      constants.EV_PING,
      'PONG'
    ));
  }

  render() {
    const users = this.props.users.map(function(user) {
      const name = `${ user.first_name } ${ user.last_name }`;
      return <UserListItem key={ user._id } name={ name } />
    });

    return (
      <div class='mdl-cell mdl-cell--4-col feed-container'>
        <div id='user-list-container'>
          <h5>Feed</h5>
          <button onClick={ this.ping } class='mdl-button mdl-js-button mdl-button--raised'>
            Ping!
          </button>
          <ul class='mdl-list'>
            { users }
          </ul>
        </div>
      </div>
    );
  }
};

Feed.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};
