/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import HomePropertyAdapter from './HomePropertyAdapter';
import { useAuth } from '../../auth/AuthProvider';
import { queryApi } from '../../Utils/Api';
import './style.css';

const HomeProperties = (props) => {
  const {
    qString, offset, limit,
  } = props;
  const { user } = useAuth();
  const { country } = user;
  const { loading, error, data } = queryApi(qString, { search: country, offset, limit });
  if (loading) return 'Loading...';
  if (error) {
    console.log(error);
    return `Error! ${error.message}`;
  }
  const { getProperties } = data;
  const { properties, count } = getProperties;
  return (
    <HomePropertyAdapter
      properties={properties}
      count={count}
      number={2}
      loading={loading}
      data={data}
      offset={offset}
    />
  );
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomeProperties);
