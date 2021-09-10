import React from 'react';
import { connect } from 'react-redux';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import LandingPage from '../pages/landing';
import Search from '../pages/search';

const Routes = (props) => {
  const { q, redirect } = props;
  const qEmpty = q === '';
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/search">
        {!qEmpty && <Search q={q} redirect={redirect} />}
        {qEmpty && <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export const RedirectToHome = () => (<Redirect to="/" />);

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  q: state.q,
});

export default connect(mapStateToProps)(Routes);
