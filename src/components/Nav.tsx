"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "@/lib/tokens";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

interface NavProps {
  /** If provided, renders a "← BACK" link on the left */
  backHref?: string;
  /** Shown in the center (desktop) / hidden on mobile */
  centerLabel?: string;
  links: NavLink[];
}

const monoBase: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function Nav({ backHref, centerLabel = "MATTHEW-ARVIDSON.COM", links }: NavProps) {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    function onResize() { if (window.innerWidth >= 768) setOpen(false); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function renderLink(link: NavLink, style: React.CSSProperties, onClick?: () => void) {
    const combined = { ...monoBase, ...style };
    const handleClick = () => { link.onClick?.(); onClick?.(); };

    if (link.onClick) {
      return (
        <button key={link.label} onClick={handleClick}
          style={{ ...combined, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = style.color as string)}
        >{link.label}</button>
      );
    }

    return (
      <a key={link.label} href={link.href}
        {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
        onClick={handleClick}
        style={combined}
        onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = style.color as string)}
      >{link.label}</a>
    );
  }

  const desktopLinkStyle: React.CSSProperties = { fontSize: "0.7rem", letterSpacing: "0.1em", color: T.text.dim };
  const mobileLinkStyle: React.CSSProperties = { fontSize: "1rem", letterSpacing: "0.12em", color: T.text.secondary };

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 20,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 24px",
        background: "rgba(7,11,16,0.92)", backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${T.border.subtle}`,
      }}>
        {/* Left — back link or logo */}
        {backHref ? (
          <Link href={backHref}
            style={{ display: "flex", alignItems: "center", gap: 8, ...monoBase, fontSize: "0.7rem", letterSpacing: "0.3em", color: T.text.dim }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.text.dim)}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2L3 6l5 4" /></svg>
            BACK
          </Link>
        ) : (
          <span style={{ ...monoBase, fontSize: "0.65rem", letterSpacing: "0.3em", color: T.text.ghost, userSelect: "none" }}>
            {centerLabel}
          </span>
        )}

        {/* Center watermark — desktop only, only when there's a back link */}
        {backHref && (
          <span className="hidden md:block" style={{ ...monoBase, fontSize: "0.65rem", letterSpacing: "0.3em", color: T.text.ghost, userSelect: "none" }}>
            {centerLabel}
          </span>
        )}

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 20 }}>
          {links.map((link) => renderLink(link, desktopLinkStyle))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: 4, color: T.text.dim }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed", top: 57, left: 0, right: 0, zIndex: 19,
              background: "rgba(7,11,16,0.97)", backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${T.border.subtle}`,
              padding: "28px 32px 36px",
              display: "flex", flexDirection: "column", gap: 28,
            }}
          >
            {/* Dot grid accent */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,212,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

            {links.map((link) => (
              <div key={link.label} style={{ position: "relative", zIndex: 1 }}>
                {renderLink(link, mobileLinkStyle, () => setOpen(false))}
              </div>
            ))}

            {/* Watermark at bottom */}
            <p style={{ ...monoBase, fontSize: "0.6rem", letterSpacing: "0.3em", color: T.text.ghost, marginTop: 8, position: "relative", zIndex: 1 }}>
              MATTHEW-ARVIDSON.COM
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
