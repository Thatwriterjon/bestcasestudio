# Testimonial avatars

Drop avatar files in here with these exact filenames:

- `marc-thomas.jpg`
- `alessandro-trezza.jpg`
- `stuart-brent.jpg`
- `michael-semer.jpg`
- `pedro-villalobos.jpg`
- `polly-wong.jpg`

## Specs

- Format: `.jpg` (or `.webp`)
- Square crop, **88×88 minimum**, 176×176 retina recommended
- Tight head crop — they render as 44px circles on the page

You don't need all six to ship. Whichever you don't have keeps the placeholder ink-circle with
initials, which degrades fine.

Once you drop a file in, add the matching `avatar:` line to the testimonial's YAML in
[../../src/content/testimonials/](../../src/content/testimonials/), e.g.

```yaml
avatar: /testimonials/marc-thomas.jpg
```

Or ping me and I'll wire them up in one pass.
