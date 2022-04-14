/* eslint-disable no-console */
import { connect } from 'react-redux';
import HomePropertyAdapter from './HomePropertyAdapter';
import { queryApi } from '../../Utils/Api';
import './style.css';

const SearchProperties = (props) => {
  const {
    qString, q, offset, limit,
  } = props;
  const { loading, error, data } = queryApi(qString, { search: q, offset, limit });

  if (loading) return 'Loading...';
  if (error) {
    return `Error! ${error.message}`;
  }
  const { getProperties } = data;
  const { properties, count } = getProperties;
  return (
    <HomePropertyAdapter
      properties={properties}
      count={count}
      number={1}
      loading={loading}
      data={data}
      offset={offset}
    />
  );
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchProperties);
