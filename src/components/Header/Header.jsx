import React from 'react';
import Logo from "@/components/Header/Logo"
import Navbar from "@/components/Header/Navbar"
import Social from "@/components/Header/Social"

const Header = () => {
  return (
    <header className='bg-light py-4 flex items-center justify-between'>
      <Logo />
      <Navbar />
      <Social />
      <div className="cursor-pointer sm:hidden text-4xl rotate-90"> |||</div>
    </header>
  )
} 

export default Header