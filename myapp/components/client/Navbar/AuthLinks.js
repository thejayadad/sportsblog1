'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const timeoutRef = useRef();
  const { data: session } = useSession();

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setTooltipVisible(false);
    }, 1000000); 
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
        <FaUser size={30} className="text-black" />
      </div>

      {isTooltipVisible && (
        <div className="absolute top-10 left-0 bg-white shadow-md rounded p-2 text-gray-700">
          {session ? (
            <>
              <Link href="/profile">
                <span className="block p-1 hover:text-blue-500 transition duration-300">
                  Profile
                </span>
              </Link>
              <span
                className="block p-1 hover:text-blue-500 transition duration-300"
                onClick={() => signOut()}
              >
                Logout
              </span>
            </>
          ) : (
            <>
              <Link href="/login">
                <span className="block p-1 hover:text-blue-500 transition duration-300">
                  Login
                </span>
              </Link>
              <Link href="/register">
                <span className="block p-1 hover:text-blue-500 transition duration-300">
                  Register
                </span>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
