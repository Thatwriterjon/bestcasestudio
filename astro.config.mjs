import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// Tags the "Best Case Studio" column in any Markdown comparison table so it can be highlighted,
// and wraps such tables in a horizontally-scrollable container for mobile. Scopes itself: only
// tables that actually contain a "Best Case Studio" header cell are touched.
function rehypeComparisonTables() {
  const getText = (n) =>
    n.type === 'text' ? n.value : (n.children || []).map(getText).join('');
  const addClass = (n, cls) => {
    n.properties = n.properties || {};
    const e = n.properties.className;
    n.properties.className = Array.isArray(e) ? [...e, cls] : e ? [e, cls] : [cls];
  };
  const findAll = (n, tag, out = []) => {
    if (n.type === 'element' && n.tagName === tag) out.push(n);
    (n.children || []).forEach((c) => findAll(c, tag, out));
    return out;
  };
  const markTable = (table) => {
    const rows = findAll(table, 'tr');
    if (!rows.length) return false;
    const headCells = (rows[0].children || []).filter((c) => c.type === 'element');
    const usIndex = headCells.findIndex((c) => /best case studio/i.test(getText(c)));
    if (usIndex === -1) return false;
    addClass(table, 'comparison-table');
    for (const row of rows) {
      const cells = (row.children || []).filter((c) => c.type === 'element');
      if (cells[usIndex]) addClass(cells[usIndex], 'col-us');
    }
    return true;
  };
  const walk = (node) => {
    if (!node.children) return;
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child.type === 'element' && child.tagName === 'table') {
        if (markTable(child)) {
          node.children[i] = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['comparison-scroll'] },
            children: [child],
          };
        }
      } else {
        walk(child);
      }
    }
  };
  return (tree) => walk(tree);
}

// Stable per-URL <lastmod>. A fixed date per page (instead of new Date()) keeps the signal
// honest: unchanged pages keep the same lastmod across rebuilds, so Google doesn't learn to
// discount it. Bump a page's date here when its content materially changes.
// NOTE: '/examples/' is the featured example (lowest `order` in src/data/examples.ts); keep
// its date in sync with that example.
const lastmodByPath = {
  '/': '2026-07-19',
  '/pricing/': '2026-07-01',
  '/contact/': '2026-07-01',
  '/privacy/': '2026-07-01',
  '/examples/': '2026-06-22',
  '/examples/saasydb-leadforce-solutions/': '2026-06-02',
  '/examples/extrovert-commit-linkedin-growth/': '2026-06-22',
  '/blog/': '2026-07-02',
  '/blog/how-much-does-a-b2b-case-study-cost/': '2026-07-19',
  '/blog/best-case-study-writing-services/': '2026-07-19',
  '/compare/': '2026-07-19',
  '/compare/best-case-studio-vs-testimonial-hero/': '2026-07-19',
  '/compare/best-case-studio-vs-uplift-content/': '2026-07-19',
  '/compare/best-case-studio-vs-successkit/': '2026-07-19',
  '/compare/best-case-studio-vs-storyvoice/': '2026-07-19',
  '/compare/best-case-studio-vs-content-agencies/': '2026-07-19',
  '/compare/best-case-studio-vs-freelancers-and-chatgpt/': '2026-07-19',
};

// <video:video> sitemap entries for the example pages that embed a real customer-story YouTube
// video. Mirrors the `video` field on the matching entry in src/data/examples.ts — add here
// when a new example ships with video.
const videoByPath = {
  '/examples/saasydb-leadforce-solutions/': {
    id: 'EKD2cHGL5Us',
    title: "How LeadForce Solutions found SaaS leads that don't exist in other databases with SaasyDB",
    description:
      'How SaasyDB gave LeadForce Solutions SaaS leads that appear in no other database, feeding a 3% cold-email reply rate.',
    tag: ['B2B case study', 'SaaS lead generation'],
  },
  '/examples/extrovert-commit-linkedin-growth/': {
    id: 'Wrt-DYzDfkY',
    title: 'How Mila added 4,000+ LinkedIn connections in 2.5 years with Extrovert',
    description:
      'How Extrovert turned LinkedIn into a warm inbound channel for COMMIT — 4,000+ new connections and 10-15 inbound requests a day.',
    tag: ['B2B case study', 'LinkedIn growth'],
  },
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

        const v = videoByPath[path];
        if (v) {
          item.video = [
            {
              thumbnail_loc: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
              title: v.title,
              description: v.description,
              player_loc: `https://www.youtube.com/embed/${v.id}`,
              tag: v.tag,
            },
          ];
        }
        return item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }],
      rehypeComparisonTables,
    ],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  // Redirects are handled by public/_redirects (Cloudflare Pages format) rather than Astro's
  // built-in redirects: config, which emits a meta-refresh HTML page in static mode. The
  // _redirects file gives a real 301 at the edge.
});
