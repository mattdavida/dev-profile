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
        paddingLeft: 20,
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

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      style={{
        background: T.bg.card,
        border: `1px solid ${T.border.card}`,
        padding: "20px 24px",
        borderRadius: 4,
        overflowX: "auto",
        fontSize: "0.72rem",
        lineHeight: 1.7,
        color: T.text.secondary,
        fontFamily: "var(--font-geist-mono), monospace",
        margin: "20px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right, ${T.accent}33, transparent)`,
        }}
      />
      {children}
    </pre>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PolyglotExecutionAgentPage() {
  return (
    <main style={{ minHeight: "100vh", background: T.bg.page }}>
      {/* Background */}
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
        <motion.div {...fadeUp(0)} style={{ marginBottom: 64 }}>
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
              marginBottom: 16,
            }}
          >
            Polyglot Execution Agent
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: T.text.body,
              lineHeight: 1.75,
              marginBottom: 28,
              maxWidth: 640,
            }}
          >
            Building safe AI systems for financial execution — where LangGraph
            orchestrates qualitative strategy and a C++20 order book engine
            computes the numbers, with a human trader in the loop before any
            order is dispatched.
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 32,
            }}
          >
            {[
              "LangGraph",
              "Azure OpenAI",
              "C++20",
              "pybind11",
              "FastAPI",
              "Next.js",
              "Azure Bicep",
              "Human-in-the-Loop",
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

          {/* POC disclaimer */}
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              color: T.text.dim,
              letterSpacing: "0.05em",
              marginBottom: 24,
            }}
          >
            Proof of concept — not connected to any live trading system or order
            management system.
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://github.com/mattdavida/polyglot-execution-agent"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                color: T.text.dim,
                border: `1px solid ${T.border.mid}`,
                padding: "8px 20px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
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
              GitHub ↗
            </a>
            <a
              href="https://github.com/mattdavida/polyglot-execution-agent/blob/main/ARCHITECTURE.md"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                color: T.text.dim,
                border: `1px solid ${T.border.mid}`,
                padding: "8px 20px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
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
              Architecture Doc ↗
            </a>
          </div>
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
          <Stat
            label="C++ LOB Latency"
            value="0.7 µs"
            sub="p50 · 100k iterations"
          />
          <Stat label="Heap Allocations" value="0" sub="On the C++ hot path" />
          <Stat
            label="Engine Tests"
            value="21"
            sub="Hand-verified sweep math"
          />
          <Stat
            label="Phases Complete"
            value="6 / 7"
            sub="Phase 6 (SSE + Docker) pending"
          />
          <Stat
            label="Market Data"
            value="50K+"
            sub="Real L2 order book ticks"
          />
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
            Execution desks face a problem that has two distinct halves. The
            strategic half — <em style={{ color: T.text.secondary }}>when</em>{" "}
            to trade,{" "}
            <em style={{ color: T.text.secondary }}>what algorithm</em> to use,{" "}
            <em style={{ color: T.text.secondary }}>how</em> to slice an order —
            involves qualitative reasoning under uncertainty. The quantitative
            half — exactly what that strategy will cost in slippage, fill price,
            and market impact — is deterministic math.
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            LLMs are genuinely good at the first half. They reason about
            context, weigh tradeoffs, and adapt to natural language constraints
            like &ldquo;macro catalyst&rdquo; or &ldquo;reduce duration before
            close.&rdquo; They are not good at the second half — they
            hallucinate numbers, and in a financial execution context, a
            hallucinated slippage estimate carries real dollar consequences.
          </p>
          <Callout>
            The standard response to this is prompt engineering: tell the LLM
            not to calculate. This project takes a different position — that
            constraint should be architectural, not instructional. An LLM that
            is told not to compute slippage can still try. An LLM that does not
            have access to a limit order book cannot.
          </Callout>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
            }}
          >
            This is what the Polyglot Execution Agent demonstrates: a
            production-inspired architecture where the LLM decides strategy, a
            C++20 limit order book engine computes the consequences of that
            strategy, and a human trader reviews both before a single order is
            dispatched.
          </p>
        </motion.section>

        {/* ── How It Works ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>How It Works</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 24,
            }}
          >
            A trader submits a trade request with an explicit direction —
            &ldquo;Sell 200 ZN by EOD — factory delay news.&rdquo; Side is a
            form field, never inferred from the free text: a liquidation is a
            sell, and it sweeps the bid side of the book. The system routes the
            request through a four-node LangGraph pipeline, pauses
            mid-execution for human review, and only dispatches on explicit
            approval.
          </p>

          <CodeBlock>{`Trader submits trade request    explicit side: buy or sell
        ↓
  strategy_node   LLM decides: VWAP / TWAP / Sweep / Iceberg + slice count
        ↓         ~4–8 s. Slice SIZE is ceil division in Python — never the LLM
  simulation_node C++ LOB engine sweeps real ZN order book
        ↓         sell sweeps bids, buy sweeps asks — p50 ≈ 0.7 µs
  hitl_node       interrupt() — graph checkpoints to SQLite, API returns
        ↓
  Trader reviews  LLM strategy + C++ metrics (incl. fill ratio) side by side
        ↓
  ┌─────────────┬─────────────────┬──────────────┐
  │   APPROVE   │     MODIFY      │    ABORT     │
  │             │ override params │              │
  └──────┬──────┴────────┬────────┴──────┬───────┘
         ↓               ↓               ↓
  execution_node   simulation_node      END
  log + write JSON (re-run C++ sweep)`}</CodeBlock>

          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            Three actions are available to the trader at the HITL panel:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <DecisionRow
              decision="Approve"
              outcome="The graph resumes at execution_node, logs the trade, and writes a JSON record with the full thread_id, LLM strategy, C++ metrics, and timestamp to output/ for auditability."
            />
            <DecisionRow
              decision="Modify"
              outcome="The trader overrides slice parameters — more slices, smaller size per slice — and triggers a C++ re-simulation. The graph resumes at simulation_node with the new parameters, sweeps the same order book again, and pauses at the HITL panel a second time with updated slippage numbers."
            />
            <DecisionRow
              decision="Abort"
              outcome="The graph routes to the terminal node. No order is dispatched. The full graph state — including the LLM strategy and C++ metrics computed before the abort — remains in SQLite for post-trade audit."
            />
          </div>
        </motion.section>

        {/* ── The Architecture ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Architecture</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 24,
            }}
          >
            The stack is intentionally polyglot. Each layer is chosen for what
            it is best at, not for uniformity.
          </p>
          <div style={{ borderTop: `1px solid ${T.border.subtle}` }}>
            <StackRow
              layer="Orchestration"
              tech="LangGraph + Azure OpenAI"
              purpose="StateGraph with SqliteSaver checkpointer. Owns strategy formulation, graph routing, and the synchronous HITL pause via interrupt()."
            />
            <StackRow
              layer="Compute Core"
              tech="C++20 + pybind11"
              purpose="Pre-allocated limit order book, side-aware sweep (sells hit bids, buys lift asks). Zero heap allocation on the hot path. GIL released for native thread execution. p50 ≈ 0.7 µs across 100k iterations."
            />
            <StackRow
              layer="API Layer"
              tech="FastAPI + Uvicorn"
              purpose="Three routes: POST /api/trade (start graph), GET /api/trade/{id} (poll paused state), POST /api/resume/{id} (resume with trader decision)."
            />
            <StackRow
              layer="Frontend"
              tech="Next.js 16 + DaisyUI"
              purpose="Trader dashboard. Strategy card (LLM output) and metrics card (C++ output) rendered side by side in the HITL review panel."
            />
            <StackRow
              layer="State Persistence"
              tech="SQLite (SqliteSaver)"
              purpose="Required for synchronous HITL — the full graph state serializes to disk between interrupt() and resume. Zero config, single file, one-line swap to Postgres."
            />
            <StackRow
              layer="Market Data"
              tech="Real-world tick data"
              purpose="Real L2 order book data (source under review). Reconstructed via time-windowed accumulation. Produces non-trivial, real slippage numbers."
            />
            <StackRow
              layer="Infrastructure"
              tech="Azure Bicep"
              purpose="Fully repeatable one-command deployment. OpenAI resource, Key Vault, App Service. No manual portal steps."
            />
          </div>
        </motion.section>

        {/* ── The Hard Parts ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Hard Parts</SectionHeader>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
              marginTop: 0,
            }}
          >
            1. The C++20 LOB Engine
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            The order book engine is a deliberate stand-in for the execution
            analytics a trading firm already runs in production — the realistic
            engagement is to integrate that native code, not rewrite it. The
            engine here exists to make the boundary real: it follows genuine
            low-latency conventions so the integration pattern is demonstrated
            against production-shaped constraints, and its math is small enough
            to hand-verify — which the test suite does.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 24,
            }}
          >
            <DecisionRow
              decision="Zero allocation on hot path"
              outcome="The engine never pauses to request more memory from the OS while it is calculating — every price level slot is reserved upfront. Technically: pre-allocated std::array<PriceLevel, MAX_LEVELS> — no new, no malloc inside simulate()."
            />
            <DecisionRow
              decision="Intrusive data structure"
              outcome="Price levels are stored in a flat array, not scattered across memory — the CPU reads them sequentially without cache misses. Technically: PriceLevel.next_idx is an int index, not a pointer — the standard HFT intrusive-list idiom."
            />
            <DecisionRow
              decision="noexcept hot path"
              outcome="No exception-handling scaffolding in the sweep loop — the compiler generates tighter machine code. Technically: simulate() is [[nodiscard]] noexcept."
            />
            <DecisionRow
              decision="GIL release"
              outcome="Python's global interpreter lock is released during the C++ computation — multiple simulations can run in parallel native threads without the Python runtime as a bottleneck. Technically: py::call_guard<py::gil_scoped_release>() on simulate()."
            />
            <DecisionRow
              decision="std::span for views"
              outcome="Safe array access without runtime overhead — bounds-checked in debug builds, zero-cost in release. Technically: std::span<const PriceLevel> — modern C++ without the cost."
            />
          </div>

          <CodeBlock>{`// The sweep loop — zero allocation, intrusive list traversal.
// Side::Sell (a liquidation) walks the bids; Side::Buy walks the asks.
[[nodiscard]] SimulationResult ExecutionSimulator::simulate(
    int order_size, Side side) const noexcept {

    const bool is_buy = (side == Side::Buy);
    const int  head   = is_buy ? book_.ask_head : book_.bid_head;

    int    remaining    = order_size;
    double notional     = 0.0;
    int    total_filled = 0;

    int idx = head;
    while (idx != SENTINEL && remaining > 0) {
        const auto& level = view[idx];
        const int fill = std::min(remaining, level.available);
        notional     += fill * level.price;
        total_filled += fill;
        remaining    -= fill;
        idx = level.next_idx;   // intrusive traversal — no pointer chase
    }
    // total_filled < order_size = partial fill, reported to the caller.
    // Costs are returned in the book's raw price units — the Python
    // boundary converts to USD via instrument tick metadata.
    // ... adverse slippage math, latency capture
}`}</CodeBlock>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
              marginTop: 32,
            }}
          >
            2. Synchronous HITL — The interrupt() Decision
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            The original design used LangGraph&apos;s{" "}
            <code
              style={{
                fontFamily: "monospace",
                color: T.accent,
                fontSize: "0.82rem",
              }}
            >
              interrupt_before=[&quot;hitl_node&quot;]
            </code>{" "}
            at compile time, which stops the graph <em>before</em> a node runs.
            The shipped implementation uses{" "}
            <code
              style={{
                fontFamily: "monospace",
                color: T.accent,
                fontSize: "0.82rem",
              }}
            >
              interrupt()
            </code>{" "}
            called <em>inside</em> the node. This is a deliberate divergence
            with a specific reason.
          </p>
          <Callout>
            interrupt_before stops before the node executes — meaning hitl_node
            never runs on the first pass, and has no opportunity to package the
            strategy and metrics into the feedback payload the frontend needs.
            interrupt() inside the node lets it run its first-pass logic, then
            pause. When resumed, interrupt() returns the trader&apos;s decision
            directly as its value, and the node completes normally.
          </Callout>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
            }}
          >
            The full graph state — including the LLM strategy and C++ metrics —
            serializes to SQLite at the interrupt point. The trader can be
            reviewing the panel for thirty seconds or thirty minutes. When they
            act, the graph resumes from the exact checkpoint. No polling loops,
            no shared mutable state, no race conditions.
          </p>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
              marginTop: 32,
            }}
          >
            3. Realistic Market Data
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            The LOB is populated from a real-world institutional tick dataset
            (source under review) — trade, bid, and ask ticks reconstructed into
            L2 depth. A dummy symmetric order book would produce trivially round
            slippage numbers that look synthetic. Real data produces irregular
            depth and non-trivial results.
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
            }}
          >
            The dataset includes a locked-market session (best bid = best ask —
            a valid real condition in highly liquid futures). Slippage of
            1.4–2.0 bps on a 50–200 contract order comes from sweeping through
            multiple depth levels at different prices, not from the spread
            itself.
          </p>
        </motion.section>

        {/* ── The Hardening Pass ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Hardening Pass</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Before showing this to a technical reviewer, I reviewed it the way
            a hostile domain expert would — and found that the first working
            version had the classic failure mode of AI-era demos: the
            architecture was right, but the finance at the boundary was wrong.
            Four bugs, none of them C++ bugs — all of them{" "}
            <em style={{ color: T.text.secondary }}>
              integration contract bugs
            </em>
            , which is exactly the layer this project claims to demonstrate.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 24,
            }}
          >
            <DecisionRow
              decision="The sell order was buying"
              outcome="The headline demo was a liquidation — a sell — but the engine only swept the ask side, which is a market buy. Fixed with a Side enum flowing from an explicit form field through the API and state into C++: sells sweep bids, buys lift asks. Direction is never inferred from free text."
            />
            <DecisionRow
              decision="The dollars weren't dollars"
              outcome="The engine computed costs in the book's raw price units (CME ticks) but returned them in a field named total_cost_usd — and the UI printed them with a $ sign. Now the C++ core is instrument-agnostic and returns price units; the Python boundary owns the conversion via tick metadata. The units contract is part of the architecture, and it is tested."
            />
            <DecisionRow
              decision="Partial fills were silent"
              outcome="If the book exhausted before a slice completed, the metrics quietly reflected whatever filled. The engine now reports total_filled, the state carries a fill ratio, and the HITL panel warns the trader in red. First end-to-end run after the fix: the LLM proposed a single 200-lot sweep and the panel correctly flagged that only 141 contracts (70.5%) would fill."
            />
            <DecisionRow
              decision="The LLM was doing arithmetic"
              outcome="The LLM originally output shares_per_slice — which meant it was doing the division, contradicting the system's core claim. Now it outputs only the algorithm and a Pydantic-bounded slice count; slice size is deterministic ceil division in Python. 'The LLM never computes a number' is enforced by schema, not by prompt."
            />
          </div>
          <Callout>
            The fix list barely touched the C++. The lesson generalizes: when
            you wrap AI around an existing native system, the risk
            concentrates at the seam — direction, units, partial results.
            Getting the semantics right there is the actual integration skill,
            so the hardening pass ended with a 21-test suite pinning the sweep
            math (buy, sell, partial, hand-computed expectations), the slicing,
            and the unit conversion.
          </Callout>
        </motion.section>

        {/* ── Engineering Takeaways ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>Engineering Takeaways</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                heading: "LLMs are most valuable when constrained.",
                body: "Probabilistic reasoning is where LLMs excel — algorithm selection, qualitative judgment, natural language context. Deterministic computation belongs in native code. Mixing the two produces systems that are neither correct nor fast.",
              },
              {
                heading:
                  "Architectural boundaries are safer than prompt engineering.",
                body: "The LLM in this system cannot compute slippage, slice sizes, or costs — not because it is told not to, but because every number is produced in code: slice sizing by deterministic Python arithmetic with Pydantic-enforced bounds, execution metrics by a C++ engine on a different runtime with no shared state. The constraint is structural. A future model update or a jailbreak attempt cannot override it.",
              },
              {
                heading:
                  "The boundary's units contract is part of the architecture.",
                body: "The native engine returns costs in the instrument's raw price units; the orchestration layer owns the conversion to currency via tick metadata. Getting the semantics right at the seam — direction, units, partial fills — is the actual integration skill, and it is covered by tests.",
              },
              {
                heading:
                  "Human-in-the-loop should be an architectural checkpoint, not a UI afterthought.",
                body: "LangGraph's interrupt() + SqliteSaver checkpointer makes the HITL pause a first-class graph primitive — the full execution state serializes to disk and resumes deterministically. This is the right abstraction for financial systems where a human approval is a compliance requirement, not a convenience feature.",
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

        {/* ── Roadmap ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 72 }}>
          <SectionHeader>What&apos;s Next</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            Phase 6 is scoped and ready. The core architecture is complete —
            these are additive improvements that make the system more
            compelling.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <DecisionRow
              decision="SSE streaming"
              outcome="Stream LLM reasoning tokens to the HITL panel in real time as strategy_node runs. The trader watches the LLM think before the metrics arrive."
            />
            <DecisionRow
              decision="Live market data"
              outcome="Replace the CSV snapshot with a Kafka consumer feeding the LOB in real time — using the same pattern as the 3forge-kafka-minimal integration work."
            />
            <DecisionRow
              decision="L2 book depth display"
              outcome="Show the order book ladder in the HITL panel so the trader sees exactly which levels the C++ engine swept — the simulation made visible."
            />
            <DecisionRow
              decision="Docker + Linux"
              outcome="Cross-compile the C++ pybind11 module for Linux App Service. Currently Windows MSVC only — packaging for cross-platform deployment is the remaining infrastructure gap."
            />
          </div>
        </motion.section>

        {/* ── Footer CTA ── */}
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
            <a
              href="https://github.com/mattdavida/polyglot-execution-agent"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                color: T.text.dim,
                border: `1px solid ${T.border.mid}`,
                padding: "10px 24px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
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
              View on GitHub ↗
            </a>
            <a
              href="https://github.com/mattdavida/polyglot-execution-agent/blob/main/ARCHITECTURE.md"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                color: T.text.dim,
                border: `1px solid ${T.border.mid}`,
                padding: "10px 24px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
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
              Architecture Doc ↗
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
