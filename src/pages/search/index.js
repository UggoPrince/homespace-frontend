/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header, { HeaderBottomMargin } from '../../components/Header';
import { prepareSearchPageSearch } from '../../utils/EventHandlers';
import { GET_SEARCHED_PROPERTIES as queryString } from '../../data/property/queryString';
import './style.css';
import SearchProperties from '../../data/property/SearchProperties';
import PropertyDetails from '../../components/PropertyDetails';
import { getState } from '../../utils/Store';

class Search extends Component {
  /* constructor() {
    super();
    this.state = {};
  } */

  componentDidMount() {
    prepareSearchPageSearch();
  }

  render() {
    const {
      redirect, q, property, offset, limit, searchPageIndex,
    } = this.props;
    let propertyPresent = false;
    if (property) propertyPresent = true;
    // const { id } = property;
    const Redirect = redirect;
    if (q === '') {
      return Redirect;
    }
    return (
      <div className="2xl:container min-ht-vh relative">
        <Header search={q} />
        <div className="container hs-max-width-85 hs-pb-100">
          <div className="flex flex-row flex-nowrap">
            <div id="propertiesDiv">
              <HeaderBottomMargin />
              <SearchProperties qString={queryString} offset={offset} limit={limit} />
            </div>
            <div id="propertyDetailsFromSearchDiv" className="">
              {propertyPresent && <PropertyDetails property={property} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  q: state.q,
  property: state.property,
  offset: state.propsSearchOffset,
  limit: state.propsSearchLimit,
});

export default connect(mapStateToProps)(Search);
