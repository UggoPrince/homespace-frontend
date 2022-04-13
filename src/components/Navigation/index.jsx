/* eslint-disable no-console */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

const HSLink = (props) => {
  const { path, text } = props;
  return (
    <li className="flex flex-grow">
      <Link
        to={path}
        className="
      md:ml-5 cursor-pointer text-indigo-600
      font-semibold hover:bg-indigo-600 text-center
      hover:text-white py-2 px-2 md:rounded w-40 md:w-full"
      >
        {text}
      </Link>
    </li>
  );
};

const HSButton = (props) => {
  const { handler, text } = props;
  return (
    <button
      type="submit"
      onClick={handler}
      className="
      cursor-pointer
      text-indigo-600
      font-semibold
      hover:bg-indigo-600
      hover:text-white
      py-2
      px-2
      text-center
      md:rounded w-40 md:w-full"
    >
      {text}
    </button>
  );
};

const NavBlock = ({ children }) => (
  <nav className="flex">
    <ul
      className="
      hidden
      absolute
      border-indigo-600
      top-12
      right-10
      border-2 rounded
      bg-white
      md:bg-transparent
      md:right-0
      md:top-0
      md:w-auto
      md:flex
      md:relative
      md:border-solid
      md:border-0
      md:border-transparent md:"
      id="navMenu"
    >
      {children}
    </ul>
    <div className="py-2" id="navMenuButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
        className="md:hidden cursor-pointer block"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
  </nav>
);

const HomeNavigation = (props) => {
  const { logout } = props;
  const logUserOut = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <NavBlock>
      <HSLink path="/" text="Home" />
      <HSButton text="Logout" handler={logUserOut} />
    </NavBlock>
  );
};

const LandingNavigation = () => (
  <NavBlock>
    <HSLink path="/login" text="Log In" />
    <HSLink path="/signup" text="Sign Up" />
  </NavBlock>
);

const SignupNavigation = () => (
  <NavBlock>
    <HSLink path="/" text="Home" />
    <HSLink path="/login" text="Log In" />
  </NavBlock>
);

const LoginNavigation = () => (
  <NavBlock>
    <HSLink path="/" text="Home" />
    <HSLink path="/signup" text="Sign Up" />
  </NavBlock>
);

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const { token, logout } = useAuth();
  let Nav = '';
  if (path === '/signup') {
    Nav = <SignupNavigation />;
  }
  if (path === '/login') {
    Nav = <LoginNavigation />;
  }
  if (path === '/') {
    if (token) Nav = <HomeNavigation logout={logout} />;
    else Nav = <LandingNavigation />;
  }
  return Nav;
};

export default Navigation;
