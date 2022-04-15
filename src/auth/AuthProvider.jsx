import React from 'react';
import { connect } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import {
  destroyLocalStorage, getLocalStorage, getUserFromLocalStorage, setLocalStorage,
} from '../Utils/LocalStorage';
import { computeSearchPath, itsThisPath } from '../Utils/Urls';

const AuthContext = React.createContext(null);

const AuthProvider = (props) => {
  const { children, q, propsSearchOffset } = props;
  const start = propsSearchOffset;
  const navigate = useNavigate();
  const [token, setToken] = React.useState(getLocalStorage('token'));
  const [user, setUser] = React.useState(getUserFromLocalStorage('user'));
  const handleLogin = (token, user) => {
    setLocalStorage('user', JSON.stringify(user));
    setLocalStorage('token', token);
    setToken(token);
    setUser(user);
    let url = '/';
    if (q && !start) url += computeSearchPath(q, start);
    else if (!q && start) url += computeSearchPath(q, start);
    else if (q && start) url += computeSearchPath(q, start);
    navigate(url, { replace: true });
  };

  const handleLogout = () => {
    destroyLocalStorage('token');
    destroyLocalStorage('user');
    setToken(null);
    setUser(null);
    if (!itsThisPath('/')) navigate('/');
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AuthProvider);

export const useAuth = () => React.useContext(AuthContext);
