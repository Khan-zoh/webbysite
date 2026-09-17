# Zohair Khan — Portfolio

An ink-and-paper portfolio designed as an engineering field journal. Large type, a custom animated data-flow illustration, alternating illustrated project spreads, an expandable project index, and a timeline give each section its own rhythm. Built with Next.js App Router, Tailwind CSS v4, and Instrument Sans / Instrument Serif / Space Mono.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build`, then `npm start`.

## Content and design

- `data/projects.js` is the unchanged source of truth for all project names, descriptions, metrics, technologies, statuses, and links.
- `components/Hero.jsx` contains the introduction and the custom SVG data-flow drawing. The drawing has a pause control and respects reduced-motion preferences.
- `components/Sidebar.jsx` contains the sticky top navigation and section tracking.
- `components/Work.jsx` presents featured projects and native keyboard-accessible disclosures for the remaining projects.
- `components/ProjectArt.jsx` contains decorative concept sketches, not charts of measured project data.
- `components/About.jsx` contains the original biography and skills.
- `components/Experience.jsx` contains the original experience entries.
- `components/Contact.jsx` contains the contact section and social links.
- `app/globals.css` contains the palette, layout, responsive rules, and motion treatments. The original warm paper, ink, and gray colors are retained.
- `app/layout.js` loads the original fonts and metadata.

All project data, five experience entries, seventeen skills, and the original biography are preserved. Introductory and closing copy has been refreshed.

The page is responsive down to 320px. Content renders on the server and stays readable without JavaScript; JavaScript adds the diagram pause control and active navigation tracking. Reduced-motion preferences stop the decorative animation, hover transitions, and smooth scrolling. The navigation includes a skip link and visible keyboard focus states.

## Résumé

The repository does not currently contain `public/resume.pdf`, so résumé links open an email request instead of a missing file. To enable a download, add the PDF and replace the résumé request URLs in `components/Experience.jsx` and `components/Contact.jsx` with `/resume.pdf`.

## Project status updates

When a project is deployed, update its `status` and `demo` URL in `data/projects.js`. The UI reads these fields directly. `featured: true` selects an illustrated spread; other projects appear in the expandable index.

## Deployment

The repository can be imported into Vercel as a Next.js project. Use the existing production branch for releases and branch previews to review design changes before merging. No new environment variables or services are required by this redesign.
