
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import Helmet               from 'react-helmet';

class AppHelmet extends Component {

  render() {
    return (<Helmet { ...this.props } titleTemplate={ `%s` } defaultTitle='Default Title' />);
  }
};

AppHelmet.propTypes = {
  title:  PropTypes.string,
  meta:   PropTypes.arrayOf(PropTypes.object),
  link:   PropTypes.arrayOf(PropTypes.object),
  script: PropTypes.arrayOf(PropTypes.object)
};


const mapStateToProps = (state, props) => props

export default connect(mapStateToProps)(AppHelmet);
