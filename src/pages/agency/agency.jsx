/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import AgencyBody from './AgencyBody';

class AgencyPage extends Component {
  componentDidMount() {}

  render() {
    const { w } = this.props;
    return (
      <div className="w-full min-ht-vh relative">
        <Header />
        <AgencyBody />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AgencyPage);
