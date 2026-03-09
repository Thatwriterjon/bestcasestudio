/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute } from '../chunks/astro/server_CbK4ewfO.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_DrPmlIZ4.mjs';
import { b as $$Section, c as $$SectionTitle, $ as $$Logos, a as $$Services } from '../chunks/Services_CFzkDrSd.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_3gkOC2fR.mjs';
import { c as createSvgComponent, $ as $$MainLayout } from '../chunks/MainLayout_CV8YfWt-.mjs';
export { renderers } from '../renderers.mjs';

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      index: 1,
      title: "The Interview",
      description: "We interview your customers remotely, uncovering stories, quotes, and examples that will resonate with your ICP and support your positioning."
    },
    {
      index: 2,
      title: "Editing & Writing",
      description: "We edit the video into multiple lengths for different uses and write a landing page for your website."
    },
    {
      index: 3,
      title: "Content Delivery",
      description: "Once you're happy, we hand over all the files. You own the content outright and can start sharing immediately."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Our Process", "description": "Three steps from customer interview to ready-to-publish content." })} <div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1 gap-[2px]"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-gray rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <span class="text-6xl text-zinc-600 font-bold leading-none">0${step.index}</span> <h3 class="text-2xl font-medium">${step.title}</h3> <p class="text-zinc-400 leading-relaxed">${step.description}</p> </div> </div> ` })}`)} </div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/sections/Cases.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> <div class="relative flex flex-col lg:flex-row items-center justify-between gap-10 bg-dark text-gray rounded-[45px] px-[60px] py-[70px] overflow-hidden"> <!-- Left: content --> <div class="max-w-[560px]"> <h2 class="text-5xl lg:text-6xl font-medium leading-tight mb-6">
Let's make things happen
</h2> <p class="text-zinc-400 text-lg mb-8">
Book a free 30-minute discovery call. No hard sell — just a conversation
          about whether case studies are the right move for you right now.
</p> <a href="/contact" class="inline-flex items-center gap-3 bg-pink text-black px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-medium">
Book a discovery call
</a> </div> <!-- Right: decorative element --> <div class="shrink-0 w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full border border-zinc-700 flex items-center justify-center"> <div class="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-full border border-zinc-600 flex items-center justify-center"> <div class="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] rounded-full bg-pink opacity-20"></div> </div> </div> </div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/sections/Contact.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-4xl font-medium leading-none md:text-6xl text-center md:text-left">Your current customers are your most effective salespeople</h1> <p class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">Case studies build trust for B2B SaaS companies by showcasing how you've already helped your existing customers. On your website, on social media, and in your sales materials. Instead of a boring PDF no-one reads, showcase your case studies on landing pages and with video content.</p> <div class="w-full justify-center md:justify-start items-center flex flex-col sm:flex-row gap-4"> <a href="https://calendly.com/thatwriterjon/best-case-studio" class="px-8 py-5 bg-pink hover:opacity-90 rounded-2xl text-center text-black text-xl font-normal leading-7">Book Discovery Call
</a> <a href="https://scorecard.bestcasestud.io" target="_blank" rel="noopener noreferrer" class="px-8 py-5 bg-yellow hover:opacity-90 rounded-2xl text-center text-black border border-zinc-900 text-xl font-normal leading-7">Credibility Scorecard
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Website hero image.png" alt="Best Case Studio hero" loading="eager" class="w-full h-auto"> </div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/sections/Hero.astro", void 0);

const linkd = createSvgComponent({"meta":{"src":"/_astro/profile-in.CjyVQDgO.svg","width":34,"height":34,"format":"svg"},"attributes":{"width":"34","height":"34","viewBox":"0 0 34 34","fill":"none"},"children":"\n<circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"black\" />\n<path d=\"M9.31776 25H12.8131V13.6844H9.31776V25Z\" fill=\"#B9FF66\" />\n<path d=\"M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z\" fill=\"#B9FF66\" />\n<path d=\"M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z\" fill=\"#B9FF66\" />\n"});

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { pic, name, role, description, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-[60px]"> <div class="flex flex-col sm:flex-row relative"> <picture>${renderComponent($$result2, "Image", $$Image, { "src": pic, "alt": name })}</picture> <div class="flex flex-col justify-end sm:ml-5"> <h3 class="text-lg font-medium">${name}</h3> <p class="text-sm font-normal">${role}</p> </div> <a${addAttribute(link, "href")} class="absolute right-0 top-0">${renderComponent($$result2, "Image", $$Image, { "src": linkd, "alt": "Linkedin Logo" })}</a> </div> <div class="w-full h-[1px] bg-black my-7"></div> <div>${description}</div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/ui/TeamCard.astro", void 0);

const p1 = new Proxy({"src":"/_astro/t1.DCqpUh7U.png","width":106,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jon/bestcasestud.io/src/assets/team/t1.png";
							}
							
							return target[name];
						}
					});

const p2 = new Proxy({"src":"/_astro/t2.nG-pfUKH.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jon/bestcasestud.io/src/assets/team/t2.png";
							}
							
							return target[name];
						}
					});

const p3 = new Proxy({"src":"/_astro/t3.CD1xqxr1.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jon/bestcasestud.io/src/assets/team/t3.png";
							}
							
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const description = "The small, focused team behind every Best Case Studio project.";
  const team = [
    {
      pic: p1,
      name: "Jon McGreevy",
      role: "Founder & Copywriter",
      description: "Jon has spent 7 years helping B2B SaaS companies with their copy, content, and positioning. He specialises in interviewing customers to uncover positioning insights that resonate with the right ICP.",
      link: "https://linkedin.com/in/jonmcgreevy"
    },
    {
      pic: p2,
      name: "Alex",
      role: "Videographer",
      description: "Alex handles all video production, filming, and editing. With years of experience creating professional video content, Alex ensures every case study looks polished and builds trust with your ideal customers.",
      link: "https://linkedin.com"
    },
    {
      pic: p3,
      name: "Jessie",
      role: "Customer Success",
      description: "Jessie keeps clients happy and everything running smoothly. Drawing on her Scrum Master background, she coordinates timelines, manages communication between all parties, and makes sure the process feels effortless from kickoff to final delivery.",
      link: "https://linkedin.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "The Team", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"> ${team.map((member, index) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { "key": index, "pic": member.pic, "name": member.name, "role": member.role, "description": member.description, "link": member.link })}`)} </div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/sections/Team.astro", void 0);

const $$Referral = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "referral" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> <div class="relative flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#F3F3F3] rounded-[45px] px-[60px] py-[70px] overflow-hidden"> <!-- Left: content --> <div class="relative z-10 max-w-[560px]"> <div class="inline-block bg-pink text-black text-sm font-medium px-4 py-1.5 rounded-full mb-6">
Referral Programme
</div> <h2 class="text-5xl lg:text-6xl font-medium leading-tight mb-6">
Earn $500 per<br>referral. No cap.
</h2> <p class="text-lg text-zinc-600 mb-8">
Know a B2B SaaS company that needs case studies? Make the introduction.
          When they pay their first invoice, we send you $500 cash — no forms, no limits.
</p> <a href="mailto:jon@bestcasestud.io?subject=Referral" class="inline-flex items-center gap-3 bg-dark text-gray px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg">
Email us to refer someone
</a> </div> <!-- Right: decorative element --> <div class="relative z-10 shrink-0 w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full bg-pink flex flex-col items-center justify-center text-center"> <span class="text-7xl lg:text-8xl font-bold text-black leading-none">$500</span> <span class="text-base font-medium text-black/70 mt-2">per referral</span> </div> </div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/sections/Referral.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faq = [
    {
      title: "How long does a case study take?",
      description: "A Single takes 2\u20133 weeks from customer interview to delivery. The Trio takes 3\u20136 weeks. We work around your client's schedule for the interview."
    },
    {
      title: "Do you work with clients outside the UK?",
      description: "Yes \u2014 we work with B2B SaaS companies globally. Interviews are remote, so location doesn't matter."
    },
    {
      title: "Can I buy one case study now and add more later?",
      description: "Absolutely. You can start with a Single and commission a Trio later. The per-case-study price stays the same \u2014 the Trio just saves you money upfront."
    },
    {
      title: "What makes Best Case Studio different from a freelance copywriter?",
      description: "We handle the full production stack: customer interview, video editing, landing page copy, and social assets. Most copywriters hand you a Word doc. We hand you a ready-to-publish content package."
    },
    {
      title: "What types of B2B SaaS companies do you work with?",
      description: "We work best with companies that have at least a handful of happy customers and want to use their stories to close more deals. If you're pre-product-market-fit, case studies probably aren't your next move."
    },
    {
      title: "How do case studies actually improve conversion rates?",
      description: "A case study removes the 'will this work for us?' objection by showing a real company with a real result. It shortens the buying decision for prospects at the bottom of the funnel."
    },
    {
      title: "What if our customer can't point to a specific measurable result?",
      description: "That's fine. Not every great case study leads with a metric. Strong stories about reduced friction, improved confidence, or better team alignment are just as persuasive to the right buyer."
    },
    {
      title: "Why is the Trio cheaper per case study?",
      description: "Three interviews scheduled in the same window, one editing sprint, one delivery round. The fixed overhead is shared, so we pass the saving on."
    },
    {
      title: "Who actually runs Best Case Studio?",
      description: "Jon McGreevy leads every project \u2014 strategy, interviews, and copy. Alex handles all video production. Jessie keeps projects on track. There's no outsourcing or AI-generated content."
    },
    {
      title: "How does the $500 referral bounty work?",
      description: "Refer a B2B SaaS company to us. When they make their first payment, we send you $500 cash \u2014 no cap on how many referrals you make."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "faq" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Frequently Asked Questions", "description": "Everything you need to know before booking a discovery call." })} <div> ${faq.map((item, i) => renderTemplate`<details class="group border-t border-zinc-200 last:border-b"> <summary class="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-lg font-medium select-none"> ${item.title} <span class="shrink-0 text-zinc-400 group-open:rotate-45 transition-transform duration-200 text-2xl leading-none">+</span> </summary> <p class="pb-5 text-zinc-500 leading-relaxed">${item.description}</p> </details>`)} </div> </div> ` })}`;
}, "/Users/jon/bestcasestud.io/src/components/sections/FAQ.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Best Case Studio \u2014 B2B SaaS Case Studies", "description": "Best Case Studio creates full-stack case studies for B2B SaaS companies \u2014 video, landing page copy, and social assets \u2014 so your customers sell for you." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Logos", $$Logos, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Referral", $$Referral, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ` })}`;
}, "/Users/jon/bestcasestud.io/src/pages/index.astro", void 0);

const $$file = "/Users/jon/bestcasestud.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
