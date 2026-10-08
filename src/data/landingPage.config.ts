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
    subhead: 'One customer interview. $2,500 fixed price, delivered 14 days after the interview.',
    primaryCta: 'Book a 20-minute call',
    secondaryLinkLabel: 'See a real Proof Kit',
  },

  /** Verbatim from the homepage / pricing page "What's included" list (Pricing.astro,
   *  pages/pricing.astro). Do not add or remove items here without updating both. */
  whatYouGet: [
    'Video case study — the full story, on camera, in your customer\'s own words',
    'Written case study — built to rank on Google and get cited by AI',
    'Video testimonial — a short, sharp cut for your homepage and socials',
    'Written testimonial — a pull-quote for your site, deck, and emails',
    'Social pack — LinkedIn carousel and short clips',
    'A "how to use it" guide — where each piece does the most damage',
  ],

  /** Which worked examples (src/data/examples.ts) to embed. The featured slug is embedded
   *  directly and ungated; the second slug is linked underneath as "see another sample". */
  proofSample: {
    featuredSlug: 'saasydb-leadforce-solutions',
    secondSlug: 'extrovert-commit-linkedin-growth',
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
      title: 'You get your <em>Proof Kit</em>.',
      body: 'Everything above, delivered 14 days after the interview, ready to publish.',
    },
  ],

  price: {
    amount: '$2,500',
    deliveryNote: 'Delivered 14 days after the interview',
    /** Empty by default. Fill in later, e.g. "Excluding VAT". */
    priceNote: '',
    /** Sourced from pages/pricing.astro's commercial-mechanics FAQ, which already states these
     *  terms on the live site. */
    paymentTerms: 'Half up front to book the slot, half when your first drafts land. The second payment is triggered by our delivery, not your sign-off.',
    revisions: 'One consolidated round from you. If your customer wants changes after they review it, we make those too.',
    notIncludedNote: 'One price, no upsells. The only thing you\'ll spend after is the time it takes to post it.',
  },

  who: {
    intro: 'Best Case Studio is a two-person, husband-and-wife studio. Jon runs every interview personally, that part is never delegated.',
    jonBio: 'Jon McGreevy leads every project end to end, using his eight years experience working with B2B companies on positioning, content, and conversion. Co-host of the SaaSy as F**k podcast.',
    studioNote: 'Best Case Studio is a brand new company. We don\'t have Proof Kit testimonials yet, we\'ll add them here as real clients deliver results.',
  },

  /** Order numbers from src/content/faq/*.yaml to show on this page, in that order. */
  faqOrders: [1, 2, 7, 8],

  /** Proof-Kit-specific testimonials. Empty until Jon has delivered kits and cleared quotes
   *  for paid campaigns. The section renders nothing at all while this is empty. */
  testimonials: [] as LandingTestimonial[],

  /** The testimonials in src/content/testimonials/ are about Jon's freelance copywriting, not
   *  the Proof Kit. Off by default — flip on once specific ones are cleared for paid traffic. */
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
