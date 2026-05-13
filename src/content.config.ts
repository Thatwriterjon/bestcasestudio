import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

const caseStudies = defineCollection({
  // Pattern excludes files starting with `_` so `_README.md` and other internal notes
  // are skipped without needing a draft flag.
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    /** Customer / featured company name (e.g. "Scoro"). */
    customer: z.string(),
    /** Optional logo path under /public. */
    customerLogo: z.string().optional(),
    /** One-sentence summary used in cards and meta description. */
    summary: z.string(),
    /** SEO meta description override. Defaults to summary if absent. */
    description: z.string().optional(),
    /** Hero image path under /public, used for OG and on-page hero. */
    heroImage: z.string().optional(),
    /** Optional YouTube/Vimeo/Riverside embed URL for the headline video. */
    videoUrl: z.string().url().optional(),
    /** ISO date string. Used for sitemap lastmod and Article schema. */
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    /** Tags for filtering / cross-linking (vertical, use case, persona). */
    tags: z.array(z.string()).default([]),
    /** Set true to hide from listings/sitemap while drafting. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { testimonials, faq, caseStudies };
