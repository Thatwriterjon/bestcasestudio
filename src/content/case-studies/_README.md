# How to add a case study

This collection backs `/case-studies/` and `/case-studies/[slug]/`. The loader pattern in
[content.config.ts](../../content.config.ts) excludes files starting with `_`, so this
README is not loaded as content.

1. Create a new `.md` file in this folder. The filename becomes the slug — e.g. `scoro.md`
   → `/case-studies/scoro/`.
2. Frontmatter required: `title`, `customer`, `summary`, `publishedAt`. See
   [content.config.ts](../../content.config.ts) for the full schema (`heroImage`,
   `videoUrl`, `tags`, `draft`, etc).
3. Write the body in standard Markdown. The first H1 in Markdown is suppressed; the page
   renders the frontmatter `title` as the H1.
4. Drop assets (hero image, customer logo) into `/public/case-studies/<slug>/` and
   reference them by absolute path (`heroImage: /case-studies/scoro/hero.jpg`).
5. Set `draft: true` while in progress. Drafts are excluded from the listing page and
   from the sitemap.

## Structure that works

- One-paragraph context: what does the customer do, who do they serve, how big are they.
- The before: what was happening before they adopted the product. Quantify where possible.
- The decision: why this product, what else they evaluated, what swung it.
- The after: what changed, in the customer's words. Quote them directly.
- A pull quote a salesperson could screenshot.
- Outcome line: a single sentence the AI engines can cite.
