import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Stable per-URL <lastmod>. A fixed date per page (instead of new Date()) keeps the signal
// honest: unchanged pages keep the same lastmod across rebuilds, so Google doesn't learn to
// discount it. Bump a page's date here when its content materially changes.
// NOTE: '/examples/' is the featured example (lowest `order` in src/data/examples.ts); keep
// its date in sync with that example.
const lastmodByPath = {
  '/': '2026-07-01',
  '/pricing/': '2026-07-01',
  '/contact/': '2026-07-01',
  '/privacy/': '2026-07-01',
  '/examples/': '2026-06-22',
  '/examples/saasydb-leadforce-solutions/': '2026-06-02',
  '/examples/measurable-energy-st-peters-school/': '2026-05-27',
  '/examples/taxvalet-stealth-fitness/': '2026-05-26',
};

export default defineConfig({
  site: 'https://bestcasestud.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastmodByPath[path];
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        else delete item.lastmod;
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  // Redirects are handled by public/_redirects (Cloudflare Pages format) rather than Astro's
  // built-in redirects: config, which emits a meta-refresh HTML page in static mode. The
  // _redirects file gives a real 301 at the edge.
});
