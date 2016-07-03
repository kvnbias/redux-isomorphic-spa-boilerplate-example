/** @flow */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import AppHelmet from '../../components/base/AppHelmet';
import { Modules, setActiveModule } from "../../actions/base";

const Home = class Home extends Component {

  props: Object;

  getMeta = () :Array<Object> => {
    return [
      {
        'name': 'description',
        'content': 'Helmet application'
      },
      {
        'property': 'og:type',
        'content': 'home'
      }
    ];
  };

  getLink = () :Array<Object> => {
    return [
      {
        'rel': 'canonical',
        'href': 'http://localhost:3000/home'
      },
      {
        'rel': 'apple-touch-icon',
        'href': 'http://localhost:3000/assets/img/apple-touch-icon-57x57.png'
      },
      {
        'rel': 'apple-touch-icon',
        'sizes': '72x72',
        'href': 'http://localhost:3000/assets/img/apple-touch-icon-72x72.png'
      }
    ];
  };

  getScript = () :Array<Object> => {
    return [
      {
        'src': 'http://localhost:3000/assets/js/base.js',
        'type': 'text/javascript'
      },
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org'
        }`
      }
    ];
  };

  constructor() :void {
    super();
    this.getMeta = this.getMeta.bind(this);
    this.getLink = this.getLink.bind(this);
    this.getScript = this.getScript.bind(this);
  }

  componentDidMount() :void {
    const { dispatch }: {
      dispatch: Function
    } = this.props
    console.log("TRIGGERED!", "HOME");
    dispatch(setActiveModule(Modules.HOME));
  }

  render() :any {
    const { children }: { children: Object } = this.props;

    return (
      <div className='home'>
        <AppHelmet
          title='Home | Isomorphic Redux Trial'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        HOME
        { children }
      </div>
    );
  }
};

Home.propTypes = {
  children: PropTypes.node
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
