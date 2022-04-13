import { connect } from 'react-redux';
import { GET_SEARCHED_PROPERTIES as queryString } from '../../data/property/queryString';
import HomeProperties from '../../data/property/HomeProperties';
import SearchProperties from '../../data/property/SearchProperties';

const Body = (props) => {
  const { qEmpty, offset, limit } = props;
  if (qEmpty) return <HomeProperties qString={queryString} offset={offset} limit={limit} />;
  return <SearchProperties qString={queryString} offset={offset} limit={limit} />;
};

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  q: state.q,
  property: state.property,
  offset: state.propsSearchOffset,
  limit: state.propsSearchLimit,
});

export default connect(mapStateToProps)(Body);
