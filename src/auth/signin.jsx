import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default ({ children }) => {
  const { token, user } = useAuth();
  if (user && token) return <Navigate replace to="/" />;
  return children;
};
