import { useQuery } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const queryApi = (qString, payLoad) => useQuery(qString, { variables: payLoad });
