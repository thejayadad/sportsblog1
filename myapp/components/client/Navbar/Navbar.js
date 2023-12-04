'use client'
import React from 'react'
import AuthLinks from './AuthLinks'
import Logo from '@/components/logo/Logo'
import MenuLinks from './MenuLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <div className='flex justify-between mx-auto max-w-screen-xl items-center'>
            <AuthLinks />
            <Logo size={200}  />
            <MenuLinks />
        </div>
    </header>
  )
}

export default Navbar