import { HomeProps } from '@/pages/index';
import { scrollToTop } from '@/public/helpers/scrollToTop';
import ArrowDown from '@/public/icons/ArrowDown/ArrowDown';
import React from 'react';

interface PaginationProps extends HomeProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ totalPages, currentPage, setCurrentPage }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='pagination_wrapper'>
      {totalPages > 1 && <button
        onClick={() => {
          if (currentPage && currentPage > 1) {
            scrollToTop();
            setCurrentPage && setCurrentPage(currentPage - 1);
          }
        }}
        className='pagination_arrows left_paginate'
      >
        <ArrowDown/>
      </button>}
      <div className='pagination_pages'>
        {pages.map((page: number, i) => (
          <span
            key={i}
            onClick={() => {
              scrollToTop();
              setCurrentPage && setCurrentPage(page);
            }}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            {page}
          </span>
        ))}
      </div>
      {totalPages > 1 && <button
        onClick={() => {
          if (currentPage && currentPage < totalPages) {
            scrollToTop();
            currentPage && setCurrentPage && setCurrentPage(currentPage + 1);
          }
        }}
        className='pagination_arrows right_paginate'
      >
        <ArrowDown/>
      </button> }
    </div>
  );
}

export default Pagination;
