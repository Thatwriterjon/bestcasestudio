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
  '/': '2026-07-01',
  '/pricing/': '2026-07-01',
  '/contact/': '2026-07-01',
  '/privacy/': '2026-07-01',
  '/examples/': '2026-06-22',
  '/examples/saasydb-leadforce-solutions/': '2026-06-02',
  '/examples/measurable-energy-st-peters-school/': '2026-05-27',
  '/examples/taxvalet-stealth-fitness/': '2026-05-26',
  '/blog/': '2026-07-02',
  '/blog/how-much-does-a-b2b-case-study-cost/': '2026-07-01',
  '/blog/best-case-study-writing-services/': '2026-07-02',
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
