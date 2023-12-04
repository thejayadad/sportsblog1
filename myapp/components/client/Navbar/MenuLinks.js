'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaTimes, FaBars } from 'react-icons/fa'; // Import React Icons

const MenuLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="cursor-pointer text-3xl z-[100]" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="text-primary z-50" onClick={toggleMenu} />
        ) : (
          <FaBars />
        )}
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-white opacity-75 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu} // Close menu when overlay is clicked
            ></motion.div>
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-black text-white p-8 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5 }}
            >
              <header className="p-4 text-white text-center">
                <div className="text-2xl font-bold">Sports Playbook</div>
              </header>
              <div className="border-t-2 border-dotted border-secondary"></div>
              <nav className="bg-secondary-500 p-4 text-white">
                <ul className="flex flex-col cursor-pointer items-center gap-y-6">
                  <li className="hover:text-accent">
                    <Link href={'/'}>Home</Link>
                  </li>
                  <li className="hover:text-accent">
                    <Link href={'/about'}>About</Link>
                  </li>
                  <li className="hover:text-accent">
                    <Link href={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="border-t-2 border-dotted border-secondary"></div>
              <section className="p-8">
                <p className="text-gray-800 text-center">
                  Sports Playbook the ultimate hub for sports enthusiasts seeking a playbook of unparalleled experiences. 
                </p>
              </section>
              <div className="border-t-2 border-dotted border-secondary"></div>
              <div className="flex space-x-4 mt-2 items-center bg-gray-700 h-64 justify-center">
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuLinks;
