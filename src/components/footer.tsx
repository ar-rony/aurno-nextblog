"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear());
	useEffect(() => {
		// Update the year when the component mounts
		setYear(new Date().getFullYear());
	}, []);
	return (
		<footer className="bg-gray-900 px-[15px] sm:px-0 *:text-slate-50 mt-12 ">
			<div className="container">
				<div className="w-full sm:w-4/6 mx-auto text-center py-10 sm:py-20 flex items-center flex-col gap-5 ">
					<h3 className="text-xl sm:text-4xl font-bold">
						Interesting Stories | Updates | Guides
					</h3>
					<p>
						Subscribe to learn about new technology and updates. Join over 5000+
						members community to stay up to date with latest news.
					</p>
					<form className="bg-white p-2 flex gap-2 items-center rounded-md sm:w-1/2">
						<input
							className="bg-transparent text-lg outline-none flex-1 border-b  text-slate-800"
							type="email"
							placeholder="Enter your email"
						/>
						<button className="bg-slate-800 px-3 py-1 rounded-md">
							Submit
						</button>
					</form>
					{/* <Social /> */}
				</div>
				<div className="border-t border-t-light py-6 *:text-light flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="">&copy; {year} AurnoBlog. All Right Reserved.</div>
					<div className="">
						<Link href="/">sitemap.xml</Link>
					</div>
					<div className="">
						Made with Love by <Link href="#">AR Rony</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
