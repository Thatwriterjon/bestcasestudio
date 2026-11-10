/**
 * Central pricing configuration for bestcasestud.io.
 * All prices across the site (hero, pricing section, FAQ, compare pages,
 * meta descriptions, footer) must be read from this file.
 *
 * Prices in this file are test prices per the positioning brief.
 */

export interface PricingProduct {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  whatYouGet: string;
  features: string[];
  deliveryTime: string;
}

export interface MonthlyPlan {
  id: string;
  name: string;
  storiesPerMonth: number;
  discountPercent: number;
  writtenPrice: string;
  writtenPriceNumeric: number;
  videoPrice: string;
  videoPriceNumeric: number;
  description: string;
  rollover: string;
}

export const pricingConfig = {
  written: {
    id: 'written',
    name: 'Written case study',
    price: '$2,500',
    priceNumeric: 2500,
    whatYouGet: 'One done-for-you written story, from the ask to your approval',
    features: ['One done-for-you written case study', 'From the ask to your approval'],
    deliveryTime: '14 days from the interview',
  } as PricingProduct,

  video: {
    id: 'video',
    name: 'Video case study',
    price: '$5,000',
    priceNumeric: 5000,
    whatYouGet:
      'The written case study, a 2 to 3 minute customer video, a 30 to 60 second cut for your homepage and emails, videos for social media, a LinkedIn carousel, a pull-quote and short summary your sales team can paste into an email, and a "when to use what" guide',
    features: [
      'The written case study',
      'A 2 to 3 minute customer video',
      'A 30 to 60 second cut for your homepage and emails',
      'Videos for social media',
      'A LinkedIn carousel',
      'A pull-quote and short summary your sales team can paste into an email',
      'A "when to use what" guide',
    ],
    deliveryTime: '14 days from the interview',
  } as PricingProduct,

  monthly: {
    id: 'monthly',
    name: 'Monthly plan',
    storiesPerMonth: 2,
    discountPercent: 15,
    writtenPrice: '$4,250',
    writtenPriceNumeric: 4250,
    videoPrice: '$8,500',
    videoPriceNumeric: 8500,
    description: '2 stories a month, either type, 15% off, unused stories roll over for a quarter',
    rollover: 'Unused stories roll over for a quarter',
  } as MonthlyPlan,

  guideNote:
    'Every video case study includes a one-page guide to which piece to send at which stage of a deal.',
};
