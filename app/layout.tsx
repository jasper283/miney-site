import clsx from 'clsx';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Miney – Expense Tracker, Budget Planner & Personal Finance App',
    template: '%s | Miney',
  },
  description:
    'Track expenses, income, budgets, assets, and multiple currencies with Miney. A clean expense tracker and budget planner designed for effortless personal finance management.',
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
