# PR Lab

A Next.js App Router project with TypeScript, Tailwind CSS, Auth.js, and Prisma 7.

## Local setup

1. Install dependencies: `npm install` (this generates Prisma Client).
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a random `AUTH_SECRET` of at least 32 characters. Keep `.env` out of Git.
3. Start PostgreSQL and apply migrations: `npm run db:migrate`.
4. Start the app: `npm run dev`.

Open [http://localhost:3000](http://localhost:3000). Sign up at `/signup`, log in at `/login`, and visit the protected `/dashboard`. The dashboard has a log out button. Credentials are stored as bcrypt hashes in the existing Prisma `User` model; Auth.js uses signed JWT sessions.

The original Prisma schema and migrations are now inside this repository under `prisma/`. The database URL used by Prisma CLI and the app must point to the same database. Existing users without a password hash cannot use password login until they create credentials through a separate account recovery flow.

## Project structure

- `src/app/` — routes, Server Actions, layout, and styles
- `src/auth.ts` — Auth.js configuration
- `src/lib/prisma.ts` — shared Prisma Client
- `src/components/` — reusable UI components
- `src/types/` — shared TypeScript types
- `prisma/` — schema and migrations
- `public/` — static assets

## Checks

```bash
npm run lint
npm run build
```

If Turbopack cannot bind to a local port in a restricted environment, run `npm run build -- --webpack`.
