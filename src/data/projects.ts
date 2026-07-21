export const NEXUS_PROFILE = "https://www.nexusmods.com/profile/DevToolsMaster/mods";

export type Category = "AI & Fintech" | "Game Modding" | "Tools";

export interface Project {
  name: string;
  desc: string;
  lang: string;
  tags: Category[];
  url: string;
  stars: number | null;
  /** Populated at runtime from GitHub API — ISO timestamp */
  updatedAt?: string | null;
}

// mattdavida  = game mods + AI/tools
// matthew-arvidson = professional / financial projects

export const PROJECTS: Project[] = [

  // ── AI & Fintech ─────────────────────────────────────────────────────────
  {
    name: "structured-notes-intelligence-engine",
    desc: "RAG-powered analysis pipeline for equity structured note term sheets — ingests PDFs, chunks, embeds, and surfaces structured risk signals.",
    lang: "Python",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/structured-notes-intelligence-engine",
    stars: null,
  },
  {
    name: "Contract-Intelligence-Engine",
    desc: "PDF contract → structured risk memo flagging deviations, risk terms, and recommended actions. Built to go beyond simple LLM chat.",
    lang: "Python",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/Contract-Intelligence-Engine",
    stars: null,
  },
  {
    name: "AI-Resume-Evaluator",
    desc: "Lightweight serverless ATS that evaluates PDF resumes against a job description using Azure OpenAI — no infra needed.",
    lang: "Python",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/AI-Resume-Evaluator",
    stars: null,
  },
  {
    name: "signature-verification-poc",
    desc: "Offline signature verification on checks and similar documents — lightweight POC with no cloud dependencies.",
    lang: "Python",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/signature-verification-poc",
    stars: null,
  },
  {
    name: "3forge-trading-dashboard",
    desc: "4-panel live trading dashboard with full inter-widget communication, REST API integration with Python + OpenAI, and a 3forge React integration.",
    lang: "HTML / Python",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/3forge-trading-dashboard",
    stars: null,
  },
  {
    name: "cdm-validation-poc",
    desc: "CDM implementation POC validating financial trade data against FINOS official validators — financial industry standard compliance.",
    lang: "Java",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/cdm-validation-poc",
    stars: null,
  },
  {
    name: "3-forge-kafka-minimal",
    desc: "Minimal Kafka setup files for 3forge integration — reproducible event-streaming foundation for trading systems.",
    lang: "Java",
    tags: ["AI & Fintech"],
    url: "https://github.com/matthew-arvidson/3-forge-kafka-minimal",
    stars: null,
  },

  // ── Game Modding — starred / high-impact first ───────────────────────────
  {
    name: "MGS-Delta-UE4SS-Fix",
    desc: "Community UE4SS compatibility fix for Metal Gear Solid Delta: Snake Eater. 10 stars — widely cited across the modding community.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/MGS-Delta-UE4SS-Fix",
    stars: 10,
  },
  {
    name: "SilkSongMod",
    desc: "Comprehensive cheat suite with professional GUI for Hollow Knight: Silksong — health control, toggle tools, invisible mode, and more. 10 stars.",
    lang: "C#",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/SilkSongMod",
    stars: 10,
  },
  {
    name: "HollowKnightMod",
    desc: "Comprehensive cheat menu mod for Hollow Knight extending the built-in developer cheat system with a professional UI.",
    lang: "C#",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/HollowKnightMod",
    stars: 2,
  },

  // ── Game Modding — infrastructure & tooling ──────────────────────────────
  {
    name: "UE4SS-Toolkit",
    desc: "Professional-grade interface for real-time Lua code execution, advanced game state manipulation, and sophisticated mod management via UE4SS.",
    lang: "Lua",
    tags: ["Game Modding", "Tools"],
    url: "https://github.com/mattdavida/UE4SS-Toolkit",
    stars: null,
  },
  {
    name: "RE-UE4SS",
    desc: "Fork of the injectable Lua scripting system, SDK generator, and live property editor for UE4/5 games — contributing to the core toolchain.",
    lang: "C++",
    tags: ["Game Modding", "Tools"],
    url: "https://github.com/mattdavida/RE-UE4SS",
    stars: null,
  },
  {
    name: "Cpp_Mods",
    desc: "UE4SS mods written in C++ — lower-level engine hooks beyond what Lua scripting alone can access.",
    lang: "C++",
    tags: ["Game Modding", "Tools"],
    url: "https://github.com/mattdavida/Cpp_Mods",
    stars: null,
  },
  {
    name: "Lua_Mods",
    desc: "Collection of Lua mods for Unreal Engine games using the UE4SS scripting framework — shared utilities and game-specific implementations.",
    lang: "Lua",
    tags: ["Game Modding", "Tools"],
    url: "https://github.com/mattdavida/Lua_Mods",
    stars: 1,
  },

  // ── Game Modding — individual game mods (by update date) ─────────────────
  {
    name: "Code-Vein-2-Cheat-Traversal-Mod",
    desc: "UE4SS Lua mod for Code Vein II adding traversal improvements, stat cheats, and QOL features through in-game console commands.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/Code-Vein-2-Cheat-Traversal-Mod",
    stars: null,
  },
  {
    name: "CheatMod-for-Remnant-2",
    desc: "UE4SS-based Lua scripting mod for Remnant 2 granting in-game cheats through hotkeys and console commands.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/CheatMod-for-Remnant-2",
    stars: null,
  },
  {
    name: "Lords-of-the-Fallen-Stat-Mod",
    desc: "Hotkey mod for Lords of the Fallen — infinite consumables, unlimited vigor, god mode, and max weapon levels in inventory.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/Lords-of-the-Fallen-Stat-Mod",
    stars: null,
  },
  {
    name: "AILimitMod",
    desc: "Full C# GUI mod for AI Limit — infinite item use, god mode, crystal/cash cheats, complete item access, armor/weapon/headwear unlocks, fast travel.",
    lang: "C#",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/AILimitMod",
    stars: null,
  },
  {
    name: "Witchfire-ue4ss-fix",
    desc: "UE4SS compatibility fix for Witchfire — restoring mod support after engine updates.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/Witchfire-ue4ss-fix",
    stars: null,
  },
  {
    name: "WitchfireMod",
    desc: "CheatManager mod for Witchfire built on UE4SS — extends the engine's built-in cheat system with custom commands.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/WitchfireMod",
    stars: null,
  },
  {
    name: "EnderMagnoliaStatMod",
    desc: "Comprehensive stat and accessibility mod for ENDER MAGNOLIA: Bloom in the Mist.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/EnderMagnoliaStatMod",
    stars: null,
  },
  {
    name: "EnderChallengeMod",
    desc: "Challenge mod for ENDER MAGNOLIA: Bloom in the Mist — unlocks endgame systems early for advanced players.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/EnderChallengeMod",
    stars: null,
  },
  {
    name: "LostSoulsAsideMod",
    desc: "Keybind cheats to retain powers from the intro sequence, plus console commands for game-breaking features in Lost Souls Aside.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/LostSoulsAsideMod",
    stars: null,
  },
  {
    name: "WuchangMod",
    desc: "Mods for Wuchang: Fallen Feathers — gameplay enhancements via UE4SS Lua scripting.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/WuchangMod",
    stars: 1,
  },
  {
    name: "MortalShellMod",
    desc: "Extensive gameplay enhancements for Mortal Shell — shell unlocks, combat modifications, and QOL improvements via hotkeys and behind-the-scenes hooks.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/MortalShellMod",
    stars: null,
  },
  {
    name: "LiesofP-UltimateAccess",
    desc: "Comprehensive UE4SS mod for Lies of P — instant boss access, complete DLC integration, and advanced save game manipulation.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/LiesofP-UltimateAccess",
    stars: null,
  },
  {
    name: "EnotriaStatMod",
    desc: "Mod for Enotria: The Last Song — console commands for infinite health, stamina, max inventory, and full virtue control.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/EnotriaStatMod",
    stars: 1,
  },
  {
    name: "EnderLiliesStatMod",
    desc: "Stat and cheat mod for Ender Lilies: Quietus of the Knights — published on Nexus Mods.",
    lang: "Lua",
    tags: ["Game Modding"],
    url: "https://github.com/mattdavida/EnderLiliesStatMod",
    stars: null,
  },

  // ── Tools & Extensions ────────────────────────────────────────────────────
  {
    name: "give_item_cmd_db",
    desc: "Give Item command item mappings database for UE4SS modding — 6 stars and 1 fork, widely referenced across the modding community.",
    lang: "Data",
    tags: ["Tools", "Game Modding"],
    url: "https://github.com/mattdavida/give_item_cmd_db",
    stars: 6,
  },
  {
    name: "UE4SS_Lua_Utils",
    desc: "Reusable utility library for UE4SS Lua mods — shared helpers that power many of the mods in this portfolio.",
    lang: "Lua",
    tags: ["Tools", "Game Modding"],
    url: "https://github.com/mattdavida/UE4SS_Lua_Utils",
    stars: 2,
  },
  {
    name: "chrome-outreach-extension",
    desc: "Chrome extension that generates pre-filled Outlook interview request email drafts for BIP US / Riskcare recruiters.",
    lang: "JavaScript",
    tags: ["Tools"],
    url: "https://github.com/matthew-arvidson/chrome-outreach-extension",
    stars: null,
  },
];

export const LANG_COLORS: Record<string, string> = {
  Python: "#3b82f6",
  TypeScript: "#06b6d4",
  "C#": "#a855f7",
  "C++": "#f97316",
  Lua: "#ca8a04",
  Java: "#ef4444",
  JavaScript: "#f59e0b",
  "HTML / Python": "#10b981",
  Data: "#64748b",
};

export const ALL_CATEGORIES: Category[] = [
  "AI & Fintech",
  "Game Modding",
  "Tools",
];
