
import React from 'react'
import MainNav from "@/components/main-nav"
import SocialNav from "@/components/social-nav"
import MobileNav from "@/components/mobile-menu"
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className='z-50 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className="flex items-center h-14 container px-[15px] sm:px-0">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-2">      
            <SocialNav />
          </div>
          <ModeToggle />
          <MobileNav />
        </div>
    </header>
  )
}

export default Header