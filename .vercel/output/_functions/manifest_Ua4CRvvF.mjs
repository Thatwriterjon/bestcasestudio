import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_DTu46K8G.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BlmgRBV-.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jon/bestcasestud.io/","cacheDir":"file:///Users/jon/bestcasestud.io/node_modules/.astro/","outDir":"file:///Users/jon/bestcasestud.io/dist/","srcDir":"file:///Users/jon/bestcasestud.io/src/","publicDir":"file:///Users/jon/bestcasestud.io/public/","buildClientDir":"file:///Users/jon/bestcasestud.io/dist/client/","buildServerDir":"file:///Users/jon/bestcasestud.io/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/search\\.json\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/search.json.ts","pathname":"/articles/api/search.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/articles/search","isIndex":false,"type":"page","pattern":"^\\/articles\\/search\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/search.astro","pathname":"/articles/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/articles/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/articles\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/articles/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"}],"routeData":{"route":"/services/seo","isIndex":false,"type":"page","pattern":"^\\/services\\/seo\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"seo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/seo.astro","pathname":"/services/seo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"},{"type":"inline","content":".custom-grid[data-astro-cid-qzn24t3o]{grid-template:auto auto}.service-item[data-astro-cid-ucd2ps2b]:nth-child(2n){margin-left:-1rem;margin-right:-1rem;background-color:var(--gray);--tw-bg-opacity: .2;padding:4rem 1rem}@media (min-width: 768px){.service-item[data-astro-cid-ucd2ps2b]:nth-child(2n){margin-left:-1.5rem;margin-right:-1.5rem;padding-left:1.5rem;padding-right:1.5rem}}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D5DbnFwk.css"},{"type":"inline","content":".accordion__icon[data-astro-cid-kq6n5brs]:before,.accordion__icon[data-astro-cid-kq6n5brs]:after{content:\"\";position:absolute;background-color:#000;transition:opacity .3s ease}.accordion__icon[data-astro-cid-kq6n5brs]:before{width:100%;height:6px;left:0;top:calc(50% - 3px)}.accordion__icon[data-astro-cid-kq6n5brs]:after{width:6px;height:100%;left:calc(50% - 3px);top:0}.accordion__icon[data-astro-cid-kq6n5brs].collapsed:after{opacity:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://positivustheme.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/jon/bestcasestud.io/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/jon/bestcasestud.io/src/pages/articles/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/jon/bestcasestud.io/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jon/bestcasestud.io/src/pages/articles/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jon/bestcasestud.io/src/pages/articles/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jon/bestcasestud.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/jon/bestcasestud.io/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/jon/bestcasestud.io/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jon/bestcasestud.io/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jon/bestcasestud.io/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["/Users/jon/bestcasestud.io/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/Users/jon/bestcasestud.io/src/pages/services/seo.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/api/search.json@_@ts":"pages/articles/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/search@_@astro":"pages/articles/search.astro.mjs","\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro":"pages/articles/tag/_---tag_.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/services/seo@_@astro":"pages/services/seo.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ua4CRvvF.mjs","/Users/jon/bestcasestud.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BebVTaSo.mjs","/Users/jon/bestcasestud.io/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/jon/bestcasestud.io/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_B34oKgh9.mjs","/Users/jon/bestcasestud.io/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.DZe-9zfI.js","/Users/jon/bestcasestud.io/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts":"_astro/AccordionItem.astro_astro_type_script_index_0_lang.BD9YPwbE.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jon/bestcasestud.io/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts","function r(){const c=document.querySelectorAll(\".accordion__item\");c.forEach(e=>{const s=e.querySelector(\".accordion__toggle\"),t=e.querySelector(\".accordion__icon\");s&&t&&s.addEventListener(\"click\",l=>(l.stopPropagation(),c.forEach(a=>{if(a!==e&&a.classList.contains(\"active\")){const o=a.querySelector(\".accordion__toggle\"),i=a.querySelector(\".accordion__icon\");o&&i&&(a.classList.remove(\"active\"),a.classList.remove(\"bg-yellow\"),o.setAttribute(\"aria-expanded\",\"false\"),a.style.height=\"160px\",i.classList.remove(\"rotate-180\"),i.classList.remove(\"collapsed\"))}}),e.classList.contains(\"active\")?(e.classList.remove(\"active\"),s.setAttribute(\"aria-expanded\",\"false\"),e.style.height=\"160px\",t.classList.remove(\"rotate-180\"),e.classList.remove(\"bg-yellow\"),t.classList.remove(\"collapsed\")):(e.classList.add(\"active\"),s.setAttribute(\"aria-expanded\",\"true\"),e.style.height=e.scrollHeight+\"px\",e.classList.add(\"bg-yellow\"),t.classList.add(\"rotate-180\"),t.classList.add(\"collapsed\")),l.preventDefault(),!1))}),document.addEventListener(\"click\",e=>{c.forEach(s=>{const t=s.querySelector(\".accordion__toggle\"),l=s.querySelector(\".accordion__icon\");t&&l&&!s.contains(e.target)&&(s.classList.remove(\"active\"),s.classList.remove(\"bg-yellow\"),t.setAttribute(\"aria-expanded\",\"false\"),s.style.height=\"160px\",l.classList.remove(\"rotate-180\"),l.classList.remove(\"collapsed\"))})})}r();document.addEventListener(\"astro:after-swap\",r);"]],"assets":["/_astro/card-pic1.LmmlwL7_.png","/_astro/card-pic3.D4d3JTsx.png","/_astro/card-pic2.BeQ4x_k2.png","/_astro/card-pic5.CqK5dBMJ.png","/_astro/card-pic4.CPZGvqT8.png","/_astro/card-pic6.CXJkFMY0.png","/_astro/icon4.C23WoaWh.svg","/_astro/icon1.C4wy8w83.svg","/_astro/icon3.C2Kx7sAW.svg","/_astro/icon2.B-2J246E.svg","/_astro/t1.DCqpUh7U.png","/_astro/t2.nG-pfUKH.png","/_astro/hero.Cc0GD7y9.svg","/_astro/Rally.DHTc5d61.svg","/_astro/MyCheckins.t1z6QMDy.svg","/_astro/TagTeam AI.BtiBZg3K.svg","/_astro/Projul.C-LtWZJP.svg","/_astro/Vivaldi.BE01AMee.svg","/_astro/Scoro.DaDlGlQn.svg","/_astro/BabelForce.DXeFrvyy.svg","/_astro/Elastic.DOVMyQzQ.svg","/_astro/isms.online.Dfjc_D5T.svg","/_astro/Float.xlo11b14.svg","/_astro/t3.CD1xqxr1.png","/_astro/Bullet.BlRadYeE.svg","/_astro/Engine Yard.BtpjIGgC.svg","/_astro/alt-logo.Bri7TY3f.svg","/_astro/profile-in.CjyVQDgO.svg","/_astro/about.D5DbnFwk.css","/404.svg","/cover.png","/favicon.svg","/logo.svg","/_astro/MainLayout.astro_astro_type_script_index_0_lang.DZe-9zfI.js","/blog/image1.png","/blog/image2.png","/blog/image3.png","/blog/image4.png","/blog/image5.png","/fonts/grotesk/SpaceGrotesk-Medium.woff","/fonts/grotesk/SpaceGrotesk-Regular.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"+4OY6n4qDjc75U9kELrKceAa+SKoyON73CTZTkcF1uk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
