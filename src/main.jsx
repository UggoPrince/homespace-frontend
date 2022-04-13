/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';
import store from './utils/Store';
import theme from './theme';

const API_URL = import.meta.env.VITE_API_URL;

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </Router>,
  document.getElementById('root'),
);
