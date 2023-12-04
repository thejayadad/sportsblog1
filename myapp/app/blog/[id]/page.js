'use client'
import React, { useState } from 'react';

const SinglePost = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section className='px-4 py-8'>
      <div className='flex flex-col max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          <div className='md:w-1/2'>
            <img
              className='w-full h-96 md:h-screen object-cover'
              src='https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Post Image'
            />
          </div>
          <div className='md:w-1/2 flex flex-col gap-4'>
            <div className='text-lg font-semibold text-gray-500'>Category</div>
            <h1 className='text-3xl font-bold'>Post Title</h1>
            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <span>User Created</span>
              <span>•</span>
              <span>Date Created</span>
            </div>
            <div className='mt-8'>
          <div className='flex gap-4'>
            <button
              className={`text-lg font-semibold ${
                activeTab === 'description'
                  ? 'text-primary'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`text-lg font-semibold ${
                activeTab === 'comments'
                  ? 'text-blue-500'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('comments')}
            >
              Comments
            </button>
          </div>
          {activeTab === 'description' && (
            <div className='mt-4 text-gray-700'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fringilla vitae nulla ac tincidunt. Integer sed scelerisque
                neque, non pellentesque justo. Nam vel malesuada ligula. Sed
                pulvinar nunc eget tortor ullamcorper tristique. Curabitur
                suscipit interdum luctus. Vestibulum volutpat risus vel nisi
                volutpat, et dictum neque tincidunt. Vivamus nec libero sit
                amet justo feugiat vestibulum nec at mauris. Suspendisse in
                efficitur leo.
              </p>
              <p>
                Quisque non bibendum metus. Proin sit amet nisi nec ligula
                euismod blandit. Integer auctor dui eu lectus pharetra, vel
                eleifend leo semper. Sed sit amet leo non neque interdum
                tincidunt. Fusce laoreet metus a tellus feugiat, at feugiat
                nibh fermentum. Vivamus vel justo quis lacus tincidunt
                fringilla.
              </p>
            </div>
          )}
          {activeTab === 'comments' && (
            <div className='mt-4'>
              <p>No comments yet.</p>
            </div>
          )}
        </div>

         
          </div>
        </div>      
      </div>
    </section>
  );
};

export default SinglePost;
