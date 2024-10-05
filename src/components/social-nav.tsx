import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

const SocialNav = () => {
  return (
      <nav className="items-center hidden sm:inline-flex">
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div className={cn(buttonVariants({ variant: "ghost"}), "w-10 px-0")}>
                <Icons.gitHub className='h-5 w-5'/>
                <span className="sr-only">Github</span>
            </div>
          </Link>
          <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
            <div className={cn(buttonVariants({ variant: "ghost"}), "w-10 px-0")}>
                <Icons.twitter className='h-5 w-5'/>
                <span className="sr-only">Twitter</span>
            </div>
          </Link>
      </nav>
  )
}

export default SocialNav