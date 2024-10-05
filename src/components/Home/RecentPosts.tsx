import { sortPosts } from "@/lib/utils";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPosts = ({ blogs }: any) => {
	const sortedPosts = sortPosts(blogs);
	return (
		<section className="w-full mt-12 flex flex-col items-center justify-center">
			<div className="flex items-center justify-between w-full">
				<h2 className="inline-block font-bold capitalize text-2xl sm:text-4xl">
					Recent Posts
				</h2>
				<Link
					className="inline-block font-medium text-lg text-purple-700 underline underline-offset-2"
					href="/categories/all">
					View All
				</Link>
			</div>
			<div className=" grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-12 mt-6 sm:mt-12">
				{sortedPosts.slice(5, 11).map((post) => {
					return (
						<article className="group grid gap-4 relative">
							<Link
								href={`/blog/${post.slug}`}
								className="h-full rounded-xl overflow-hidden">
								<Image
									src={post.image?.src}
									alt={post.title}
									placeholder="blur"
									blurDataURL={post.image?.blurDataURL}
									width={post.image.width}
									height={post.image.height}
									className="group-hover:scale-105 transition-all duration-300 aspect-[4/3] h-full w-full object-cover object-center"
								/>
							</Link>
							<div className="flex flex-col justify-center gap-2">
								<span className="text-sm uppercase text-purple-700">
									<Link href={post.tags[0]}>{post.tags[0]}</Link>
								</span>
								<Link href={`/blog/${post.slug}`}>
									<h1 className="capitalize text-base font-bold font-montserrat text-gray-800">
										<span className="bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_3px]">
											{post.title}
										</span>
									</h1>
								</Link>
								<span className="text-muted-foreground">
									{" "}
									{formatDate(new Date(post.publishedAt), "MMMM dd, yyyy")}{" "}
								</span>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default RecentPosts;
