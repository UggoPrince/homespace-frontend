/* eslint-disable react/jsx-curly-brace-presence */
// import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-paginate';
import { paginator } from '../../utils/EventHandlers';
// import { computeSearchUrl } from '../../utils/Urls';
import './style.css';

const Pager = (props) => {
  const {
    counted, dispatch, offset, searchString,
  } = props;
  const totalPageCount = Math.ceil(counted / 10);
  const handleClick = (data) => {
    const { selected } = data;
    // dispatch({ type: 'SEARCH_PAGE_CURRENT_INDEX', searchPageIndex: selected });
    paginator(data);
  };
  // const generateHref = (p) => { const skip = p * 10; return computeSearchUrl(searchString, skip); };
  const disableInitialCallback = true;
  const index = (offset / 10);
  return (
    <Pagination
      pageCount={totalPageCount}
      onPageChange={handleClick}
      initialPage={index}
      disableInitialCallback={disableInitialCallback}
      previousLabel="Previous"
      nextLabel="Next"
      containerClassName="pagination flex flex-row align-middle"
      pageLinkClassName="pr-4 pl-4 border-0 flex-1 pt5 pb5"
      pageClassName="text-center flex flex-col border"
      activeLinkClassName="bg-indigo-600 text-white"
      breakClassName="text-center flex-1 border align-middle"
      breakLinkClassName="pr-4 pl-4 border-0 m-auto"
      previousClassName="mr-2 m-auto border flex flex-col"
      nextClassName="ml-2 m-auto border flex flex-col"
      previousLinkClassName="flex-1 align-middle pr-4 pl-4 pt5 pb5"
      nextLinkClassName="flex-1 align-middle pr-4 pl-4 pt5 pb5"
      // eslint-disable-next-line no-console
      // hrefBuilder={generateHref}
    />
  );
};

export default connect()(Pager); //
