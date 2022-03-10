import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(getLocalStorage('token'));

  const handleLogin = (token) => {
    setToken(token);
    setLocalStorage('token', token);
    navigate('/');
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
