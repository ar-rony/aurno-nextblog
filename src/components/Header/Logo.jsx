import Link from 'next/link'
import React from 'react'
import { FcManager } from "react-icons/fc";


const Logo = () => {
  return (
    <Link className="flex text-xl items-center gap-2 uppercase" href={"/"}>
        <span className='rounded-full ring-1 ring-accent p-1'><FcManager className='text-4xl'/></span>
        <span>Aurno<span className="text-accent font-extrabold">Blog</span></span>
    </Link>
  )
}

export default Logo