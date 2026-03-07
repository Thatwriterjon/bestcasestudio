/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DTu46K8G.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CxWmjx_D.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Book a Discovery Call \u2014 Best Case Studio", "description": "Book a free 30-minute discovery call with Best Case Studio. No hard sell \u2014 just a conversation about your case study needs." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="w-full max-w-[1240px] mx-auto px-5 mt-[160px] mb-[140px]"> <h1 class="text-5xl lg:text-6xl font-medium leading-tight mb-4">
Book a discovery call
</h1> <p class="text-zinc-500 text-lg mb-16 max-w-[560px]">
30 minutes. No hard sell. We'll find out if we're a good fit and answer any questions you have.
</p> <div class="flex flex-col lg:flex-row gap-16"> <!-- Calendly embed --> <div class="flex-1"> <h2 class="text-2xl font-medium mb-6">Pick a time</h2> <div class="calendly-inline-widget rounded-[20px] overflow-hidden" data-url="https://calendly.com/thatwriterjon/best-case-studio" style="min-width:320px;height:700px;"></div> <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async><\/script> <p class="mt-4 text-sm text-zinc-500">
Can't see the calendar?
<a href="https://calendly.com/thatwriterjon/best-case-studio" target="_blank" class="text-pink underline">Book directly on Calendly</a>.
</p> </div> <!-- Contact form --> <div class="lg:w-[420px]"> <h2 class="text-2xl font-medium mb-6">Or send a message</h2> <form name="contact" method="POST" data-netlify="true" class="flex flex-col gap-5"> <input type="hidden" name="form-name" value="contact"> <div> <label for="name" class="block text-sm font-medium mb-2">Name</label> <input type="text" id="name" name="name" placeholder="Your name" required class="w-full px-[20px] py-[14px] border border-zinc-300 rounded-[14px] text-black outline-none focus:border-pink transition-colors"> </div> <div> <label for="email" class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email" name="email" placeholder="you@company.com" required class="w-full px-[20px] py-[14px] border border-zinc-300 rounded-[14px] text-black outline-none focus:border-pink transition-colors"> </div> <div> <label for="company" class="block text-sm font-medium mb-2">Company</label> <input type="text" id="company" name="company" placeholder="Company name" class="w-full px-[20px] py-[14px] border border-zinc-300 rounded-[14px] text-black outline-none focus:border-pink transition-colors"> </div> <div> <label for="message" class="block text-sm font-medium mb-2">Message</label> <textarea id="message" name="message" placeholder="Tell us a bit about what you're looking for" rows="5" class="w-full px-[20px] py-[14px] border border-zinc-300 rounded-[14px] text-black outline-none focus:border-pink transition-colors resize-none"></textarea> </div> <button type="submit" class="w-full bg-dark text-gray py-4 rounded-2xl hover:opacity-90 transition-opacity font-medium text-lg">
Send message
</button> </form> </div> </div> </div> `])), maybeRenderHead()) })}`;
}, "/Users/jon/bestcasestud.io/src/pages/contact.astro", void 0);

const $$file = "/Users/jon/bestcasestud.io/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
