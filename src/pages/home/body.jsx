import { connect } from 'react-redux';
import { GET_SEARCHED_PROPERTIES as queryString, GET_PROPERTIES_START_WITH_COUNTRY as queryString2 } from '../../data/property/queryString';
import HomeProperties from '../../data/property/HomeProperties';
import SearchProperties from '../../data/property/SearchProperties';

const Body = (props) => {
  const {
    qEmpty, offset, limit, q,
  } = props;
  return (
    <>
      {qEmpty && <HomeProperties qString={queryString2} offset={offset} limit={limit} searchType={2} />}
      {!qEmpty && <SearchProperties qString={queryString} offset={offset} limit={limit} searchType={2} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  q: state.q,
  property: state.property,
  offset: state.propsSearchOffset,
  limit: state.propsSearchLimit,
});

export default connect(mapStateToProps)(Body);
