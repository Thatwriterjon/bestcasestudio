---
phase: 01-foundation
plan: 03
subsystem: ui
tags: [astro, tailwind, navbar, hero, copy, cta, branding, calendly]

# Dependency graph
requires:
  - phase: 01-foundation plan 02
    provides: "Pink (#ff7ae7) and yellow (#ffe56e) Tailwind colour classes ready for use"
provides:
  - "Navbar with Credibility Scorecard button (pink, new tab -> scorecard.bestcasestud.io)"
  - "Hero with locked headline, full subheading, and two working CTAs"
  - "Book Discovery Call CTA -> calendly.com/thatwriterjon/best-case-studio (same tab)"
  - "Credibility Scorecard hero CTA -> scorecard.bestcasestud.io (new tab)"
  - "Dead anchor links removed from nav (no Services, Pricing, Use Cases, Process)"
affects: [phase-02, phase-03]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "CTA pair pattern: pink primary (bg-pink) + yellow secondary (bg-yellow + border) for dual-CTA hero sections"
    - "Nav link discipline: only link to pages/sections that exist in current phase"

key-files:
  created: []
  modified:
    - src/components/ui/Navbar.astro
    - src/components/sections/Hero.astro

key-decisions:
  - "Nav stripped to About and Blog only — Services/Pricing/Use Cases/Process anchors removed (don't exist in Phase 1)"
  - "Hero CTA pair: Book Discovery Call (pink, same tab) + Credibility Scorecard (yellow with border, new tab)"
  - "Hero illustration preserved as-is — template SVG acceptable for Phase 1"

patterns-established:
  - "Dual CTA layout: flex-col on mobile, flex-row on sm+ with gap-4 spacing"
  - "External link pattern: target=_blank + rel=noopener noreferrer on all outbound links"

requirements-completed: [NAV-01, HERO-01, HERO-02, HERO-03]

# Metrics
duration: 8min
completed: 2026-03-07
---

# Phase 1 Plan 3: Nav and Hero Content Summary

**Above-the-fold BCS pitch live: locked headline, full subheading, pink Book Discovery Call CTA (Calendly), and yellow Credibility Scorecard CTA (scorecard.bestcasestud.io) with nav stripped to Phase 1 links only**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-07T03:21:12Z
- **Completed:** 2026-03-07T03:29:43Z
- **Tasks:** 2 auto + 1 checkpoint (auto-approved)
- **Files modified:** 2

## Accomplishments

- Navbar CTA replaced: "Request a quote" (GitHub link) -> "Credibility Scorecard" (pink, scorecard.bestcasestud.io, new tab)
- Nav links pruned: removed dead anchors to Use Cases (#cases), Services, Pricing — only About and Blog remain
- Hero headline locked: "Your current customers are your most effective salespeople"
- Hero subheading: full B2B SaaS case studies copy from CONTEXT.md
- Two hero CTAs: Book Discovery Call (pink, Calendly, same tab) + Credibility Scorecard (yellow with border, new tab)
- Build passes with zero errors

## Task Commits

1. **Task 1: Update Navbar** - `cd31080` (feat)
2. **Task 2: Update Hero** - `2bba498` (feat)

## Files Created/Modified

- `src/components/ui/Navbar.astro` - Scorecard CTA button (pink), dead anchors removed, mobile menu updated
- `src/components/sections/Hero.astro` - Locked headline, full subheading, dual-CTA layout with pink/yellow styling

## Decisions Made

- Kept About and Blog nav links — both pages exist in the template and don't cause broken UX
- Used `bg-yellow` with `border border-zinc-900` for the secondary hero CTA — provides visual differentiation from the pink primary without requiring a ghost/outline Tailwind variant
- Hero illustration (hero.svg) preserved unchanged — template SVG is acceptable for Phase 1

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Above-the-fold content is complete and communicates the core BCS value proposition
- Nav and hero are brand-ready for Phase 2 content sections (Services, Testimonials, etc.)
- Pink/yellow CTA pattern established — reuse in any new CTA pairs

## Self-Check: PASSED

- `src/components/ui/Navbar.astro`: FOUND
- `src/components/sections/Hero.astro`: FOUND
- Commit cd31080 (Task 1): FOUND
- Commit 2bba498 (Task 2): FOUND
- Build: PASSED

---
*Phase: 01-foundation*
*Completed: 2026-03-07*
