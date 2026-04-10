import siteData from "../data/siteData.json";

export default function jsonLDGenerator({ type, post, url }) {
  // If the page has CMS data, use it.
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "https://bestcasestud.io/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Best Case Studio",
          "url": "https://bestcasestud.io"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }

  // Organization schema for all non-post pages
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.title,
    "url": import.meta.env.SITE,
    "logo": `${import.meta.env.SITE}/logo.png`,
    "description": siteData.description,
    "sameAs": [
      "https://www.linkedin.com/in/jonmcgreevy/",
      "https://jonmcgreevy.substack.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "jon@bestcasestud.io",
      "url": "https://bestcasestud.io/contact"
    }
  };

  return `<script type="application/ld+json">
    ${JSON.stringify(orgSchema, null, 2)}
  </script>`;
}
