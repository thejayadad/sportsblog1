'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const AuthLinks = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const timeoutRef = useRef();

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    // Use a timeout to delay hiding the tooltip
    timeoutRef.current = setTimeout(() => {
      setTooltipVisible(false);
    }, 1000); // Adjust the delay time as needed (500 milliseconds in this example)
  };

  const clearHideTimeout = () => {
    // Clear the timeout to prevent hiding the tooltip if the user quickly moves from the icon to the tooltip
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onMouseOver={clearHideTimeout}
      >
        <FaUser size={30} className='text-black' />
      </div>

      {isTooltipVisible && (
        <div className="absolute top-10 right-0 bg-white shadow-md rounded p-2 text-gray-700">
          <Link href="/login">
            <span className="block p-1 hover:text-blue-500 transition duration-300">Login</span>
          </Link>
          <Link href="/register">
            <span className="block p-1 hover:text-blue-500 transition duration-300">Register</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
