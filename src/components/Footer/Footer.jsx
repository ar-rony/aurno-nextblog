import Link from 'next/link'
import React from 'react'
import Social from "@/components/Header/Social"

const Footer = () => {
  return (
    <div  className='bg-dark rounded-lg *:text-light'>
      <div className='w-full px-5 sm:px-6 sm:w-4/6 mx-auto text-center py-10 sm:py-20 flex items-center flex-col gap-5'>
        <h3 className='text-xl sm:text-4xl font-bold'>Interesting Stories | Updates | Guides
        </h3>
        <p>Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.</p>
        <form className='bg-light p-2 flex gap-2 items-center rounded-md sm:w-1/2'>
          <input className='bg-transparent text-lg outline-none flex-1 border-b  text-dark' type="email" placeholder='Enter your email' />
          <button className='bg-dark px-3 py-1 rounded-md'>Submit</button>
        </form>
        <Social />
      </div>
      <div className='border-t border-t-light p-6 *:text-light flex flex-col sm:flex-row items-center justify-between gap-4'>
        <div className="">
          &copy; 2024 AurnoBlog. All Right Reserved.
        </div>
        <div className="">
          <Link href="/">sitemap.xml</Link>
        </div>
        <div className="">
          Made with Love by <Link href="#">AR Rony</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer