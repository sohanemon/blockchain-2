import { Metadata, Viewport } from 'next';
import { NavType } from '@/types';

export type SiteConfig = typeof siteConfig;

const favicon = '/favicon.ico';

export const siteConfig: {
  metadata: Metadata;
  viewport: Viewport;
  nav: NavType[];
  underConstruction: NavType[];
} = {
  metadata: {
    title: {
      default: 'BlockChain + Binance',
      template: `%s - BlockChain`,
    },
    icons: {
      icon: favicon,
      shortcut: favicon,
      apple: favicon,
    },
    description: 'BlockChain + Binance',
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
  },
  nav: [
    { title: 'home', href: '/' },
    { title: 'images', href: '/images' },
  ],
  underConstruction: [{ title: 'about', href: '/about' }],
};
