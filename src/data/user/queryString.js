import gql from 'graphql-tag';

const SIGNUP_USER = gql`
mutation ($firstname: String!,
    $lastname: String!,
    $email: String!,
    $country: String!,
    $state: String!,
    $password: String!
    $address: String!) {
  signUp(firstname: $firstname,
      lastname: $lastname,
      email: $email,
      country: $country,
      state: $state,
      password: $password,
      address: $address) {
    user {
      id
    }
    token
  }
}
`;

export default SIGNUP_USER;
