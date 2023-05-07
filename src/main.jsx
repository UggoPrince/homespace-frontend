/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ApolloClient, ApolloProvider, InMemoryCache, createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-link-http';
import { createUploadLink } from 'apollo-upload-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';
import { store } from './Utils/Store';
import theme from './theme';
import { getLocalStorage } from './Utils/LocalStorage';

const API_URL = import.meta.env.VITE_API_URL;
const httpLink = createUploadLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = getLocalStorage('token');
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const cache = new InMemoryCache({ addTypename: true });

// eslint-disable-next-line no-unused-vars
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </Router>,
);
