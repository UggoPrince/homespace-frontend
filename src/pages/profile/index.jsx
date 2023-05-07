import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { ProfileBody } from './body';

class Profile extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="w-full min-ht-vh relative">
        <Header />
        <ProfileBody />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Profile);
