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
    order: 3,
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
    order: 4,
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
  {
    slug: 'extrovert-commit-linkedin-growth',
    order: 1,
    type: 'build',
    client: 'Extrovert',
    customer: 'COMMIT',
    tabLabel: 'Extrovert',
    industry: 'AI-powered LinkedIn engagement',
    region: 'EMEA',
    title:
      'How Mila added 4,000+ LinkedIn connections in 2.5 years with Extrovert',
    deck: `Mila Tsirelman sells technology services for <a href="https://www.comm-it.com/" target="_blank" rel="noopener noreferrer">COMMIT</a>, a firm with 1,200+ enterprise clients across AI, cloud, and cybersecurity. After adopting <a href="https://www.goextrovert.com/" target="_blank" rel="noopener noreferrer">Extrovert</a>'s AI-powered engagement platform, she grew her personal network from roughly 5,000 to over <strong>9,000 connections in 2.5 years</strong>, with the majority of new connections driven by <strong>10–15 inbound requests daily</strong> from target-audience prospects who discovered her through AI-assisted comments. Her team adopted the platform 1.5 years into her own use. She now runs two Extrovert accounts daily, crediting the tool with shortening her sales cycles by converting cold outreach into warm inbound conversations.`,
    hero: { value: '4,000+', label: 'new LinkedIn connections in 2.5 years' },
    metrics: [
      { value: '2.5 yrs', label: 'sustained daily usage' },
      { value: '10–15', label: 'inbound connection requests daily' },
      { value: '22%', label: 'acceptance rate on 2,480 outbound requests' },
    ],
    profile: [
      { label: 'Organisation', value: 'COMMIT' },
      { label: 'Sector', value: 'Technology services (software, AI/ML, cloud, cybersecurity)' },
      { label: 'Size', value: '1,200+ enterprise clients' },
      { label: 'Engagement', value: 'Daily use for 2.5 years (Mila), 1.5 years (team)' },
    ],
    logo: {
      src: '/examples/extrovert.svg',
      alt: 'Extrovert',
      width: 174,
      height: 40,
    },
    customerLogo: {
      src: '/examples/commit.png',
      alt: 'COMMIT',
      width: 142,
      height: 37,
    },
    video: { embedUrl: 'https://www.youtube.com/embed/Wrt-DYzDfkY', label: 'Watch the video case study' },
    sections: [
      {
        heading: "Why wasn't LinkedIn working for Mila before Extrovert?",
        body: [
          `Mila Tsirelman manages business development across EMEA for <a href="https://www.comm-it.com/" target="_blank" rel="noopener noreferrer">COMMIT</a>, a technology services firm that builds software, AI/ML solutions, cloud infrastructure, and cybersecurity products for more than 1,200 enterprise clients. Her job is finding and closing new business. LinkedIn? Before Extrovert, she barely used it.`,
          `COMMIT's clients span software development, team augmentation, and cybersecurity across multiple continents. Mila had built a network of roughly 4,500–5,000 connections over years of conferences and direct outreach — but she couldn't keep up with what those contacts were actually posting. Eight to ten meetings a day left no room for scrolling LinkedIn, let alone writing thoughtful comments on other people's posts.`,
        ],
        quote: {
          text: `Before Extrovert, I was not relying much on LinkedIn as a tool. Now I recognize the power of it because with Extrovert, I first of all, discover the power of it.`,
          name: 'Mila Tsirelman',
          role: 'Sales and Business Development Manager EMEA, COMMIT',
        },
      },
      {
        heading: 'What changed in the first three months?',
        body: [
          `Mila started using Extrovert 2.5 years ago, initially on her own before her team joined 1.5 years later. The early weeks weren't easy. The biggest pitfall was targeting — LinkedIn's most active commenters tend to be students and early-career professionals, not the enterprise buyers she was after. She refined her playbook three to four times before the tool started surfacing the right people consistently.`,
          `"It is not small. I would say it's a quarter of a year," Mila says of the learning curve. It paid off. Once her playbooks were dialled in, Extrovert's AI-powered commenting put Mila's name in front of relevant prospects — without her having to type every word. She still reviews and approves each comment before it goes out.`,
        ],
        quote: {
          text: `It is me on steroids.`,
          name: 'Mila Tsirelman',
          role: 'Sales and Business Development Manager EMEA, COMMIT',
        },
      },
      {
        heading: 'How does Extrovert surface prospects Mila would never have found?',
        body: [
          `Ask Mila what she values most about Extrovert and she won't say the AI commenting. It's the content discovery underneath. The platform surfaces posts from people she has no connection with, matched by topic rather than who she already knows.`,
          `"It helps me to find the posts relevant to me from other users whom I'm not familiar with," she explains. "I would never come across" those posts without the tool. The users in question are often based in geographies she would never cover through conferences alone: Singapore, South Africa, Canada, the United States.`,
          `There's a CRM angle too. When Mila opens a DM thread, Extrovert shows her bullet-point summaries of past interactions and what that contact has posted recently. With 8–10 meetings a day, she'd otherwise lose track.`,
        ],
        quote: {
          text: `They are looking for me, but I would never find them if I didn't use Extrovert.`,
          name: 'Mila Tsirelman',
          role: 'Sales and Business Development Manager EMEA, COMMIT',
        },
      },
      {
        heading: 'What results has Mila seen after 2.5 years?',
        body: [
          `Two and a half years in, running two Extrovert accounts daily, the numbers speak for themselves. "I get about, I would say, 10 to 15 connection requests daily from my target audience," Mila reports. These aren't people she reached out to first. They found her through Extrovert-powered comments on posts in her niche.`,
          `Her outbound acceptance rate is 22% on 2,480 requests sent — decent, but that's not where the real leverage is. Her team came on board 1.5 years after she did. She now runs two Extrovert accounts to cover more ground.`,
        ],
        quote: {
          text: `The walk-in customer is far more powerful. The sales cycle is way shorter as opposed to outreaching outbound sales.`,
          name: 'Mila Tsirelman',
          role: 'Sales and Business Development Manager EMEA, COMMIT',
        },
      },
      {
        heading: "Mila's advice: try first, then decide",
        body: [
          `Mila doesn't hedge when asked if she'd recommend Extrovert: "Try first and then decide whether you want or you don't want the tool. Before you try, you never understand."`,
          `She tells her own customers she uses it. No secret. If you try the platform and don't see results right away, she'd tell you the same thing she learned herself — stick with it and keep tweaking the playbooks. She went through three to four rounds of targeting adjustments before things clicked.`,
        ],
        quote: {
          text: `This AI is 100% human managed. There is a human in the middle because you tell the AI where to go, why to go, what to seek, what to speak.`,
          name: 'Mila Tsirelman',
          role: 'Sales and Business Development Manager EMEA, COMMIT',
        },
      },
    ],
    cta: {
      heading: 'Want to turn LinkedIn into a warm inbound channel?',
      body: `Mila grew her network by 4,000+ connections and now receives 10–15 inbound requests daily from her target audience. If you're spending hours on manual LinkedIn outreach, Extrovert can help you scale it.`,
      links: [
        { label: 'Try Extrovert', href: 'https://www.goextrovert.com/' },
      ],
    },
    seo: {
      title: 'How Mila Added 4,000+ LinkedIn Connections | Extrovert',
      metaDescription:
        'Mila Tsirelman added 4,000+ LinkedIn connections in 2.5 years using Extrovert, with 10–15 inbound requests daily from her target audience. Read the full case study.',
      targetQuery: 'Extrovert LinkedIn growth case study',
      slug: '/mila-tsirelman-linkedin-growth-extrovert-case-study',
      imageAlt:
        'Mila Tsirelman, Sales and Business Development Manager at COMMIT, who added 4,000+ LinkedIn connections using Extrovert\'s AI-powered engagement platform',
      domain: 'www.goextrovert.com',
    },
    openGraph: {
      title: 'How Mila Added 4,000+ LinkedIn Connections | Extrovert',
      description:
        'Mila Tsirelman grew her LinkedIn network by 4,000+ connections in 2.5 years with Extrovert. 10–15 inbound requests daily from target prospects.',
      type: 'article',
      locale: 'en_US',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline:
            'How Mila added 4,000+ LinkedIn connections in 2.5 years with Extrovert',
          datePublished: '2026-06-22',
          dateModified: '2026-06-22',
          author: { '@type': 'Organization', name: 'Extrovert' },
          publisher: { '@type': 'Organization', name: 'Extrovert' },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: {
            '@type': 'Person',
            name: 'Mila Tsirelman',
            jobTitle: 'Sales and Business Development Manager, EMEA',
            worksFor: { '@type': 'Organization', name: 'COMMIT' },
          },
          reviewBody:
            'I grew my network of contacts on LinkedIn from four, five thousand roughly up to nine plus thousand throughout these two and a half years.',
        },
        { '@type': 'Organization', name: 'Extrovert', url: 'https://www.goextrovert.com/' },
        { '@type': 'Organization', name: 'COMMIT', url: 'https://www.comm-it.com/' },
        {
          '@type': 'Service',
          name: 'AI-powered LinkedIn engagement platform',
          provider: { '@type': 'Organization', name: 'Extrovert' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.goextrovert.com/' },
            { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.goextrovert.com/case-studies' },
            { '@type': 'ListItem', position: 3, name: 'How Mila added 4,000+ LinkedIn connections in 2.5 years with Extrovert' },
          ],
        },
      ],
    },
  },
  {
    slug: 'saasydb-leadforce-solutions',
    order: 2,
    type: 'build',
    client: 'SaasyDB',
    customer: 'LeadForce Solutions',
    tabLabel: 'SaasyDB',
    industry: 'SaaS lead database',
    region: 'United States',
    title:
      "How LeadForce Solutions found SaaS leads that don't exist in other databases with SaasyDB",
    deck: `<a href="https://www.leadforce.solutions/" target="_blank" rel="noopener noreferrer">LeadForce Solutions</a>, a go-to-market engineering firm for AI and software companies, needed a lead source with contacts that weren't already saturated with outreach from competing agencies. Founder Aaron Gusinov discovered <a href="https://www.saasydb.com/" target="_blank" rel="noopener noreferrer">SaasyDB</a> through a recommendation from go-to-market practitioner Taylor Haren, tested the data with a monthly subscription, and found that most contacts <strong>did not appear in any other database</strong> he checked. When scored against his target persona criteria, the majority of SaasyDB leads landed in <strong>"perfect fit" or "good fit"</strong> — a hit rate he had not seen from broader platforms. Aaron purchased a lifetime deal for $1,500, calling it his best investment in lead sourcing. Cold email campaigns using SaasyDB leads produce a <strong>3% overall reply rate</strong> with 10–15% positive responses.`,
    hero: { value: 'Not found elsewhere', label: 'most SaasyDB contacts don\'t appear anywhere else' },
    metrics: [
      { value: 'Majority', label: 'scored "perfect fit" against B2B and decision-maker criteria' },
      { value: '$1,500', label: 'one-time lifetime deal cost for perpetual access' },
      { value: '3%', label: 'cold email reply rate (10–15% of replies positive)' },
      { value: '~6 months', label: 'duration of SaasyDB usage at time of interview' },
    ],
    profile: [
      { label: 'Organization', value: 'LeadForce Solutions' },
      { label: 'Location', value: 'New York, US' },
      { label: 'Sector', value: 'Go-to-market engineering and outbound systems for AI/software companies' },
      { label: 'Size', value: 'Solo founder' },
      { label: 'Engagement', value: 'Lifetime deal subscriber' },
    ],
    logo: {
      src: '/examples/saasydb.svg',
      alt: 'SaasyDB',
      width: 1288,
      height: 380,
    },
    customerLogo: {
      src: '/examples/leadforce.png',
      alt: 'LeadForce Solutions',
      width: 480,
      height: 170,
    },
    video: { embedUrl: 'https://www.youtube.com/embed/EKD2cHGL5Us', label: 'Watch the video case study' },
    sections: [
      {
        heading: 'What problem was LeadForce Solutions trying to solve?',
        body: [
          `Aaron Gusinov designs, builds, and runs outbound systems in-house for AI and software companies looking to grow. His own client acquisition runs on the same cold email infrastructure he builds for others. If the lead source is weak, his pipeline dries up.`,
          `The difficulty was finding contacts who weren't already drowning in outreach. General-purpose databases classify companies by self-selected industry labels that are too broad to reliably filter for actual SaaS companies.`,
        ],
        quote: {
          text: `if I'm a company and I put myself under computer versus internet versus SaaS versus whatever on LinkedIn, that's what it's going to funnel into in these other databases.`,
          name: 'Aaron Gusinov',
          role: 'Founder, LeadForce Solutions',
        },
      },
      {
        heading: 'How did Aaron discover SaasyDB?',
        body: [
          `While building LeadForce Solutions alongside a position at J.P. Morgan, Aaron was studying go-to-market engineering from practitioners who had already built outbound agencies. One of them was Taylor Haren, a prominent figure in the field.`,
          `He contacted Stuart, SaasyDB's founder, started a month-to-month subscription to sample the data, and ran his own scoring process. His framework looked at whether leads were B2B, what vertical they operated in, and whether the right decision-makers were present. The majority of SaasyDB contacts scored as "perfect fit" or "good fit," validating that the database matched his target persona.`,
        ],
        quote: {
          text: `he was talking about how he sources leads. And this was one of the, he said, listen, if you want a great source for AI SaaS companies, there's none better than SaasyDB.`,
          name: 'Aaron Gusinov',
          role: 'Founder, LeadForce Solutions',
        },
      },
      {
        heading: 'Why did LeadForce Solutions choose SaasyDB over other databases?',
        body: [
          `Aaron is candid about what SaasyDB was not when he joined approximately six months before the interview. It did not have the slickest interface. Export times were slow. There were UI issues. But the data quality overrode those friction points.`,
          `Two factors drove his decision. First, niche specificity — SaasyDB focuses exclusively on SaaS and software companies. With other databases, Aaron would export a broader list and then run AI scripts to prune it. With SaasyDB, the gap between the raw export and a qualified list was smaller because the database was already filtered to his market. Second, the contacts did not appear elsewhere. In cold email, reaching people who aren't already getting dozens of other pitches matters.`,
        ],
        quote: {
          text: `I would cross-reference, I'm like, can I find this contact in another database? And I couldn't. So for me, that was very attractive.`,
          name: 'Aaron Gusinov',
          role: 'Founder, LeadForce Solutions',
        },
      },
      {
        heading: 'What results has LeadForce Solutions seen?',
        body: [
          `Aaron uses SaasyDB primarily to source leads for his own client acquisition, running cold email campaigns to AI and software company founders. His outreach is deliberately unscalable — custom video research for each prospect — trading volume for relevance.`,
          `He doesn't need high volume. Aaron targets five high-end clients and approximately ten smaller engagements, so each qualified response counts. SaasyDB also doubles as a sales tool: one client needed to target SaaS companies, and Aaron pitched his access to a proprietary database that most competitors don't know about.`,
          `He committed to a lifetime deal after validating the data on a monthly subscription.`,
        ],
        quote: {
          text: `it's very satisfying to know that if I email a thousand people here, I'm more likely going to get in touch with people who aren't inundated with emails than a thousand over here.`,
          name: 'Aaron Gusinov',
          role: 'Founder, LeadForce Solutions',
        },
      },
      {
        heading: 'Aaron recommends testing with a monthly subscription',
        body: [
          `The risk is low, Aaron says: "the risk to reward trade-off is very asymmetrical in your favor." Start with a monthly subscription — approximately $90–$100 at the time of the interview — test a sample of leads against your own scoring criteria, and decide from results.`,
        ],
        quote: {
          text: `this is the worst it gets. Like right now, it's good enough that Taylor Haren, who's like a big boy, called him out. And this is the worst that it will ever be because it's only going to improve.`,
          name: 'Aaron Gusinov',
          role: 'Founder, LeadForce Solutions',
        },
      },
    ],
    cta: {
      heading: 'Need SaaS leads your competitors can\'t find?',
      body: `LeadForce Solutions found that most SaasyDB contacts don't appear in any other database. If your outbound campaigns are hitting saturated inboxes, SaasyDB can give you an edge.`,
      links: [
        { label: 'Try SaasyDB', href: 'https://www.saasydb.com/' },
      ],
    },
    seo: {
      title: "LeadForce found leads no other database has | SaasyDB",
      metaDescription:
        'LeadForce Solutions sources SaaS leads through SaasyDB that don\'t appear in mainstream databases. Majority scored "perfect fit." Founder calls it "my best $1,500 I spent."',
      targetQuery: 'LeadForce Solutions SaasyDB case study',
      slug: '/case-studies/leadforce-solutions-saasydb-case-study',
      imageAlt:
        'Aaron Gusinov, Founder of LeadForce Solutions, on sourcing exclusive SaaS leads through SaasyDB that don\'t appear in mainstream databases',
      domain: 'www.saasydb.com',
    },
    openGraph: {
      title: "LeadForce found leads no other database has | SaasyDB",
      description:
        'LeadForce Solutions sources SaaS leads through SaasyDB that don\'t appear in mainstream databases. Majority scored "perfect fit." 3% cold email reply rate.',
      type: 'article',
      locale: 'en_US',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline:
            "How LeadForce Solutions found SaaS leads that don't exist in other databases with SaasyDB",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          author: { '@type': 'Organization', name: 'SaasyDB' },
          publisher: { '@type': 'Organization', name: 'SaasyDB' },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Aaron Gusinov',
            jobTitle: 'Founder',
            worksFor: { '@type': 'Organization', name: 'LeadForce Solutions' },
          },
          reviewBody:
            "it's very satisfying to know that if I email a thousand people here, I'm more likely going to get in touch with people who aren't inundated with emails than a thousand over here.",
        },
        { '@type': 'Organization', name: 'SaasyDB', url: 'https://www.saasydb.com/' },
        {
          '@type': 'Organization',
          name: 'LeadForce Solutions',
          url: 'https://www.leadforce.solutions/',
          address: { addressLocality: 'New York', addressCountry: 'US' },
        },
        {
          '@type': 'Service',
          name: 'SaaS and AI company lead database',
          provider: { '@type': 'Organization', name: 'SaasyDB' },
        },
        {
          '@type': 'VideoObject',
          name: 'LeadForce Solutions and SaasyDB case study',
          embedUrl: 'https://www.youtube.com/embed/EKD2cHGL5Us',
          uploadDate: '2026-06-02',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saasydb.com/' },
            { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.saasydb.com/case-studies' },
            { '@type': 'ListItem', position: 3, name: "How LeadForce Solutions found SaaS leads that don't exist in other databases with SaasyDB" },
          ],
        },
      ],
    },
  },
];

export const typeLabel = (type: CaseStudyExample['type']): string =>
  type === 'optimise' ? 'Optimised' : 'Built from scratch';
