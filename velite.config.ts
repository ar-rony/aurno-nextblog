import { defineConfig, defineCollection, s} from 'velite';

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
})

const posts = defineCollection({
    name: 'Post', // collection type name
    pattern: '**/*.mdx', // content files glob pattern
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(9999).optional(),
        tags:s.array(s.string()).optional(),
        image: s.image(),
        publishedAt: s.isodate(),
        updatedAt: s.isodate(),
        isPublished: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
});

export default defineConfig({
    root: "posts",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: { posts },
    mdx: {}
})