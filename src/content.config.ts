import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(['Article', 'Tutorial']),
  }),
  // Astro v6 requires a loader for each collection
  // Example loader for markdown files
  // See: https://docs.astro.build/en/guides/upgrade-to/v6/#removed-legacy-content-collections
  // Adjust as needed for your project
});

export const collections = {
  blog: blogCollection,
};
