"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Nav, { NAV_EXTERNAL_LINKS } from "@/components/Nav";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="font-mono text-xs tracking-[0.4em] text-[--accent] animate-pulse uppercase">
        Loading
      </span>
    </div>
  ),
});

export default function Home() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function handleExplore() {
    setLeaving(true);
    setTimeout(() => router.push("/explore"), 600);
  }

  return (
    <main>
      <motion.div
        className="relative w-screen h-screen overflow-hidden"
        animate={leaving ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Three.js canvas */}
        <div className="absolute inset-0">
          <HeroScene onExplore={handleExplore} />
        </div>

        {/* Nav — absolute so it floats over the canvas */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Nav
            links={[
              ...NAV_EXTERNAL_LINKS,
              { label: "Resume",   href: "/resume" },
              { label: "Projects", onClick: handleExplore, href: "#" },
            ]}
          />
        </div>
      </motion.div>
    </main>
  );
}
