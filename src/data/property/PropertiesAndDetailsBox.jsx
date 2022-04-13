/* eslint-disable no-console */
import React from 'react';
import PropertyDetails from '../../components/PropertyDetails';
// import { useQuery } from '@apollo/client';
// import PropertyCard from '../../components/PropertyCard';

const Properties = (props) => {
  const { property, number, children } = props;
  let propertyPresent = false;
  if (property) propertyPresent = true;
  return (
    <div className="container hs-max-width-85 hs-pb-100">
      <div className="flex flex-row flex-nowrap">
        <div id={`propertiesDiv${number}`}>
          {children}
        </div>
        <div id={`propertyDetailsFromSearchDiv${number}`} className="propertyDetailsFromSearchDiv">
          {propertyPresent && <PropertyDetails property={property} number={number} />}
        </div>
      </div>
    </div>
  );
};

export default Properties;

/* const Properties = (props) => {
  const { qString } = props;
  const { loading, error, data } = useQuery(qString);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const { getProperties } = data;
  const properties = getProperties.map((propObj) => <PropertyCard property={propObj} />);
  return (
    <div className="flex flex-row flex-wrap gap-10 lg:justify-between justify-evenly">
      {properties}
    </div>
  );
};

export const PropertyDetailsFromSearch = (props) => {};

export default Properties; */
