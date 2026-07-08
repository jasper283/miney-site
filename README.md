# Miney - Expense Tracker, Budget Planner & Personal Finance App

Miney is a clean personal finance app for tracking expenses, income, budgets, assets, accounts, credit cards, and multiple currencies in one simple workflow.

This repository contains the open-source landing page and documentation site for [Miney](https://miney.app), built to introduce the app, explain its personal finance features, and support search discovery for people looking for an expense tracker, budget planner, money manager, asset tracker, or multi-currency finance app.

Download Miney on the App Store: [Miney for iPhone](https://apps.apple.com/us/app/miney/id6738577414).

## About Miney

Miney helps people understand their money without turning daily finance tracking into a chore. It is designed for simple expense logging, flexible budgeting, account and asset tracking, recurring money routines, and readable monthly finance reviews.

Core Miney features include:

- Expense and income tracking with categories, notes, photos, accounts, taxes, discounts, and optional details.
- Flexible budget planning for categories or total spending, with custom periods, rollover, and budget history.
- Asset tracking for cash, bank accounts, savings, investments, credit cards, billing cycles, and payment reminders.
- Multi-currency support with automatic exchange rates for travel, international spending, and global personal finance.
- Spending insights with charts, category breakdowns, filters, trends, and account-level views.
- Cloud sync across devices so financial records, budgets, and balances stay up to date.

## SEO Keywords

Miney is relevant to searches around:

- expense tracker app
- budget planner app
- personal finance app
- money manager app
- spending tracker
- income and expense tracker
- asset tracker
- credit card tracker
- multi-currency expense tracker
- finance app for iPhone
- personal budget tracker
- monthly budget planner

## Website

The Miney website is a static Next.js site with marketing pages, product documentation, privacy policy, terms, and FAQ content.

The site highlights:

- Miney's positioning as a simple expense tracker and personal finance app.
- Product features for expenses, budgets, assets, accounts, sync, and currencies.
- Documentation pages for support, privacy, terms, and user-facing product information.
- Static export deployment for fast hosting on Cloudflare Pages.

## Tech Stack

- [Next.js App Router](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fumadocs UI](https://fumadocs.dev/)
- [Fumadocs MDX](https://fumadocs.dev/docs/mdx)
- Static HTML export for [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

Requirements:

- Node.js 22 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The production build is emitted to `out/`.

## Project Structure

```text
app/        Next.js app routes and global layout
components/ Landing page and shared UI components
content/    Homepage copy and MDX documentation content
images/     Product imagery and visual assets
lib/        Shared source and layout helpers
public/     Static public assets
styles/     Shared styles
```

## Cloudflare Pages Deployment

Use the **Next.js (Static HTML Export)** preset:

- Build command: `npx next build`
- Build output directory: `out`
- Node version: `22`

This project is intentionally static-only. Do not add API routes, middleware, SSR pages, or Pages Functions unless the deployment target changes.

## Contributing

Contributions that improve Miney's website content, SEO metadata, accessibility, documentation clarity, performance, and static deployment reliability are welcome.

Good first areas to improve:

- Add or refine documentation for Miney features.
- Improve SEO copy for personal finance and expense tracking use cases.
- Enhance accessibility for landing page sections and documentation pages.
- Optimize images, metadata, structured content, and page performance.

## License

This repository is being prepared for open source release. Add the final license file before publishing publicly.
