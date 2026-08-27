# Zohair Khan — Portfolio

Black-and-white editorial portfolio with a split-screen architecture — a sticky identity
sidebar (name, scroll-spy nav, socials) beside scrolling content, projects as an interactive
expanding index. Next.js (App Router) + Tailwind CSS v4 + Framer Motion.
Type: Instrument Sans / Instrument Serif / Space Mono.

## Run it locally

```bash
cd portfolio
npm install      # first time only
npm run dev      # http://localhost:3000
```

## Before you deploy — quick edits

1. **Résumé** — drop your résumé as `public/resume.pdf`. The sidebar "Résumé" link points to it.
2. **Flip in-progress projects live** — when a `status: "soon"` / `"private"` project is deployed,
   open `data/projects.js`, set `status: "live"`, and add a `demo: "https://..."` line. The
   project row updates itself.

## Editing content

- **Projects** → `data/projects.js` (single source of truth; `featured: true` = expanding index row, `false` = compact "More projects" entry).
- **Name, tagline, sidebar nav, socials, "open to internships"** → `components/Sidebar.jsx`.
- **Projects index (accordion + "More projects" list)** → `components/Work.jsx`.
- **About text + skills lists** → `components/About.jsx`.
- **Experience** → `components/Experience.jsx`.
- **Marquee metrics band** → `components/Marquee.jsx`.
- **Contact heading + footer** → `components/Contact.jsx`.
- **Colors & fonts** → `app/globals.css` (`@theme` block) and `app/layout.js` (font imports).
- **Page order / layout** → `app/page.js`.

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
