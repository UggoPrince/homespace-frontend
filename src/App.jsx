import React from 'react';
import Routes from './routes';
import AuthProvider from './auth/AuthProvider';

const App = () => (
  <div className="font-sans">
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </div>
);

export default App;
