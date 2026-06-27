import type { Metadata } from "next";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { posts } from '#site/content';
import { siteConfig } from '@/lib/site';
import Tag from '@/components/tag';

const baseUrl = siteConfig.url.replace(/\/$/, "");
const buildAbsoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = posts.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Post not found | Aurno Blog App",
      description: "The requested blog post could not be found.",
      alternates: {
        canonical: "/blog",
      },
    };
  }

  const title = `${blog.title} | ${siteConfig.name}`;
  const description = blog.description ?? `Read ${blog.title} on ${siteConfig.name}.`;
  const postUrl = `${baseUrl}/blog/${blog.slug}`;
  const imageUrl = blog.image?.src ? buildAbsoluteUrl(blog.image.src) : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title,
      description,
      url: postUrl,
      type: "article",
      siteName: siteConfig.name,
      images: imageUrl ? [{ url: imageUrl, alt: blog.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.links.twitter || undefined,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function singleblog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = posts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className='container'>
        <article>
          <section className="top">
            <h2>Post not found</h2>
          </section>
        </article>
      </div>
    );
  }

  const mdxComponents = {
    // Use plain <img> for MDX-rendered images to avoid next/image client-side behavior
    Image: ({ src, alt, width, height, ...props }: any) => {
      if (typeof src !== 'string') return null;

      const style: any = { display: 'block', width: '100%', height: 'auto' };
      if (width && height) {
        style.width = Number(width);
        style.height = Number(height);
      }

      return (
        <div className='my-8 overflow-hidden rounded-2xl'>
          <img src={src} alt={alt || ''} style={style} {...props} />
        </div>
      );
    },
    img: ({ src, alt, width, height, ...props }: any) => {
      if (typeof src !== 'string') return null;

      const style: any = { display: 'block', width: '100%', height: 'auto' };
      if (width && height) {
        style.width = Number(width);
        style.height = Number(height);
      }

      return (
        <div className='my-8 overflow-hidden rounded-2xl'>
          <img src={src} alt={alt || ''} style={style} {...props} />
        </div>
      );
    },
  };

  const MDXContent = (() => {
    try {
      const { jsx, jsxs, Fragment } = require('react/jsx-runtime');
      const mdl = new Function('arg', blog.body);
      const mod = mdl({ Fragment, jsx, jsxs });
      return mod?.default ? mod.default({ components: mdxComponents }) : null;
    } catch (error) {
      console.error('MDX render error:', error);
      return null;
    }
  })();

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <article className='max-w-4xl mx-auto space-y-8'>
        <div>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-purple-400 hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to all posts
          </Link>
        </div>

        <header className='space-y-4'>
          <div className='flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-purple-700'>
            <Tag name={`${blog.tags?.[0] ?? 'Blog'}`} className='inline-flex rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-900 dark:bg-purple-900 dark:text-purple-100' />
            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100'>{blog.title}</h1>
          {blog.description ? (
            <p className='text-lg text-slate-600 dark:text-slate-300'>{blog.description}</p>
          ) : null}
        </header>

        {blog.image ? (
          <div className='overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-slate-200/50 dark:shadow-black/20'>
            <Image 
              src={blog.image.src} 
              alt={blog.title} 
              width={blog.image.width}
              height={blog.image.height}
              className='w-full object-cover rounded-2xl'
            />
          </div>
        ) : null}
{/* 
        <div className='prose prose-slate max-w-none dark:prose-invert  prose-headings:scroll-mt-20 prose-headings:font-bold
          prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
          // Lists
          prose-li:marker:text-purple-600 dark:prose-li:marker:text-purple-400
          // Blockquotes
          prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:italic
          // Code blocks
          prose-code:before:content-none prose-code:after:content-none
          prose-pre:p-4 prose-pre:rounded-lg
        '>
          {MDXContent}
        </div> */}
      {/* --- TOC (simplified; in reality generate from headings) --- */}

        <article className="prose prose-lg dark:prose-invert max-w-none">{MDXContent}</article>

        <footer className='rounded-3xl border border-border bg-card p-8 text-sm text-slate-500 dark:text-slate-400'>
          <p>Published on {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · Updated on {new Date(blog.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </footer>
      </article>
    </div>
  )
}

