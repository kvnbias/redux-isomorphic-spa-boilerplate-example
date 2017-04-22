
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Counter              from '../Counter/container';
import AppHelmet            from '../AppHelmet/component';
import { ABOUT }            from '../../constants';

export default class About extends Component {

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
    const { setActiveModule } = this.props;
    setActiveModule();
  }

  render() {
    const { counter } = this.props;

    return (
      <div class='mdl-cell mdl-cell--4-col page-content'>
        <AppHelmet title='About' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <Counter counter={ counter } section={ ABOUT } />
        <h5>
          This is `About` fragment. This should change on nav click.
          However the current counter for this page should stay
          the same on revisit.
        </h5>
      </div>
    );
  }
};

About.propTypes = {
  counter:  PropTypes.shape({
    home:   PropTypes.number.isRequired,
    about:  PropTypes.number.isRequired
  }).isRequired,
  setActiveModule: PropTypes.func.isRequired
}
