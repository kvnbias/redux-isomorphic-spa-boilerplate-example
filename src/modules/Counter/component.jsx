
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOME, ABOUT, FOOTER } from '../../constants';
import { setActiveModule } from '../../actions';

import { incrementHomeCounter } from './actions';
import { decrementHomeCounter } from './actions';

import { incrementAboutCounter } from './actions';
import { decrementAboutCounter } from './actions';

import { incrementFooterCounter } from './actions';
import { decrementFooterCounter } from './actions';

const Counter = class Counter extends Component {

  constructor(props) {
    super(props);

    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(setActiveModule(HOME));
  }

  onClickIncrement(e) {
    const { counter, section, dispatch } = this.props;
    const currentCounter = counter[section];

    switch (section) {
      case HOME:
        dispatch(incrementHomeCounter(currentCounter));
      break;
      case ABOUT:
        dispatch(incrementAboutCounter(currentCounter));
      break;
      case FOOTER:
        dispatch(incrementFooterCounter(currentCounter));
      break;
    }
  }

  onClickDecrement(e) {
    const { counter, section, dispatch } = this.props;
    const currentCounter = counter[section];

    switch (section) {
      case HOME:
        dispatch(decrementHomeCounter(currentCounter));
      break;
      case ABOUT:
        dispatch(decrementAboutCounter(currentCounter));
      break;
      case FOOTER:
        dispatch(decrementFooterCounter(currentCounter));
      break;
    }
  }

  render() {
    const { counter, section } = this.props;
    const currentCounter = counter[section];

    return (
      <div class='counter-container'>
        <h2>Current: { currentCounter }</h2>
        <button onClick={ this.onClickIncrement } class='mdl-button mdl-js-button mdl-button--fab'>
          <i class='material-icons'>exposure_plus_1</i>
        </button>
        <button onClick={ this.onClickDecrement } class='mdl-button mdl-js-button mdl-button--fab'>
          <i class='material-icons'>exposure_neg_1</i>
        </button>
      </div>
    );
  }
};

Counter.propTypes = {
  section: PropTypes.string.isRequired,
  counter: PropTypes.shape({
    home: PropTypes.number,
    about: PropTypes.number,
    footer: PropTypes.number
  }).isRequired
}

export default Counter;
