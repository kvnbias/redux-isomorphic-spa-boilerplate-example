
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import UserListItem         from '../UserListItem/component';
import * as constants       from '../../constants';

export default class Feed extends Component {

  constructor(props) {
    super(props);

    this.ping = this.ping.bind(this);
  }

  componentWillMount() {
    const { connect } = this.props;

    /**
     * Initialize socket connection. Establish
     * connection to `frontend` namespace
     */
    connect();
  }

  componentDidMount() {
    const { emit } = this.props;

    /**
     * Will join the room `redux-isomorphic-feed` under
     * the namespace `frontend` via `initialize` event.
     */
    emit(constants.EV_INITIALIZE, constants.CH_FEED);
  }

  componentWillUnmount() {
    const { disconnect } = this.props;
    disconnect();
  }

  ping() {
    const { emit } = this.props;
    emit(constants.EV_PING, 'PONG');
  }

  render() {
    const users = this.props.users.map(user => {
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
  connect:  PropTypes.func.isRequired,
  emit:     PropTypes.func.isRequired,
  users:    PropTypes.array.isRequired
};
