import React, { Component } from 'react';
import Header, { HeaderBottomMargin } from '../../components/Header';
import Hero from './Hero';
import Footer from '../../components/Footer';
import { prepareLandingPageSearch } from '../../Utils/EventHandlers';
import './style.css';
import { BaseLayout } from '../../layouts/base-layout';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    prepareLandingPageSearch();
  }

  render() {
    return (
      <BaseLayout>
        {/* <div className="2xl:container min-ht-vh master relative"> */}
        <Header />
        <HeaderBottomMargin />
        <Hero />
        <Footer />
        {/* </div> */}
      </BaseLayout>
    );
  }
}

export default LandingPage;
