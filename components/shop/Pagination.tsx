// import { HomeProps } from '@/pages/index';
// import { scrollToTop } from '@/public/helpers/scrollToTop';
// import ArrowDown from '@/public/icons/ArrowDown/ArrowDown';
// import React from 'react';

// interface PaginationProps extends HomeProps {
//   totalPages: number;
//   currentPage: number;
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
// }

// function Pagination({ totalPages, currentPage, setCurrentPage }: PaginationProps) {
//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className='pagination_wrapper'>
//       {totalPages > 1 && <button
//         onClick={() => {
//           if (currentPage && currentPage > 1) {
//             scrollToTop();
//             setCurrentPage && setCurrentPage(currentPage - 1);
//           }
//         }}
//         className='pagination_arrows left_paginate'
//       >
//         <ArrowDown/>
//       </button>}
//       <div className='pagination_pages'>
//         {pages.map((page: number, i) => (
//           <span
//             key={i}
//             onClick={() => {
//               scrollToTop();
//               setCurrentPage && setCurrentPage(page);
//             }}
//             className={`page-item ${currentPage === page ? 'active' : ''}`}
//           >
//             {page}
//           </span>
//         ))}
//       </div>
//       {totalPages > 1 && <button
//         onClick={() => {
//           if (currentPage && currentPage < totalPages) {
//             scrollToTop();
//             currentPage && setCurrentPage && setCurrentPage(currentPage + 1);
//           }
//         }}
//         className='pagination_arrows right_paginate'
//       >
//         <ArrowDown/>
//       </button> }
//     </div>
//   );
// }

// export default Pagination;


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
  const MAX_PAGES_DISPLAYED = 5;

  const getPagesToDisplay = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    if (totalPages <= MAX_PAGES_DISPLAYED) {
      return pages;
    }

    const middleIndex = Math.floor(MAX_PAGES_DISPLAYED / 2);

    if (currentPage <= middleIndex) {
      return [...pages.slice(0, MAX_PAGES_DISPLAYED - 1), '...', totalPages];
    } else if (currentPage >= totalPages - middleIndex) {
      return [1, '...', ...pages.slice(totalPages - MAX_PAGES_DISPLAYED + 2)];
    } else {
      return [
        1,
        '...',
        ...pages.slice(currentPage - middleIndex, currentPage + middleIndex),
        '...',
        totalPages,
      ];
    }
  };

  return (
    <div className='pagination_wrapper'>
      {totalPages > 1 && (
        <button
          onClick={() => {
            if (currentPage && currentPage > 1) {
              // scrollToTop();
              sessionStorage.setItem("currentPage", currentPage - 1 )
              setCurrentPage && setCurrentPage(currentPage - 1);
            }
          }}
          className='pagination_arrows left_paginate'
        >
          <ArrowDown />
        </button>
      )}
      <div className='pagination_pages'>
        {getPagesToDisplay().map((page: number | string, i) => (
          <span
            key={i}
            onClick={() => {
              if (typeof page === 'number') {
                scrollToTop();
                sessionStorage.setItem("currentPage", page )
                setCurrentPage && setCurrentPage(page);
              }
            }}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            {page}
          </span>
        ))}
      </div>
      {totalPages > 1 && (
        <button
          onClick={() => {
            if (currentPage && currentPage < totalPages) {
              // scrollToTop();
              sessionStorage.setItem("currentPage", currentPage + 1 )
              currentPage && setCurrentPage && setCurrentPage(currentPage + 1);
            }
          }}
          className='pagination_arrows right_paginate'
        >
          <ArrowDown />
        </button>
      )}
    </div>
  );
}

export default Pagination;
