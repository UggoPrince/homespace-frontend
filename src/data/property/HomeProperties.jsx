/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import HomePropertyAdapter from './HomePropertyAdapter';
import { useAuth } from '../../auth/AuthProvider';
import { queryApi } from '../../Utils/Api';
import './style.css';

const HomeProperties = (props) => {
  const {
    qString, offset, limit, searchType,
  } = props;
  const { user } = useAuth();
  const { country } = user;
  const { loading, error, data } = queryApi(qString, { search: country, offset, limit });
  if (loading) return 'Loading...';
  if (error) {
    return `Error! ${error.message}`;
  }
  return (
    <>
      {data && data?.getPropertiesStartWithCountry && (
      <HomePropertyAdapter
        number={searchType}
        loading={loading}
        data={data?.getPropertiesStartWithCountry}
        offset={offset}
      />
      )}
    </>
  );
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomeProperties);
