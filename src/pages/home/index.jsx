import React, { Component } from 'react';
import Header, { HeaderBottomMargin } from '../../components/Header';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="2xl:container min-ht-vh master relative">
        <Header />
        <HeaderBottomMargin />
      </div>
    );
  }
}

export default HomePage;
