import { posts } from "#site/content";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPosts";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      <HomeCoverSection blogs={posts}/>
      <FeaturedPosts blogs={posts}/>
      <RecentPosts blogs={posts}/>
    </section>
  );
}
