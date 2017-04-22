
import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export default class FetchingButton extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  fetch() {
    const { fetch, page } = this.props;
    fetch(page);
  }

  cancel() {
    const { cancel } = this.props;
    cancel();
  }

  render() {
    const { isFetching, fetch, cancel } = this.props;
    const buttonText = isFetching ? 'Cancel!' : 'Fetch!';
    const buttonAction = isFetching ? this.cancel : this.fetch;

    return (
      <button onClick={ buttonAction } class='mdl-button mdl-js-button mdl-button--raised'>
        { buttonText }
      </button>
    );
  }
};

FetchingButton.propTypes = {
  page:       PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetch:      PropTypes.func.isRequired,
  cancel:     PropTypes.func.isRequired
};
