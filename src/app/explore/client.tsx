"use client";

import { useState, useMemo, useEffect, useRef, CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LANG_COLORS,
  ALL_CATEGORIES,
  NEXUS_PROFILE,
  type Category,
  type Project,
} from "@/data/projects";
import { formatUpdated } from "@/lib/github";
import { T } from "@/lib/tokens";
import Nav, { NAV_EXTERNAL_LINKS } from "@/components/Nav";

// ─── Scan-line hook + component ───────────────────────────────────────────────

function useScanLine() {
  const [scanning, setScanning] = useState(false);
  const [scanId, setScanId] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function trigger() {
    if (timer.current) clearTimeout(timer.current);
    setScanId((n) => n + 1);
    setScanning(true);
    timer.current = setTimeout(() => setScanning(false), 580);
  }

  return { scanning, scanId, trigger };
}

function ScanLine({ scanId }: { scanId: number }) {
  return (
    <motion.div
      key={scanId}
      style={{
        position: "absolute", left: 0, right: 0, height: 1,
        pointerEvents: "none", zIndex: 10,
        background: `linear-gradient(to right, transparent 0%, ${T.accent} 20%, #ffffff 50%, ${T.accent} 80%, transparent 100%)`,
      }}
      initial={{ top: 0, opacity: 0 }}
      animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.52, ease: "linear", times: [0, 0.06, 0.84, 1] }}
    />
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────

function Typewriter({
  text, delay = 0, speed = 38, style, hideCursorWhenDone = false, onDone,
}: {
  text: string; delay?: number; speed?: number; style?: CSSProperties;
  hideCursorWhenDone?: boolean; onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed(""); setDone(false); let i = 0;
    const startTimer = setTimeout(() => {
      const iv = setInterval(() => {
        i++; setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(iv); setDone(true); onDone?.(); }
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(startTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span style={style}>
      {displayed}
      {(!done || !hideCursorWhenDone) && (
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.9 }} style={{ color: T.accent, marginLeft: 2 }}>█</motion.span>
      )}
    </span>
  );
}

// ─── Corner-bracket category pill ─────────────────────────────────────────────

function CategoryPill({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const lit = active || hovered;
  const bracketColor = lit ? T.accent : T.border.mid;

  return (
    <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", background: active ? "rgba(0,212,255,0.10)" : "transparent", border: "none", outline: "none", cursor: "pointer", padding: "8px 18px", userSelect: "none", transition: "background 0.2s" }}
    >
      {(["tl", "tr", "bl", "br"] as const).map((c) => (
        <span key={c} style={{
          position: "absolute", width: 7, height: 7,
          top: c.startsWith("t") ? 0 : undefined, bottom: c.startsWith("b") ? 0 : undefined,
          left: c.endsWith("l") ? 0 : undefined, right: c.endsWith("r") ? 0 : undefined,
          borderColor: bracketColor,
          borderTopWidth: c.startsWith("t") ? 1 : 0, borderBottomWidth: c.startsWith("b") ? 1 : 0,
          borderLeftWidth: c.endsWith("l") ? 1 : 0, borderRightWidth: c.endsWith("r") ? 1 : 0,
          borderStyle: "solid", transition: "border-color 0.2s",
        }} />
      ))}
      <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: active ? T.accent : hovered ? T.text.body : T.text.dim, transition: "color 0.2s" }}>
        {label} <span style={{ opacity: 0.5 }}>{count}</span>
      </span>
    </button>
  );
}

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { scanning, scanId, trigger } = useScanLine();
  const router = useRouter();
  const isNotable = (project.stars ?? 0) >= 6;
  const langColor = LANG_COLORS[project.lang] ?? T.text.body;
  const updated = formatUpdated(project.updatedAt);

  return (
    <motion.a href={project.url} target="_blank" rel="noreferrer" layout
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.32, delay: index * 0.03 }}
      style={{ display: "block", position: "relative", textDecoration: "none", borderRadius: 2, overflow: "hidden", background: T.bg.card, border: `1px solid ${hovered ? T.border.hover : T.border.card}`, transition: "border-color 0.2s" }}
      onHoverStart={() => { setHovered(true); trigger(); }}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Dot grid on hover */}
      <motion.div
        style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(0,212,255,0.07) 1px, transparent 1px)`, backgroundSize: "20px 20px", pointerEvents: "none" }}
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}
      />

      {/* Corner brackets on hover */}
      {(["tl", "tr", "bl", "br"] as const).map((c) => (
        <motion.span key={c} style={{
          position: "absolute", width: 10, height: 10,
          top: c.startsWith("t") ? 4 : undefined, bottom: c.startsWith("b") ? 4 : undefined,
          left: c.endsWith("l") ? 4 : undefined, right: c.endsWith("r") ? 4 : undefined,
          borderColor: T.accent,
          borderTopWidth: c.startsWith("t") ? 1 : 0, borderBottomWidth: c.startsWith("b") ? 1 : 0,
          borderLeftWidth: c.endsWith("l") ? 1 : 0, borderRightWidth: c.endsWith("r") ? 1 : 0,
          borderStyle: "solid", pointerEvents: "none",
        }} animate={{ opacity: hovered ? 0.7 : 0 }} transition={{ duration: 0.15 }} />
      ))}

      {scanning && <ScanLine scanId={scanId} />}

      <div style={{ padding: "18px 20px 16px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
          <motion.span
            style={{ flex: 1, fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.78rem", fontWeight: 600, lineHeight: 1.35, wordBreak: "break-all", display: "block" }}
            animate={{ color: hovered ? T.accent : T.text.primary }}
            transition={{ duration: 0.15 }}
          >
            {project.name}
          </motion.span>

          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, marginTop: 1 }}>
            {isNotable && (
              <span style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.08em", padding: "2px 5px", border: `1px solid rgba(0,212,255,0.4)`, color: T.accent, borderRadius: 2 }}>
                NOTABLE
              </span>
            )}
            {(project.stars ?? 0) > 0 && (
              <motion.span
                style={{ fontFamily: "monospace", fontSize: "0.72rem", fontWeight: 700 }}
                animate={{ color: hovered ? T.star.glow : T.star.base, textShadow: hovered ? "0 0 12px rgba(255,210,0,0.6)" : "none" }}
                transition={{ duration: 0.2 }}
              >
                ★ {project.stars}
              </motion.span>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: "0.73rem", lineHeight: 1.6, color: T.text.body, margin: "0 0 14px" }}>
          {project.desc}
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            {project.tags.map((t) => (
              <span key={t} style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.08em", padding: "2px 7px", background: T.bg.surface, color: T.text.dim, borderRadius: 2 }}>
                {t}
              </span>
            ))}
            {updated && (
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: T.text.ghost, letterSpacing: "0.04em" }}>
                {updated}
              </span>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            {project.notes && (
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(project.notes!); }}
                style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", padding: "2px 7px", borderRadius: 2, color: T.accent, border: `1px solid rgba(0,212,255,0.35)`, background: "transparent", cursor: "pointer", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,212,255,0.08)"; e.currentTarget.style.borderColor = T.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)"; }}
              >
                NOTES →
              </button>
            )}
            <motion.span
              style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", padding: "2px 7px", borderRadius: 2, color: langColor }}
              animate={{ border: `1px solid ${langColor}`, opacity: hovered ? 1 : 0.65 }}
              transition={{ duration: 0.2 }}
            >
              {project.lang}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Main client component ────────────────────────────────────────────────────

export default function ExploreClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | "All">("All");
  const [titleDone, setTitleDone] = useState(false);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active, projects]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const cat of ALL_CATEGORIES) map[cat] = projects.filter((p) => p.tags.includes(cat)).length;
    return map;
  }, [projects]);

  const totalStars = useMemo(() => projects.reduce((acc, p) => acc + (p.stars ?? 0), 0), [projects]);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ minHeight: "100vh", background: T.bg.page }}>
      {/* Dot grid background */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(0,212,255,0.028) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <Nav
        backHref="/"
        links={[
          ...NAV_EXTERNAL_LINKS,
          { label: "Resume", href: "/resume" },
        ]}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px 120px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div style={{ marginBottom: 52 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.45em", color: T.accent, marginBottom: 16, textTransform: "uppercase" }}>
            Selected Work
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 700, color: T.text.primary, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
            <Typewriter text="Projects" delay={200} speed={55} hideCursorWhenDone={false} onDone={() => setTitleDone(true)} />
          </h1>
          <AnimatePresence>
            {titleDone && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
                style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.72rem", color: T.text.ghost, display: "flex", alignItems: "center", gap: 6 }}
              >
                <span style={{ color: T.accent }}>›</span>
                <Typewriter
                  text={`${projects.length} repos  ·  7 languages  ·  ${totalStars}+ stars  ·  live from GitHub`}
                  delay={100} speed={16} hideCursorWhenDone
                  style={{ color: T.text.ghost }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Category pills */}
        <motion.div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
          {(["All", ...ALL_CATEGORIES] as const).map((cat) => (
            <CategoryPill key={cat} label={cat} count={counts[cat]} active={active === cat} onClick={() => setActive(cat)} />
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => <ProjectCard key={project.name} project={project} index={i} />)}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div style={{ marginTop: 100, paddingTop: 40, borderTop: `1px solid ${T.border.subtle}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.4em", color: T.text.ghost, textTransform: "uppercase" }}>
            Matthew Arvidson · Software Engineer
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "github.com/mattdavida", href: "https://github.com/mattdavida" },
              { label: "github.com/matthew-arvidson", href: "https://github.com/matthew-arvidson" },
              { label: "nexusmods.com/DevToolsMaster", href: NEXUS_PROFILE },
              { label: "LinkedIn ↗", href: "https://linkedin.com/in/matthew-arvidson" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: T.text.ghost, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.text.ghost)}
              >{label}</a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
