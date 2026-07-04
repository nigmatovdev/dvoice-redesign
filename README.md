This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

The contact/signup form proxies through a server-only route (`src/app/api/signup/route.ts`). Copy `.env.example` to `.env.local` and fill these in:

| Variable | Description |
| --- | --- |
| `SIGNUP_UPSTREAM_URL` | Full backend endpoint the form forwards to. |
| `SIGNUP_API_KEY` | Shared secret. Sent as the `X-API-Key` header; the backend rejects requests without it. Must match the key configured in the main app. |

Both are **server-only** — never prefix with `NEXT_PUBLIC_`. They are read by the Node.js process at runtime, so they must be set on whatever host runs `next start` (Vercel project env, or the VM's environment — see below).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on a VM (self-hosted)

To run this on your own server (Ubuntu VM, VPS, etc.) instead of Vercel — build it, run `next start` behind a process manager, and put Nginx + HTTPS in front.

Full step-by-step guide: **[DEPLOY.md](./DEPLOY.md)**.

Quick version:

```bash
npm ci
npm run build
npm run start   # serves on port 3000
```

Then reverse-proxy port 3000 with Nginx and terminate TLS with Certbot. See [DEPLOY.md](./DEPLOY.md) for the full setup (Node install, env vars, systemd/PM2, Nginx config, SSL, updates).

