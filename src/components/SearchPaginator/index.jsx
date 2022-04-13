import { useEffect, useState } from 'react';
import Pagination from 'react-paginate';
import { moveToNewPage } from '../../Utils/EventHandlers';
import './style.css';

const Pager = (props) => {
  const {
    counted, offset,
  } = props;
  const totalPageCount = Math.ceil(counted / 10);
  const handleClick = (data) => {
    moveToNewPage(data);
  };
  const disableInitialCallback = true;
  const [index, setIndex] = useState((offset / 10));
  useEffect(() => {
    setIndex((offset / 10));
  }, [offset]);
  return (
    <Pagination
      pageCount={totalPageCount}
      onPageChange={handleClick}
      forcePage={index}
      disableInitialCallback={disableInitialCallback}
      previousLabel="Previous"
      nextLabel="Next"
      containerClassName="pagination flex flex-row flex-wrap align-middle"
      pageLinkClassName="pr-4 pl-4 border-0 flex-1 pt5 pb5"
      pageClassName="text-center flex flex-col border"
      activeLinkClassName="bg-indigo-600 text-white"
      breakClassName="text-center flex flex-col border"
      breakLinkClassName="pr-4 pl-4 border-0 flex-1 pt5 pb5"
      previousClassName="mr-2 m-auto border flex flex-col"
      nextClassName="ml-2 m-auto border flex flex-col"
      previousLinkClassName="flex-1 align-middle pr-4 pl-4 pt5 pb5"
      nextLinkClassName="flex-1 align-middle pr-4 pl-4 pt5 pb5"
      // eslint-disable-next-line no-console
      // hrefBuilder={generateHref}
    />
  );
};

export default Pager; //
