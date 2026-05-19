import React from 'react'
import Nav from './Nav'
import Logo from './Logo'

const NavBar = () => {
  return (
    <div className='flex px-10 bg-gray-700 items-center min-w-full py-2'>
    <Logo/>
    <Nav/>
    </div>
  )
}

export default NavBar