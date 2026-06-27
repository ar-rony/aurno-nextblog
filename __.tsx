import React from "react";
import { posts } from "#site/content";
interface PostPageProps {
	params: {
		slug: string[];
	};
}

async function getPostsFromParams(params: PostPageProps["params"]) {
	const slug = params?.slug?.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);
	return post;
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const SinglePostPage = async ({ params }: PostPageProps) => {
	const post = await getPostsFromParams(params);
	if (!post || !post.isPublished) {
		return "Post Not Found";
	}
  console.log(post)
	return <div>{post?.slug}</div>;
};
export default SinglePostPage;
