import React from 'react';
// import bgImg from '../../../public/images/houses2.jpg';

const Hero = () => (
  <div className="hero flex-grow">
    <div className="my-36 object-none object-center">
      <div className="hs-text-center">
        <div className="hero-text-1 text-6xl text-blue-800 font-bold font-serif">Find A Space</div>
      </div>
      <div className="hs-text-center hs-pt-60 hs-pb-40 flex-grow">
        <form id="searchForm" method="GET" action="/search">
          <input
            name="searchText"
            id="homeSearchTextInput"
            placeholder="Address, City, Neighborhood..."
            type="search"
            className="
          border-transparent
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-600
          focus:border-transparent
          py-4 px-4
          rounded-tl rounded-bl
          w-2/5 min-w-min"
          />
          <button
            id="searchButton"
            type="submit"
            className="
            bg-indigo-600
            hover:bg-blue-700
            focus:outline-none
            focus:ring-2
            focus:ring-purple-600
            focus:ring-opacity-50
            text-white
            py-4 px-6
            rounded-tr
            rounded-br font-bold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Hero;
