/* eslint-disable no-console */
// import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import PropertyCard from '../../components/PropertyCard';
import Pager from '../../components/SearchPaginator';
import { displayCardDetails } from '../../utils/EventHandlers';
import './style.css';

const SearchProperties = (props) => {
  const {
    qString, q, offset, limit,
  } = props;
  const { loading, error, data } = useQuery(qString, {
    variables: { search: q, offset, limit },
  });
  if (loading) return 'Loading...';
  if (error) {
    return `Error! ${error.message}`;
  }
  const { getProperties } = data;
  const { properties, count } = getProperties;
  const returnPropCard = (propObj) => (
    <div key={propObj.id} onClick={(e) => displayCardDetails(e, propObj)} className="cursor-pointer">
      <PropertyCard property={propObj} />
    </div>
  );
  const propertiesInDom = properties.map((propObj) => returnPropCard(propObj));
  let pageIndex = 0;
  if (!loading && data) {
    pageIndex = (offset / 10) + 1;
  }
  const isPage1 = pageIndex === 1;
  let itemCount = <div>{`Page ${pageIndex} of ${count} results`}</div>;
  if (isPage1) itemCount = <div>{`About ${count} results`}</div>;
  return (
    <div>
      <div className="w-auto mb-10 text-lg">
        {itemCount}
      </div>
      <div className="flex flex-row flex-wrap gap-10 lg:justify-between justify-evenly w-auto">
        {propertiesInDom}
      </div>
      <div className="mt-16 w-full">
        <Pager counted={count} offset={offset} searchString={q} />
      </div>
    </div>
  );
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchProperties);
