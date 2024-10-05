import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Tag = ({ link="#", name, ...props } : any) => {
  return (
    <Link href={link} className={cn("text-sm sm:text-lg inline-block py-2 sm:py-3 px-6 sm:px-10 bg-gray-900 text-lime-50 rounded-full capitalize font-semibold border-solid border-lime-50 border-2 hover:scale-105 transition-all ease-linear duration-200", props.className)}>{name}</Link>
  )
}

export default Tag