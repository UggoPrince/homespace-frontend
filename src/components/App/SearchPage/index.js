/* eslint-disable no-console */
import React, { Component } from 'react';
import Header, { HeaderBottomMargin } from '../Header';
import Footer from '../Footer';
import { GET_SEARCHED_PROPERTIES as queryString } from '../../../data/properties/queryString';
import './style.css';
import { SearchProperties } from '../../../data/properties/properties';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {};
    this.searchString = () => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      return params.q;
    };
  }

  render() {
    return (
      <div className="2xl:container min-ht-vh">
        <Header />
        <HeaderBottomMargin />
        <div className="container hs-max-width-85 hs-pb-100">
          <div className="hs-text-center">
            <div className="font-bold text-2xl inline-block hs-pt-40 hs-pb-40 text-gray-600">
              Explore Neighborhoods
            </div>
          </div>
          <SearchProperties qString={queryString} search={this.searchString()} />
        </div>
        <Footer />
      </div>
    );
  }
}
