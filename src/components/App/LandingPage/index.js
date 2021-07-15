import React, { Component } from 'react';
import Header, { HeaderBottomMargin } from '../Header';
import Hero from './Hero';
import Footer from '../Footer';
import EventHandlers from '../../../Utils/EventHandlers';
import './style.css';

EventHandlers();

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="2xl:container bg-red-500 min-ht-vh master">
        <Header />
        <HeaderBottomMargin />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
