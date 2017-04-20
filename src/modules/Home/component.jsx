
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import AppHelmet            from '../AppHelmet/component';
import Counter              from '../Counter/container';
import { HOME }             from '../../constants';

export default class Home extends Component {

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
    this.getMeta    = this.getMeta.bind(this);
    this.getLink    = this.getLink.bind(this);
    this.getScript  = this.getScript.bind(this);
  }

  componentWillMount() {
    this.props.setActiveModule();
  }

  render() {

    return (
      <div class='mdl-cell mdl-cell--4-col page-content'>
        <AppHelmet
          title='Home'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
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

Home.propTypes = {
  setActiveModule: PropTypes.func.isRequired
}
