
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Helmet               from 'react-helmet';
import { connect }          from 'react-redux';

class AppHelmet extends Component {

  render() {
    const { title, meta, link, script } = this.props;

    return (
      <Helmet
        title={ title }
        titleTemplate={ `%s | Kevin Baisas` }
        defaultTitle='Kevin Baisas'
        script={ script }
        meta={ meta }
        link={ link }
      />
    );
  }
};

AppHelmet.propTypes = {
  title:  PropTypes.string,
  meta:   PropTypes.arrayOf(PropTypes.object),
  link:   PropTypes.arrayOf(PropTypes.object),
  script: PropTypes.arrayOf(PropTypes.object)
};


const mapStateToProps = function(state, props) {
  return props;
};

export default connect(mapStateToProps)(AppHelmet);
