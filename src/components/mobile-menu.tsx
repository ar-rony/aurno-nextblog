"use client"
import { Menu } from 'lucide-react'
import React, { Children, useState } from 'react'
import {Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from './icons'
import Link, { LinkProps } from 'next/link'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function MobileNav (){
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className='sm:hidden' variant={'ghost'}>
                    <Menu className='w-6 h-6'/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>    
            <SheetContent side={'right'}>
                <MobileLink onOpenChange={setOpen} href="/" className='flex items-center space-x-2'> 
                    <Icons.logo className='w-6 h-6'/>
                    <span className=" font-montserrat text-2xl">{siteConfig.name}</span>
                </MobileLink>
                <div className="flex flex-col gap-3 mt-3">
                    <MobileLink onOpenChange={setOpen} href="/blog" > 
                        Blog
                    </MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/about" > 
                        About
                    </MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/contact" > 
                        Contact
                    </MobileLink>
                </div>
                <div className="mt-6 flex space-x-4 ">
                    
                    <Link className='hover:scale-125 transition duration-200' href={siteConfig.links.github} target='_blank' rel='noreferrer'>
                        <Icons.gitHub className='h-5 w-5'/>
                        <span className="sr-only">Github</span>
                    </Link>
                    <Link className='hover:scale-125 transition duration-200' href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
                        <Icons.twitter className='h-5 w-5'/>
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

interface  MobileLinkProps extends LinkProps {  
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

export function MobileLink({children, href, onOpenChange, className, ...props}: MobileLinkProps) {
    const router = useRouter();
    return <Link href={href} onClick={() => { router.push(href.toString());  onOpenChange?.(false); }} className={className}  {...props}>
        { children }
    </Link>
}