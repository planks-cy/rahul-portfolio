# Rahul Kumar Sinha — Portfolio

A premium, editorial portfolio site built with Next.js (App Router),
TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Design direction

- **Palette**: Ink `#0D0D0D`, Paper `#F7F7F5`, Copper `#C9633B`, Gold
  `#B98A4D`, Beige `#E8DFD1`.
- **Type**: Fraunces (display/italic serif) + JetBrains Mono (technical
  eyebrow labels) + Inter (body).
- **Signature motif**: a hand-drawn "signal trace" (oscilloscope-style
  waveform) used in the page loader, as section dividers, in the scroll
  progress indicator, and in small accents — a nod to Rahul's electrical
  engineering background paired with his motion/design work.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 Next.js App Router entry (layout, page, globals.css)
  components/
    layout/            Navbar, Footer, CustomCursor, PageLoader,
                        ScrollProgress, SmoothScrollProvider
    sections/           Hero, About, Projects, VideoReel, Services,
                        Workflow, Testimonials, Contact
    ui/                 ProjectCard, MagneticButton, RevealText,
                        SignalDivider (the signature element)
  data/                 projects.ts, services.ts, workflow.ts,
                        testimonials.ts — all placeholder content
  hooks/                useLenis, useMagnetic
  lib/                  gsap.ts (plugin registration)
  types/                shared TypeScript interfaces
public/
  images/projects/      drop your project cover images here
  videos/                drop a self-hosted showreel .mp4 here (optional)
```

## Swapping in your own content

1. **Projects** — edit `src/data/projects.ts`. Add real images to
   `public/images/projects/`, update each `coverImage` path, and fill in
   `behanceUrl` / `figmaUrl` / `youtubeUrl`. Then replace the placeholder
   gradient `<div>` in `src/components/ui/ProjectCard.tsx` with a
   Next.js `<Image>` pointing at `project.coverImage`.
2. **Showreel** — replace the YouTube embed URL in
   `src/components/sections/VideoReel.tsx`, or self-host an `.mp4` (see
   `public/videos/README.txt`).
3. **About photo** — replace the placeholder gradient block in
   `src/components/sections/About.tsx` with your own portrait.
4. **Services / workflow / testimonials** — edit the corresponding files
   in `src/data/`.
5. **Contact form** — `handleSubmit` in
   `src/components/sections/Contact.tsx` is a stub. Wire it to Formspree,
   Resend, or a Next.js API route.
6. **Social links** — update the URLs in `src/components/layout/Footer.tsx`.

## Notes on the technical choices

- **Lenis + GSAP ScrollTrigger** are wired together in `useLenis.ts` so
  scroll-triggered animations stay in sync with the smooth scroll.
- **Custom cursor** and **page loader** both check
  `prefers-reduced-motion` and disable themselves for users who've
  requested less motion, per accessibility best practice.
- **Reduced motion** is also respected globally in `globals.css` via a
  blanket media query that collapses animation/transition durations.
- Every interactive control has a visible focus state (see
  `a:focus-visible` etc. in `globals.css`) — the custom cursor doesn't
  remove keyboard accessibility.
- Images are currently placeholder gradients so the project runs with
  zero binary assets; swap them for `next/image` once you add real
  files so you get automatic optimization and lazy loading.

## Build

```bash
npm run build
npm run start
```
