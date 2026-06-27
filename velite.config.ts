import { defineConfig, defineCollection, s } from 'velite';

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-/]+/g, '')
    .replace(/--+/g, '-')
    .replace(/(^-|-$)/g, '');

const computedFields = <T extends { slug: string }>(data: T) => {
  const slug = normalizeSlug(data.slug);
  const slugAsParams = slug.replace(/^\/+/, '');

  return {
    ...data,
    slug,
    slugAsParams,
  };
};

const posts = defineCollection({
    name: 'Post', // collection type name
    pattern: '**/*.mdx', // content files glob pattern
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(9999).optional(),
        tags: s.array(s.string()).optional(),
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