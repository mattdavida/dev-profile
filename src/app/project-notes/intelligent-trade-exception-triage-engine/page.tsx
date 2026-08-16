"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/tokens";
import Nav, { NAV_EXTERNAL_LINKS } from "@/components/Nav";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 0.5,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 28,
      }}
    >
      <span
        style={{
          color: T.accent,
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase" as const,
        }}
      >
        {children}
      </span>
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(to right, ${T.border.mid}, transparent)`,
        }}
      />
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderLeft: `2px solid ${T.accent}`,
        margin: "28px 0",
        background: `${T.bg.surface}88`,
        padding: "16px 20px",
        borderRadius: "0 4px 4px 0",
      }}
    >
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.8,
          color: T.text.body,
          fontStyle: "italic",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div
      style={{
        flex: "1 1 140px",
        background: T.bg.card,
        border: `1px solid ${T.border.card}`,
        padding: "20px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right, ${T.accent}44, transparent)`,
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          color: T.text.dim,
          textTransform: "uppercase" as const,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: T.text.primary,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      {sub && (
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.6rem",
            color: T.text.secondary,
            marginTop: 6,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function StackRow({
  layer,
  tech,
  purpose,
}: {
  layer: string;
  tech: string;
  purpose: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 180px 1fr",
        gap: "0 20px",
        padding: "12px 0",
        borderBottom: `1px solid ${T.border.subtle}`,
        alignItems: "baseline",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.62rem",
          color: T.text.dim,
          letterSpacing: "0.06em",
        }}
      >
        {layer}
      </span>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.7rem",
          color: T.accent,
        }}
      >
        {tech}
      </span>
      <span
        style={{ fontSize: "0.78rem", color: T.text.body, lineHeight: 1.6 }}
      >
        {purpose}
      </span>
    </div>
  );
}

function DecisionRow({
  decision,
  outcome,
}: {
  decision: string;
  outcome: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "14px 0",
        borderBottom: `1px solid ${T.border.subtle}`,
      }}
    >
      <span
        style={{
          color: T.accent,
          flexShrink: 0,
          fontSize: "0.65rem",
          marginTop: 3,
        }}
      >
        ›
      </span>
      <div>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: T.text.primary,
            marginBottom: 4,
          }}
        >
          {decision}
        </p>
        <p
          style={{ fontSize: "0.76rem", color: T.text.body, lineHeight: 1.65 }}
        >
          {outcome}
        </p>
      </div>
    </div>
  );
}

const linkBtn = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "0.68rem",
  letterSpacing: "0.12em",
  color: T.text.dim,
  border: `1px solid ${T.border.mid}`,
  padding: "8px 20px",
  textDecoration: "none",
  transition: "border-color 0.2s, color 0.2s",
} as const;

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={linkBtn}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = T.accent;
        e.currentTarget.style.color = T.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = T.border.mid;
        e.currentTarget.style.color = T.text.dim;
      }}
    >
      {children}
    </a>
  );
}

function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure style={{ margin: "0 0 28px" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          border: `1px solid ${T.border.card}`,
        }}
      />
      <figcaption
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.65rem",
          color: T.text.dim,
          lineHeight: 1.6,
          marginTop: 12,
          letterSpacing: "0.02em",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const IMG =
  "/project-notes/intelligent-trade-exception-triage-engine";

export default function ItetePage() {
  return (
    <main style={{ minHeight: "100vh", background: T.bg.page }}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(0,212,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.035) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Nav
        backHref="/explore"
        links={[
          ...NAV_EXTERNAL_LINKS,
          { label: "Resume", href: "/resume" },
          { label: "Projects", href: "/explore" },
        ]}
      />

      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "64px 32px 120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Hero ── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 40 }}>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.45em",
              color: T.accent,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Project Notes · AI & Fintech
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: T.text.primary,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              marginBottom: 12,
            }}
          >
            Trade Exception Triage
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              color: T.text.dim,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            ITETE · Human-in-the-loop reference architecture
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: T.text.body,
              lineHeight: 1.75,
              marginBottom: 28,
              maxWidth: 640,
            }}
          >
            Middle-office exception ops where Java owns facts, lifecycle, and
            auditable confidence — Azure OpenAI proposes severity and narrative
            only — and nothing becomes terminal until an operator Approves,
            Rejects, or Overrides.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 24,
            }}
          >
            {[
              "Spring Boot",
              "Kafka",
              "PostgreSQL",
              "FastAPI",
              "LangGraph",
              "Azure OpenAI",
              "Angular",
              "HITL",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.68rem",
                  padding: "3px 10px",
                  background: T.bg.surface,
                  color: T.text.secondary,
                  border: `1px solid ${T.border.mid}`,
                  borderRadius: 2,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              color: T.text.dim,
              letterSpacing: "0.05em",
              marginBottom: 24,
            }}
          >
            Local Windows POC — Azure OpenAI required; no stub path. Not a
            production control plane.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <LinkButton href="https://github.com/mattdavida/intelligent-trade-exception-triage-engine">
              GitHub ↗
            </LinkButton>
            <LinkButton href="https://github.com/mattdavida/intelligent-trade-exception-triage-engine/blob/main/DEMO.md">
              Guided demo ↗
            </LinkButton>
            <LinkButton href="https://github.com/mattdavida/intelligent-trade-exception-triage-engine/blob/main/docs/architecture.md">
              Architecture ↗
            </LinkButton>
          </div>
        </motion.div>

        {/* ── Hero shot ── */}
        <motion.div {...fadeUp(0.04)} style={{ marginBottom: 56 }}>
          <Shot
            src={`${IMG}/01-desk-live-queue.png`}
            alt="Angular HITL desk — live queue with AI proposal and Java confidence factors"
            caption="HITL desk — LIVE SSE queue, trade facts, AI proposal, and Java rubric confidence on one screen."
          />
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          {...fadeUp(0.05)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 72,
          }}
        >
          <Stat label="System of record" value="Java" sub="Lifecycle · confidence · audit" />
          <Stat label="AI returns" value="Qual" sub="Severity + narrative only" />
          <Stat label="Terminal path" value="HITL" sub="Approve · Reject · Override" />
          <Stat label="Ingest" value="Kafka" sub="Commit before Azure call" />
        </motion.div>

        {/* ── The Problem ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Problem</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Exception desks have the same two-half problem as execution — with
            different stakes. The qualitative half asks how severe a break is
            and what ops should do next. The control half asks who owns the
            ledger, what the lifecycle status is, and whether a confidence score
            can be defended in audit.
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Letting the model invent amounts, flip statuses, or emit a 0–100
            &ldquo;confidence&rdquo; number is convenient and indefensible —
            the LLM grades its own homework, and the number cannot be
            recomputed from persisted controls data.
          </p>
          <Callout>
            Use this pattern when you need AI assistance on operational
            exceptions without letting the model become the ledger or the risk
            grade.
          </Callout>
        </motion.section>

        {/* ── Boundary ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Boundary</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Complexity at the seams is intentional. Java (Spring) consumes
            Kafka, persists exceptions, scores confidence with a versioned
            rubric, and exposes REST + SSE. Python (FastAPI + LangGraph + Azure
            OpenAI) returns severity, recommendation, and reasoning only —
            never amounts, status transitions, or confidence. Angular is the
            only path to a terminal disposition.
          </p>

          <div style={{ marginBottom: 8 }}>
            {[
              {
                layer: "Facts",
                tech: "Java + Postgres",
                purpose:
                  "Trade fields and lifecycle are the system of record — AI never invents amounts.",
              },
              {
                layer: "Proposal",
                tech: "Python / LangGraph",
                purpose:
                  "Qualitative severity + ops narrative after the Kafka consume transaction commits.",
              },
              {
                layer: "Confidence",
                tech: "Java rubric v1",
                purpose:
                  "Additive factors, stamped version, recomputable — covered by JUnit.",
              },
              {
                layer: "Disposition",
                tech: "Angular HITL",
                purpose:
                  "Approve / Reject / Override only; active queue is non-terminal statuses.",
              },
            ].map((row) => (
              <StackRow key={row.layer} {...row} />
            ))}
          </div>

          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginTop: 28,
              marginBottom: 12,
            }}
          >
            Status path:
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.72rem",
              color: T.text.secondary,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            NEW → ANALYZING → PENDING_REVIEW → RESOLVED | REJECTED | OVERRIDDEN
            <br />
            ↘ ANALYZING_FAILED ↗ (Reject / Override still allowed)
          </p>
        </motion.section>

        {/* ── Hard parts ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Hard Parts</SectionHeader>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
            }}
          >
            1. Ingest must not wait on Azure
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Holding a Kafka consumer transaction open while calling Azure stalls
            the consumer and risks redelivery. The shipped shape: persist{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>NEW</code>,
            commit and ack, then an{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              AFTER_COMMIT
            </code>{" "}
            async worker calls FastAPI outside any DB transaction on a bounded
            pool. AI outages leave rows in Postgres for recovery — they do not
            poison offsets.
          </p>

          <Shot
            src={`${IMG}/05-kafka-topic.png`}
            alt="Kafka UI showing raw-trade-exceptions topic with sample messages"
            caption="Kafka UI — eight fixture messages on raw-trade-exceptions before (and independent of) Azure latency."
          />

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
              marginTop: 8,
            }}
          >
            2. Confidence is derived, not confessed
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            The analyze API contract forbids a confidence field. Java{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ConfidenceScorer
            </code>{" "}
            applies rubric{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>v1</code> —
            taxonomy match, amount bands, field completeness, allow-lists —
            persists score + fired factors + version stamp, and the desk renders
            the why. Same inputs + same rubric → same score. Model swaps do not
            rewrite historical fiction.
          </p>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
            }}
          >
            3. HITL is the only terminal gate
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Approve requires{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              PENDING_REVIEW
            </code>{" "}
            and a present AI recommendation. Reject / Override stay available on{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ANALYZING_FAILED
            </code>{" "}
            so ops are never blocked when AI is down — but they cannot
            &ldquo;Approve&rdquo; empty analysis. Disposition lands in Postgres
            with resolve action + audit note; the desk drops terminal rows from
            the live queue via SSE.
          </p>

          <Shot
            src={`${IMG}/04-after-approve.png`}
            alt="Desk after Approve — queue count drops from 8 to 7"
            caption="After Approve AI — queue 8 → 7; next pending exception auto-selected."
          />
          <Shot
            src={`${IMG}/06-postgres-resolved.png`}
            alt="Postgres showing resolved exception row with audit fields"
            caption="Postgres proof — Java owns the ledger; terminal status and resolve_action are queryable facts."
          />
        </motion.section>

        {/* ── Stack ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>Stack</SectionHeader>
          <div>
            <StackRow
              layer="Feed"
              tech="Java producer"
              purpose="Replays sample-data JSON into Kafka for a cold demo."
            />
            <StackRow
              layer="Bus"
              tech="Kafka"
              purpose="Topic raw-trade-exceptions — keys by tradeId."
            />
            <StackRow
              layer="Orchestrator"
              tech="Spring Boot 3"
              purpose="Consume, persist, async AI client, ConfidenceScorer, REST + SSE."
            />
            <StackRow
              layer="AI engine"
              tech="FastAPI + LangGraph"
              purpose="POST /api/v1/analyze-exception — qualitative only; Azure OpenAI behind it."
            />
            <StackRow
              layer="Desk"
              tech="Angular 19"
              purpose="AG Grid queue, detail pane, LIVE badge, HITL actions."
            />
            <StackRow
              layer="Cloud"
              tech="Azure Bicep"
              purpose="OpenAI + Key Vault via infra/deploy.ps1 — required; no stub."
            />
          </div>
        </motion.section>

        {/* ── Decisions ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>Design Decisions</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <DecisionRow
              decision="Async desk review, not mid-graph interrupt"
              outcome="Pipeline finishes a suggestion (PENDING_REVIEW); ops review a persisted row over REST + SSE — not a suspended LangGraph interrupt()."
            />
            <DecisionRow
              decision="HTTP/1.1 to the local AI engine"
              outcome="Java HttpClient HTTP/2 to uvicorn produced empty-body 422s in practice; HTTP/1.1 is the shipped client path."
            />
            <DecisionRow
              decision="Versioned rubric with factor breakdown"
              outcome="confidenceRubricVersion + fired factors persist on the row so audit can replay without trusting model output."
            />
            <DecisionRow
              decision="Honest POC gaps"
              outcome="No ingest idempotency on replay, Windows-only stack scripts, confidence allow-lists in code — documented in known-gaps.md rather than hidden."
            />
          </div>
        </motion.section>

        {/* ── Takeaways ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>Engineering Takeaways</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                heading: "Architectural boundaries beat instructional ones.",
                body: "An API that cannot return confidence is stronger than a prompt that asks the model not to self-grade. The same idea as the polyglot execution agent — qualitative AI, deterministic controls — applied to exception ops.",
              },
              {
                heading: "Transaction seams are product decisions.",
                body: "Acking Kafka before Azure is not just reliability hygiene; it defines what the desk can still do when the model is down (Reject / Override on ANALYZING_FAILED).",
              },
              {
                heading: "Confidence without factors is theater.",
                body: "A naked float does not help an analyst. Persisting which rubric factors fired makes the score an explanation, not a vibe.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                style={{
                  borderLeft: `1px solid ${T.border.subtle}`,
                  paddingLeft: 24,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -4,
                    top: 6,
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: T.accent,
                    boxShadow: `0 0 8px rgba(0,212,255,0.5)`,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: T.text.primary,
                    marginBottom: 8,
                  }}
                >
                  {item.heading}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.75,
                    color: T.text.body,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Footer ── */}
        <motion.div
          {...fadeUp(0.05)}
          style={{
            borderTop: `1px solid ${T.border.subtle}`,
            paddingTop: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.35em",
                color: T.text.dim,
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Explore more
            </p>
            <a
              href="/explore"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                color: T.text.secondary,
                textDecoration: "none",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = T.text.secondary)
              }
            >
              ← All projects
            </a>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <LinkButton href="https://github.com/mattdavida/intelligent-trade-exception-triage-engine">
              View on GitHub ↗
            </LinkButton>
            <a
              href="/project-notes/polyglot-execution-agent"
              style={{
                ...linkBtn,
                padding: "10px 24px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.accent;
                e.currentTarget.style.color = T.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border.mid;
                e.currentTarget.style.color = T.text.dim;
              }}
            >
              Related: Execution agent →
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          [style*="gridTemplateColumns: 120px 180px"] {
            grid-template-columns: 1fr !important;
            gap: 4px 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
