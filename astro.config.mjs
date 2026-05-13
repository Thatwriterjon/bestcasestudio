import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bestcasestud.io',
  trailingSlash: 'always',
  integrations: [
    // `lastmod` defaults to the build time, which gives every URL a real <lastmod> stamp —
    // the single biggest crawl-prioritization signal Google honours. When per-page accuracy
    // matters (case studies), override at the page level via the integration's serialize hook.
    sitemap({ lastmod: new Date() }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  // Redirects are handled by public/_redirects (Cloudflare Pages format) rather than Astro's
  // built-in redirects: config, which emits a meta-refresh HTML page in static mode. The
  // _redirects file gives a real 301 at the edge.
});
