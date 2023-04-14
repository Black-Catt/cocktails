import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const Pagination = ({ children }) => {
  const { cocktails } = useGlobalContext();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cocktails.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cocktails.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cocktails]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cocktails.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { cocktails: currentItems });
      })}
      <ReactPaginate
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-nav"
        nextLinkClassName="page-nav"
        activeLinkClassName="page-active"
        breakLabel="..."
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={'<'}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
