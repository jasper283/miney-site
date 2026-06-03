import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import clsx from 'clsx';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Miney - Simple personal finance',
    template: '%s | Miney',
  },
  description:
    'Miney is a simple personal finance app for tracking expenses, income, budgets, and assets.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)} suppressHydrationWarning>
      <body>
        <RootProvider search={{ enabled: false }} theme={{ defaultTheme: 'light', forcedTheme: 'light' }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
