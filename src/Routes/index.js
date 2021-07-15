import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import LandingPage from '../components/App/LandingPage';
import { getSearchString } from '../components/App/Navigation';
import Search from '../components/App/SearchPage';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LandingPage />
    </Route>
    <Route exact path="/search">
      <Search q={getSearchString()} />
    </Route>
  </Switch>
);

export default Routes;
