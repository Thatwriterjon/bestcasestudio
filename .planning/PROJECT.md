# Best Case Studio — Website Rebuild

## What This Is

A single-page marketing website for Best Case Studio, a done-for-you case study service targeting B2B SaaS companies. Built with Astro using the Positivus template, replacing the existing bestcasestud.io site. Content is migrated and adapted from the existing site, with accent colours #ff7ae7 (pink) and #ffe56e (yellow) replacing the template's default green.

## Core Value

Prove to skeptical B2B SaaS buyers that their peers already trust this product — using the customer's own voice, not marketing copy.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Astro project scaffolded from Positivus template (https://github.com/manulthanura/Positivus)
- [ ] Accent colours #ff7ae7 and #ffe56e replace all green in the template globally
- [ ] Hero section with existing headline and CTA
- [ ] Sponsors section with social proof logos (Jon's copywriting clients, framed carefully — not "Best Case Studio worked with these", but something like "Brands our founder has worked with")
- [ ] Services section with the three value props (Build Trust, Improve SEO & GEO, Lower CAC)
- [ ] Pricing section with two tiers: Single $3,000 / Trio $7,500 (no launch discount)
- [ ] Process section: 3 steps (Interview, Editing & Writing, Content Delivery)
- [ ] Team section: Jon (Founder & Copywriter), Alex (Videographer), Jessie (role to be adapted for SaaS — not "Compliance Coordinator")
- [ ] Testimonials section with TestimonialTo iframe embed (same embed ID: a9a5cbcc-76b3-4896-99d9-f94ed6736bf2)
- [ ] Contact/CTA section with discovery call booking link
- [ ] $500 Referral Bounty section
- [ ] FAQ section
- [ ] No Cases section (skipped — no case studies to show yet)
- [ ] Single page (no sub-pages needed for v1)
- [ ] Calendly/booking link wired to all CTAs
- [ ] Footer with LinkedIn, Substack, Spotify, Apple Podcasts links

### Out of Scope

- Cases/portfolio section — no case studies to display yet
- Multi-page architecture — single landing page for v1
- Blog or articles section — not needed for this rebuild
- FCA compliance language — SaaS focus only (the co.uk FinServ pivot content is not used)
- Contact form — discovery call booking replaces this

## Context

- Existing site (bestcasestud.io) is a Webflow single-pager. This rebuild moves to Astro.
- The Positivus template is Astro + Tailwind CSS (MIT licensed). Sections available: Hero, Sponsors, Services, Proposal, Cases, Process, Team, Testimonials, Contact.
- A FinServ pivot site (bestcasestudio.co.uk) exists — it has useful team bios and some copy. The team is accurate (Jon, Alex, Jessie) but Jessie's "Compliance Coordinator" title is FinServ-specific and needs adapting.
- TestimonialTo embed ID: a9a5cbcc-76b3-4896-99d9-f94ed6736bf2 — same iframe, same widget.
- Sponsors logos are from Jon's personal copywriting client history — not explicit BCS client logos. Framing must make this clear (e.g. "Brands our founder has worked with" or "Teams that trust our approach").
- The referral bounty ($500) is a modal/overlay on the existing site — can be kept as a section.

## Constraints

- **Tech stack**: Astro + Tailwind CSS (from Positivus template) — no framework changes
- **Template**: Must start from https://github.com/manulthanura/Positivus, adapting rather than rebuilding from scratch
- **Colours**: #ff7ae7 (pink) and #ffe56e (yellow) as accent colours. All template green (#B9FF66 or similar) replaced globally.
- **Content**: Reuse existing copy from bestcasestud.io with freedom to reorder. Pricing is $3,000 / $7,500 (no discount language).
- **Single page**: All content on index, no routing needed for v1

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Positivus template as base | Free Astro template with right section structure, avoids building from scratch | — Pending |
| Two accent colours (#ff7ae7 + #ffe56e) | Brand differentiation from template defaults | — Pending |
| Skip Cases section | No completed case studies to show yet | — Pending |
| No launch discount in pricing | Simplify pricing — $3,000/$7,500 as standard rates | — Pending |
| Sponsors = Jon's copywriting clients | Social proof without misrepresenting BCS's own client list | — Pending |
| TestimonialTo iframe kept | Easiest migration path, already populated | — Pending |

---
*Last updated: 2026-03-07 after initialization*
