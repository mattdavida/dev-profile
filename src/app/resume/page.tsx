"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NEXUS_PROFILE } from "@/data/projects";

// ─── Resume data ──────────────────────────────────────────────────────────────

const CONTACT = {
  phone: "(760) 583-7461",
  email: "mattdavida@outlook.com",
  linkedin: { label: "linkedin.com/in/matthew-arvidson", href: "https://linkedin.com/in/matthew-arvidson" },
  github: { label: "github.com/mattdavida", href: "https://github.com/mattdavida" },
};

const SUMMARY =
  "Senior Full-Stack Engineer with 9+ years embedded in Tier 1 investment banks, translating complex regulatory and business requirements into production-grade financial systems. A technical lead who partners with traders, compliance teams, and business stakeholders to drive high-stakes modernizations — from migrating billion-dollar lending platforms to building AI-powered analytics tools. Known for sound architectural judgment, mentoring engineers on modern patterns and AI tooling, and owning delivery from architecture through DevOps.";

const SKILLS = [
  { label: "Languages & Frameworks", items: ["TypeScript", "JavaScript", "Python", "C#", "Java", "React", "Angular", "Node.js", "Express.js", ".NET", "Redux Toolkit"] },
  { label: "Databases", items: ["MongoDB", "SQL Server", "SQLite", "kdb+/q", "PostgreSQL", "ChromaDB"] },
  { label: "AI & ML", items: ["Azure OpenAI (GPT-4o)", "LangGraph", "RAG pipelines", "ChromaDB", "Pydantic", "Prompt Engineering"] },
  { label: "Architecture & Tools", items: ["Module Federation v2", "Monorepo", "MVC", "Azure DevOps", "Jenkins CI/CD", "Git", "Gradle", "Linux"] },
  { label: "Financial Technology", items: ["3Forge", "Trading Dashboards", "MNPI Compliance", "CDM / FINOS", "Syndicated Lending", "kdb+"] },
];

const EXPERIENCE = [
  {
    company: "Bip US (Formerly Riskcare)",
    location: "New York (Remote) / Charlotte, NC",
    title: "Senior Full-Stack Developer / Technical Lead / Project Owner",
    period: "May 2021 – Present",
    groups: [
      {
        label: "Internal AI Initiatives — BIP ATS & Structured Notes",
        bullets: [
          "Designed and built BIP ATS, an Azure OpenAI-powered resume evaluation platform using Azure Functions and Python — automating first-pass candidate screening with deterministic Pydantic-validated scoring, improving evaluation throughput by ~100×.",
          "Architected the Structured Notes Intelligence Engine: a LangGraph orchestration pipeline with risk-tier routing (HIGH/MEDIUM/LOW) that extracts 50+ structured fields per note, drives RAG-powered natural-language queries across the note book (ChromaDB + Azure OpenAI embeddings), and flags baseline deviations.",
          "Provisioned complete infrastructure as code using Azure Bicep — repeatable, one-command deployments of PostgreSQL, OpenAI, and Key Vault.",
        ],
      },
      {
        label: "Client: Bank of America — 3Forge Integration",
        bullets: [
          "Led a strategic 6-week modernization assessment, architecting a Java + 3Forge authoring framework to enable non-technical teams to modernize 150+ legacy trading workbench screens.",
          "Pioneered custom Java business logic integration into a 3Forge trading dashboard via automated Gradle workflows — transforming a static demo into a production-ready platform for complex real-time calculations.",
          "Designed a Python + SQLite data pipeline for dynamic trading data generation, enabling advanced SQL filtering and seamless table-to-chart communication.",
        ],
      },
      {
        label: "Client: Morgan Stanley — Lending & Compliance",
        bullets: [
          "Led architecture and project management for the migration of a mission-critical syndicated lending platform (AngularJS → React) handling MNPI data and multi-billion-dollar loan syndications.",
          "Spearheaded modernization of two additional legacy AngularJS applications to React, yielding ~30% performance improvement and expanding the hiring talent pool.",
          "Architected an integrated compliance ecosystem that reduced quarterly reporting time from 3 months to on-demand, owning the full DevOps lifecycle: Git, Linux, Jenkins CI/CD.",
          "Designed and implemented a firm-wide global seat reservation system using React, TypeScript, and Python.",
        ],
      },
      {
        label: "Client: Insurance Placing Platform (PPL)",
        bullets: [
          "Co-architected a micro-frontend application with a .NET backend, integrating an AI-powered chatbot that reduced contract data query times by an estimated 90%.",
          "Directed a React/Redux Toolkit frontend + C# .NET backend using Module Federation v2 in a monorepo, improving scalability and maintainability.",
        ],
      },
      {
        label: "Team Leadership & DevOps (Cross-Client)",
        bullets: [
          "Championed TDD — established Jest, Puppeteer, Python unittest, and Vitest frameworks, increasing code coverage from 20% to 80%+ and reducing critical post-release bugs by 40%.",
          "Led technical mentorship on AI tooling and complex problem-solving, improving overall team productivity by ~30%.",
          "Optimized Azure DevOps workflows: automated PR checks, enforced coding standards, improved team velocity.",
        ],
      },
    ],
  },
  {
    company: "Lightstream Software / Truist",
    location: "California (Remote)",
    title: "Senior Application Developer",
    period: "2019 – 2021",
    groups: [
      {
        label: "Client: Middle-Market Investment Bank",
        bullets: [
          "Developed and maintained a custom NPM component library for Kentico CMS, enabling modern Angular components within a legacy C# Web Forms architecture.",
          "Translated Sketch and InVision wireframes into responsive Angular components, contributing to a 15% increase in user engagement metrics.",
          "Engineered a full-stack user retention feature using SQL Server stored procedures, leading to a 10% increase in completed signups.",
          "Built automated UI test suites using Selenium and C#; mentored junior developers on responsive design and testing best practices.",
        ],
      },
    ],
  },
  {
    company: "Datalink Software",
    location: "Florida (Remote)",
    title: "Software Developer",
    period: "2017 – 2019",
    groups: [
      {
        label: "Client: Healthcare Services",
        bullets: [
          "Led migration of a hybrid healthcare application from AngularJS to Angular 6 — improving mobile performance by 50%.",
          "Developed new Angular 6 components replacing legacy implementations; collaborated with QA to achieve a 25% decrease in user-reported issues post-release.",
          "Conducted peer code reviews and mentored colleagues on Agile estimation, improving sprint planning accuracy.",
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    title: "C# Modding Framework — Hollow Knight: Silksong",
    period: "Jun 2025 – Present",
    bullets: [
      "Architected a comprehensive C#/.NET modding suite achieving 50,000+ unique downloads in its first month — top-rated tool for the game.",
      "Reverse-engineered IL2CPP systems, implemented a custom GUI framework, and used reflection for deep, safe integration with the compiled game engine.",
      "Engineered a reusable, service-based C# architecture to manage game state, inventory, and player data — adopted as a community standard.",
    ],
  },
  {
    title: "C# Reverse Engineering & Tools — AI Limit",
    period: "2025",
    bullets: [
      "Pioneered the first major modding framework for AI Limit using advanced IL2CPP interop where no public API existed.",
      "Developed and published 15+ tools and mods across C++, Lua, and C# for Unreal and Unity engines — expertise in memory editing, cross-language interop, and low-level system analysis.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Coder Camps",
    degree: "Full Stack Software Development — MEAN Stack (24 weeks)",
    detail: "MongoDB · Express.js · AngularJS · Node.js",
  },
  {
    school: "United States Air Force",
    degree: "Software Development Training",
    detail: "Aircraft maintenance tracking data systems",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <span style={{ color: "#00d4ff", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #1a2a3a, transparent)" }} />
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li style={{ display: "flex", gap: 10, marginBottom: 8, listStyle: "none" }}>
      <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: 2, fontSize: "0.65rem" }}>›</span>
      <span style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "#6a7a8a" }}>{text}</span>
    </li>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#070b10" }}>
      {/* Dot grid */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(0,212,255,0.028) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px", background: "rgba(7,11,16,0.88)", backdropFilter: "blur(14px)", borderBottom: "1px solid #0f1a24" }}>
        <Link href="/"
          style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: "#4a5a6a", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5a6a")}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2L3 6l5 4" /></svg>
          BACK
        </Link>
        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.3em", color: "#1e2d3d", userSelect: "none" }}>
          MATTHEW-ARVIDSON.COM
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "GitHub ↗", href: "https://github.com/mattdavida" },
            { label: "Nexus ↗", href: NEXUS_PROFILE },
            { label: "LinkedIn ↗", href: CONTACT.linkedin.href },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#4a5a6a", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5a6a")}
            >{label}</a>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 32px 120px", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.45em", color: "#00d4ff", marginBottom: 16, textTransform: "uppercase" }}>
            Résumé
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#e8edf4", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 12 }}>
            Matthew Arvidson
          </h1>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", color: "#3a5068", lineHeight: 1.9, marginBottom: 20 }}>
            {CONTACT.phone}
            <span style={{ color: "#1a2a3a", margin: "0 10px" }}>·</span>
            <a href={`mailto:${CONTACT.email}`} style={{ color: "#3a5068", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5068")}>{CONTACT.email}</a>
            <span style={{ color: "#1a2a3a", margin: "0 10px" }}>·</span>
            <a href={CONTACT.linkedin.href} target="_blank" rel="noreferrer" style={{ color: "#3a5068", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5068")}>{CONTACT.linkedin.label}</a>
            <span style={{ color: "#1a2a3a", margin: "0 10px" }}>·</span>
            <a href={CONTACT.github.href} target="_blank" rel="noreferrer" style={{ color: "#3a5068", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5068")}>{CONTACT.github.label}</a>
          </p>
          <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "#2a3a4a", letterSpacing: "0.04em", lineHeight: 1.6 }}>
            Senior Full-Stack Engineer · Financial Systems Modernization · React / TypeScript / Node.js / Python / C# / Java
          </p>

          {/* Print button */}
          <div style={{ marginTop: 28 }}>
            <button
              onClick={() => window.print()}
              style={{ position: "relative", background: "transparent", border: "1px solid #1a2a3a", outline: "none", cursor: "pointer", padding: "10px 28px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.68rem", letterSpacing: "0.3em", color: "#3a5068", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00d4ff"; e.currentTarget.style.color = "#00d4ff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a2a3a"; e.currentTarget.style.color = "#3a5068"; }}
            >
              DOWNLOAD PDF ↓
            </button>
          </div>
        </motion.div>

        {/* ── Summary ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 52 }}>
          <SectionHeader>Summary</SectionHeader>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.85, color: "#5a6a7a" }}>{SUMMARY}</p>
        </motion.section>

        {/* ── Skills ── */}
        <motion.section {...fadeUp(0.08)} style={{ marginBottom: 52 }}>
          <SectionHeader>Core Skills</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SKILLS.map((group) => (
              <div key={group.label} style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#2a3a4a", minWidth: 170, paddingTop: 3, flexShrink: 0 }}>
                  {group.label}
                </span>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ fontFamily: "monospace", fontSize: "0.7rem", padding: "3px 10px", background: "#0d1a26", color: "#4a6a88", border: "1px solid #1a2a3a", borderRadius: 2 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Experience ── */}
        <motion.section {...fadeUp(0.1)} style={{ marginBottom: 52 }}>
          <SectionHeader>Professional Experience</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {EXPERIENCE.map((job, ji) => (
              <motion.div key={job.company} {...fadeUp(0.05 * ji)}
                style={{ borderLeft: "1px solid #0f1a24", paddingLeft: 24, position: "relative" }}
              >
                {/* Timeline dot */}
                <div style={{ position: "absolute", left: -4, top: 6, width: 7, height: 7, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 8px rgba(0,212,255,0.5)" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <div>
                    <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#e8edf4", marginBottom: 2 }}>{job.company}</h2>
                    <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", color: "#00d4ff", letterSpacing: "0.04em" }}>{job.title}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", color: "#2a3a4a", letterSpacing: "0.04em" }}>{job.period}</p>
                    <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", color: "#1e2d3d" }}>{job.location}</p>
                  </div>
                </div>

                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 20 }}>
                  {job.groups.map((group) => (
                    <div key={group.label}>
                      <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.06em", color: "#2a3a4a", marginBottom: 10, paddingLeft: 0 }}>
                        — {group.label}
                      </p>
                      <ul style={{ padding: 0, margin: 0 }}>
                        {group.bullets.map((b, i) => <Bullet key={i} text={b} />)}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Technical Projects ── */}
        <motion.section {...fadeUp(0.1)} style={{ marginBottom: 52 }}>
          <SectionHeader>Technical Projects & Open Source</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {PROJECTS.map((proj, pi) => (
              <motion.div key={proj.title} {...fadeUp(0.04 * pi)}
                style={{ borderLeft: "1px solid #0f1a24", paddingLeft: 24, position: "relative" }}
              >
                <div style={{ position: "absolute", left: -4, top: 6, width: 7, height: 7, borderRadius: "50%", background: "#1a3a4a", border: "1px solid #00d4ff" }} />
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <h3 style={{ fontSize: "0.88rem", fontWeight: 600, color: "#e8edf4" }}>{proj.title}</h3>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", color: "#2a3a4a" }}>{proj.period}</span>
                </div>
                <ul style={{ padding: 0, margin: 0 }}>
                  {proj.bullets.map((b, i) => <Bullet key={i} text={b} />)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Education ── */}
        <motion.section {...fadeUp(0.1)}>
          <SectionHeader>Education</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EDUCATION.map((edu) => (
              <div key={edu.school} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a3a4a", border: "1px solid #00d4ff", flexShrink: 0, marginTop: 5 }} />
                <div>
                  <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#c8d4e0", marginBottom: 2 }}>{edu.school}</p>
                  <p style={{ fontSize: "0.75rem", color: "#4a5a6a", marginBottom: 2 }}>{edu.degree}</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", color: "#2a3a4a" }}>{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          nav, button { display: none !important; }
          main { background: white !important; }
          * { color: #000 !important; border-color: #ccc !important; }
          div[style*="fixed"] { display: none !important; }
          body { font-size: 11pt; }
        }
      `}</style>
    </main>
  );
}
