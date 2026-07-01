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
    /** Optional FAQ items rendered at the bottom and emitted as FAQPage JSON-LD. */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
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
