export const NEXUS_PROFILE = "https://www.nexusmods.com/profile/DevToolsMaster/mods";

export type Category = "AI & Fintech" | "Game Modding" | "Tools";

export interface Project {
  /** Must match the GitHub repo name exactly */
  name: string;
  /** Which GitHub account owns this repo */
  account: "mattdavida" | "matthew-arvidson";
  desc: string;
  lang: string;
  tags: Category[];
  /** Optional route to a project notes deep-dive page */
  notes?: string;
  /** Populated at runtime from GitHub API */
  url?: string;
  stars?: number | null;
  updatedAt?: string | null;
}

// ─── Curated project list ─────────────────────────────────────────────────────
// url, stars, and updatedAt come from the GitHub API at runtime.
// Only add: name (must match repo exactly), account, desc, lang, tags.

export const PROJECTS: Project[] = [

  // ── AI & Fintech ─────────────────────────────────────────────────────────
  {
    name: "polyglot-execution-agent",
    account: "matthew-arvidson",
    desc: "Production-inspired trading execution agent — LangGraph orchestrates LLM strategy selection while a C++20 LOB engine (p50 = 0.6 µs, zero heap allocation) computes slippage via pybind11. Synchronous HITL pause with SQLite checkpointing. Real Bloomberg ZN market data.",
    lang: "Python / C++",
    tags: ["AI & Fintech"],
    notes: "/project-notes/polyglot-execution-agent",
  },
  {
    name: "structured-notes-intelligence-engine",
    account: "matthew-arvidson",
    desc: "RAG-powered analysis pipeline for equity structured note term sheets — ingests PDFs, chunks, embeds, and surfaces structured risk signals.",
    lang: "Python",
    tags: ["AI & Fintech"],
  },
  {
    name: "Contract-Intelligence-Engine",
    account: "matthew-arvidson",
    desc: "PDF contract → structured risk memo flagging deviations, risk terms, and recommended actions. Built to go beyond simple LLM chat.",
    lang: "Python",
    tags: ["AI & Fintech"],
  },
  {
    name: "AI-Resume-Evaluator",
    account: "matthew-arvidson",
    desc: "Lightweight serverless ATS that evaluates PDF resumes against a job description using Azure OpenAI — no infra needed.",
    lang: "Python",
    tags: ["AI & Fintech"],
  },
  {
    name: "signature-verification-poc",
    account: "matthew-arvidson",
    desc: "Offline signature verification on checks and similar documents — lightweight POC with no cloud dependencies.",
    lang: "Python",
    tags: ["AI & Fintech"],
  },
  {
    name: "3forge-trading-dashboard",
    account: "matthew-arvidson",
    desc: "4-panel live trading dashboard with full inter-widget communication, REST API integration with Python + OpenAI, and a 3forge React integration.",
    lang: "HTML / Python",
    tags: ["AI & Fintech"],
  },
  {
    name: "cdm-validation-poc",
    account: "matthew-arvidson",
    desc: "CDM implementation POC validating financial trade data against FINOS official validators — financial industry standard compliance.",
    lang: "Java",
    tags: ["AI & Fintech"],
  },
  {
    name: "3-forge-kafka-minimal",
    account: "matthew-arvidson",
    desc: "Minimal Kafka setup files for 3forge integration — reproducible event-streaming foundation for trading systems.",
    lang: "Java",
    tags: ["AI & Fintech"],
  },

  // ── Game Modding — starred / high-impact first ───────────────────────────
  {
    name: "MGS-Delta-UE4SS-Fix",
    account: "mattdavida",
    desc: "Community UE4SS compatibility fix for Metal Gear Solid Delta: Snake Eater. 10 stars — widely cited across the modding community.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "SilkSongMod",
    account: "mattdavida",
    desc: "Comprehensive cheat suite with professional GUI for Hollow Knight: Silksong — health control, toggle tools, invisible mode, and more. 10 stars.",
    lang: "C#",
    tags: ["Game Modding"],
  },
  {
    name: "HollowKnightMod",
    account: "mattdavida",
    desc: "Comprehensive cheat menu mod for Hollow Knight extending the built-in developer cheat system with a professional UI.",
    lang: "C#",
    tags: ["Game Modding"],
  },

  // ── Game Modding — infrastructure & tooling ──────────────────────────────
  {
    name: "UE4SS-Toolkit",
    account: "mattdavida",
    desc: "Professional-grade interface for real-time Lua code execution, advanced game state manipulation, and sophisticated mod management via UE4SS.",
    lang: "Lua",
    tags: ["Game Modding", "Tools"],
  },
  {
    name: "RE-UE4SS",
    account: "mattdavida",
    desc: "Fork of the injectable Lua scripting system, SDK generator, and live property editor for UE4/5 games — contributing to the core toolchain.",
    lang: "C++",
    tags: ["Game Modding", "Tools"],
  },
  {
    name: "Cpp_Mods",
    account: "mattdavida",
    desc: "UE4SS mods written in C++ — lower-level engine hooks beyond what Lua scripting alone can access.",
    lang: "C++",
    tags: ["Game Modding", "Tools"],
  },
  {
    name: "Lua_Mods",
    account: "mattdavida",
    desc: "Collection of Lua mods for Unreal Engine games using the UE4SS scripting framework — shared utilities and game-specific implementations.",
    lang: "Lua",
    tags: ["Game Modding", "Tools"],
  },

  // ── Game Modding — individual game mods ──────────────────────────────────
  {
    name: "Code-Vein-2-Cheat-Traversal-Mod",
    account: "mattdavida",
    desc: "UE4SS Lua mod for Code Vein II adding traversal improvements, stat cheats, and QOL features through in-game console commands.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "CheatMod-for-Remnant-2",
    account: "mattdavida",
    desc: "UE4SS-based Lua scripting mod for Remnant 2 granting in-game cheats through hotkeys and console commands.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "Lords-of-the-Fallen-Stat-Mod",
    account: "mattdavida",
    desc: "Hotkey mod for Lords of the Fallen — infinite consumables, unlimited vigor, god mode, and max weapon levels in inventory.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "AILimitMod",
    account: "mattdavida",
    desc: "Full C# GUI mod for AI Limit — infinite item use, god mode, crystal/cash cheats, complete item access, armor/weapon/headwear unlocks, fast travel.",
    lang: "C#",
    tags: ["Game Modding"],
  },
  {
    name: "Witchfire-ue4ss-fix",
    account: "mattdavida",
    desc: "UE4SS compatibility fix for Witchfire — restoring mod support after engine updates.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "WitchfireMod",
    account: "mattdavida",
    desc: "CheatManager mod for Witchfire built on UE4SS — extends the engine's built-in cheat system with custom commands.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "EnderMagnoliaStatMod",
    account: "mattdavida",
    desc: "Comprehensive stat and accessibility mod for ENDER MAGNOLIA: Bloom in the Mist.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "EnderChallengeMod",
    account: "mattdavida",
    desc: "Challenge mod for ENDER MAGNOLIA: Bloom in the Mist — unlocks endgame systems early for advanced players.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "LostSoulsAsideMod",
    account: "mattdavida",
    desc: "Keybind cheats to retain powers from the intro sequence, plus console commands for game-breaking features in Lost Souls Aside.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "WuchangMod",
    account: "mattdavida",
    desc: "Mods for Wuchang: Fallen Feathers — gameplay enhancements via UE4SS Lua scripting.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "MortalShellMod",
    account: "mattdavida",
    desc: "Extensive gameplay enhancements for Mortal Shell — shell unlocks, combat modifications, and QOL improvements via hotkeys and behind-the-scenes hooks.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "LiesofP-UltimateAccess",
    account: "mattdavida",
    desc: "Comprehensive UE4SS mod for Lies of P — instant boss access, complete DLC integration, and advanced save game manipulation.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "EnotriaStatMod",
    account: "mattdavida",
    desc: "Mod for Enotria: The Last Song — console commands for infinite health, stamina, max inventory, and full virtue control.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "EnderLiliesStatMod",
    account: "mattdavida",
    desc: "Stat and cheat mod for Ender Lilies: Quietus of the Knights — published on Nexus Mods.",
    lang: "Lua",
    tags: ["Game Modding"],
  },

  // ── Tools & Extensions ────────────────────────────────────────────────────
  {
    name: "give_item_cmd_db",
    account: "mattdavida",
    desc: "Give Item command item mappings database for UE4SS modding — 6 stars and 1 fork, widely referenced across the modding community.",
    lang: "Data",
    tags: ["Tools", "Game Modding"],
  },
  {
    name: "UE4SS_Lua_Utils",
    account: "mattdavida",
    desc: "Reusable utility library for UE4SS Lua mods — shared helpers that power many of the mods in this portfolio.",
    lang: "Lua",
    tags: ["Tools", "Game Modding"],
  },
  {
    name: "chrome-outreach-extension",
    account: "matthew-arvidson",
    desc: "Chrome extension that generates pre-filled Outlook interview request email drafts for BIP US / Riskcare recruiters.",
    lang: "JavaScript",
    tags: ["Tools"],
  },
];

export const LANG_COLORS: Record<string, string> = {
  Python:          "#3b82f6",
  TypeScript:      "#06b6d4",
  "C#":            "#a855f7",
  "C++":           "#f97316",
  Lua:             "#ca8a04",
  Java:            "#ef4444",
  JavaScript:      "#f59e0b",
  "HTML / Python": "#10b981",
  Data:            "#64748b",
};

export const ALL_CATEGORIES: Category[] = [
  "AI & Fintech",
  "Game Modding",
  "Tools",
];
