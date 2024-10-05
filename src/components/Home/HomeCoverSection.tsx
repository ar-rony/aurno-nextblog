import { sortPosts } from '@/lib/utils'
import  Link  from 'next/link';
import Image from 'next/image';
import React from 'react'
import Tag from '../tag';


const HomeCoverSection = ({blogs}:any) => {
  const sortedBlogs = sortPosts(blogs);
  const post = sortedBlogs[0];
  return (
      <section className='group mt-6 flex flex-col items-start justify-end relative aspect-[4/3] sm:aspect-auto sm:h-[85vh]'>        
        <Image 
          src={post.image?.src} 
          alt={post.title} 
          placeholder='blur'
          blurDataURL={post.image?.blurDataURL}
          fill
          className='w-full h-full object-cover rounded-3xl '
          />
          <div className='z-0 absolute inset-0 bg-gradient-to-b from-transparent from-0% to-gray-900/70 rounded-3xl '/>
          <div className='w-full sm:w-3/4 z-0 p-6 sm:p-16 flex flex-col items-start justify-center text-lime-50 '>
            <Tag link={`/categories/${post.tags}`} name={post.tags}/>
            <Link href={`/blog/${post.slug}`} className='mt-6'>
              <h1 className='capitalize text-lg sm:text-4xl font-bold font-montserrat bg-gradient-to-r from-gray-200 to-gray-100 text-transparent bg-clip-text'>
                <span className='bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_5px]'>
                  {post.title}
                </span>
              </h1>
            </Link>
            <p className='hidden sm:inline-block mt-4 font-inter text-xl'>{post.description}</p>
          </div>
      </section>
  )
}

export default HomeCoverSection