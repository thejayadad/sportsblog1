'use client'
// CardList.jsx
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../CardList/Card';
import { getAllPosts } from '@/lib/request';

const CardList = () => {
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / cardsPerPage);
  const cardsToDisplay = posts.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <section className="px-4 py-8 flex flex-col gap-4">
      <h2 className="font-light text-center text-5xl mb-12">Recent Plays</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {cardsToDisplay.map((post, index) => (
          <Card key={index} post={post} />
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
