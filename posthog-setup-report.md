<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Best Case Studio Astro (hybrid) project. PostHog client-side tracking runs via `src/components/posthog.astro`, included in `src/layouts/MainHead.astro` so every page is covered. A previous pass instrumented 8 core events. This pass filled the remaining funnel gaps: the homepage contact section CTA, article listing card clicks, article bottom CTA, SEO audit form, and the pricing page funnel entry point.

**Environment:** `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` are set in `.env` and referenced via `import.meta.env`. No tokens are hardcoded.

**Server-side tracking:** Not applicable — no API routes exist. All forms use Netlify Forms and Calendly client-side. All tracking is via `posthog-js`.

## All instrumented events

| Event | Description | File |
|---|---|---|
| `contact_form_submitted` | User submits the contact form; also calls `posthog.identify()` with email | `src/pages/contact.astro` |
| `discovery_call_booked` | Calendly booking completed (via `calendly.event_scheduled` postMessage) | `src/pages/contact.astro` |
| `pricing_cta_clicked` | Clicks "Book Discovery Call" on pricing page; includes `tier` and `price` | `src/pages/pricing.astro` |
| `hero_cta_clicked` | Clicks a Hero CTA; includes `button` property | `src/components/sections/Hero.astro` |
| `referral_email_clicked` | Clicks "Email us to refer someone" in Referral section | `src/components/sections/Referral.astro` |
| `article_viewed` | Views a blog article; includes `article_slug` and `article_title` | `src/pages/articles/[slug].astro` |
| `faq_expanded` | Opens an FAQ item; includes `question` text | `src/components/sections/FAQ.astro` |
| `scorecard_cta_clicked` | Clicks Credibility Scorecard nav CTA; includes `location` | `src/components/ui/Navbar.astro` |
| `contact_cta_clicked` | Clicks "Book a discovery call" in homepage contact section | `src/components/sections/Contact.astro` |
| `article_cta_clicked` | Clicks "Book a Discovery Call" at bottom of article; includes `article_slug` and `article_title` | `src/pages/articles/[slug].astro` |
| `article_card_clicked` | Clicks an article card on the listing page; includes `article_slug` and `article_title` | `src/pages/articles/index.astro` |
| `seo_audit_form_submitted` | Submits the SEO audit request form; includes `has_website` | `src/pages/services/seo.astro` |
| `pricing_page_viewed` | Lands on pricing page — top of conversion funnel | `src/pages/pricing.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://eu.posthog.com/project/156937/dashboard/614813
- **Pricing → CTA → Booking Funnel** (conversion funnel): https://eu.posthog.com/project/156937/insights/ESoBs2MI
- **Discovery Call Bookings & Contact Form Submissions** (weekly trend): https://eu.posthog.com/project/156937/insights/TZMrqvuJ
- **CTA Clicks by Location** (which entry points drive most intent): https://eu.posthog.com/project/156937/insights/jamfzOi7
- **Article Engagement Funnel** (card click → read → CTA click): https://eu.posthog.com/project/156937/insights/8y4l5ESA
- **Content & Engagement Activity** (articles, FAQ, referral): https://eu.posthog.com/project/156937/insights/SnvxXgSg

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-hybrid/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
