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
    type: z.enum(['Article', 'Tutorial', 'Framework', 'Analysis', 'Strategy']),
  }),
});

const seoContentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(['Framework', 'Analysis', 'Strategy']),
  }),
});

const learningCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    type: z.enum(['Hub', 'Pillar', 'Tactic']),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  'seo-content': seoContentCollection,
  'learning': learningCollection,
};