# amryadam.com

My profile page, served by Cloudflare Workers at https://amryadam.com.

## How it is built

The site is plain static files in `public/`, with no build step.
`src/index.js` is a small Worker that sends `www.amryadam.com` to the bare domain and hands every other request to the static files.
`wrangler.jsonc` binds the Worker to `amryadam.com` and `www.amryadam.com` as custom domains, so Cloudflare creates the DNS records and the certificates.
`public/_headers` sets the security headers, including a strict Content Security Policy: the page loads no scripts, fonts or images from other origins.

## Work on it

```bash
npm install
npm run dev       # http://localhost:8787
```

## Deploy

A push to `main` deploys through `.github/workflows/deploy.yml`.
It needs two repository secrets: `CLOUDFLARE_API_TOKEN`, a token with the "Edit Cloudflare Workers" template, and `CLOUDFLARE_ACCOUNT_ID`.
Without them the workflow skips the deploy and says so.

To deploy by hand:

```bash
npx wrangler login
npm run deploy
```
