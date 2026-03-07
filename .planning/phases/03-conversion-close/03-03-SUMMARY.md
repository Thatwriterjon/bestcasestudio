---
phase: 03-conversion-close
plan: "03"
subsystem: ui
tags: [calendly, footer, contact, social-links, astro]

requires: []
provides:
  - Contact.astro with Calendly inline embed for 30-min discovery call booking
  - Footer.astro with BCS brand identity — LinkedIn, Substack, Spotify, Apple Podcasts
affects: []

tech-stack:
  added: [calendly-embed]
  patterns: [inline-script-embed, text-social-links]

key-files:
  created: []
  modified:
    - src/components/sections/Contact.astro
    - src/components/ui/Footer.astro

key-decisions:
  - "Used Calendly inline widget (not popup) for frictionless booking in-page"
  - "Social links rendered as uppercase text labels, not SVG icons — cleaner and avoids missing asset errors"
  - "Spotify and Apple Podcasts URLs are placeholders — update when shows are live"
  - "Added is:inline to Calendly script tag for Astro SSR compatibility"

patterns-established:
  - "Inline third-party embeds use is:inline on script tag in Astro"
  - "Footer nav links point to in-page anchors only (no external pages)"

requirements-completed: [CONT-01, CONT-02]

duration: 10min
completed: 2026-03-07
---

# Phase 03-03: Contact CTA + Footer Rebrand Summary

**Calendly inline embed for no-pressure 30-min discovery call booking, BCS-branded footer with four social platform text links**

## Performance

- **Duration:** ~10 min
- **Completed:** 2026-03-07
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Contact.astro fully rewritten — Calendly inline widget embedded, heading frames call as no-pressure, fallback direct link included
- Footer.astro fully rewritten — LinkedIn, Substack, Spotify, Apple Podcasts as uppercase text links, BCS copyright, no template cruft

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite Contact.astro as discovery call CTA with Calendly embed** - `7a29502` (feat)
2. **Task 2: Rewrite Footer.astro with BCS social links and copyright** - `36fb2ee` (feat)

## Files Created/Modified
- `src/components/sections/Contact.astro` — Calendly inline embed, "Book Your Discovery Call" heading, fallback link
- `src/components/ui/Footer.astro` — BCS logo, nav links (Services/Pricing/Process/FAQ), four social text links, copyright

## Decisions Made
- Used `is:inline` on the Calendly script tag for Astro compatibility
- Social links use text labels (not SVG icons) — simpler, no missing asset risk
- Spotify and Apple Podcasts URLs are placeholder — Jon to update when shows are live

## Deviations from Plan
None — plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
- **Calendly URL** — currently set to `https://calendly.com/jon-bestcasestudio/30min`. Verify this matches Jon's actual Calendly account slug.
- **Spotify/Apple Podcasts URLs** — placeholders. Update `src/components/ui/Footer.astro` when shows are published.

## Next Phase Readiness
Phase 03 complete. All conversion touch-points are live: testimonials, referral bounty, FAQ, discovery call CTA, and branded footer.

---
*Phase: 03-conversion-close*
*Completed: 2026-03-07*
