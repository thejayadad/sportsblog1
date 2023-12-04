'use client'
import Link from 'next/link'
import React from 'react'


const Logo = ({ size }) => {
    return (
    <Link href={'/'}>
        <img
        src='/sportslogo.png'
        style={{ width: size, height: 'auto' }}
        alt='Sports Logo'
        />
    </Link>
  )
}

export default Logo