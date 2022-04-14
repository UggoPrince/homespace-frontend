/* eslint-disable no-console */
import { Component } from 'react';
import { connect } from 'react-redux';
import Header, { HeaderBottomMargin } from '../../components/Header';
import { prepareSearchPageSearch } from '../../Utils/EventHandlers';
import { GET_SEARCHED_PROPERTIES as queryString } from '../../data/property/queryString';
import SearchProperties from '../../data/property/SearchProperties';
import Properties from '../../data/property/PropertiesAndDetailsBox';
import '../style.css';

class Search extends Component {
  componentDidMount() {
    prepareSearchPageSearch();
  }

  render() {
    const {
      redirect, q, property, offset, limit, searchPageIndex,
    } = this.props;
    const Redirect = redirect;
    if (q === '') {
      return Redirect;
    }
    return (
      <div className="2xl:container min-ht-vh relative">
        <Header search={q} />
        <Properties property={property} number={1}>
          <HeaderBottomMargin />
          <SearchProperties qString={queryString} offset={offset} limit={limit} />
        </Properties>
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
