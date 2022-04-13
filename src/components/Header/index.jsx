import { FaSearch } from 'react-icons/fa';
import { Component, useEffect, useState } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { itsThisPath } from '../../utils/Urls';
import { setNavMenuButtonEvent, prepareSearchPageSearch } from '../../utils/EventHandlers';

const SearchBar = (props) => {
  const { search } = props;
  const [searchText, setSearchText] = useState(search);
  useEffect(() => {
    setSearchText(search);
  }, [search]);
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
          defaultValue={searchText}
        />
        <button id="searchPageSearchButton" type="submit" className="cursor-pointer focus:outline-none">
          <FaSearch />
        </button>
        {/* <input type="submit" value={<FaSearch />} className="w-1/12 cursor-pointer" /> */}
      </form>
    </div>
  );
};

const addSearchBar = ({ search } = props) => {
  if (itsThisPath('/search')) return <SearchBar search={search} />;
  if (itsThisPath('/')) return <SearchBar search={search} />;
  return null;
};

export default class Header extends Component {
  componentDidMount() {
    setNavMenuButtonEvent();
    prepareSearchPageSearch();
  }

  render() {
    return (
      <header className="container max-width h-auto inline-block z-10 sticky top-0 bg-white border border-b border-gray-300">
        <div className="container py-4 flex flex-auto justify-between hs-max-width-85 mx-auto">
          <Logo />
          <Navigation />
        </div>
        {addSearchBar(this.props)}
      </header>
    );
  }
}

/* const Header = (props) => (
  <header className="container max-width h-auto inline-block z-10 sticky top-0 bg-white border border-b border-gray-300">
    <div className="container py-4 flex flex-auto justify-between hs-max-width-85 mx-auto">
      <Logo />
      <Navigation />
    </div>
    {addSearchBar(props)}
  </header>
); */

export const HeaderBottomMargin = () => (
  <div>
    <br />
    <div className="my-mb-44 max-width my-relative" />
  </div>
);
