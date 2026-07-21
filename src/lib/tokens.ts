/**
 * Design tokens — single source of truth for every color, border, and
 * spacing value used across the portfolio. Edit here, propagates everywhere.
 *
 * Hierarchy:
 *   text.primary   — headings, names, card titles
 *   text.body      — readable body copy, bullet points, descriptions
 *   text.secondary — subtitles, contact info, meta labels
 *   text.dim       — dates, nav links (inactive), category labels
 *   text.ghost     — watermarks, barely-visible decorative text
 */

export const T = {
  bg: {
    page:    "#070b10",  // full-page background
    card:    "#090e17",  // project cards
    surface: "#0d1a26",  // tag pills, skill chips
  },

  text: {
    primary:   "#e8edf4",  // headings, names
    body:      "#9aaabb",  // body paragraphs, bullets, descriptions
    secondary: "#6a8aaa",  // subtitles, contact, job location
    dim:       "#4a6a80",  // dates, nav links, group labels
    ghost:     "#1e2d3d",  // watermarks, barely-visible decorative
  },

  accent:    "#00d4ff",
  accentDim: "#0099bb",

  border: {
    subtle: "#0f1a24",              // section dividers, default card border
    mid:    "#1a2a3a",              // skill pill borders
    card:   "#16202e",              // project card resting border
    hover:  "rgba(0,212,255,0.3)", // card / button hover border
  },

  star: {
    base:  "#c8a020",
    glow:  "#ffe066",
  },
} as const;

/** Typed CSS custom-property reference — use in Tailwind className strings */
export const CSS = {
  accent:    "var(--accent)",
  textPrimary:   "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textMuted:     "var(--text-muted)",
  bg:        "var(--bg)",
} as const;
