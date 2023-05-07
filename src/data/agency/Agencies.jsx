import { connect } from 'react-redux';
import { NetworkStatus } from '@apollo/client';
import { useEffect } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import AgencyAdapter from './AgencyAdapter';
import { queryApi } from '../../Utils/Api';
import ErrorHandler from '../errorHandler';

const Agencies = (props) => {
  const {
    w, agencySearchOffset, agencySearchLimit, query, queryName, mine, // setDoneRefetching, reFetchMyAgencies,
  } = props;
  const { user } = useAuth();
  let payLoad = { offset: agencySearchOffset, limit: agencySearchLimit };
  if (w) {
    payLoad = {
      ...payLoad, name: w, address: w, about: w, country: w,
    };
  } else if (user) payLoad.country = user.country;
  const {
    loading, error, data, refetch, networkStatus,
  } = queryApi(query, payLoad, false);
  /* useEffect(() => {
    if (reFetchMyAgencies) {
      refetch().then((res) => {
        setDoneRefetching(true);
      }).catch((err) => {
        setDoneRefetching(true);
      });
    }
  }, [reFetchMyAgencies]); */
  return (
    <>
      {loading && 'Loading...'}
      {error && <ErrorHandler error={error} />}
      {(networkStatus === NetworkStatus.refetch) && 'Refetching!'}
      {data && (
      <AgencyAdapter
        loading={loading}
        agenciesData={data[queryName]}
        offset={agencySearchOffset}
        mine={mine}
      />
      )}
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Agencies);
