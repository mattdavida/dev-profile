# matthew-arvidson.com — Dev Portfolio Plan

**Domain:** matthew-arvidson.com  
**Goal:** A portfolio that makes a hiring manager say "woah, this guy can code."  
**Audience:** Eng managers, senior devs, recruiters at tech/fintech/AI companies

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | ISR, SSR, Vercel deploy |
| 3D | React Three Fiber + @react-three/drei | Three.js in React without the pain |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration |
| Animation | Framer Motion | Page transitions + scan-line effects |
| Language | TypeScript | Obviously |
| Deployment | Vercel + matthew-arvidson.com | ✅ Live |

---

## ✅ Phase 1 — DONE: Three.js Hero (desktop)

- Full-viewport dark canvas with star field and particle system
- Floating 3D geometric shards (icosahedra, octahedra, tetrahedra) with depth layers
- "MATTHEW ARVIDSON" 3D text rises from below with breathing animation
- Subtitle: "SOFTWARE ENGINEER · AI · SYSTEMS"
- EXPLORE button with corner-bracket sci-fi styling, scan-line hover effect
- Mouse parallax — scene responds to cursor movement
- Click EXPLORE → fade transition → `/explore` route
- Postprocessing: Bloom + Vignette via EffectComposer
- Nav: GitHub · Nexus · LinkedIn · Projects

---

## ✅ Phase 2 — DONE: Projects Page (/explore)

- Server Component fetches live data from both GitHub accounts (`mattdavida` + `matthew-arvidson`) via GitHub API
- ISR revalidation every hour — star counts and `updated_at` stay fresh automatically
- Fallback to static data if GitHub API is unavailable
- Category filter pills with corner-bracket styling and counts
- Project cards: scan-line hover, dot-grid texture, corner brackets, animated star glow
- "NOTABLE" badge for projects ≥ 6 stars
- "Updated X ago" timestamps on each card from live API
- Typewriter header animation with live repo stats
- Three categories: **AI & Fintech** · **Game Modding** · **Tools**
- Footer: GitHub · GitHub (matthew-arvidson) · Nexus · LinkedIn

---

## ✅ Phase 3 — DONE: Deployment

- GitHub repo: `mattdavida/dev-profile`
- Vercel: auto-deploy on push to `main`
- Domain: `matthew-arvidson.com` + `www.matthew-arvidson.com` → Vercel
- Cloudflare DNS: two CNAME records (grey cloud / DNS only)
- Existing `snie-demo` Cloudflare Tunnel untouched — complementary
- SSL: provisioned automatically by Vercel

---

## 🔜 Phase 4 — NEXT: Mobile Optimization

**Current state:** Desktop only. Mobile has layout and performance issues.

### Issues to fix

| Area | Problem | Fix |
|---|---|---|
| Both navs | 4 links overflow on small screens | Hamburger menu or responsive collapse |
| HeroScene | `mousemove` parallax does nothing on touch | Add `touchmove` or disable on mobile |
| HeroScene | EXPLORE button position hardcoded | Responsive adjustments |
| HeroScene | Full particle count + bloom on mobile | Detect mobile, reduce particles, skip postprocessing |
| Explore grid | `minmax(300px, 1fr)` causes horizontal scroll on 320px screens | `minmax(min(300px, 100%), 1fr)` |
| Three.js text | Needs verification at narrow viewports | Test + adjust sizing |

**Estimated effort:** ~3-4 hours

---

## Phase 5 — Future: Project Deep-Dives

- Individual `/explore/[slug]` pages per project
- Live demo embeds where possible
- Architecture diagrams, code snippets
- GitHub stats (language breakdown, commit history)

---

## Phase 6 — Future: About + Contact

- Short punchy bio
- Tech stack visualization
- Resume PDF download
- Contact form or mailto

---

## Remaining Deployment TODOs

- [ ] OG image for social sharing (LinkedIn/Slack unfurl)
- [ ] GitHub personal access token in Vercel env vars (raises API rate limit 60 → 5000 req/hr)
- [ ] `www` → apex redirect rule in Cloudflare or Vercel
- [ ] Google Search Console — verify ownership for indexing
- [ ] Lighthouse score audit

---

## Differentiators

1. **Breadth** — Python AI, TypeScript full-stack, C# desktop, C++ systems, Lua scripting, Java
2. **Community presence** — stars, forks, cited projects (MGS Delta, SilkSong, give_item_cmd_db)
3. **Financial domain** — 3forge, CDM, structured notes, Kafka — real fintech infrastructure
4. **AI-native** — RAG, Azure OpenAI, contract intelligence — not just "used ChatGPT"
5. **Systems thinker** — UE4SS toolkit, RE-UE4SS fork, Kafka, CDM validation — reads and modifies real engines
