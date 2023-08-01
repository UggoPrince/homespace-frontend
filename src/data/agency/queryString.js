/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_AGENCY = gql`
  query ($username: String!) {
    getAgencyByUsername(username: $username) {
      id, name, username, country, state, address, phoneNumber, email, about,
      banner, facebook, instagram, twitter, whatsapp, properties(
        offset: 0,
        limit: 100
      ) { id, photos { id, photo } }
    }
  }
`;

export const GET_AGENCY_AND_PROPERTIES = gql`
  query ($id: ID!) {
    getAgency(id: $id) {
      id, name, username, country, state, address, phoneNumber, email, about,
      banner, facebook, instagram, twitter, whatsapp
    }
  }
`;

export const GET_AGENCIES = gql`
  query ($offset: Int, $limit: Int, $name: String, $address: String, $about: String, $country: String, $state: String) {
    getAgencies(offset: $offset, limit: $limit, name: $name, address: $address, about: $about, country: $country, state: $state) {
      count, agencies {id, name, username, country, state, address, phoneNumber, email, about,
        banner, facebook, instagram, twitter, whatsapp, properties(
                      offset: 0,
                      limit: 100
                      ) { id, photos { id, photo } }
      }
    }
  }
`;

export const GET_USER_AGENCIES = gql`
  query ($offset: Int, $limit: Int) {
    getUsersAgencies(offset: $offset, limit: $limit) {
      count, agencies {
        id, name, username, country, state, address, phoneNumber, email, about,
        banner, facebook, instagram, twitter, whatsapp
      }
    }
  }
`;

export const GET_USER_AGENCY = gql`
  query {
    getUserAgency {
      id, name, username, country, state, address, phoneNumber, email, about,
      banner, facebook, instagram, twitter, whatsapp
    }
  }
`;

export const CREATE_AGENCY = gql`
  mutation (
    $name: String!,
    $username: String!
    $country: String,
    $state: String,
    $address: String!,
    $phoneNumber: String!,
    $email: String,
    $about: String!,
    $facebook: String,
    $twitter: String,
    $instagram: String,
    $whatsapp: String
  ) {
    createAgency(
      name: $name,
      username: $username,
      country: $country,
      state: $state,
      address: $address,
      phoneNumber: $phoneNumber,
      email: $email,
      about: $about,
      facebook: $facebook,
      twitter: $twitter,
      instagram: $instagram,
      whatsapp: $whatsapp) {
        id, name, username, country, state, address, phoneNumber, email, about, banner, facebook, instagram, twitter, whatsapp
      }
  }
`;

export const UPDATE_BANNER = gql`
  mutation (
    $id: ID!,
    $files: [Upload!]!,
  ) {
    updateAgencyBanner(
      id: $id,
      files: $files) {
        id, name, username, country, state, address, phoneNumber, email, about, banner, facebook, instagram, twitter, whatsapp
      }
  }
`;
