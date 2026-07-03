# Sunil — Frontend Developer Portfolio

A dark, editorial single-page portfolio built with **Next.js (App Router)**,
**React**, and **GSAP** (ScrollTrigger). Preloader, scroll progress, hero aurora

- mouse parallax, magnetic buttons, clip-path image reveals, skew-on-scroll,
  count-up stats, scroll-reactive marquee, custom cursor with a "View" label.

Uses **`next/image`** for thumbnails and **`next/link`** for navigation.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

> Requires Node.js 18.17+.

## Project structure

```
sunil-portfolio/
├── app/
│   ├── layout.js        # fonts (next/font) + metadata
│   ├── page.js          # client page wiring up all GSAP animations
│   └── globals.css      # design tokens + all styles
├── components/
│   ├── Loader.jsx       # preloader + scroll-progress bar
│   ├── Cursor.jsx       # custom cursor (client)
│   ├── Nav.jsx          # next/link nav
│   ├── Hero.jsx         # aurora blobs + headline
│   ├── Marquee.jsx
│   ├── About.jsx        # 120+ projects stats
│   ├── Work.jsx         # next/image + next/link project cards
│   ├── Stack.jsx
│   └── Contact.jsx
├── lib/
│   └── data.js          # PROJECTS + SKILLS + MARQUEE_ITEMS  ← edit content here
├── public/screenshots/  # drop your own project images here (optional)
└── next.config.mjs      # image remotePatterns
```

## Project screenshots

Each card shows a **live thumbnail** of the site, captured by `thum.io`. The
`wait` value (in `lib/data.js`) tells the service how many seconds to wait so
the site's **loader / intro animation finishes before the capture** — that's why
sites like Zona, Starworks, Elite and Empire use a longer wait.

### Best quality → use your own screenshots

Live captures are convenient but a hand-taken screenshot always looks best:

1. Save an image into `public/screenshots/` — suggested names:
   `contractor-plus.jpg`, `starworks.jpg`, `elite.jpg`, `zona.jpg`,
   `certifymed.jpg`, `nrh.jpg`, `empire-render.jpg`, `bill-fairies.jpg`,
   `baridekho.jpg`
2. In `lib/data.js`, uncomment the `shot` line on that project:
   ```js
   shot: "/screenshots/zona.jpg",
   ```
   Local images are served (and optimised) through `next/image`.

## Customising

- Name `SUNIL.DEV` (Nav) and footer → your name
- `kumarsuneel162@gmail.com` in `components/Contact.jsx` → your email
- Social links (`href="#"`) in `components/Contact.jsx`
- Skills / marquee tech → `lib/data.js`
- Stats (120+ projects, etc.) → `components/About.jsx`

## Deploy

Push to GitHub → import into [Vercel](https://vercel.com). Zero config.
