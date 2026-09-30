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

- `app/` — routes, layout, and global styles
- `components/` — reusable UI components
- `lib/` — shared utilities and application logic
- `types/` — shared TypeScript types

## Checks

```bash
npm run lint
npm run build
```

If Turbopack cannot bind to a local port in a restricted environment, run `npm run build -- --webpack`.
