# Portfolio — Blueprint Theme

A Next.js 16 portfolio landing page built with Framer Motion and shadcn/ui-style
components, styled as an engineer's schematic / blueprint sheet.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your own photo

Replace the placeholder at the top of the page by adding your photo as:

```
public/avatar.jpg
```

The hero automatically falls back to the blueprint placeholder illustration
(`public/avatar.svg`) if `avatar.jpg` isn't found, so the page works before
and after you drop your photo in. A portrait-oriented image (4:5, e.g.
1200×1500px) works best.

## Customize content

- `components/hero.tsx` — name, headline, tagline, social links
- `components/about.tsx` — bio copy and stats
- `components/skills.tsx` — tech stack groups
- `components/projects.tsx` — project case studies
- `components/contact.tsx` — email and résumé link
- `app/layout.tsx` — page title/description (SEO)

## Design tokens

Colors and type live in `app/globals.css` (CSS variables) and
`tailwind.config.ts`. The palette:

| Token | Hex | Use |
|---|---|---|
| `--background` | `#0B1D33` | Deep blueprint navy |
| `--panel` | `#081525` | Card / panel background |
| `--foreground` | `#F4F1E9` | Chalk paper text |
| `--accent` | `#FFB020` | Signal amber |
| `--line` | `#2C486B` | Grid / border lines |

Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/utility),
loaded via `next/font/google`.

## Stack

- Next.js 16 (App Router)
- Framer Motion
- Tailwind CSS + shadcn/ui-style primitives (`components/ui`)
- lucide-react icons
- TypeScript

## Add more shadcn components

This project is set up with a `components.json`, so if you have the shadcn
CLI and network access you can add more primitives with:

```bash
npx shadcn@latest add dialog
```
