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
    account: "mattdavida",
    desc: "Production-inspired trading execution agent — LangGraph orchestrates LLM strategy selection while a C++20 LOB engine (p50 = 0.6 µs, zero heap allocation) computes slippage via pybind11. Synchronous HITL pause with SQLite checkpointing. Real-world L2 order book data.",
    lang: "Python / C++",
    tags: ["AI & Fintech"],
    notes: "/project-notes/polyglot-execution-agent",
  },
  {
    name: "real-time-market-intelligence-pipeline",
    account: "mattdavida",
    desc: "Treasury futures ticks stream from CSV through Kafka into kdb+/q for analytics, then push live to an Angular desk UI over SSE.",
    lang: "Java",
    tags: ["AI & Fintech"],
  },
  {
    name: "grounded-ai-reference-architecture",
    account: "mattdavida",
    desc: "Reference implementation for integrating chat/voice into operational software without letting the LLM touch raw data.",
    lang: "TypeScript",
    tags: ["AI & Fintech"],
  },

  // ── Featured framework — first UI shell for UE4SS mods ───────────────────
  // High on All; first under Game Modding filter.
  {
    name: "ue4ss-ModMenu",
    account: "mattdavida",
    desc: "Lightweight UI framework for UE4SS Lua mods — feature modules register reusable in-game settings panels without each mod reimplementing its own ImGui or UMG shell. First UI framework in this modding stack.",
    lang: "Lua",
    tags: ["Game Modding", "Tools"],
    notes: "/project-notes/ue4ss-modmenu",
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

  // ── Game Modding — starred / high-impact ─────────────────────────────────
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
  {
    name: "BOR-DevToolsMasterMod",
    account: "mattdavida",
    desc: "In-game Dev Tools cheat panel for Beast of Reincarnation (Steam PC). Press F6 to open or close. Host mod built on top of ue4ss-ModMenu.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "BeastOfReincarnationMod",
    account: "mattdavida",
    desc: "Lightweight UE4SS C++ mod for Beast of Reincarnation — ImGui GUI to give items, amber, and skill/ability points.",
    lang: "C++",
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
    desc: "UE4SS C++ mod workspace for Unreal Engine games — lower-level engine hooks beyond what Lua scripting alone can access.",
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
    name: "LunariumMod",
    account: "mattdavida",
    desc: "Quality-of-life MelonLoader mod for Lunarium with an in-game overlay.",
    lang: "C#",
    tags: ["Game Modding"],
  },
  {
    name: "StoneMachiaCheatMod",
    account: "mattdavida",
    desc: "In-game cheat menu for Stonemachia — queen transformation, persistent god mode, auto-parry, level setting, extra jumps, and rat minion spawning.",
    lang: "Lua",
    tags: ["Game Modding"],
  },
  {
    name: "SephiriaMod",
    account: "mattdavida",
    desc: "In-game cheat and utility mod for Sephiria.",
    lang: "C#",
    tags: ["Game Modding"],
  },
  {
    name: "pathogenic-hotkey-cheats",
    account: "mattdavida",
    desc: "Full-featured cheat mod for Pathogenic — hotkey healing, stat buffs, forced organelle rarity, attack range scaling, and brain secret boss unlock. Configurable via JSON.",
    lang: "GDScript",
    tags: ["Game Modding"],
  },
  {
    name: "Rubinite-Mod",
    account: "mattdavida",
    desc: "Quality-of-life mod for Rubinite — in-game overlay with combat boosts and a shortcut to skip Monastery night missions between bosses.",
    lang: "C#",
    tags: ["Game Modding"],
  },
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
  GDScript:        "#478cbf",
  "HTML / Python": "#10b981",
  "Python / C++":  "#3b82f6",
  Data:            "#64748b",
};

export const ALL_CATEGORIES: Category[] = [
  "AI & Fintech",
  "Game Modding",
  "Tools",
];
