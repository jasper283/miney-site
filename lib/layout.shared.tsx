import { BookOpen, Globe2, Home, Sparkles } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Miney',
      url: '/',
    },
    searchToggle: {
      enabled: false,
    },
    themeSwitch: {
      enabled: false,
    },
    links: [
      {
        icon: <Home />,
        text: 'Home',
        url: '/',
      },
      {
        icon: <BookOpen />,
        text: 'Docs',
        url: '/docs',
      },
      {
        icon: <Sparkles />,
        text: 'Features',
        url: '/#features',
      },
      {
        icon: <Globe2 />,
        text: 'Cloudflare',
        url: '/docs/deployment',
        secondary: true,
      },
    ],
  };
}
