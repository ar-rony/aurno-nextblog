import type { Metadata } from "next";
import { posts } from "#site/content";
import { siteConfig } from "@/lib/site";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const tagSlug = (tag: string) =>
  tag
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const categoryLabel = (category: string) => {
  if (category === "all") return "All posts";

  const found = posts
    .flatMap((post) => post.tags ?? [])
    .find((tag) => tagSlug(tag) === category);

  return found ? found : category.replace(/-/g, " ");
};

export async function generateStaticParams() {
  const categories = new Set<string>();

  posts.forEach((post) => {
    (post.tags ?? []).forEach((tag) => {
      categories.add(tagSlug(tag));
    });
  });

  categories.add("all");

  return Array.from(categories).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabel(category);

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${label} | Categories | ${siteConfig.name}`,
    description:
      category === "all"
        ? `Browse all posts on ${siteConfig.name}.`
        : `Read posts tagged ${label} on ${siteConfig.name}.`,
    alternates: {
      canonical: `/categories/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryParam } = await params;
  const categoryPosts =
    categoryParam === "all"
      ? posts
      : posts.filter((post) =>
          (post.tags ?? []).some((tag) => tagSlug(tag) === categoryParam)
        );
  const label = categoryLabel(categoryParam);

  if (!categoryPosts.length) {
    return (
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <h1 className='text-4xl font-bold text-slate-950 dark:text-white'>Category not found</h1>
        <p className='mt-4 text-slate-600 dark:text-slate-300'>
          We couldn't find any posts for <span className='font-semibold'>{label}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <section className='rounded-[2rem] border border-border bg-gradient-to-br from-slate-50 via-white to-purple-50 p-10 shadow-xl shadow-purple-200/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:border-slate-800 dark:shadow-black/20'>
        <div className='max-w-3xl space-y-4'>
          <p className='text-sm uppercase tracking-[0.35em] text-purple-700 dark:text-purple-300'>Category</p>
          <h1 className='capitalize text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white'>
            {label}
          </h1>
          <p className='max-w-2xl text-lg text-slate-600 dark:text-slate-300'>
            {categoryParam === "all"
              ? "Browse every post from the blog."
              : `Posts tagged "${label}" on ${siteConfig.name}.`}
          </p>
        </div>
      </section>

      <section className='grid gap-10 py-10 sm:grid-cols-2 xl:grid-cols-3'>
        {categoryPosts.map((post) => {
          const category = post.tags?.[0] ?? "Uncategorized";
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
                <Link href={`/categories/${tagSlug(category)}`} className='inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-100 capitalize'>
                  {category}
                </Link>
                <div className='space-y-3'>
                  <Link href={`/blog/${post.slug}`}>
                    
                    <h2 className="capitalize text-base font-bold font-montserrat text-gray-800 dark:text-lime-50">
                        <span className="bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_3px]">
                            {post.title}
                        </span>
                    </h2>
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
  );
}
