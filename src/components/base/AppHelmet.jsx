/** @flow */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import config from '../../config';

const AppHelmet = class AppHelmet extends Component {

  props: Object;

  render() :any {
    const { title, meta, link, script }: {
      title: string,
      meta: Array<Object>,
      link: Array<Object>,
      script: Array<Object>
    } = this.props;

    return (
      <Helmet
        title={ title } titleTemplate={ `%s | localhost:3000` }
        defaultTitle='localhost:3000'
        meta={ meta } link={ link } script={ script }
      />
    );
  }
};

AppHelmet.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  script: PropTypes.arrayOf(PropTypes.object)
};


const mapStateToProps = (state :Object, props :Object) :Object => {
  return props;
};

export default connect(mapStateToProps)(AppHelmet);
