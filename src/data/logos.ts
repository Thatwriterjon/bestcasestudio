/**
 * Logo wall entries, in the order they appear on the home page.
 *
 * Set `LOGOS_FINAL` to true once every entry has a real `svgPath`. That hides the
 * "drop SVGs in here" placeholder note under the wall.
 */
export interface LogoEntry {
  name: string;
  /** Path under /public, e.g. "/logos/google.webp" or "/logos/rally.svg" — real vectors stay
   *  SVG, logos sourced from rasters are right-sized WebP. Falls back to a serif wordmark when
   *  omitted. */
  svgPath?: string;
  /** Optional href to the brand site, opens in new tab if set. */
  href?: string;
}

export const logos: LogoEntry[] = [
  { name: 'Extrovert', svgPath: '/examples/extrovert.svg' },
  { name: 'SaasyDB', svgPath: '/examples/saasydb.svg' },
  { name: 'Google', svgPath: '/logos/google.webp' },
  { name: 'Vivaldi', svgPath: '/logos/vivaldi.webp' },
  { name: 'Rally', svgPath: '/logos/rally.svg' },
  { name: 'Engine Yard', svgPath: '/logos/engine-yard.svg' },
  { name: 'TagTeam AI', svgPath: '/logos/tagteam-ai.webp' },
  { name: 'Projul', svgPath: '/logos/projul.svg' },
  { name: 'Scoro', svgPath: '/logos/scoro.webp' },
  { name: 'BabelForce', svgPath: '/logos/babelforce.webp' },
  { name: 'Bullet', svgPath: '/logos/bullet.webp' },
  { name: 'Elastic', svgPath: '/logos/elastic.webp' },
  { name: 'Float', svgPath: '/logos/float.webp' },
  { name: 'isms.online', svgPath: '/logos/isms-online.webp' },
];

export const LOGOS_FINAL = true;
