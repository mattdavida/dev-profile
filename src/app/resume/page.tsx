"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/tokens";
import Nav, { NAV_EXTERNAL_LINKS } from "@/components/Nav";

// ─── Resume data ──────────────────────────────────────────────────────────────

const CONTACT = {
  email: "mattdavida@outlook.com",
  linkedin: { label: "linkedin.com/in/matthew-arvidson", href: "https://linkedin.com/in/matthew-arvidson" },
  github:   { label: "github.com/mattdavida",            href: "https://github.com/mattdavida" },
  site:     { label: "matthew-arvidson.com",             href: "https://matthew-arvidson.com" },
};

const SUMMARY =
  "Senior Software Engineer specializing in modernizing Tier 1 investment bank platforms through enterprise AI, modern front-end architecture, and highly regulated financial systems. Proven track record architecting polyglot AI orchestration pipelines, React-based micro-frontends, and human-in-the-loop workflows with end-to-end compliance traceability.";

const SKILLS = [
  {
    label: "AI & ML",
    items: ["Azure OpenAI", "LangGraph", "RAG", "ChromaDB", "Pydantic", "Prompt Engineering", "Human-in-the-Loop"],
  },
  {
    label: "Capital Markets",
    items: ["3forge AMI", "ISDA CDM", "FpML", "Syndicated Lending"],
  },
  {
    label: "Front End",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "AG Grid", "Highstock", "Module Federation v2", "Shadow DOM"],
  },
  {
    label: "Back End",
    items: ["Python / FastAPI", "C++20", "pybind11", "Java / Spring Boot", "Node.js", "C# .NET", "REST / GraphQL", "Kafka", "PostgreSQL"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure Bicep", "Docker", "Jenkins", "Azure DevOps", "Git", "Linux"],
  },
];

const EXPERIENCE = [
  {
    company: "BIP US",
    title: "Lead AI & Full-Stack Engineer",
    period: "May 2021 – Present",
    bullets: [
      "Architected a polyglot AI execution framework separating probabilistic LLM orchestration (LangGraph/Python) from deterministic C++20 execution, establishing a reusable enterprise reference architecture.",
      "Bridged the C++ native engine to a FastAPI backend via pybind11, releasing the Python GIL to enable true parallel execution and establishing a reusable architecture for integrating high-performance native services into enterprise AI applications.",
      "Architected an enterprise RAG pipeline using Azure OpenAI and LangGraph to ingest, triage, and extract 50+ fields from structured note term sheets.",
      "Engineered a Human-in-the-Loop review application using Next.js and AG Grid with confidence scoring, LLM reasoning, and source attribution for end-to-end compliance traceability.",
      "Architected the end-to-end platform using FastAPI, Azure PostgreSQL, and Azure Bicep, enabling repeatable one-command infrastructure provisioning.",
      "Developed an Azure OpenAI-powered applicant evaluation platform using Pydantic-validated structured scoring, increasing recruiter review throughput by approximately 100×.",
      "Led modernization assessment of 150+ legacy trading workbench screens on the 3forge AMI platform.",
      "Pioneered a React integration framework inside 3forge using a custom Java plugin with Shadow DOM isolation and bidirectional event handling.",
      "Engineered Kafka streaming integrations inside 3forge for Bloomberg market data powering synchronized multi-panel trading dashboards.",
      "Partnered directly with traders and business stakeholders to prototype a structured-notes trading platform that secured continued modernization support.",
      "Spearheaded ISDA CDM transformation proof of concept converting legacy FpML/XML trade data into standardized JSON.",
      "Achieved 637/637 validation rules using the official FINOS Java library through a precise metadata post-processing sequence.",
      "Built a React/Vite comparison interface for legacy versus CDM trade data supporting compliance initiatives.",
      "Led architecture and migration of a syndicated lending platform from AngularJS to React supporting multi-billion-dollar loan portfolios and MNPI workflows.",
      "Architected a compliance-focused DevOps ecosystem reducing quarterly regulatory reporting from three months to on-demand.",
      "Co-architected a micro-frontend insurance platform with a C# backend using Module Federation v2.",
    ],
  },
  {
    company: "Lightstream Software / Truist",
    title: "Senior Application Developer",
    period: "2019 – 2021",
    bullets: [
      "Developed a reusable NPM component library bridging modern Angular components into a legacy C# Web Forms platform.",
      "Engineered full-stack retention features increasing completed customer registrations by 10%.",
    ],
  },
  {
    company: "Datalink Software",
    title: "Software Developer",
    period: "2017 – 2019",
    bullets: [
      "Led migration of a hybrid healthcare application from AngularJS to Angular 6, improving mobile performance by 50%.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Coder Camps",
    degree: "Full Stack Software Development Program — M.E.A.N. Stack",
  },
  {
    school: "United States Air Force",
    degree: "Software Development Training",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <span style={{
        color: T.accent,
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${T.border.mid}, transparent)` }} />
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li style={{ display: "flex", gap: 10, marginBottom: 8, listStyle: "none" }}>
      <span style={{ color: T.accent, flexShrink: 0, marginTop: 2, fontSize: "0.65rem" }}>›</span>
      <span style={{ fontSize: "0.78rem", lineHeight: 1.7, color: T.text.body }}>{text}</span>
    </li>
  );
}

function ContactLink({ href, label, external = true }: { href: string; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      style={{ color: T.text.secondary, textDecoration: "none", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.color = T.text.secondary)}
    >
      {label}
    </a>
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

const dot = <span style={{ color: T.border.mid, margin: "0 10px" }}>·</span>;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <main style={{ minHeight: "100vh", background: T.bg.page }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(rgba(0,212,255,0.028) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <Nav
        backHref="/"
        links={[
          ...NAV_EXTERNAL_LINKS,
          { label: "Projects", href: "/explore" },
        ]}
      />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 32px 120px", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.45em", color: T.accent, marginBottom: 16, textTransform: "uppercase" }}>
            Résumé
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 700, color: T.text.primary, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 8 }}>
            Matthew Arvidson
          </h1>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.68rem", color: T.text.dim, letterSpacing: "0.04em", marginBottom: 16 }}>
            Senior Software Engineer · AI Platforms · Financial Systems Modernization · React / TypeScript / Enterprise Architecture
          </p>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", color: T.text.secondary, lineHeight: 2, marginBottom: 24, flexWrap: "wrap" }}>
            Charlotte, NC
            {dot}
            <ContactLink href={`mailto:${CONTACT.email}`} label={CONTACT.email} external={false} />
            {dot}
            <ContactLink href={CONTACT.linkedin.href} label={CONTACT.linkedin.label} />
            {dot}
            <ContactLink href={CONTACT.github.href} label={CONTACT.github.label} />
            {dot}
            <ContactLink href={CONTACT.site.href} label={CONTACT.site.label} />
          </p>
          <button
            onClick={() => window.print()}
            style={{ background: "transparent", border: `1px solid ${T.border.mid}`, outline: "none", cursor: "pointer", padding: "10px 28px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.68rem", letterSpacing: "0.3em", color: T.text.dim, transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border.mid; e.currentTarget.style.color = T.text.dim; }}
          >
            DOWNLOAD PDF ↓
          </button>
        </motion.div>

        {/* ── Summary ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 52 }}>
          <SectionHeader>Summary</SectionHeader>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.85, color: T.text.body }}>{SUMMARY}</p>
        </motion.section>

        {/* ── Skills ── */}
        <motion.section {...fadeUp(0.08)} style={{ marginBottom: 52 }}>
          <SectionHeader>Core Skills</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SKILLS.map((group) => (
              <div key={group.label} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "0 20px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: T.text.dim }}>
                  {group.label}
                </span>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ fontFamily: "monospace", fontSize: "0.7rem", padding: "3px 10px", background: T.bg.surface, color: T.text.secondary, border: `1px solid ${T.border.mid}`, borderRadius: 2 }}>
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
                style={{ borderLeft: `1px solid ${T.border.subtle}`, paddingLeft: 24, position: "relative" }}
              >
                <div style={{ position: "absolute", left: -4, top: 6, width: 7, height: 7, borderRadius: "50%", background: T.accent, boxShadow: `0 0 8px rgba(0,212,255,0.5)` }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <div>
                    <h2 style={{ fontSize: "1rem", fontWeight: 700, color: T.text.primary, marginBottom: 2 }}>{job.company}</h2>
                    <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.7rem", color: T.accent, letterSpacing: "0.04em" }}>{job.title}</p>
                  </div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.65rem", color: T.text.dim, letterSpacing: "0.04em" }}>{job.period}</p>
                </div>
                <ul style={{ padding: 0, margin: 0 }}>
                  {job.bullets.map((b, i) => <Bullet key={i} text={b} />)}
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
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.bg.surface, border: `1px solid ${T.accent}`, flexShrink: 0, marginTop: 5 }} />
                <div>
                  <p style={{ fontSize: "0.82rem", fontWeight: 600, color: T.text.primary, marginBottom: 2 }}>{edu.school}</p>
                  <p style={{ fontSize: "0.75rem", color: T.text.body }}>{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>

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
