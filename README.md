# PR Lab

A Next.js portfolio project built with TypeScript, Tailwind CSS, and the App Router.

## Get started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — routes, layout, and global styles
- `src/components/` — reusable UI components
- `src/lib/` — shared utilities and application logic
- `src/types/` — shared TypeScript types
- `public/` — static assets

## Checks

```bash
npm run lint
npm run build
```

If Turbopack cannot bind to a local port in a restricted environment, run `npm run build -- --webpack`.
