/* eslint-disable no-console */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeNavigation = () => (
  <div className="float-right inline-block">
    <Link
      to="login"
      className="mr-5 cursor-pointer text-indigo-600
      font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Log In
    </Link>
    <Link
      to="/signup"
      className="cursor-pointer text-indigo-600
        font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Sign Up
    </Link>
  </div>
);

const SearchNavigation = () => (
  <div className="float-right inline-block">
    <Link
      to="/"
      className="mr-5 cursor-pointer text-indigo-600
            font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Home
    </Link>
    <Link
      to="login"
      className="mr-5 cursor-pointer text-indigo-600
          font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Log In
    </Link>
    <Link
      to="/signup"
      className="cursor-pointer text-indigo-600
            font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Sign Up
    </Link>
  </div>
);

const Navigation = () => {
  const location = useLocation();
  if (location.pathname.toLowerCase() === '/search') {
    return <SearchNavigation />;
  }
  return <HomeNavigation />;
};

export default Navigation;
