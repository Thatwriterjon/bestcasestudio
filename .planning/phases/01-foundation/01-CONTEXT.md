# Phase 1: Foundation - Context

**Gathered:** 2026-03-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Scaffold the Astro project from the Positivus template, apply brand colours globally, and get the nav + hero section live and working locally. No other sections are built in this phase.

Requirements in scope: SETUP-01, SETUP-02, NAV-01, HERO-01, HERO-02, HERO-03

</domain>

<decisions>
## Implementation Decisions

### Hero copy
- Headline (locked): "Your current customers are your most effective salespeople"
- Subheading (exact, from old site): "Case studies build trust for B2B SaaS companies by showcasing how you've already helped your existing customers. On your website, on social media, and in your sales materials. Instead of a boring PDF no-one reads, showcase your case studies on landing pages and with video content."
- All site copy comes from `old_website.md` in the project root — use this as the canonical source for all sections

### Copy source notes
- old_website.md contains launch discount pricing ($1,500/$3,750) — do NOT use these in the rebuild. Standard prices only: $3,000 (Single) / $7,500 (Trio)
- The "50% Launch Discount" section from the old site is dropped entirely
- FAQ answers referencing launch pricing need to be rewritten to reflect standard prices only
- Jessie's role is already "Customer Success" in old_website.md — use as-is

### Colour mapping
- Pink (#ff7ae7) is the primary accent: buttons, CTAs, interactive elements, nav button
- Yellow (#ffe56e) is the supporting accent: section backgrounds, tags, badges, decorative block highlights
- All template green (#B9FF66 and any similar green values) replaced globally in Tailwind config and component files — no green anywhere
- Specific mapping: wherever the template uses green for backgrounds → yellow; wherever it uses green for buttons/interactive → pink

### CTA linking
- "Book Discovery Call" → `https://calendly.com/thatwriterjon/best-case-studio` (direct link, same tab)
- "Credibility Scorecard" → `https://scorecard.bestcasestud.io` (new tab)
- Both CTAs appear in the hero section

### Nav treatment
- "Credibility Scorecard" appears as a pink (#ff7ae7) styled button, replacing the template's existing nav CTA button slot
- Opens `https://scorecard.bestcasestud.io` in a new tab
- Other nav links: Claude's discretion — Phase 1 only has the hero section, so minimal nav links are appropriate (avoid dead anchors to sections that don't exist yet)

### Claude's Discretion
- Which nav links (if any) appear alongside the Scorecard button in Phase 1
- Exact hover states and transition styles for pink/yellow elements
- How to handle the template's other sections while Phase 1 focuses on hero (hide, stub, or leave as-is)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet — greenfield project, no existing codebase

### Established Patterns
- Positivus template (https://github.com/manulthanura/Positivus): Astro + Tailwind CSS, MIT licensed
- Template sections available: Hero, Sponsors, Services, Proposal, Cases, Process, Team, Testimonials, Contact
- Colour replacement is global: Tailwind config AND any hardcoded hex values in component files

### Integration Points
- Template's nav component: add Scorecard button, adjust/remove other nav links for Phase 1
- Template's hero component: replace headline, subheading, and CTA text/links
- Tailwind config: replace green accent with pink (#ff7ae7) as primary and yellow (#ffe56e) as secondary

</code_context>

<specifics>
## Specific Ideas

- Copy is sourced from `old_website.md` — planner/executor should read this file, not guess at copy
- Calendly URL for all "Book Discovery Call" CTAs: `https://calendly.com/thatwriterjon/best-case-studio`
- The old site used launch discount pricing — this is explicitly not carried over. Standard rates ($3,000/$7,500) are the only prices shown in the rebuild
- Jessie's bio from old_website.md is already suitable for a SaaS audience — no adaptation needed

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-07*
