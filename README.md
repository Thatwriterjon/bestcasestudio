# bestcasestud.io

Astro 5 marketing site for Best Case Studio.

## Local dev

```
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally to spot-check the production build
```

## Deploy — Cloudflare Pages via GitHub

This is a static site, no adapter needed. In the Cloudflare Pages dashboard:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 20 (set `NODE_VERSION=20` env var)
- **Root directory:** `site` (if the repo root contains the design handoff folder alongside this directory)

`public/_redirects` ships to the build root and Cloudflare picks it up natively for the
`/pricing → /#pricing` 301.

## Project layout

```
src/
  components/
    sections/         # one .astro per home-page section
    Nav, Footer, Wordmark, Button, SectionHead
  content/
    faq/              # YAML files, schema in src/content.config.ts
    testimonials/
  data/
    logos.ts          # logo wall entries; flip LOGOS_FINAL once all SVGs land
  layouts/Base.astro  # site shell (head, nav, footer, skip link)
  pages/
    index.astro       # home — long-scroll, all sections in colour-rhythm order
    about.astro       # /about (uses the About section)
    contact.astro     # /contact (mailto + meta strip; Calendly TBD)
  styles/global.css   # design tokens, font @imports, base resets

public/
  _redirects          # Cloudflare 301s
  logos/              # 12 brand SVGs
  team/               # Drop jon.jpg + jessie.jpg here. See team/README.md
  testimonials/       # Drop {firstname-lastname}.jpg here. See testimonials/README.md
  favicon.svg         # placeholder, swap when real favicon is ready
```

## Editing content

- **FAQ:** add/edit YAML in `src/content/faq/`. Numeric `order:` controls display order.
- **Testimonials:** same pattern in `src/content/testimonials/`. Drop a `.jpg` in
  `public/testimonials/` and add `avatar: /testimonials/file.jpg` to the YAML to use a real photo
  instead of the initials fallback.
- **Logo wall:** edit `src/data/logos.ts`. Order in the array = order on the page.

## Pre-launch checklist

- [ ] Real Jon + Jessie portraits in `public/team/` (see README there)
- [ ] Real testimonial avatars in `public/testimonials/` (see README there)
- [ ] Calendly URL plugged into `/contact`
- [ ] Real favicon set in `public/`
- [ ] OG image at `public/og.png` (1200×630), wired into `src/layouts/Base.astro`
