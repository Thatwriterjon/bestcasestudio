import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bestcasestud.io',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  // Redirects are handled by public/_redirects (Cloudflare Pages format) rather than Astro's
  // built-in redirects: config, which emits a meta-refresh HTML page in static mode. The
  // _redirects file gives a real 301 at the edge.
});
