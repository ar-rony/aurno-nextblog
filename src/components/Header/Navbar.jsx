import Link from 'next/link'
import React from 'react'
import { Sun } from 'lucide-react';

const links = [
    {
        "text" : "Home",
        "url" : "/",
    },
    {
        "text" : "About",
        "url" : "/about",
    },
    {
        "text" : "Contact",
        "url" : "/contact",
    },
]

const Navbar = () => {
  return (
    <nav className='z-50 fixed top-5 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm *:font-semibold flex items-center gap-3 rounded-full ring-1 ring-dark py-2 px-6'>
        {links.map((link)=>(
            <Link className='hover:text-accent' key={link.text} href={link.url}>{link.text}</Link>
        ))}      
        <span><Sun /></span>  
    </nav>
  )
}

export default Navbar