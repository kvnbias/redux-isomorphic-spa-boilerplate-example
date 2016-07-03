/** @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/base/Nav';
import { setActiveModule } from '../../actions/base';

const Base = class Base extends Component {

  props: Object;

  render() :any {
    const { children }: { children: Object } = this.props;

    return (
      <div className="base">
        <Nav />
        { children }
      </div>
    );
  }
};

Base.propTypes = {
  activeModule: PropTypes.string.isRequired,
  children: PropTypes.node
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { activeModule }: { activeModule: string } = state;
  return { activeModule };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);
