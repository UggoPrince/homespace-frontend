/* eslint-disable no-console */
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

const HomeNavigation = () => (
  <div className="float-right inline-block">
    <Link
      to="/"
      className="mr-5 cursor-pointer text-indigo-600
      font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Home
    </Link>
    <Link
      to="/logout"
      className="cursor-pointer text-indigo-600
        font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Logout
    </Link>
  </div>
);

const LandingNavigation = () => (
  <div className="float-right inline-block">
    <Link
      to="/login"
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
      to="/login"
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

const SignupNavigation = () => (
  <div className="float-right inline-block">
    <Link
      to={'/'.toString()}
      className="mr-5 cursor-pointer text-indigo-600
            font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Home
    </Link>
    <Link
      to={'/login'.toString()}
      className="mr-5 cursor-pointer text-indigo-600
          font-semibold hover:bg-indigo-600 hover:text-white py-2 px-2 rounded"
    >
      Log In
    </Link>
  </div>
);

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  let Nav = '';
  if (path === '/search') {
    Nav = <SearchNavigation />;
  }
  if (path === '/signup') {
    Nav = <SignupNavigation />;
  }
  if (path === '/') {
    const { token } = useAuth();
    if (token) Nav = <HomeNavigation />;
    else Nav = <LandingNavigation />;
  }
  return Nav;
};

export default Navigation;
