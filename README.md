# Miney Site

Miney landing page and documentation site.

## Stack

- Next.js App Router
- Fumadocs UI + Fumadocs MDX
- Static export for Cloudflare Pages

## Commands

```bash
npm install
npm run dev
npm run build
```

The production build is emitted to `out/`.

## Cloudflare Pages

Use the **Next.js (Static HTML Export)** preset:

- Build command: `npx next build`
- Build output directory: `out`
- Node version: `22`

This project is intentionally static-only. Do not add API routes, middleware, SSR pages, or Pages Functions unless the deployment target changes.
