# matthew-arvidson.com

Personal portfolio for [Matthew Arvidson](https://matthew-arvidson.com) — software engineer with 10 years of experience across AI, fintech, full-stack, and game modding.

## Stack

- **Next.js 15** (App Router) — framework
- **React Three Fiber + drei** — Three.js hero scene
- **Framer Motion** — animations
- **Tailwind CSS v4** — styling
- **GitHub API** — live project data via ISR (revalidates hourly)
- **Vercel** — hosting

## Structure

```
src/
  app/
    page.tsx          # Hero page (Three.js scene)
    explore/
      page.tsx        # Server component — fetches GitHub data
      client.tsx      # Client component — interactive project grid
  components/
    HeroScene.tsx     # Three.js canvas, particles, 3D text, EXPLORE button
  data/
    projects.ts       # Curated project list with descriptions + tags
  lib/
    github.ts         # GitHub API fetch + formatting utilities
```

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Hosted on Vercel. Push to `main` → auto-deploys.
