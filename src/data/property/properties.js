/* eslint-disable no-console */
import React from 'react';
import { useQuery } from '@apollo/client';
import PropertyCard from '../../components/PropertyCard';

const Properties = (props) => {
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

export default Properties;
