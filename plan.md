# matthew-arvidson.com — Dev Portfolio Plan

**Domain:** matthew-arvidson.com  
**Goal:** A portfolio that makes a hiring manager say "woah, this guy can code."  
**Audience:** Eng managers, senior devs, recruiters at tech/fintech/AI companies

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG for speed, SEO, easy Vercel deploy |
| 3D | React Three Fiber + @react-three/drei | Three.js in React without the pain |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration |
| Animation | Framer Motion | Page transitions + scroll reveals |
| Language | TypeScript | Obviously |
| Deployment | Vercel + matthew-arvidson.com | Zero config |

---

## Site Structure

```
/ (home)            — Three.js hero → project category cards
/projects           — filterable grid of all projects
/projects/[slug]    — individual project deep-dive
/about              — short bio, skills, contact
```

---

## TODAY — Phase 1: Three.js Hero

**Goal:** Ship a homepage with a jaw-dropping Three.js intro. Everything else is secondary.

### Hero Concept
- Full-viewport dark canvas (deep space / near-black)
- Floating 3D geometric shards (icosahedra, low-poly) drift slowly — each represents a tech domain
- "MATTHEW ARVIDSON" renders as bold 3D text that rises from below the fold
- Subtitle fades in: "Software Engineer · AI · Systems · Game Modding"
- A glowing pulsing "EXPLORE →" button in 3D that invites the user in
- Mouse parallax — scene responds to cursor movement
- Click "EXPLORE" → smooth camera fly-forward transition → scrollable project section below

### Tasks
- [ ] Scaffold Next.js 15 project (`npx create-next-app@latest`)
- [ ] Install R3F stack: `@react-three/fiber`, `@react-three/drei`, `three`, `@types/three`
- [ ] Install `framer-motion`, `tailwindcss`
- [ ] Build `HeroScene` component (R3F Canvas, camera, lighting)
- [ ] Add floating geometric particles / shards
- [ ] Add 3D text (`Text3D` from drei + font)
- [ ] Add pulsing "EXPLORE" button mesh with hover/click state
- [ ] Mouse parallax on the scene
- [ ] Scroll-triggered camera animation → transition to project section below
- [ ] Wire up homepage layout

---

## Phase 2: Projects Grid (next session)

### Project Categories

**AI & Fintech** _(most hirable signal)_
- `structured-notes-intelligence-engine` — RAG pipeline for equity structured note term sheets (Python)
- `Contract-Intelligence-Engine` — PDF → structured risk memo via AI (Python)
- `AI-Resume-Evaluator` — Serverless ATS with Azure OpenAI (Python)
- `signature-verification-poc` — Offline signature verification (Python)
- `old-well-labs-product-take-home` — Full Stack Assessment 2026 (TypeScript)
- `old-well-labs-data-take-home` — Senior Data Engineer Assessment 2026 (Python)

**Financial Systems**
- `3forge-trading-dashboard` — 4-panel live dashboard, OpenAI + Python REST + 3forge React
- `cdm-validation-poc` — FINOS CDM validation (Java)
- `3-forge-kafka-minimal` — Kafka integration setup (Java)

**Game Modding / Systems** _(unique differentiator — shows low-level, open source, community impact)_
- `UE4SS-Toolkit` — professional mod management interface
- `RE-UE4SS` — fork of major UE4/5 scripting system (C++)
- `HollowKnightMod` — comprehensive C# cheat menu mod
- `SilkSongMod` — C# comprehensive mod, 10 GitHub stars
- `AILimitMod` — full C# GUI mod
- `MGS-Delta-UE4SS-Fix` — 10 stars, 1 fork — community fix for Metal Gear Solid Delta
- `chrome-outreach-extension` — Chrome extension (JS)
- `claude-code` — TypeScript AI CLI fork

### Project Card Design
- Category filter tabs at the top
- Cards show: name, tech stack pills, star count if notable, 1-line description
- Hover: card lifts with subtle 3D tilt effect
- Click: modal or route to `/projects/[slug]`

---

## Phase 3: Project Deep-Dive Pages (future)
- Live demo embeds where possible
- Code snippets / architecture diagrams
- GitHub stats (stars, language breakdown)

---

## Phase 4: About + Contact (future)
- Short punchy bio
- Tech stack visualization (animated skill bars or radar chart)
- Contact form or just mailto link
- Resume PDF download

---

## Differentiators to Lean Into
1. **Breadth is real** — Python AI, TypeScript full-stack, C# desktop, C++ systems, Lua scripting, Java — few people touch all of these
2. **Community presence** — stars, forks, cited projects (MGS Delta, SilkSong, etc.)
3. **Financial domain knowledge** — 3forge, CDM, structured notes, take-homes from financial firms
4. **AI-native** — RAG, Azure OpenAI, contract intelligence, resume evaluator — not just "used ChatGPT"
5. **Systems thinker** — UE4SS toolkit, RE-UE4SS fork, Kafka, CDM validation — you read and modify real engines

---

## Design Direction
- **Dark** — nearly black background (#0a0a0a)
- **Accent** — electric blue/cyan (#00d4ff) or neon green (#00ff88) — pick one, stay consistent
- **Typography** — JetBrains Mono for code elements, Inter or Geist for body
- **Vibe** — "hacker who also ships real products" — not corporate, not chaotic

---

## Deployment Checklist (when ready)
- [ ] Vercel account connected to GitHub repo
- [ ] Custom domain `matthew-arvidson.com` pointed to Vercel
- [ ] `www.matthew-arvidson.com` redirect to apex
- [ ] OG image for social sharing
- [ ] Basic SEO meta tags
- [ ] Lighthouse score > 90
