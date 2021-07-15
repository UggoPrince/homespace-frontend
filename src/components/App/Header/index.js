import React from 'react';
import Logo from '../../Logo';
import Navigation from '../Navigation';

const Header = () => (
  <header className="container max-width h-auto inline-block z-10 fixed bg-white">
    <div className="container py-5 hs-max-width-85 mx-auto">
      <Logo />
      <Navigation />
    </div>
  </header>
);

export const HeaderBottomMargin = () => (
  <div>
    <br />
    <div className="my-mb-44 max-width my-relative" />
  </div>
);

export default Header;
