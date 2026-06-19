import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Home } from 'lucide-react';

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
      }
    ],
  };
}
