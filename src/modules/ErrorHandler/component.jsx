
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import _                    from 'underscore';

export default class ErrorHandler extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let errors = [];
    if (_.keys(this.props.errors).length > 0) {
      for (let error in this.props.errors) {
        const isValid = this.props.errors.hasOwnProperty(error);
        if (error.message !== 'undefined')
          errors.push(<div class='error' key={ error }>{ this.props.errors[error].message }</div>);
        else
          errors.push(<div class='error' key={ error }>{ this.props.errors[error] }</div>);
      }
    }

    return (
      <div class='error-container'>
        { errors }
      </div>
    );
  }
};

ErrorHandler.propTypes = {
  errors: PropTypes.object.isRequired
};
