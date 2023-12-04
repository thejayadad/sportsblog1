'use client'
// CardList.jsx
import React, { useState } from 'react';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

const CardList = () => {
  // Mock data for demonstration
  const initialCards = Array.from({ length: 8 }, (_, index) => index + 1);
  const [cards, setCards] = useState(initialCards);

  const fetchMoreData = () => {
    // In a real application, you would fetch more data from an API
    // For demonstration purposes, we're just adding more mock data
    setTimeout(() => {
      setCards((prevCards) => [...prevCards, ...Array.from({ length: 8 }, (_, index) => index + prevCards.length + 1)]);
    }, 1000);
  };

  return (
    <InfiniteScroll
      dataLength={cards.length}
      next={fetchMoreData}
      hasMore={true} 
      loader={<h4>Loading...</h4>}
    >
      <section className='px-4 py-8 flex flex-col gap-4'>
        <h2 className='font-light flex justify-between'>Recent Plays</h2>
        {cards.map((card, index) => (
          <Card key={index} />
        ))}
      </section>
    </InfiniteScroll>
  );
};

export default CardList;
