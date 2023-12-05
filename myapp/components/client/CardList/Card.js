'use client'
// Card.jsx
import React from 'react';

const Card = ({ post }) => {
  if (!post) {
    // Handle the case when post is undefined (initial render)
    return null;
  }

  // Destructure post object
  const { title, description, img, views, category, user } = post;

  // Function to truncate text to the first 60 characters
  const truncateText = (text, maxLength) => {
    // Check if text is defined before truncating
    return text ? (text.length > maxLength ? text.slice(0, maxLength) + '...' : text) : '';
  };

  return (
    <div className="h-full border-opacity-60 overflow-hidden">
      <img className="lg:h-96 md:h-36 w-full object-cover object-center" src={img} alt={title} />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
        <p className="leading-relaxed mb-3">{truncateText(description, 60)}</p>
        <div className="flex items-center flex-wrap">
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {views} Views
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
