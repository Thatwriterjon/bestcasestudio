/**
 * Worked examples of the Citable method — real case studies produced for clients,
 * restructured here as portfolio pieces. Each entry drives both the /examples switcher
 * and its own dedicated page at /examples/<slug>/.
 *
 * To add a new example: append an object below. `order` controls tab + sitemap order.
 * `type: 'optimise'` renders the "Optimised" badge (built from an existing piece of
 * content); `type: 'build'` renders "Built from scratch".
 *
 * Prose fields (deck, section body, cta.body) allow inline HTML — use <a>, <em>.
 * `jsonLd` is the real Schema.org @graph; it is shown in the visible "machine layer"
 * panel only (it is NOT injected into the document <head>, so it never collides with
 * Best Case Studio's own site schema).
 */

export interface Quote {
  text: string;
  name?: string;
  role?: string;
}

export interface Section {
  heading: string;
  /** Paragraphs. Inline HTML allowed. */
  body?: string[];
  quote?: Quote;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProfileRow {
  label: string;
  value: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Logo {
  src: string;
  alt: string;
  /** Intrinsic dimensions — used to reserve space and prevent layout shift. */
  width: number;
  height: number;
}

export interface CaseStudyExample {
  slug: string;
  order: number;
  type: 'optimise' | 'build';
  /** The vendor — the company that commissioned the case study (our client). */
  client: string;
  /** The customer featured in the story. */
  customer: string;
  /** Short label for the tab switcher. */
  tabLabel: string;
  industry: string;
  region: string;
  /** Headline. */
  title: string;
  /** One-paragraph summary. Inline HTML allowed. */
  deck: string;
  /** The single biggest number, rendered oversized. */
  hero: { value: string; label: string };
  metrics: Metric[];
  profile: ProfileRow[];
  /** Vendor (our client) logo — shown in the masthead. */
  logo?: Logo;
  /** Featured customer logo — shown on the profile card. */
  customerLogo?: Logo;
  video?: { embedUrl: string; label: string };
  sections: Section[];
  cta: { heading: string; body: string; links: CtaLink[] };
  /** Search metadata produced for the published case study. Shown in the machine-layer panel. */
  seo: {
    title: string;
    metaDescription: string;
    targetQuery: string;
    slug: string;
    imageAlt: string;
    /** Display domain for the search-result preview, e.g. "www.measurable.energy". */
    domain: string;
  };
  /** Open Graph tags. Shown in the machine-layer panel. */
  openGraph: {
    title: string;
    description: string;
    type: string;
    locale: string;
  };
  jsonLd: Record<string, unknown>;
}

export const examples: CaseStudyExample[] = [
  {
    slug: 'measurable-energy-st-peters-school',
    order: 1,
    type: 'optimise',
    client: 'Measurable Energy',
    customer: 'St Peters Primary School',
    tabLabel: 'Measurable Energy',
    industry: 'Clean energy tech',
    region: 'United Kingdom',
    title:
      'How St Peters School cut energy waste by up to 40% with AI-powered smart sockets',
    deck: `St Peters Primary School in South Weald was wasting energy daily despite a serious investment in renewable infrastructure — 120 solar panels and heat pumps for the swimming pool — because computers, screens, and water heaters were routinely left running overnight and at weekends. After joining a three-school pilot of <a href="https://www.measurable.energy/" target="_blank" rel="noopener noreferrer">Measurable Energy</a>'s AI-powered smart sockets, St Peters now saves an estimated <strong>£7,000–£8,000 a year</strong> in electricity costs, with payback expected inside two years. Savings across the pilot ranged from <strong>25% to 40%</strong>. Staff and pupils noticed no disruption — and the Diocese of Chelmsford is now rolling the technology out to <strong>35 more schools</strong>.`,
    hero: { value: 'Up to 40%', label: 'less energy wasted across the pilot schools' },
    metrics: [
      { value: '£7–8k', label: 'estimated annual saving at St Peters' },
      { value: '< 2 yrs', label: 'payback on the installation' },
      { value: '35', label: 'more schools planned for rollout' },
      { value: 'Zero', label: 'disruption to staff or pupils' },
    ],
    profile: [
      { label: 'Organisation', value: 'St Peters Primary School' },
      { label: 'Location', value: 'South Weald, Essex, UK' },
      { label: 'Sector', value: 'Primary education' },
      { label: 'Oversight', value: 'Diocese of Chelmsford (140 schools)' },
      { label: 'Existing infrastructure', value: '120 solar panels, heat pump' },
      { label: 'Engagement', value: 'One of three pilot schools' },
    ],
    logo: {
      src: '/examples/measurable-energy.svg',
      alt: 'Measurable Energy',
      width: 1097,
      height: 165,
    },
    video: {
      embedUrl: 'https://www.youtube.com/embed/HW6NufCYitE',
      label: 'Watch the customer-led story',
    },
    sections: [
      {
        heading: 'What was the energy waste problem at St Peters?',
        body: [
          `Despite heavy investment in renewable energy — 120 solar panels and a heat pump for the swimming pool — energy was still being wasted at <a href="https://stpeterssouthweald.org/" target="_blank" rel="noopener noreferrer">St Peters Primary School</a> on a daily basis.`,
        ],
        quote: {
          text: `I'd come in on a Saturday and notice that people had left screens on in the classrooms. We've got a computer suite. I could say to people turn off all the computers on a Friday night. It'll happen for a little bit and then it kind of dies off again.`,
          name: 'Iain Gunn',
          role: 'Head Teacher, St Peters Primary School',
        },
      },
      {
        heading: 'Why the wasted energy mattered',
        body: [
          `It wasn't a lack of commitment from staff. Teachers were busy, and human nature meant computers, screens, and water heaters were regularly left running overnight and at weekends. For Iain, the wasted energy was money leaving the school's budget at a time when every penny in education matters.`,
          `The Diocese of Chelmsford, which oversees 140 schools across the region, recognised this wasn't an isolated problem. <strong>Peter Palmer</strong>, who manages capital finance and land matters across the Diocese, was looking for solutions that could help meet the Church of England's 2030 carbon reduction targets while easing the financial pressure schools face.`,
        ],
        quote: {
          text: `With the budgets the way they are within education at the moment, the quick wins are reducing our energy costs.`,
          name: 'Peter Palmer',
          role: 'Diocese of Chelmsford',
        },
      },
      {
        heading: 'How does the AI smart socket system work?',
        body: [
          `After discovering Measurable Energy at the <a href="https://www.futurebuild.co.uk/" target="_blank" rel="noopener noreferrer">Futurebuild</a> event in London, Peter identified it as a product that could quickly bring results. The concept is straightforward: smart sockets that use AI to identify the devices plugged into them and automatically control when they're powered on and off.`,
          `St Peters was selected as one of three pilot schools. Installation was straightforward — sockets in classrooms, the IT suite, and throughout the school, programmed to turn devices off at 6pm and back on at 7am, with flexibility built in for parents' evenings, weekend activities, and Saturday first-aid groups.`,
        ],
        quote: {
          text: `What I particularly like about them is how easy they are to use. If you've got a double plug, you can have one constantly on and then one on a timer so that each of the separate plug sockets can be controlled completely independently.`,
          name: 'Iain Gunn',
          role: 'Head Teacher',
        },
      },
      {
        heading: 'What features made the most difference?',
        body: [
          `Two design choices changed how the system was received inside the school. The first: <strong>LED indicators showing renewable-energy status</strong>. When the sockets run on solar power from the school's panels, the LEDs go green; when drawing from the grid, they go red. This created an unexpected educational benefit.`,
        ],
        quote: {
          text: `The children are starting to notice when the lights are green and the lights are red. They're starting to ask, could we do our IT lessons in the afternoon when it's sunnier rather than in the morning?`,
          name: 'Iain Gunn',
          role: 'Head Teacher',
        },
      },
      {
        heading: 'What energy savings did St Peters achieve?',
        body: [
          `Within weeks of installation, St Peters could see electricity bills coming down. Photocopiers, computers, and water heaters were no longer consuming power unnecessarily outside school hours. The change was invisible to the people most affected — devices simply go off at 6pm and come back on at 7am, and no one has noticed any disruption.`,
          `For the Diocese, the pilot was successful enough to warrant a wider rollout. Peter Palmer has confirmed plans to extend the technology to 35 additional voluntary-aided schools using School Condition Allocation (SCA) funding.`,
        ],
        quote: {
          text: `In under two years the cost of the socket will be paid for. They're going to be saving me about £7,000 or £8,000 a year as a conservative estimate, which is amazing.`,
          name: 'Iain Gunn',
          role: 'Head Teacher',
        },
      },
      {
        heading: 'What unexpected benefits emerged?',
        body: [
          `The system also addressed a quieter safety concern: socket overloading in IT suites where multiple devices share outlets.`,
        ],
        quote: {
          text: `It also saves the overloading of multiple plug sockets, certainly where the IT suites are. We can just automatically turn them off at the end of the day. And we also know that they're safe and not being overloaded.`,
          name: 'Peter Palmer',
          role: 'Diocese of Chelmsford',
        },
      },
      {
        heading: 'What advice would you give other schools?',
        body: [
          `Asked what advice he'd give other schools considering similar technology, Iain's response was direct: <em>"It's an easy win. You see the immediate results and it's just as easy as literally switching the plug sockets."</em> His recommendation for getting the most from the system is to plan ahead — sit down with the yearly planner, drop in parents' evenings and weekend events, and let the system handle the rest.`,
          `For St Peters, the savings represent more than just extra cash on the balance sheet.`,
        ],
        quote: {
          text: `That's kind of half a learning support teacher, which does start to make a difference. And then that difference we can pass on to the children to make their experience even better.`,
          name: 'Iain Gunn',
          role: 'Head Teacher',
        },
      },
    ],
    cta: {
      heading: "Looking to cut your organisation's energy costs by 25–40%?",
      body: `St Peters achieved meaningful energy and cost savings with minimal disruption. If you're looking to stop wasting energy in your buildings, the Measurable Energy team can help you understand what's possible.`,
      links: [
        { label: 'Calculate your potential savings', href: 'https://www.measurable.energy/roi-calculator' },
        { label: 'Get in touch with the team', href: 'https://www.measurable.energy/talk-to-sales' },
      ],
    },
    seo: {
      title: 'How St Peters Cut Energy Waste by 40% | Measurable Energy',
      metaDescription:
        "St Peters School cut energy waste by up to 40% with Measurable Energy's AI-powered smart sockets, saving £7,000–£8,000 a year. Read the case study.",
      targetQuery: 'St Peters school energy savings case study',
      slug: '/st-peters-school-energy-savings-case-study',
      imageAlt:
        'Iain Gunn, Head Teacher of St Peters Primary School, in a classroom where AI-powered smart sockets have cut energy waste by up to 40%',
      domain: 'www.measurable.energy',
    },
    openGraph: {
      title: 'How St Peters School Cut Energy Waste by 40%',
      description:
        'St Peters School saves £7,000–£8,000/year in energy costs with AI-powered smart sockets from Measurable Energy. 25–40% reduction across three pilot schools.',
      type: 'article',
      locale: 'en_GB',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline:
            'How St Peters School cut energy waste by up to 40% with AI-powered smart sockets',
          datePublished: '2026-01-20',
          dateModified: '2026-05-27',
          author: { '@type': 'Organization', name: 'Measurable Energy' },
          publisher: { '@type': 'Organization', name: 'Measurable Energy' },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: {
            '@type': 'Person',
            name: 'Iain Gunn',
            jobTitle: 'Head Teacher',
            worksFor: { '@type': 'EducationalOrganization', name: 'St Peters Primary School' },
          },
          reviewBody:
            "In under two years the cost of the socket will be paid for. They're going to be saving me about £7,000 or £8,000 a year as a conservative estimate, which is amazing.",
        },
        { '@type': 'Organization', name: 'Measurable Energy', url: 'https://www.measurable.energy' },
        {
          '@type': 'EducationalOrganization',
          name: 'St Peters Primary School',
          address: { addressLocality: 'South Weald', addressRegion: 'Essex', addressCountry: 'GB' },
        },
        {
          '@type': 'VideoObject',
          name: 'How St Peters School Cut Energy Costs With AI Smart Sockets',
          embedUrl: 'https://www.youtube.com/embed/HW6NufCYitE',
          uploadDate: '2026-01-20',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.measurable.energy/' },
            { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.measurable.energy/case-studies' },
            { '@type': 'ListItem', position: 3, name: 'How St Peters School cut energy waste by up to 40%' },
          ],
        },
      ],
    },
  },
  {
    slug: 'taxvalet-stealth-fitness',
    order: 2,
    type: 'optimise',
    client: 'TaxValet',
    customer: 'Stealth Fitness',
    tabLabel: 'TaxValet',
    industry: 'Sales tax compliance',
    region: 'United States',
    title: 'How Stealth Fitness offloaded 50-state sales tax compliance to TaxValet',
    deck: `<a href="https://www.stealthfitness.com/" target="_blank" rel="noopener noreferrer">Stealth Fitness</a>, a connected fitness company selling across all 50 US states, was struggling to manage sales tax compliance in-house. After an unsuccessful period with TaxJar, Co-founder and CEO David Augustine switched to <a href="https://thetaxvalet.com/" target="_blank" rel="noopener noreferrer">TaxValet</a>. TaxValet now handles all <strong>filing, registration, and state correspondence</strong> on Stealth Fitness's behalf — what Augustine describes as "an in-house staff without paying an in-house staff." He estimates that replacing TaxValet with an in-house accounting firm would <strong>cost roughly four times as much</strong>.`,
    hero: { value: '50 states', label: 'of sales tax compliance, fully managed' },
    metrics: [
      { value: '4×', label: 'estimated cost of an in-house accounting firm instead' },
      { value: 'All notices', label: 'state correspondence handled as registered agent' },
      { value: 'Zero', label: 'state filings the CEO now touches himself' },
    ],
    profile: [
      { label: 'Organization', value: 'Stealth Fitness' },
      { label: 'Sector', value: 'Connected fitness / consumer electronics' },
      { label: 'Location', value: 'United States' },
      { label: 'Size', value: '1–10 employees · 500,000+ units sold worldwide' },
      { label: 'Previous solution', value: 'TaxJar (software-only platform)' },
      { label: 'Engagement', value: 'Managed sales tax compliance (all 50 states)' },
    ],
    logo: {
      src: '/examples/taxvalet.png',
      alt: 'TaxValet',
      width: 1615,
      height: 508,
    },
    customerLogo: {
      src: '/examples/stealth-fitness.svg',
      alt: 'Stealth Fitness',
      width: 447,
      height: 47,
    },
    video: {
      embedUrl: 'https://www.youtube.com/embed/4nJcw_iqwjo?start=21',
      label: 'Watch the customer interview',
    },
    sections: [
      {
        heading: 'What made sales tax compliance so difficult for Stealth Fitness?',
        body: [
          `Stealth Fitness is a connected fitness company that sells across all US states. Each state has its own sales tax rules, rates, and filing requirements — and for a company without dedicated tax staff, the burden fell directly on the CEO.`,
        ],
        quote: {
          text: `You have to comply with, you know, 50 different series of laws in all these different states. Literally impossible to do it yourself.`,
          name: 'David Augustine',
          role: 'Co-founder and CEO, Stealth Fitness',
        },
      },
      {
        heading: "Why didn't software-only sales tax tools work?",
        body: [
          `Before TaxValet, Stealth Fitness used TaxJar, a self-service sales tax platform. Augustine set it up himself but found the DIY approach left gaps. They couldn't get the compliance they needed, and when issues arose, there was no one to turn to. The core failure wasn't the software itself but the absence of human support: when state notices arrived — and they arrive regularly — there was no one at TaxJar to respond on Stealth Fitness's behalf.`,
        ],
        quote: {
          text: `TaxJar is not a person. It's just a piece of software.`,
        },
      },
      {
        heading: 'What changed when Stealth Fitness switched to TaxValet?',
        body: [
          `Augustine describes discovering TaxValet as a turning point — he "almost couldn't believe" the service existed because it sounded too good to be true. The difference was the service model: TaxValet assigns a dedicated team that handles filing, registration, and state correspondence on the client's behalf.`,
        ],
        quote: {
          text: `It feels like I have an in house staff without paying an in house staff.`,
        },
      },
      {
        heading: 'How does TaxValet handle state notices and correspondence?',
        body: [
          `The most concrete difference is how TaxValet deals with state correspondence. US states send notices about underpayments, rule changes, and filing errors. Before TaxValet, these notices caused panic — Augustine describes the experience as "you kind of freak out," with no clear path to resolve them.`,
          `With TaxValet, he no longer handles them at all. TaxValet acts as Stealth Fitness's agent, responding to state correspondence directly — a role software-only tools just can't fill.`,
        ],
        quote: {
          text: `They handle all the notices, they handle all these pieces of paper that come in. They handle it, they respond to it. I don't have to deal with it at all.`,
        },
      },
      {
        heading: 'Augustine recommends managed compliance over software-only tools',
        body: [
          `Asked what he would do if TaxValet were no longer available, Augustine is direct. For a CEO who describes sales tax as "a huge nuisance," having a proactive team that keeps him on his toes — and delivers on every promise — <em>is the point</em>.`,
        ],
        quote: {
          text: `I don't think I'd go back to just the software as a service business. I'd want an in-house accounting firm and the cost of that would probably quadruple.`,
        },
      },
    ],
    cta: {
      heading: 'Spending too long on multi-state sales tax?',
      body: `Stealth Fitness offloaded compliance across all 50 states to a dedicated team — at a fraction of the cost of doing it in-house. If sales tax is eating your time, TaxValet can take it off your plate.`,
      links: [{ label: 'Talk to TaxValet', href: 'https://thetaxvalet.com/' }],
    },
    seo: {
      title: 'How Stealth Fitness Offloaded Sales Tax | TaxValet',
      metaDescription:
        "Stealth Fitness replaced TaxJar with TaxValet's managed sales tax service across 50 states at a fraction of in-house cost. Read the full case study.",
      targetQuery: 'Stealth Fitness sales tax compliance case study',
      slug: '/stealth-fitness-sales-tax-compliance-case-study',
      imageAlt:
        'David Augustine, Co-founder and CEO of Stealth Fitness, discusses switching from TaxJar to TaxValet for 50-state sales tax compliance',
      domain: 'thetaxvalet.com',
    },
    openGraph: {
      title: 'How Stealth Fitness Offloaded Sales Tax | TaxValet',
      description:
        "Stealth Fitness replaced TaxJar with TaxValet's managed sales tax service across 50 states at a fraction of in-house cost. Read the full case study.",
      type: 'article',
      locale: 'en_US',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline:
            'How Stealth Fitness offloaded 50-state sales tax compliance to TaxValet',
          datePublished: '2026-05-26',
          dateModified: '2026-05-26',
          author: { '@type': 'Organization', name: 'TaxValet' },
          publisher: { '@type': 'Organization', name: 'TaxValet' },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: {
            '@type': 'Person',
            name: 'David Augustine',
            jobTitle: 'Co-founder and CEO',
            worksFor: { '@type': 'Organization', name: 'Stealth Fitness' },
          },
          reviewBody:
            "As a company, it feels like I have an in house staff without paying an in house staff. It feels like I have a whole team of accountants and I don't have to pay a whole team of accountants.",
        },
        { '@type': 'Organization', name: 'TaxValet', url: 'https://thetaxvalet.com/' },
        { '@type': 'Organization', name: 'Stealth Fitness', address: { addressCountry: 'US' } },
        {
          '@type': 'Service',
          name: 'Managed sales tax compliance service',
          provider: { '@type': 'Organization', name: 'TaxValet' },
        },
        {
          '@type': 'VideoObject',
          name: 'David Augustine on switching from TaxJar to TaxValet for sales tax compliance',
          embedUrl: 'https://www.youtube.com/embed/4nJcw_iqwjo',
          uploadDate: '2026-05-26',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thetaxvalet.com/' },
            { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://thetaxvalet.com/case-studies' },
            { '@type': 'ListItem', position: 3, name: 'How Stealth Fitness offloaded 50-state sales tax compliance to TaxValet' },
          ],
        },
      ],
    },
  },
];

export const typeLabel = (type: CaseStudyExample['type']): string =>
  type === 'optimise' ? 'Optimised' : 'Built from scratch';
