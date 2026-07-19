import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Jon McGreevy'),
    /** Root-relative path to a post-specific social/Article image, e.g. "/blog/my-post.jpg".
     *  Falls back to the sitewide og.jpg when omitted. */
    image: z.string().optional(),
    /** Optional FAQ items rendered at the bottom and emitted as FAQPage JSON-LD. */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    /** Present on "X vs Y" comparison posts. Powers the versus hero and comparison styling. */
    comparison: z
      .object({
        competitor: z.string(),
        us: z.string(),
        them: z.string(),
        wedge: z.string(),
      })
      .optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    initials: z.string(),
    /** HTML-allowed string. Use <em> for italics. Do not include the opening curly quote — the
     * card adds it as a decorative pseudo-element. */
    quote: z.string(),
    avatar: z.string().optional(),
    order: z.number(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/faq' }),
  schema: z.object({
    /** HTML-allowed. Use <em> for italics. */
    question: z.string(),
    /** Array of paragraph strings. HTML-allowed. */
    answer: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { blog, testimonials, faq };
