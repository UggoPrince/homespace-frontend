import React from 'react';
import { connect } from 'react-redux';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import Home from '../pages/home';
import LandingPage from '../pages/landing';
import Search from '../pages/search';
import Signup from '../pages/signup';
import Page404 from '../pages/404-page';
import { useAuth } from '../auth/AuthProvider';

const SearchPage = ({ children }, props) => {
  const { qEmpty } = props;
  if (qEmpty) return <Navigate replace to="/" />;
  return children;
};

const HomePage = ({ children }) => {
  const { token } = useAuth();
  if (!token) return <LandingPage />;
  return children;
};

const Router = (props) => {
  const { q, redirect } = props;
  const qEmpty = q === '' || q === undefined;
  return (
    <Routes>
      <Route exact path="/" element={<HomePage><Home /></HomePage>} />
      <Route exact path="/search" element={<SearchPage qEmpty={qEmpty}><Search q={q} redirect={redirect} /></SearchPage>} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export const RedirectToHome = () => (<Navigate to="/" />);

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  q: state.q,
  token: state.token,
});

export default connect(mapStateToProps)(Router);
