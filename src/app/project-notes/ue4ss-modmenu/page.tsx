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

export default function Ue4ssModMenuPage() {
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
            Project Notes · Game Modding
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
            ModMenu
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
            v1.1.2 · UE4SS Lua UI framework
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
            A game-agnostic UI framework for Unreal Engine 4/5 mods — injected
            entirely via Lua, with no Blueprints, no Unreal Editor, and UObject
            roots that don&apos;t collide when independent mod authors each ship
            their own shell. Shipping in five Nexus titles plus a
            game-agnostic DevTools host.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 32,
            }}
          >
            {[
              "UE4SS",
              "Lua",
              "Constructed UMG",
              "Widget Registry",
              "Multi-mod",
              "ModRef",
              "number · textinput · row",
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

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://github.com/mattdavida/ue4ss-ModMenu"
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
              href="https://github.com/mattdavida/ue4ss-DevToolsMod"
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
              DevTools host ↗
            </a>
            <a
              href="https://www.nexusmods.com/profile/DevToolsMaster/mods"
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
              Nexus profile ↗
            </a>
          </div>
        </motion.div>

        {/* ── In-game hero ── */}
        <motion.figure {...fadeUp(0.04)} style={{ margin: "0 0 56px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/project-notes/ue4ss-modmenu/ModMenuHero.png"
            alt="Two ModMenu panels in Beast of Reincarnation — Dev Tools on F6 (left) and an independent host on F7 (right)"
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
            Beast of Reincarnation — two independent ModMenu shells in one
            session: Dev Tools (F6, left) and a minimal host (F7, right).
          </figcaption>
        </motion.figure>

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
          <Stat label="Version" value="1.1.2" sub="number · textinput · row · busy buttons" />
          <Stat label="Widget types" value="8" sub="checkbox · button · dropdown · label · separator · number · textinput · row" />
          <Stat label="Titles" value="5" sub="Nexus hosts + game-agnostic DevTools" />
          <Stat label="Engines" value="UE4/5" sub="Arity fallback · opt-in ignoreLook" />
        </motion.div>

        {/* ── In the wild ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>In the Wild</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 24,
            }}
          >
            Same{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              require(&quot;ModMenu.ModMenu&quot;)
            </code>{" "}
            shell across five published game mods and a starter kit that works
            on any UE4SS title — each host owns its{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>Init</code>{" "}
            /{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              instanceId
            </code>
            ; ModMenu owns chrome, input, and widgets.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 8,
            }}
          >
            {[
              {
                game: "Witchfire",
                href: "https://www.nexusmods.com/witchfire/mods/14",
                note: "Nexus host mod",
              },
              {
                game: "Stone Machia",
                href: "https://www.nexusmods.com/stonemachia/mods/11",
                note: "Nexus host mod",
              },
              {
                game: "Beast of Reincarnation",
                href: "https://www.nexusmods.com/beastofreincarnation/mods/69",
                note: "Nexus host · hero shot above",
              },
              {
                game: "Asterigos: Curse of the Stars",
                href: "https://www.nexusmods.com/asterigoscurseofthestars/mods/19",
                note: "Nexus host mod",
              },
              {
                game: "Thymesia",
                href: "https://www.nexusmods.com/thymesia/mods/28",
                note: "Nexus host mod",
              },
              {
                game: "DevTools (game-agnostic)",
                href: "https://github.com/mattdavida/ue4ss-DevToolsMod",
                note: "UE4SS starter kit — class / instance / function discovery",
              },
            ].map((row) => (
              <div
                key={row.href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(160px, 240px) 1fr",
                  gap: "8px 20px",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.border.subtle}`,
                  alignItems: "baseline",
                }}
              >
                <a
                  href={row.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.72rem",
                    color: T.accent,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  {row.game} ↗
                </a>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: T.text.body,
                    lineHeight: 1.6,
                  }}
                >
                  {row.note}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

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
            If you write a Lua mod for an Unreal Engine game using UE4SS,
            building a player-facing menu is a nightmare. The engine&apos;s
            built-in ImGui bindings are restricted to debugging and carry heavy
            performance penalties. The official alternative is for every mod
            author to manually construct UMG widgets from scratch using raw Lua
            scripts.
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            The result is ecosystem chaos. Modders either skip UIs entirely,
            rely on blind hotkeys, or build their own fragile UI shells that
            clash with other mods. Shared UObject names under{" "}
            <em style={{ color: T.text.secondary }}>GameInstance</em>,
            conflicting toggle keys, and naive input-mode restores turn
            &ldquo;two mods installed&rdquo; into a crash or a dead cursor.
          </p>
          <Callout>
            ModMenu takes a different position: UI boilerplate shouldn&apos;t be
            the modder&apos;s problem.
          </Callout>
        </motion.section>

        {/* ── How It Works ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>How It Works</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 20,
            }}
          >
            ModMenu is a lightweight, drop-in UI framework shipped under{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              shared/ModMenu
            </code>
            . Independent feature mods call{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              Register()
            </code>{" "}
            with a Lua table of settings (checkboxes, dropdowns, buttons).
            ModMenu handles shell chrome, input, docking, and UMG construction.
          </p>

          <div style={{ marginBottom: 8 }}>
            {[
              {
                layer: "Host",
                tech: "Init once",
                purpose:
                  "Title, hotkey, dock side, instanceId — plus canOpen / ignoreLook when the host needs them.",
              },
              {
                layer: "Feature",
                tech: "Register",
                purpose:
                  "Owns a section id, items, callbacks, and game-specific calls. No UMG.",
              },
              {
                layer: "Framework",
                tech: "ModMenu",
                purpose:
                  "Draw panel, latch input, store values, dock left/right, build widgets from the registry.",
              },
            ].map((row) => (
              <StackRow key={row.layer} {...row} />
            ))}
          </div>

          <CodeBlock>{`local ModMenu = require("ModMenu.ModMenu")

ModMenu.Init({
    title = "Dev Tools",
    instanceId = "DevTools",
    key = Key.F7,
    keyHint = "F7",
    dock = "right",
    ignoreLook = true, -- opt-in camera lock for mouse-look games
})

ModMenu.Register({
    id = "Items",
    title = "Items",
    items = {
        { type = "dropdown", id = "item", label = "Item",
          searchable = true, maxVisible = 400, options = itemDb },
        { type = "row", items = {
            { type = "number", id = "count", label = "Count",
              default = 1, min = 1, integer = true },
            { type = "button", id = "give", label = "Give item",
              onClick = function() GiveSelected() end },
        }},
        { type = "textinput", id = "filter", label = "Filter",
          placeholder = "Name contains...", debounceMs = 250 },
    },
})`}</CodeBlock>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
              marginTop: 32,
            }}
          >
            Isolation without a shared process table
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            Each enabled Lua mod that calls{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>Init</code>{" "}
            gets its own panel and hotkey. UObject roots are dynamically named{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ModMenu_Root_&lt;tag&gt;_&lt;n&gt;
            </code>{" "}
            using a process-wide serial from{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ModRef
            </code>{" "}
            (
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ModMenu.NextInstanceId
            </code>
            ), so two mods never steal{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ModMenu_Root_1
            </code>
            .
          </p>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
              marginTop: 28,
            }}
          >
            The widget registry
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
            }}
          >
            The shell never hard-codes control UMG. Feature mods request a
            &ldquo;dropdown&rdquo; or &ldquo;number&rdquo;; the registry
            constructs the right UMG on the fly. As of 1.1.x that means eight
            types — including{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>number</code>
            ,{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              textinput
            </code>
            , and horizontal{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>row</code>{" "}
            groups for select → count → submit flows. New types implement a
            contract —{" "}
            <em style={{ color: T.text.secondary }}>
              validate, seed, build, poll, apply
            </em>{" "}
            — and register in{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              widgets/init.lua
            </code>
            . Busy buttons use{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              SetButtonLabel
            </code>{" "}
            /{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              SetButtonEnabled
            </code>{" "}
            without rebuilding the section.
          </p>
        </motion.section>

        {/* ── The Hard Parts ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>The Hard Parts</SectionHeader>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 24,
            }}
          >
            Wrapping an engine as massive as Unreal from the outside via Lua
            introduces edge cases that only show up when two menus are open,
            a list has five hundred items, or the game steals the cursor mid-click.
          </p>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
            }}
          >
            1. Input state latching
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            When a menu opens, it switches the engine to GameAndUI and shows the
            mouse cursor. If a player has two ModMenu instances open — a cheat
            menu and a Dev Tools menu — closing one cannot blindly revert to
            GameOnly, or the second menu becomes unusable. ModMenu tracks{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ModMenu.OpenCount
            </code>{" "}
            across the shared environment and only restores GameOnly when the
            last shell closes — and only if the game had no cursor when that
            shell opened, so hub / inventory cursors stay intact.
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 16,
            }}
          >
            Camera look is{" "}
            <em style={{ color: T.text.secondary }}>opt-in</em> via{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              {"Init({ ignoreLook = true })"}
            </code>
            : mouse-look titles that need a locked camera pass it; others keep
            default look input. Hosts can also gate open with{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              canOpen
            </code>{" "}
            (close is never gated).
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 28,
            }}
          >
            Related: constructed{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              UButton
            </code>
            s do not get reliable{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              OnClicked
            </code>{" "}
            /{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              IsPressed
            </code>
            . Clicks are latched via an LMB keybind plus{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              IsHovered()
            </code>
            . A poll path also reclaims GameAndUI when the game steals the
            cursor (toasts, mouse-look). UE4 vs UE5{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              SetInputMode_*
            </code>{" "}
            arity is probed once and cached.
          </p>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
            }}
          >
            2. FName zombies after ClearChildren
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
              marginBottom: 28,
            }}
          >
            Clearing a UMG tree does not free FNames. Reusing the same names
            after{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              ClearChildren
            </code>{" "}
            resurrects zombie widgets and breaks live controls — especially
            dropdowns. Every content rebuild bumps an internal{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              contentGen
            </code>{" "}
            so names stay unique for the life of the process.
          </p>

          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: T.text.primary,
              marginBottom: 12,
            }}
          >
            3. Large lists on the game thread
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: T.text.body,
            }}
          >
            An item spawner with hundreds of entries will hitch or crash if you
            construct thousands of{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              UButton
            </code>{" "}
            objects in a single frame. Searchable dropdowns refresh rows in
            place, enforce a{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              maxVisible
            </code>{" "}
            cap, and tell the player to type to narrow. Heavy DB loads defer
            off the open path via{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              OnOpen
            </code>{" "}
            + delay so opening the menu never stutters the game.
          </p>
        </motion.section>

        {/* ── Stack ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>Stack</SectionHeader>
          <div>
            <StackRow
              layer="Runtime"
              tech="UE4SS + Lua"
              purpose="Injectable scripting for UE4/5. ModMenu is require()'d from shared/, not a separately enabled mod."
            />
            <StackRow
              layer="UI"
              tech="Constructed UMG"
              purpose="StaticConstructObject widgets at runtime — no WBP assets, no Unreal Editor step for hosts."
            />
            <StackRow
              layer="Coordination"
              tech="ModRef shared vars"
              purpose="NextInstanceId, OpenCount, key claims, saved cursor flags — scalars only, survive hot-reload."
            />
            <StackRow
              layer="Extensibility"
              tech="Widget contract"
              purpose="Per-type modules under widgets/; registry drives build/poll/apply. Shell stays type-agnostic."
            />
            <StackRow
              layer="Ship"
              tech="npm bundle"
              purpose="Multi-file source → single ModMenu.lua zip under shared/ModMenu for Nexus / player install."
            />
            <StackRow
              layer="Reference host"
              tech="DevTools"
              purpose="Game-agnostic UE4SS discovery panel (F7) — plus five Nexus cheat hosts that ship the same shared ModMenu.lua."
            />
          </div>
        </motion.section>

        {/* ── Takeaways ── */}
        <motion.section {...fadeUp(0.05)} style={{ marginBottom: 60 }}>
          <SectionHeader>Engineering Takeaways</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                heading: "Inversion of control makes modding accessible.",
                body: "By enforcing a strict widget contract (validate, seed, build, poll), the framework separates the definition of a UI from the construction of a UI. Mod authors write a Lua table; the framework owns the volatile Unreal reflection calls.",
              },
              {
                heading:
                  "Multi-mod safety is a shared-environment problem, not a single-mod problem.",
                body: "Unique FNames, OpenCount-aware input restore, and warn-only key claims exist because UE4SS loads many Lua states into one process. A framework that only works alone is not a framework for a modding ecosystem.",
              },
              {
                heading:
                  "Performance constraints shape the API.",
                body: "maxVisible, searchable filters, SetOptions in-place refresh, and OnOpen lazy loads are not polish — they are how you keep constructed UMG off the critical path when a host exposes a real item database.",
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

        {/* ── What's next ── */}
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
            The north star is a denser,{" "}
            <a
              href="https://github.com/mattdavida/SilkSongMod"
              target="_blank"
              rel="noreferrer"
              style={{
                color: T.accent,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Silksong-inspired
            </a>{" "}
            settings shell — still constructed UMG, still game-agnostic.{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>number</code>
            /{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>
              textinput
            </code>
            /{" "}
            <code style={{ color: T.accent, fontSize: "0.82rem" }}>row</code>{" "}
            shipped in 1.1.x; theme tokens, collapsible sections, and tabs are
            scoped next.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <DecisionRow
              decision="Theme tokens"
              outcome="Dark/light presets and shared color/spacing tokens so widgets stop hardcoding brushes."
            />
            <DecisionRow
              decision="Collapsible sections"
              outcome="Biggest UX win for large cheat menus — scannable groups without an endless scroll."
            />
            <DecisionRow
              decision="Tabs + denser layouts"
              outcome="Optional section groups and two-column action grids once the chrome and collapse model settle."
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
              href="https://github.com/mattdavida/ue4ss-ModMenu"
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
              href="https://github.com/mattdavida/ue4ss-DevToolsMod"
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
              DevTools Mod ↗
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
