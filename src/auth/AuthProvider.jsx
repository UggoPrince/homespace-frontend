import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import {
  destroyLocalStorage, getLocalStorage, getUserFromLocalStorage, setLocalStorage,
} from '../Utils/LocalStorage';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(getLocalStorage('token'));
  const [user, setUser] = React.useState(getUserFromLocalStorage('user'));
  const handleLogin = (token, user) => {
    setLocalStorage('user', JSON.stringify(user));
    setLocalStorage('token', token);
    setToken(token);
    setUser(user);
    navigate('/', { replace: true });
  };

  const handleLogout = () => {
    destroyLocalStorage('token');
    destroyLocalStorage('user');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  const value = {
    token,
    user,
    loginUser: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
