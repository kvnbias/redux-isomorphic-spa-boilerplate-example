
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Footer = class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <footer class='mdl-mini-footer'>
        <div class='mdl-mini-footer__left-section'>
          <div class='mdl-logo'>Footer</div>
        </div>
      </footer>
    );
  }
};

Footer.propTypes = {
}

export default Footer;
