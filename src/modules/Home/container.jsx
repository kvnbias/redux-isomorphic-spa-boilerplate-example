
import React, { Component } from 'react';
import Counter from '../Counter/container';
import { HOME } from '../../constants';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class='mdl-cell mdl-cell--4-col page-content'>
        <Counter counter={ this.props.counter } section={ HOME } />
        <h5>
          This is `Home` fragment. This should change on nav click.
          However the current counter for this page should stay
          the same on revisit.
        </h5>
      </div>
    );
  }
};