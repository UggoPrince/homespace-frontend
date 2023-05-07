/* eslint-disable import/prefer-default-export */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import { Navigate, useLocation } from 'react-router-dom';
import { resetState } from '../Utils/Store';
import { useAuth } from './AuthProvider';

export const SignOutToLogin = () => {
  const location = useLocation();
  const { clearStorage } = useAuth();
  clearStorage();
  // resetState();
  return <Navigate to="/login" state={{ from: location }} />;
  // }
};

export const SignOutToHome = () => {
  const { clearStorage } = useAuth();
  clearStorage();
  return <Navigate to="/" />;
};
