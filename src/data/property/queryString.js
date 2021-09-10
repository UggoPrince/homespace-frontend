import gql from 'graphql-tag';

export const GET_PROPERTIES_FOR_LANDING_PAGE = gql`
{
    getProperties {
      properties {
        id
        address
        propertyType
        price
        intent
        units
        agency { name, address }
        photos { photo }
      }
      count
    }
}
`;

export const GET_SEARCHED_PROPERTIES = gql`
query ($offset: Int, $limit: Int, $search: String!) {
  getProperties(offset: $offset, limit: $limit, search: $search) {
    properties {
      id
      address
      propertyType
      title
      price
      intent
      units
      state
      country
      agency { id, name, address }
      photos { photo }
    }
    count
  }
}
`;
