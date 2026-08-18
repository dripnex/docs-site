# Dripnex docs

Fumadocs site for Dripnex. Next.js static export on Cloudflare Pages.

Marketing lives in [`dripnex/marketing`](https://github.com/dripnex/marketing).

## Develop

```bash
pnpm install
pnpm dev
```

Content is MDX under `content/docs/`. The site is served at `/`.

## Deploy

```bash
NEXT_PUBLIC_SITE_URL=https://dripnex-marketing.pages.dev \
NEXT_PUBLIC_DOCS_URL=https://dripnex-docs.pages.dev \
pnpm deploy
```

Pages project: `dripnex-docs` → https://dripnex-docs.pages.dev

When DNS is ready, CNAME `docs` → `dripnex-docs.pages.dev` (proxied). The custom domain is already attached on the Pages project.
