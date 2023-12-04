'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: 'url("/sportshero.png")', // Replace with your image
          scale: 1.1, 
        }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }} // Optional: Add hover effect
      />

      {/* Content */}
      <div className="text-center text-white z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to Sports Playbook
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore the Excitement!
        </motion.p>
        <motion.a
          href="#features"
          className="bg-black text-white py-6 px-12 text-lg hover:bg-gray-900 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Get Started
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
