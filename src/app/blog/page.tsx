import type { Metadata } from "next";
import { posts } from "#site/content";
import { siteConfig } from "@/lib/site";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from 'lucide-react';

const baseUrl = siteConfig.url.replace(/\/$/, "");

const tagSlug = (tag: string) =>
  tag
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Blog | Aurno Blog App",
  description: "Explore AurnoBlog's latest articles on web development, productivity, and modern JavaScript.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Aurno Blog App",
    description: "Explore AurnoBlog's latest articles on web development, productivity, and modern JavaScript.",
    url: `${baseUrl}/blog`,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Aurno Blog App",
    description: "Explore AurnoBlog's latest articles on web development, productivity, and modern JavaScript.",
    creator: siteConfig.links.twitter || undefined,
  },
};

export default function Blog() {
  const allposts = posts;
  const categories = Array.from(
    new Set(allposts.flatMap((post) => post.tags ?? ["Uncategorized"]))
  );

  return (
    <div className='container mx-auto px-4 sm:px-2 lg:px-2 py-10'>
      <section className='rounded-[2rem] border border-border bg-gradient-to-br from-purple-100 via-white to-slate-100 p-10 shadow-xl shadow-purple-200/25 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:border-slate-800 dark:shadow-black/20'>
        <div className='max-w-3xl space-y-6'>
          <p className='text-sm uppercase tracking-[0.35em] text-purple-700 dark:text-purple-300'>Blog</p>
          <h1 className='text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white'>
            Explore the latest articles from AurnoBlog
          </h1>
          <p className='max-w-2xl text-lg text-slate-600 dark:text-slate-300'>
            Discover tutorials, insights, and best practices on web development, performance, and productivity.
          </p>
        </div>
      </section>

      <div className='mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-border bg-card p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex flex-wrap items-center gap-3'>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${tagSlug(category)}`}
              className='rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-purple-400 hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
            >
              {category}
            </Link>
          ))}
        </div>

        <div className='inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'>
          <span>New to old</span>
          <ArrowDown className='h-4 w-4' />
        </div>
      </div>

      <section className='grid gap-10 py-10 sm:grid-cols-2 xl:grid-cols-3'>
        {allposts.map((post) => {
          const category = post.tags?.[0] ?? "uncategorized";

          return (
            <article key={post.slug} className='group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lg shadow-slate-200/60 transition-transform duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
              <Link href={`/blog/${post.slug}`} className='block overflow-hidden'>
                <Image
                  src={post.image?.src}
                  alt={post.title}
                  placeholder='blur'
                  blurDataURL={post.image?.blurDataURL}
                  width={post.image.width}
                  height={post.image.height}
                  className='h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </Link>

              <div className='space-y-4 p-6'>
                <Link href={`/categories/${tagSlug(category)}`} className='inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-100'>
                  {category}
                </Link>
                <div className='space-y-3'>
                  <Link href={`/blog/${post.slug}`}>

         <h2 className="capitalize text-base font-bold font-montserrat text-gray-800 dark:text-lime-50">
										<span className="bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_3px]">
											{post.title}
										</span>
									</h2>


                    {/* <h2 className='text-2xl font-semibold text-slate-950 transition-colors duration-200 hover:text-purple-700 dark:text-white dark:hover:text-purple-300'>
                      {post.title}
                    </h2> */}
                  </Link>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    {formatDate(new Date(post.publishedAt), "MMMM dd, yyyy")}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  )
}

 