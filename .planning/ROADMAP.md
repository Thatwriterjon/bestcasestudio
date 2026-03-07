# Roadmap: Best Case Studio Website Rebuild

## Overview

Three phases deliver a complete single-page marketing site on Astro/Positivus. Phase 1 scaffolds the project and gets the above-the-fold pitch live. Phase 2 fills every core content section so visitors understand the offer, price, and team. Phase 3 closes the conversion loop with social proof, FAQs, the referral hook, and a direct booking path.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - Astro project running locally with brand colours, nav, and hero in place (completed 2026-03-07)
- [ ] **Phase 2: Core Content** - Sponsors, services, pricing, process, and team sections complete
- [ ] **Phase 3: Conversion Close** - Testimonials, referral, FAQ, contact, and footer complete — site ready to launch

## Phase Details

### Phase 1: Foundation
**Goal**: The site scaffolds, loads locally, reflects BCS brand colours, and communicates the core pitch above the fold
**Depends on**: Nothing (first phase)
**Requirements**: SETUP-01, SETUP-02, NAV-01, HERO-01, HERO-02, HERO-03
**Success Criteria** (what must be TRUE):
  1. Running `npm run dev` starts the site with no errors and the Positivus template is visible in the browser
  2. All green accent colours (#B9FF66 or equivalent) are replaced site-wide by #ff7ae7 and #ffe56e — no green visible anywhere
  3. The nav bar contains a "Credibility Scorecard" link that opens scorecard.bestcasestud.io in a new tab
  4. The hero headline reads "Your current customers are your most effective salespeople" with correct subheading and two working CTAs
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Clone Positivus template and verify dev server runs
- [ ] 01-02-PLAN.md — Global colour replacement (pink #ff7ae7 and yellow #ffe56e replace all green)
- [ ] 01-03-PLAN.md — Nav Scorecard button and Hero copy with two CTAs

### Phase 2: Core Content
**Goal**: Visitors can understand what BCS sells, what it costs, how it works, and who delivers it
**Depends on**: Phase 1
**Requirements**: SPONS-01, SPONS-02, SERV-01, SERV-02, SERV-03, PRICE-01, PRICE-02, PRICE-03, PROC-01, PROC-02, PROC-03, TEAM-01, TEAM-02, TEAM-03
**Success Criteria** (what must be TRUE):
  1. A logo strip shows Jon's copywriting client logos with framing copy attributing them to his background, not BCS client work
  2. Three value prop cards are visible: Build Trust, Improve SEO & GEO, Lower CAC
  3. Pricing section shows Single ($3,000) and Trio ($7,500) tiers with full deliverables and a CTA on each
  4. The three-step process (Interview, Editing & Writing, Content Delivery) is displayed in order
  5. Team section shows Jon, Alex, and Jessie with accurate roles and bios appropriate for a B2B SaaS audience
**Plans**: TBD

### Phase 3: Conversion Close
**Goal**: Visitors have everything they need to trust BCS and book a discovery call — site is launch-ready
**Depends on**: Phase 2
**Requirements**: TEST-01, REF-01, FAQ-01, CONT-01, CONT-02
**Success Criteria** (what must be TRUE):
  1. The TestimonialTo iframe (ID: a9a5cbcc-76b3-4896-99d9-f94ed6736bf2) renders live testimonials on the page
  2. A $500 Referral Bounty section explains the offer (refer a SaaS company, get $500 cash on first payment, no cap)
  3. FAQ section answers 8-10 questions covering timeline, pricing, process, and what makes BCS different
  4. The final CTA section contains an embedded calendar for booking a 30-minute discovery call
  5. Footer displays social links (LinkedIn, Substack, Spotify, Apple Podcasts) and copyright
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 3/3 | Complete   | 2026-03-07 |
| 2. Core Content | 0/TBD | Not started | - |
| 3. Conversion Close | 0/TBD | Not started | - |
