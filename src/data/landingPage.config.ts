/**
 * Content + flags for the /b2b-case-study-writer/ paid-search landing page.
 * Edit copy, flip flags, or add testimonials here without touching the page or its
 * components. Shared facts (inclusions, steps, FAQ) are sourced from the same place the
 * homepage sources them, rather than duplicated — see the comment on each field.
 */

export interface LandingTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  /** Root-relative path under /public, e.g. "/testimonials/jane-doe.jpg". */
  photo?: string;
  caseStudyHref?: string;
}

export const landingPage = {
  noindex: true,

  header: {
    ctaLabel: 'Book a call',
  },

  hero: {
    h1: 'B2B case studies for SaaS, written and on video',
    subhead: 'One customer interview. Written from $2,500, written plus video from $5,000, delivered 14 days after the interview.',
    primaryCta: 'Book a 20-minute call',
    secondaryLinkLabel: 'See a real example',
  },

  /** Pricing and "what you get" now read from src/data/pricing.config.ts (the site-wide single
   *  source of truth for the two products) rather than being duplicated here. See
   *  b2b-case-study-writer.astro's #what-you-get and #price sections. */

  /** Which worked examples (src/data/examples.ts) to embed. The featured slug is embedded
   *  directly and ungated; the second slug is linked underneath as "see another sample". */
  proofSample: {
    featuredSlug: 'saasydb-leadforce-solutions',
    secondSlug: undefined as string | undefined,
  },

  /** Mirrors HowItWorks.astro's three steps, with step 3 reworded to always say "14 days
   *  after the interview" per this page's copy rules. */
  steps: [
    {
      num: '01',
      title: 'You make the <em>intro</em>.',
      body: 'One warm email to your best customer. That\'s your entire job in this process.',
    },
    {
      num: '02',
      title: 'We run the <em>interview</em>.',
      body: 'One recorded conversation, 30 to 45 minutes. We handle the scheduling, the questions, the awkward bits.',
    },
    {
      num: '03',
      title: 'You get your <em>case study package</em>.',
      body: 'Everything above, delivered 14 days after the interview, ready to publish.',
    },
  ],

  /** Commercial terms shown alongside the two price cards in the #price section. Deliberately
   *  worded differently from pages/pricing.astro's payment FAQ (which ties the second payment
   *  to drafts landing): this page names a single, later trigger, client approval of the
   *  delivered package, ahead of the interview subject's own sign-off. */
  terms: {
    paymentTerms: 'Half up front to book the slot. Half when you approve the delivered package, ahead of your customer\'s final sign-off on the published piece.',
    revisions: 'One consolidated round from you. If your customer wants changes after they review it, we make those too.',
    notIncludedNote: 'No upsells. The only thing you\'ll spend after is the time it takes to post it.',
  },

  who: {
    intro: 'Best Case Studio is a two-person, husband-and-wife studio. Jon runs every interview personally, that part is never delegated.',
    jonBio: 'Jon McGreevy leads every project end to end, using his eight years experience working with B2B companies on positioning, content, and conversion. Co-host of the SaaSy as F**k podcast.',
    studioNote: 'Best Case Studio is a brand new company. We don\'t have testimonials for this package yet, we\'ll add them here as real clients deliver results.',
  },

  /** Order numbers from src/content/faq/*.yaml to show on this page, in that order. Orders 4
   *  and 6 cover the two-product question ("just written?" / "what's in video?") that this
   *  page's own hero raises by advertising both formats. Order 9 ("outside the UK?") covers
   *  the ads' "Remote interviews" callout. All reused verbatim from the shared FAQ file. */
  faqOrders: [1, 2, 4, 6, 7, 8, 9],

  /** Package-specific testimonials. Empty until Jon has delivered packages and cleared quotes
   *  for paid campaigns. The section renders nothing at all while this is empty. */
  testimonials: [] as LandingTestimonial[],

  /** The testimonials in src/content/testimonials/ are about Jon's freelance copywriting, not
   *  this package. Off by default — flip on once specific ones are cleared for paid traffic. */
  showFreelanceTestimonials: false,
  freelanceTestimonialsLabel: 'From my freelance copywriting work',
  freelanceTestimonialsMax: 3,

  /** The homepage logo wall ("Brands Jon has worked with as a writer"). Off by default — same
   *  reasoning as showFreelanceTestimonials. */
  showWorkedWithLogos: false,

  /** Calendly URL already live on /contact/. Swap this (and bookingProvider, if it stops being
   *  Calendly) without touching the booking component. */
  bookingProvider: 'calendly' as 'calendly' | 'cal.com' | 'none',
  bookingUrl: 'https://calendly.com/thatwriterjon/best-case-studio',

  /** Shown instead of a calendar when bookingUrl is empty, or if the embed fails to load.
   *  Edit the reply-time line here, it is not hardcoded in the component. */
  bookingFallbackMessage: 'Thanks, that\'s through. We\'ll reply within one business day.',

  leadFormEndpoint: '/api/lead',

  /** Google Ads conversion tracking. Empty by default — nothing fires until these are filled
   *  in. booking_confirmed is the primary conversion; lead_form_submit and sample_link_click
   *  are secondary. See the tracking script for where these are read. */
  tracking: {
    googleAdsId: '',
    conversionLabels: {
      booking_confirmed: '',
      lead_form_submit: '',
      sample_link_click: '',
    },
  },
};
