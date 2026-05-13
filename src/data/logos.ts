/**
 * Logo wall entries, in the order they appear on the home page.
 *
 * Set `LOGOS_FINAL` to true once every entry has a real `svgPath`. That hides the
 * "drop SVGs in here" placeholder note under the wall.
 */
export interface LogoEntry {
  name: string;
  /** Path under /public, e.g. "/logos/google.svg". Falls back to a serif wordmark when omitted. */
  svgPath?: string;
  /** Optional href to the brand site, opens in new tab if set. */
  href?: string;
}

export const logos: LogoEntry[] = [
  { name: 'Google', svgPath: '/logos/google.svg' },
  { name: 'Vivaldi', svgPath: '/logos/vivaldi.svg' },
  { name: 'Rally', svgPath: '/logos/rally.svg' },
  { name: 'Engine Yard', svgPath: '/logos/engine-yard.svg' },
  { name: 'TagTeam AI', svgPath: '/logos/tagteam-ai.svg' },
  { name: 'Projul', svgPath: '/logos/projul.svg' },
  { name: 'Scoro', svgPath: '/logos/scoro.svg' },
  { name: 'BabelForce', svgPath: '/logos/babelforce.svg' },
  { name: 'Bullet', svgPath: '/logos/bullet.svg' },
  { name: 'Elastic', svgPath: '/logos/elastic.svg' },
  { name: 'Float', svgPath: '/logos/float.svg' },
  { name: 'isms.online', svgPath: '/logos/isms-online.svg' },
];

export const LOGOS_FINAL = true;
