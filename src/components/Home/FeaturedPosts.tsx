import { sortPosts } from "@/lib/utils";
import React from "react";
import Tag from "../tag";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const FeaturedPosts = ({ blogs }: any) => {
	const sortedBlogs = sortPosts(blogs);
	const post2 = sortedBlogs[1];
	const post3 = sortedBlogs[2];
	const post4 = sortedBlogs[3];
	return (
		<section className="w-full mt-12 flex flex-col items-center justify-center">
			<h2 className="w-full inline-block font-bold capitalize text-2xl sm:text-4xl">
				Featured Posts
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 mt-6 sm:mt-12">
				<article className="group col-span-1 row-span-2 relative ">
					<div className="inline-block overflow-hidden rounded-3xl relative">
						<Link href={`/blog/${post2.slug}`} className="w-full h-full">
							<Image
								src={post2.image?.src}
								alt={post2.title}
								placeholder="blur"
								blurDataURL={post2.image?.blurDataURL}
								width={post2.image.width}
								height={post2.image.height}
								className="group-hover:scale-105 transition-all aspect-[4/3] sm:aspect-auto duration-200  object-cover rounded-xl"
							/>
							<div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent from-0% to-gray-900/70 rounded-3xl " />
						</Link>
						<div className="absolute bottom-0 w-full z-20 p-6 sm:p-10">
							<Tag
								link={`/categories/${post2.tags}`}
								className="px-6 py-2 text-sm !border"
								name={post2.tags}
							/>
							<Link href={`/blog/${post2.slug}`}>
								<h1 className="capitalize text-lg sm:text-2xl font-bold font-montserrat bg-gradient-to-r from-gray-200 to-gray-100 text-transparent bg-clip-text mt-4">
									<span className="bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px]">
										{post2.title}
									</span>
								</h1>
							</Link>
						</div>
					</div>
				</article>

				<article className="group col-span-1 row-span-1 grid grid-cols-12 gap-4 relative">
					<Link
						href={`/blog/${post3.slug}`}
						className="col-span-4 h-full rounded-xl overflow-hidden">
						<Image
							src={post3.image?.src}
							alt={post3.title}
							placeholder="blur"
							blurDataURL={post3.image?.blurDataURL}
							width={post3.image.width}
							height={post3.image.height}
							className="group-hover:scale-105 transition-all duration-200  aspect-square h-full w-full object-cover object-center"
						/>
					</Link>
					<div className="col-span-8 flex flex-col justify-center gap-2">
						<span className="text-sm uppercase text-purple-700">
							{post3.tags}
						</span>
						<Link href={`/blog/${post3.slug}`}>
							<h1 className="capitalize text-lg font-bold font-montserrat text-gray-800">
								<span className="bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_3px]">
									{post3.title}
								</span>
							</h1>
						</Link>
						<span className="text-muted-foreground">
							{" "}
							{format(new Date(post3.publishedAt), "MMMM dd, yyyy")}{" "}
						</span>
					</div>
				</article>
				<article className="group col-span-1 row-span-1 grid grid-cols-12 gap-4 relative">
					<Link
						href={`/blog/${post4.slug}`}
						className="col-span-4 h-full rounded-xl overflow-hidden">
						<Image
							src={post4.image?.src}
							alt={post4.title}
							placeholder="blur"
							blurDataURL={post4.image?.blurDataURL}
							width={post4.image.width}
							height={post4.image.height}
							className="group-hover:scale-105 transition-all duration-200 aspect-square h-full w-full object-cover object-center"
						/>
					</Link>
					<div className="col-span-8 flex flex-col justify-center gap-2">
						<span className="text-sm uppercase text-purple-700">
							{post4.tags[0]}
						</span>
						<Link href={`/blog/${post3.slug}`}>
							<h1 className="capitalize text-lg font-bold font-montserrat text-gray-800">
								<span className="bg-gradient-to-r from-purple-900 to-purple-600 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_3px]">
									{post4.title}
								</span>
							</h1>
						</Link>
						<span className="text-muted-foreground">
							{" "}
							{format(new Date(post4.publishedAt), "MMMM dd, yyyy")}{" "}
						</span>
					</div>
				</article>
			</div>
		</section>
	);
};

export default FeaturedPosts;
