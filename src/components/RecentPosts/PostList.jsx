import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const PostList = () => {

    const posts = [
        {
            "id": "1",
            "title": "The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js",
            "category": "JavaScript",
            "featured_img": "/blogs/1.jpg",
            "date": "January 02, 2023"
        },
        {
            "id": "2",
            "title": "Mastering CSS Grid Layout: A Comprehensive Guide",
            "category": "CSS",
            "featured_img": "/blogs/2.jpg",
            "date": "January 02, 2023"
        },
        {
            "id": "3",
            "title": "The Rise of Progressive Web Apps (PWAs): A Game Changer in Web Development",
            "category": "PWA",
            "featured_img": "/blogs/3.jpg",
            "date": "January 02, 2023"
        },
        {
            "id": "4",
            "title": "RESTful APIs: Building Blocks of Modern Web Applications",
            "category": "Code Quality",
            "featured_img": "/blogs/4.jpg",
            "date": "January 02, 2023"
        },
        {
            "id": "5",
            "title": "Best Practices for Web Accessibility: Building Inclusive Websites",
            "category": "Code Quality",
            "featured_img": "/blogs/5.jpg",
            "date": "January 02, 2023"
        },
        {
            "id": "6",
            "title": "Web Accessibility: Inclusive Design for All Users",
            "category": "Code Quality",
            "featured_img": "/blogs/6.jpg",
            "date": "January 02, 2023"
        }
        
    ];
  return (
    <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-7 sm:gap-14'>
        {posts.map((post)=>(
        <div key={post.id} className="flex flex-col gap-5">
            <div className="h-80  sm:w-full rounded-lg relative">
               <Link href={"#"} ><Image className='rounded-lg object-cover' src={post.featured_img} alt={post.title} fill /></Link>
            </div>
            <div className="flex flex-col gap-2 ">
              <Link href={"#"} className='uppercase text-sm text-accent w-max'>{post.category}</Link>
              <Link href={"#"} className='w-full text-lg font-bold capitalize'>{post.title}</Link>
              <span className='text-gray/90'>{post.date}</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostList