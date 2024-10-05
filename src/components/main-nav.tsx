"use client";

import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MainNav = () => {
    const pathname = usePathname();
    return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
        <Link href={'/'} className='mr-6 flex items-center space-x-3'>
            <Icons.logo className='w-6 h-6'/>
            <span className=" font-montserrat text-2xl">{siteConfig.name}</span>
        </Link>
        <Link href="/blog"  className={cn("text-sm  font-medium transition-colors hover:text-primary hidden sm:inline-block", pathname === "/blog" ? "text-foreground" : "text-foreground/60")}>Blog</Link>
        <Link href="/about"  className={cn("text-sm  font-medium transition-colors hover:text-primary hidden sm:inline-block", pathname === "/about" ? "text-foreground" : "text-foreground/60")}>About</Link>
        <Link href="/contact"  className={cn("text-sm  font-medium transition-colors hover:text-primary hidden sm:inline-block", pathname === "/contact" ? "text-foreground" : "text-foreground/60")}>Contact</Link>
    </nav>
  )
}

export default MainNav