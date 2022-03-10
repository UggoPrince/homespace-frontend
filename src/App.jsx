import React from 'react';
import Routes from './routes';
import { AuthProvider } from './auth/AuthProvider';

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
