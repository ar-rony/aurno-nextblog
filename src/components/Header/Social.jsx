import React from 'react'
import { CiInstagram, CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import Link from 'next/link'
const Social = () => {
  return (
    <div className='flex gap-3 *:text-3xl *:text-accent'>
        <Link href={"#"}><CiFacebook  className='hover:scale-125 transition-all ease-linear duration-200' /></Link>
        <Link href={"#"}><CiInstagram  className='hover:scale-125 transition-all ease-linear duration-200'/></Link>
        <Link href={"#"}><CiTwitter className='hover:scale-125 transition-all ease-linear duration-200' /></Link>
        <Link href={"#"}><CiYoutube  className='hover:scale-125 transition-all ease-linear duration-200'/></Link>
    </div>
  )
}

export default Social