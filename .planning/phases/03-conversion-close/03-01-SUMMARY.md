---
phase: 03-conversion-close
plan: 01
subsystem: ui
tags: [testimonials, testimonialto, iframe, social-proof, astro]

# Dependency graph
requires:
  - phase: 02-core-content
    provides: Page structure and section component patterns (Section.astro, SectionTitle.astro)
provides:
  - Live TestimonialTo iframe embed in Testimonials.astro with wall ID a9a5cbcc-76b3-4896-99d9-f94ed6736bf2
  - BCS-specific section heading and description for social proof section
affects: [index.astro, about.astro, any page that includes Testimonials]

# Tech tracking
tech-stack:
  added: [testimonial.to iframe embed, iframeResizer]
  patterns: [external embed widget via div ID + CDN scripts]

key-files:
  created: []
  modified:
    - src/components/sections/Testimonials.astro

key-decisions:
  - "Replaced Swiper carousel with TestimonialTo iframe embed — real client voices over template placeholders"
  - "Removed dark rounded container wrapping; TestimonialTo widget renders its own container"
  - "Section heading updated to 'What Our Clients Say' with BCS-specific B2B SaaS description"

patterns-established:
  - "Third-party widget embeds: div ID anchor + CDN script tags directly in Astro component"

requirements-completed: [TEST-01]

# Metrics
duration: 5min
completed: 2026-03-07
---

# Phase 3 Plan 01: Testimonials TestimonialTo Embed Summary

**Swiper carousel replaced with live TestimonialTo iframe (wall ID a9a5cbcc-76b3-4896-99d9-f94ed6736bf2) with BCS-specific heading and B2B SaaS description**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-03-07T13:50:54Z
- **Completed:** 2026-03-07T13:52:00Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments
- Removed SwiperSlider import and dark rounded container from Testimonials.astro
- Embedded TestimonialTo widget div + CDN scripts with wall ID a9a5cbcc-76b3-4896-99d9-f94ed6736bf2
- Updated section heading to "What Our Clients Say" with BCS-specific description referencing B2B SaaS companies
- Build passes cleanly with no broken imports

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite Testimonials.astro with TestimonialTo iframe embed** - `bc9ff14` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified
- `src/components/sections/Testimonials.astro` - Replaced Swiper carousel with TestimonialTo iframe embed, updated heading and description

## Decisions Made
- Removed the dark rounded container (`rounded-[45px] bg-dark mb-[150px] text-gray`) that wrapped the Swiper carousel — the TestimonialTo widget renders its own container, so wrapping it would cause double-boxing
- Kept `mb-[150px]` spacing on the outer wrapper div to preserve page rhythm
- Used CDN script tags directly in the Astro component (standard Astro pattern for third-party embeds)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - TestimonialTo widget loads via CDN, no environment variables or dashboard configuration required. The wall ID a9a5cbcc-76b3-4896-99d9-f94ed6736bf2 is hardcoded and publicly accessible.

## Next Phase Readiness
- Testimonials section is live and will display real testimonials from the TestimonialTo platform
- No further configuration needed for this section
- Phase 3 conversion/close work can continue with remaining plans

---
*Phase: 03-conversion-close*
*Completed: 2026-03-07*
