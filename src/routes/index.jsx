import React from 'react';
import { connect } from 'react-redux';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import Home from '../pages/home';
import Search from '../pages/search';
import Signup from '../pages/signup';
import Login from '../pages/login';
import Page404 from '../pages/404-page';
import Signin from '../auth/signin';

const SearchPage = ({ children }, props) => {
  const { qEmpty } = props;
  if (qEmpty) return <Navigate replace to="/" />;
  return children;
};

const Router = (props) => {
  const { q, redirect } = props;
  const qEmpty = q === '' || q === undefined;
  return (
    // <Route exact path="/search" element={<SearchPage qEmpty={qEmpty}><Search q={q} redirect={redirect} /></SearchPage>} />
    <Routes>
      <Route exact path="/" element={<Home qEmpty={qEmpty} q={q} />} />
      <Route exact path="/signup" element={<Signin><Signup /></Signin>} />
      <Route exact path="/login" element={<Signin><Login /></Signin>} />
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
