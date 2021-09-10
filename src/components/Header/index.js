import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { getPath, itsThisPath } from '../../utils/Urls';

const SearchBar = (props) => {
  const { search } = props;
  return (
    <div className="container hs-max-width-85 mx-auto mb-5">
      <form id="searchForm2" className=" w-3/5 py-2 px-2 rounded-3xl border border-gray-300">
        <input
          type="search"
          name="searchText"
          id="searchPageSearchTextInput"
          className=" border-transparent focus:outline-none
          py-1 px-3
          rounded-tl-xl rounded-bl-xl w-11/12 min-w-min"
          defaultValue={search}
        />
        <button type="submit" className="cursor-pointer focus:outline-none">
          <FaSearch />
        </button>
        {/* <input type="submit" value={<FaSearch />} className="w-1/12 cursor-pointer" /> */}
      </form>
    </div>
  );
};

const addSearchBar = ({ search } = props) => ((itsThisPath('/search')) ? <SearchBar search={search} /> : '');

const Header = (props) => (
  <header className="container max-width h-auto inline-block z-10 sticky top-0 bg-white border border-b border-gray-300">
    <div className="container py-5 hs-max-width-85 mx-auto">
      <Logo />
      <Navigation />
    </div>
    {addSearchBar(props)}
  </header>
);

export const HeaderBottomMargin = () => (
  <div>
    <br />
    <div className="my-mb-44 max-width my-relative" />
  </div>
);

export default Header;
