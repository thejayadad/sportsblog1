'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const CategoryList = () => {
  const categories = ['Football', 'Soccer', 'Basketball', 'Baseball', 'Fantasy'];

  return (
    <section className='px-4 py-12'>
      <h2 className='text-center text-6xl mb-12 text-secondary'>Categories</h2>
      <div className='max-w-screen-xl mx-auto flex justify-center flex-wrap gap-4'>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className='p-4 border border-secondary cursor-pointer hover:bg-black hover:text-white transition duration-300'
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <Link href={`/category/${category.toLowerCase()}`}>
              <span className='text-lg md:text-xl lg:text-2xl'>{category}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
