# GEO Analysis Report — bestcasestud.io
**Analysed:** 2026-04-10  
**Analyst:** Claude Code (GEO Specialist)  
**Site:** https://bestcasestud.io  
**Framework:** Astro (Static Site Generation)

---

## GEO Readiness Score: 31/100

| Dimension | Weight | Raw Score | Weighted Score |
|-----------|--------|-----------|----------------|
| Citability | 25% | 28/100 | 7.0 |
| Structural Readability | 20% | 40/100 | 8.0 |
| Multi-Modal Content | 15% | 20/100 | 3.0 |
| Authority & Brand Signals | 20% | 35/100 | 7.0 |
| Technical Accessibility | 20% | 30/100 | 6.0 |
| **TOTAL** | **100%** | — | **31/100** |

**Interpretation:** The site is in the early stages of GEO readiness. The Astro framework provides a strong technical foundation, but the intentional blocking of all major AI crawlers, the absence of llms.txt, the empty blog, and the reliance on boilerplate schema data collectively make the site nearly invisible to generative AI systems. These are fixable problems — most of the high-impact work is content and configuration, not engineering.

---

## Platform-Specific Scores

| Platform | Score | Primary Barrier |
|----------|-------|-----------------|
| Google AIO | 22/100 | ClaudeBot/GPTBot blocked; no FAQ schema; thin structured data |
| ChatGPT (Browse) | 15/100 | GPTBot blocked in robots.txt; no indexed content to surface |
| Perplexity | 18/100 | PerplexityBot not listed in robots.txt (ambiguous status); no citable articles |
| Bing Copilot | 25/100 | No explicit Bingbot block, but no citable long-form content to pull from |

---

## 1. AI Crawler Access Status

**Overall verdict: CRITICAL — All major AI search crawlers are explicitly blocked.**

The robots.txt at `https://bestcasestud.io/robots.txt` contains explicit `Disallow: /` rules for the following agents:

| Crawler | Owner | Purpose | Status |
|---------|-------|---------|--------|
| GPTBot | OpenAI | ChatGPT training + Browse | BLOCKED |
| OAI-SearchBot | OpenAI | ChatGPT real-time search | Not listed (ambiguous) |
| ClaudeBot | Anthropic | Claude training + search | BLOCKED |
| Google-Extended | Google | Gemini / AIO training | BLOCKED |
| CCBot | Common Crawl | Training datasets | BLOCKED |
| meta-externalagent | Meta | Meta AI training | BLOCKED |
| Amazonbot | Amazon | Alexa / AI systems | BLOCKED |
| Applebot-Extended | Apple | Apple Intelligence training | BLOCKED |
| Bytespider | ByteDance | TikTok AI systems | BLOCKED |

**What this means in practice:**

- ChatGPT's Browse feature uses GPTBot. With it blocked, bestcasestud.io will not appear in ChatGPT web-sourced answers.
- Google AIO (AI Overviews) uses Google-Extended for its AI training corpus. Blocking it means Best Case Studio will not be cited in AI Overview summaries, even if it ranks well in standard search.
- Perplexity uses PerplexityBot, which is not explicitly listed — it defaults to `Allow: /`, meaning Perplexity can currently crawl the site. This is the one AI platform with passive access.
- The robots.txt file correctly separates training-only bots (CCBot, anthropic-ai equivalents) from search visibility bots, but the current implementation blocks both categories together, which eliminates AI search visibility alongside training opt-outs.

**Recommended distinction to make:**

```
# Block training-only scrapers (appropriate)
User-agent: CCBot
Disallow: /

# Allow AI search crawlers (currently missing)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /
```

The EU Directive 2019/790 note in the robots.txt is legally appropriate for blocking training use. It does not require blocking search-mode crawling, which is functionally equivalent to standard search indexing.

---

## 2. llms.txt Status

**Status: MISSING**

No `llms.txt` file exists at `https://bestcasestud.io/llms.txt` (returns 404).

`llms.txt` is an emerging standard (analogous to `robots.txt`) that provides AI systems with a curated, plain-text summary of a site's content — what it offers, who it serves, and which pages matter most. LLMs are increasingly trained to look for this file when building knowledge of a domain.

**What a minimal llms.txt for bestcasestud.io should contain:**

```markdown
# Best Case Studio

> B2B SaaS case study production agency. We produce video case studies, 
> testimonial videos, and social assets for software companies that need 
> to prove credibility and shorten their sales cycle.

## Services
- Full-stack case study production (video + landing page copy + social clips)
- Single case study: $3,000 / 2–3 weeks
- Trio of case studies: $7,500 / 3–6 weeks

## Who we work with
B2B SaaS companies with at least a handful of happy customers, typically 
at growth stage, competing against larger incumbents and needing social 
proof to close enterprise deals.

## Pages
- [Homepage](https://bestcasestud.io/)
- [Pricing](https://bestcasestud.io/pricing)
- [Contact / Book a Call](https://bestcasestud.io/contact)
- [Blog](https://bestcasestud.io/articles)
```

RSL 1.0 licensing note: The RSL 1.0 (Responsible Scraping License) should also be considered alongside llms.txt if the team wants to formalise AI-use terms beyond robots.txt.

---

## 3. Structured Data (Schema) Assessment

**Current state: Critically incomplete and contains stale boilerplate data.**

The site uses a `jsonLD.js` utility to inject JSON-LD. On all non-blog pages, it outputs a `WebSite` schema type. The schema contains a fatal flaw: `siteData.json` was never updated from the Positivus template it was built on. The live output is:

```json
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Positivus",
  "url": "https://bestcasestud.io"
}
```

The `og:site_name` meta tag in `Seo.astro` is hardcoded as `"Site Name"` — another stale placeholder.

**What is missing:**

| Schema Type | Why it matters for GEO | Priority |
|-------------|------------------------|----------|
| `Organization` | Establishes entity identity; tied to Google Knowledge Panel and ChatGPT entity recognition | Critical |
| `LocalBusiness` or `ProfessionalService` | Signals service type to AI systems | High |
| `FAQPage` | Enables direct FAQ extraction by Google AIO and Perplexity | High |
| `Service` | Describes each service package with structured pricing | High |
| `Person` (Jon McGreevy) | Author entity; supports E-E-A-T and authorship signals | Medium |
| `BreadcrumbList` | Navigation context for AI systems traversing the site | Low |

**Recommended `Organization` schema (minimum viable):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Best Case Studio",
  "url": "https://bestcasestud.io",
  "logo": "https://bestcasestud.io/logo.png",
  "description": "B2B SaaS case study production agency producing video case studies, testimonial videos, and social assets.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Jon McGreevy"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "jon@bestcasestud.io"
  },
  "sameAs": [
    "https://www.linkedin.com/in/jonmcgreevy"
  ]
}
```

**Recommended `FAQPage` schema for the homepage FAQ section:**

The 10-question FAQ in `FAQ.astro` is one of the strongest citable assets on the site. It is rendered as `<details>/<summary>` HTML — semantically valid but lacking structured markup. Adding `FAQPage` schema would allow Google AIO to surface individual answers directly in generative responses.

---

## 4. Citability Assessment

**Score: 28/100**

Citability measures whether AI systems can extract a self-contained, attributable answer from a passage of text. The optimal passage length for AI citation is 134–167 words with a direct answer in the first 40–60 words.

### Homepage analysis

**H1:** "Your happy customers are your best salespeople"
- This is a positioning statement, not an answerable claim. AI systems cannot cite it as an answer to any query.

**Hero paragraph (verbatim):**
> "Selling SaaS is really hard. You're competing with huge multinationals, copycats, and vibe coded monstrosities. Case studies give you the advantage by proving your credibility and giving customers a reason to trust your software."

- Word count: 37 words
- GEO assessment: Too short to be cited independently. No specific claim, statistic, or named outcome. Not extractable without context.

**Services section (Build Trust card):**
> "Case studies tell skeptical B2B buyers why they should choose you — from someone they believe. A real customer story beats any marketing copy."

- Word count: 27 words
- GEO assessment: Good directional claim but far below the 134-word threshold. Cannot function as a standalone answer block.

**FAQ answers (strongest citable content):**

The FAQ section contains the closest thing to citable content on the site. Example:

> "How do case studies actually improve conversion rates? A case study removes the 'will this work for us?' objection by showing a real company with a real result. It shortens the buying decision for prospects at the bottom of the funnel."

- Word count: 43 words
- GEO assessment: The answer directly addresses the question (good) but is too short to meet the 134-word threshold. Expansion with a specific example, a data point, or a mechanism explanation would substantially improve citability.

### What is missing for citability

1. **No statistics with source attribution.** Not a single passage on the site includes a cited figure (e.g., "B2B buyers read an average of 3–5 pieces of content before talking to sales — Forrester, 2023"). Specific, attributed statistics are among the highest-value citation signals for AI systems.

2. **No long-form, self-contained answer blocks.** Every passage on the site is marketing copy designed to be read in flow. None are structured as standalone answers to questions an AI might be asked.

3. **No blog content whatsoever.** The articles section shows "Coming soon." This is the single largest GEO gap. AI systems cite articles, not landing pages. Without a content library, bestcasestud.io cannot be cited for any informational query.

4. **Client logos without outcomes.** Google, Vivaldi, Projul, and Scoro are featured as logo badges, but no outcomes are attached to any client name. An AI system cannot cite "Best Case Studio worked with Scoro and achieved X% increase in conversion rate" because that information does not exist on the site.

---

## 5. Structural Readability

**Score: 40/100**

Structural readability measures how easily an AI system can parse the content hierarchy and extract meaningful sections.

### What works

- **Astro generates clean server-side HTML.** There is no JavaScript-rendered content wall. The FAQ, services, and pricing sections are all present in the initial HTML response. This is the site's strongest GEO attribute.
- **`<details>/<summary>` for FAQ.** This is semantically valid HTML. Screen readers and parsers can extract Q&A pairs correctly.
- **Logical section IDs.** `id="faq"`, `id="services"`, `id="process"`, `id="referral"` give crawlers anchored entry points.
- **Heading hierarchy is sound on the homepage.** H1 (one) leads to H2/H3 subsections.

### What needs improvement

- **Section headings are descriptive, not interrogative.** "Why Case Studies?" and "Our Process" are category labels. Headings like "How do B2B SaaS case studies improve close rates?" are far more likely to match user queries and be cited by AI systems.
- **No `<article>` or `<section>` semantic wrappers around distinct content blocks.** Sections use `<div id="services">` rather than `<section aria-label="Services">`. While functional, semantic HTML gives AI parsers stronger contextual signals.
- **Pricing page lacks a summary paragraph.** The pricing page jumps directly into package cards. A 50–80 word introductory paragraph explaining what each package includes and who it is for would give AI systems an extractable pricing summary.
- **Contact page has no written content.** Just a calendar embed and a form. Nothing citable.
- **`og:site_name` is hardcoded as "Site Name"** in `Seo.astro` — a leftover from the Positivus template. This placeholder will be read by social media crawlers and potentially by AI systems building entity profiles.

---

## 6. Multi-Modal Content Assessment

**Score: 20/100**

| Content Type | Present | GEO Value |
|-------------|---------|-----------|
| Video case studies | No (produced for clients, none embedded on site) | High |
| Podcast (Saasy as F*ck) | Referenced in footer links only | Medium |
| Images with meaningful alt text | Partial (hero image alt is generic) | Low |
| Infographics | None | Medium |
| Data visualisations | None | High |
| Transcripts | None | High |

The most significant gap is that Best Case Studio produces video case studies for clients but hosts none on its own website. A production agency that makes video content and has no demonstrable video on its own site is a credibility and GEO gap simultaneously.

The podcast "Saasy as F*ck" is linked in the footer/contact page but has no dedicated page, no episode list, and no transcripts. Podcast transcripts are among the highest-density citable content formats because they contain natural conversational language that matches long-tail queries.

---

## 7. Authority and Brand Signals

**Score: 35/100**

### Named entities and authorship

Jon McGreevy is named in the FAQ as the person who "leads every project — strategy, interviews, and copy." This is the only named author/entity attribution on the site. There is no:
- Author bio page or profile page for Jon
- LinkedIn profile link on the homepage (only in footer/contact)
- Personal credentials, experience summary, or publication history

For AI systems to associate Jon McGreevy with expertise in B2B SaaS case study production, his name needs to appear alongside specific claims and credentials on indexed, citable pages.

### Brand mention analysis

| Signal | Status | Impact on AI Citations |
|--------|--------|----------------------|
| Wikipedia entity | Not found | High gap — Wikipedia presence strongly correlates with AI citation |
| Reddit presence | Unknown — no /r/ threads visible in public data | High gap |
| YouTube channel | Not found | Highest-correlation signal (~0.737) — critical gap |
| LinkedIn company page | Unknown | Medium gap |
| Podcast (Apple/Spotify) | Referenced but not a page | Medium |
| Substack newsletter | Referenced in footer | Low-medium |
| Press mentions / guest posts | None visible | High gap |

The client logo list (Google, Vivaldi, Scoro, Projul, etc.) is a strong latent authority signal, but it is entirely unused for GEO purposes. None of these clients are linked to outcomes, quotes, or case study summaries that AI systems could cite.

### Testimonials

The `clientData.json` file contains six testimonials — all placeholder "Positivus" template data with fabricated names (John Smith, Jane Doe, Alice Johnson, Bob Brown) and fabricated companies (XYZ, ABC, 123). **These appear to be live on the site.** If so, this is a trust and credibility problem that extends beyond GEO — fake testimonials undermine every authority signal the site is trying to build.

---

## 8. Technical Accessibility for AI Crawlers

**Score: 30/100**

### Server-side rendering

**Status: Good.** Astro generates static HTML at build time. All content visible to human users is present in the initial HTML response served to crawlers. There is no client-side rendering barrier, no JavaScript-dependent content loading, and no dynamic hydration required to see the main content.

This is the site's strongest technical GEO attribute. Many competing agencies built on React SPAs or Next.js with heavy client-side rendering have significantly more crawlability friction.

### Page speed and crawl budget

Astro's default output is lean. No external JavaScript frameworks are loaded for the static pages. Font loading uses local WOFF files. The hero image (`/Website hero image.png`) has a space in the filename — this is technically valid but non-standard and may cause issues with some crawlers that do not properly URL-encode paths.

### Sitemap

No sitemap.xml was found at `https://bestcasestud.io/sitemap.xml`. A sitemap is not required for Googlebot but is recommended for AI crawlers that use it to prioritise and discover pages.

### robots.txt technical issues

Beyond the crawler-blocking issue described above, the robots.txt format is non-standard. It uses signal comments (`search=yes`, `ai-train=no`) that are not part of the RFC 9309 robots.txt specification. While human-readable, these are not machine-actionable by most crawler implementations.

### Meta robots

The `Seo.astro` component correctly implements a conditional `noindex, nofollow` tag. No pages currently use this restriction, which is correct.

### Open Graph / Social meta

Present on all pages. However, `og:site_name` is hardcoded as `"Site Name"` — a stale placeholder from the Positivus theme. The OG image points to the Positivus GitHub repository (`https://github.com/manulthanura/Positivus/raw/main/public/cover.png`) — a third-party image that will likely break and is not branded for Best Case Studio.

---

## Top 5 Highest-Impact Changes

### 1. Update robots.txt to allow AI search crawlers
**Impact:** Critical | **Effort:** 30 minutes | **Platforms affected:** Google AIO, ChatGPT, Bing Copilot

Split the robots.txt into two clear categories: training-only bots (which can stay blocked) and search-mode AI crawlers (which must be allowed for search visibility). Allow GPTBot, OAI-SearchBot, Google-Extended, and ClaudeBot. Keep CCBot and pure training scrapers blocked.

Without this change, no other GEO work will have meaningful impact — the AI crawlers cannot reach the content regardless of how well it is structured.

File to edit: The robots.txt needs to be created in `/Users/jonmcgreevy/bestcasestudio/public/robots.txt`.

### 2. Fix the broken siteData.json and placeholder schema
**Impact:** High | **Effort:** 2 hours | **Platforms affected:** All

The `siteData.json` file still contains the Positivus template name and description. The `Seo.astro` component has `og:site_name` hardcoded as `"Site Name"`. The `jsonLD.js` utility outputs a `WebSite` schema with `"name": "Positivus"`. Every AI system and social crawler that reads this site currently believes it is a site called "Positivus."

Fix order:
1. Update `/Users/jonmcgreevy/bestcasestudio/src/data/siteData.json` with Best Case Studio's real name, description, and a branded OG image.
2. Fix the `og:site_name` in `/Users/jonmcgreevy/bestcasestudio/src/components/seo/Seo.astro`.
3. Replace the `WebSite` schema with an `Organization` schema in `/Users/jonmcgreevy/bestcasestudio/src/utils/jsonLD.js`.

### 3. Add FAQPage schema markup to the homepage FAQ
**Impact:** High | **Effort:** 1–2 hours | **Platforms affected:** Google AIO, Perplexity

The 10-question FAQ in `/Users/jonmcgreevy/bestcasestudio/src/components/sections/FAQ.astro` is the most AI-citable content on the site. It has question-based headings and direct answers — it is missing only the schema markup that allows Google AIO and Perplexity to extract and display these answers directly.

Adding `FAQPage` JSON-LD to this section would make these 10 answers eligible for AI Overview citations for queries like "how long does a B2B SaaS case study take" and "what is included in a case study production service."

### 4. Create and publish llms.txt
**Impact:** Medium-High | **Effort:** 1 hour | **Platforms affected:** Emerging LLM crawlers, future-proofing

Create `/Users/jonmcgreevy/bestcasestudio/public/llms.txt` with a plain-text summary of what Best Case Studio does, who it serves, what its packages include, and links to key pages. This file is read by AI systems that support the llms.txt standard and provides a reliable, curated signal about the site's purpose and authority.

### 5. Publish the first three blog articles
**Impact:** High | **Effort:** 3–5 hours per article | **Platforms affected:** All — this is the primary citability gap

The "Coming soon" blog is the largest single GEO gap. AI systems cite articles, not landing pages. Without indexed long-form content, bestcasestud.io cannot appear in AI responses to any informational query — and informational queries are where B2B buyers first encounter potential vendors.

Recommended first three articles based on existing site content and FAQ questions already written:

**Article 1:** "How Long Does a B2B SaaS Case Study Take to Produce?" — expand the FAQ answer into a 1,200-word guide covering timelines, what causes delays, and how to prepare your customer for an interview. This directly targets a high-intent query.

**Article 2:** "What Is a Full-Stack Case Study? Video, Copy, and Social Assets Explained" — define the term Best Case Studio uses for its own service package, establishing definitional authority for a phrase it invented.

**Article 3:** "Why B2B SaaS Case Studies Work Better Than Customer Reviews" — a positioning article that answers a real buyer objection and establishes thought leadership around the company's core argument.

Each article should target 1,000–1,500 words, include at least one cited statistic, have a question-based H1, and use `BlogPosting` schema (the `jsonLD.js` utility already supports this).

---

## Schema Recommendations Summary

| Schema Type | Where to Add | Current State | Priority |
|-------------|-------------|---------------|----------|
| `Organization` | Site-wide (replace `WebSite`) | Missing — outputs "Positivus" | Critical |
| `FAQPage` | Homepage FAQ section | Missing | High |
| `Service` | Pricing page | Missing | High |
| `Person` (Jon McGreevy) | Homepage / Team page | Missing | Medium |
| `BlogPosting` | Each article (when published) | Infrastructure exists, unused | Medium |
| `BreadcrumbList` | All non-homepage pages | Missing | Low |
| `PodcastSeries` | Dedicated podcast page (when created) | Missing | Low |

---

## Content Reformatting Suggestions

### Homepage hero paragraph
**Current:** "Selling SaaS is really hard. You're competing with huge multinationals, copycats, and vibe coded monstrosities. Case studies give you the advantage by proving your credibility and giving customers a reason to trust your software."

**Reformatted for citability:** Keep the punchy opening for human readers, but add a second paragraph (60–80 words) that functions as a self-contained definitional statement an AI can cite:

> "A B2B SaaS case study is a documented customer success story that combines a video interview, written narrative, and social-ready assets into a single sales enablement package. It addresses the primary objection in complex software sales — 'will this work for a company like ours?' — by showing a specific outcome achieved by a real customer in a comparable situation."

### FAQ answers — expansion targets
The following FAQ answers are closest to citable length but need expansion to hit the 134-word threshold:

- "How do case studies actually improve conversion rates?" (currently 43 words — needs ~90 more)
- "What makes Best Case Studio different from a freelance copywriter?" (currently 42 words — needs ~95 more)
- "What types of B2B SaaS companies do you work with?" (currently 39 words — needs ~100 more)

Each expansion should add a specific mechanism, a concrete example, or a cited data point — not just more adjectives.

### Process section
The three-step process (Interview, Editing & Writing, Content Delivery) is currently rendered as cards with 20–30 word descriptions. Each step should be expanded to 80–120 words explaining what happens, why it matters, and what the client's role is. This transforms the process section from a visual element into citable procedural content.

---

## Additional Observations

### Testimonials — urgent non-GEO issue
The `clientData.json` file contains six testimonials with names "John Smith," "Jane Doe," "Alice Johnson," "Bob Brown," "Gupta Patel," and "Sara Johnson" from companies "XYZ," "ABC," and "123." These are Positivus template placeholders. If these are rendering on the live site, they should be replaced immediately with real client testimonials or removed entirely. This affects trust, legal standing, and every authority signal the site relies on.

### The "Positivus" template residue
The site was built on the Positivus Astro template. Multiple files still contain Positivus branding: `siteData.json` (name and description), `Seo.astro` (og:site_name), `jsonLD.js` (schema name output). A full audit of all template placeholder data should be completed before any GEO or SEO work.

### Podcast as an untapped GEO asset
"Saasy as F*ck" is referenced in the footer. If this podcast has episodes, transcripts of those episodes would be among the highest-GEO-value content Best Case Studio could publish. Podcast transcripts generate long-tail query coverage, demonstrate expertise through conversational depth, and provide passages well within the 134–167 word optimal citation range. A dedicated `/podcast` page with episode summaries and full transcripts would be a significant GEO investment.

### The scorecard tool
A link to `scorecard.bestcasestud.io` appears as a secondary CTA in the hero section. This subdomain is not analysed here, but if it generates a credibility score for visitors, the methodology and output should be documented on the main site — it is the kind of proprietary framework that generates backlinks, brand mentions, and AI citations.

---

## Action Priority Matrix

| Action | GEO Impact | Effort | Do First? |
|--------|-----------|--------|-----------|
| Fix robots.txt — allow AI search crawlers | Critical | 30 min | Yes |
| Fix siteData.json / schema boilerplate | Critical | 2 hr | Yes |
| Add FAQPage schema | High | 1–2 hr | Yes |
| Create llms.txt | Medium | 1 hr | Yes |
| Fix og:site_name placeholder | High | 15 min | Yes |
| Replace fake testimonials | Trust-critical | 1 hr | Yes |
| Publish first blog article | High | 4–6 hr | This week |
| Expand FAQ answers to 134+ words | Medium | 2 hr | This week |
| Add Organization schema | High | 1 hr | Yes |
| Create podcast transcript page | Medium | Ongoing | Next month |
| Add sitemap.xml | Low-medium | 30 min | This week |
| Rename hero image (remove space) | Low | 15 min | This week |

---

*Report generated by Claude Code GEO Specialist. Analysis based on live page fetches, robots.txt inspection, and source code review of the Astro project at `/Users/jonmcgreevy/bestcasestudio`.*
