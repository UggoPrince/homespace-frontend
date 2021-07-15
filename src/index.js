/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style.css';

const { API_URL } = process.env;
// const title = 'React with Webpack and Babel';

const httpLink = new HttpLink({
  uri: API_URL,
  headers: {},
});

const cache = new InMemoryCache({ addTypename: false });

// eslint-disable-next-line no-unused-vars
const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('app'),
);

module.hot.accept();
