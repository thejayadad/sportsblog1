'use client'
// useCategories.js

import { useEffect, useState } from 'react';
import {GET} from "../app/api/category/route"

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await GET();
        setCategories(categoriesData);
      } catch (error) {
      }
    };

    fetchCategories();
  }, []);

  return categories;
};

export default useCategories;


export const getAllPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/post');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  