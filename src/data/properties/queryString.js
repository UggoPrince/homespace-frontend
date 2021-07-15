import gql from 'graphql-tag';

export const GET_PROPERTIES_FOR_LANDING_PAGE = gql`
{
    getProperties {
      id
      address
      propertyType
      price
      intent
      units
      agency { name, address }
      photos { photo }
    }
}
`;

export const GET_SEARCHED_PROPERTIES = gql`
query ($search: String!) {
  getProperties(search: $search) {
    id
    address
    propertyType
    price
    intent
    units
    agency { name, address }
    photos { photo }
  }
}
`;
