# Zohair Khan — Portfolio

Black-and-white editorial portfolio. Next.js (App Router) + Tailwind CSS v4 + Framer Motion.
Type: Instrument Sans / Instrument Serif / Space Mono.

## Run it locally

```bash
cd portfolio
npm install      # first time only
npm run dev      # http://localhost:3000
```

## Before you deploy — 3 quick edits

1. **Live demo URLs** — in `data/projects.js`, replace the two `REPLACE-ME-*.streamlit.app`
   placeholders with your real Streamlit links (Medical Fraud System + ChurnAudit).
2. **Resume** — drop your resume as `public/resume.pdf`. The nav "Resume" button links to it.
3. **Flip "coming soon" projects live** — when *What Should I Play* / *Digital Twin* are deployed,
   open `data/projects.js`, change that project's `status: "soon"` to `status: "live"`, and add a
   `demo: "https://..."` line. That's the whole change — the card updates itself.

## Editing content

- **Projects** → `data/projects.js` (single source of truth; `featured: true` = big case-study row, `false` = compact entry).
- **Hero headline + intro** → `components/Hero.jsx`.
- **Marquee metrics** → `components/Marquee.jsx`.
- **Experience** → `components/Experience.jsx`.
- **About text + skills lists** → `components/About.jsx`.
- **Contact / footer** → `components/Contact.jsx`.
- **Colors & fonts** → `app/globals.css` (`@theme` block) and `app/layout.js` (font imports).

## Deploy to Vercel + connect your Porkbun domain

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo → Deploy. You get a free `*.vercel.app` URL.
3. In Vercel → Project → Settings → **Domains**, add your Porkbun domain. Vercel shows two records.
4. In Porkbun → your domain → **DNS**, add:
   - `A` record, host `@`, value `76.76.21.21`
   - `CNAME` record, host `www`, value `cname.vercel-dns.com`
5. Save. Vercel auto-issues HTTPS. Propagation: a few minutes to a couple hours.

> Tip: don't buy the domain until you've settled on the name. The site runs fine on the
> `*.vercel.app` URL in the meantime.
