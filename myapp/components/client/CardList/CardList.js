'use client'
// CardList.jsx
import React, { useState } from 'react';
import Card from './Card';
import ReactPaginate from 'react-paginate';

const CardList = () => {
  // Mock data for demonstration
  const totalCards = 8;
  const cardsPerPage = 3;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0); // Start from page 0 for react-paginate

  const cards = Array.from({ length: totalCards }, (_, index) => index + 1);

  const cardsPerPageConfig = {
    lg: 3, // Large screens
    md: 2, // Medium screens
    sm: 1, // Small screens
  };

  const cardsToDisplay = cards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <section className='px-4 py-8 flex flex-col gap-4'>
      <h2 className='font-light text-center text-5xl mb-12'>Recent Plays</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {cardsToDisplay.map((card, index) => (
          <Card key={index} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </section>
  );
};

export default CardList;
