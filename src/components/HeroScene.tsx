"use client";

import React, {
  useRef,
  useState,
  useMemo,
  Suspense,
  useEffect,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// ─── Shared mouse state (avoids context overhead) ───────────────────────────

const mouse = {
  raw: { x: 0, y: 0 },
  smooth: { x: 0, y: 0 },
};

// ─── Geometry singletons (shared across shard instances) ────────────────────

const GEOS = {
  ico: new THREE.IcosahedronGeometry(1, 0),
  octa: new THREE.OctahedronGeometry(1, 0),
  tetra: new THREE.TetrahedronGeometry(1, 0),
};

// ─── Shard config ────────────────────────────────────────────────────────────

const SHARDS = [
  // Mid-distance — main cluster around the name
  { pos: [-4.6, 1.9, -2] as const, s: 0.52, spd: 0.55, geo: "ico" as const, delay: 0.3 },
  { pos: [4.4, 2.1, -2.5] as const, s: 0.40, spd: 0.85, geo: "octa" as const, delay: 0.4 },
  { pos: [-3.1, -1.6, -1.5] as const, s: 0.33, spd: 0.70, geo: "tetra" as const, delay: 0.5 },
  { pos: [3.6, -1.3, -2.5] as const, s: 0.48, spd: 0.50, geo: "ico" as const, delay: 0.35 },
  { pos: [1.5, 3.3, -3.5] as const, s: 0.27, spd: 1.05, geo: "octa" as const, delay: 0.7 },
  { pos: [-1.9, -2.9, -2.5] as const, s: 0.31, spd: 0.60, geo: "tetra" as const, delay: 0.65 },
  // Wide — give depth to the sides
  { pos: [-5.8, 0.3, -4.5] as const, s: 0.62, spd: 0.42, geo: "ico" as const, delay: 0.6 },
  { pos: [5.8, 0.7, -4.5] as const, s: 0.47, spd: 0.75, geo: "tetra" as const, delay: 0.55 },
  { pos: [2.9, 3.9, -6] as const, s: 0.42, spd: 0.68, geo: "tetra" as const, delay: 0.75 },
  { pos: [-2.6, 3.6, -5.5] as const, s: 0.36, spd: 0.82, geo: "ico" as const, delay: 0.8 },
  // Far background — large, very transparent, give a sense of infinite space
  { pos: [8.5, 2.5, -11] as const, s: 1.6, spd: 0.28, geo: "ico" as const, delay: 0.2 },
  { pos: [-9.5, -1.2, -13] as const, s: 2.0, spd: 0.22, geo: "octa" as const, delay: 0.25 },
  { pos: [3.5, -5.5, -10] as const, s: 1.3, spd: 0.32, geo: "tetra" as const, delay: 0.3 },
  { pos: [-6, 5, -12] as const, s: 1.4, spd: 0.26, geo: "ico" as const, delay: 0.28 },
  { pos: [10, -3, -14] as const, s: 1.8, spd: 0.20, geo: "octa" as const, delay: 0.22 },
];

// ─── Single floating shard ────────────────────────────────────────────────────

function Shard({
  pos,
  s: scale,
  spd: speed,
  geo,
  delay,
}: {
  pos: readonly [number, number, number];
  s: number;
  spd: number;
  geo: "ico" | "octa" | "tetra";
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const angleOffset = useMemo(() => Math.random() * Math.PI * 2, []);
  const geometry = GEOS[geo];

  // Distant shards are very transparent — scale and distance correlate
  const isDeep = Math.abs(pos[2]) > 7;
  const baseOpacity = isDeep ? 0.18 : 0.5;
  const baseWireOpacity = isDeep ? 0.06 : 0.14;

  useFrame((state) => {
    if (!meshRef.current || !wireRef.current) return;
    const t = state.clock.elapsedTime;

    // Grow-in entry
    const progress = Math.min(1, Math.max(0, (t - delay) / 0.7));
    const grown = 1 - Math.pow(1 - progress, 3); // cubic ease-out

    const targetScale = scale * grown * (hovered ? 1.18 : 1);
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    );
    wireRef.current.scale.setScalar(meshRef.current.scale.x * 1.025);

    // Rotation
    meshRef.current.rotation.x = t * speed * 0.22 + angleOffset;
    meshRef.current.rotation.y = t * speed * 0.16 + angleOffset * 0.8;
    wireRef.current.rotation.copy(meshRef.current.rotation);

    // Hover emissive pulse
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = THREE.MathUtils.lerp(
      mat.emissiveIntensity,
      hovered ? 1.2 : 0.2,
      0.09
    );
    mat.opacity = THREE.MathUtils.lerp(
      mat.opacity,
      hovered ? Math.min(0.8, baseOpacity * 1.6) : baseOpacity * grown,
      0.08
    );

    // Wireframe opacity
    const wireMat = wireRef.current.material as THREE.MeshBasicMaterial;
    wireMat.opacity = THREE.MathUtils.lerp(
      wireMat.opacity,
      hovered ? 0.55 : baseWireOpacity * grown,
      0.08
    );
  });

  return (
    <Float speed={speed * 0.55} rotationIntensity={0.25} floatIntensity={0.7}>
      <group position={pos as [number, number, number]}>
        <mesh
          ref={meshRef}
          geometry={geometry}
          scale={0}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshStandardMaterial
            color="#00c8f5"
            emissive="#0090cc"
            emissiveIntensity={0.2}
            metalness={0.75}
            roughness={0.12}
            transparent
            opacity={0}
          />
        </mesh>
        <mesh ref={wireRef} geometry={geometry} scale={0}>
          <meshBasicMaterial
            color="#00d4ff"
            wireframe
            transparent
            opacity={0}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ─── Mouse-reactive particle field ──────────────────────────────────────────

function Particles({ count = 480 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const velRef = useRef<Float32Array | null>(null);
  const orgRef = useRef<Float32Array | null>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
      pos[i * 3 + 2] = -radius * Math.abs(Math.cos(phi)) * 0.45 - 3;
    }

    velRef.current = vel;
    orgRef.current = new Float32Array(pos);
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current || !velRef.current || !orgRef.current) return;
    const t = state.clock.elapsedTime;

    const posArr = pointsRef.current.geometry.attributes.position
      .array as Float32Array;
    const vel = velRef.current;
    const org = orgRef.current;

    const mx = mouse.smooth.x * 4.5;
    const my = mouse.smooth.y * 2.8;
    const REPEL_R = 2.8;
    const SPRING = 0.016;
    const DAMP = 0.90;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const dx = posArr[ix] - mx;
      const dy = posArr[ix + 1] - my;
      const distSq = dx * dx + dy * dy;

      if (distSq < REPEL_R * REPEL_R) {
        const dist = Math.sqrt(distSq) + 0.001;
        const force = ((REPEL_R - dist) / REPEL_R) * 0.07;
        vel[ix] += (dx / dist) * force;
        vel[ix + 1] += (dy / dist) * force;
      }

      // Spring back to origin
      vel[ix] += (org[ix] - posArr[ix]) * SPRING;
      vel[ix + 1] += (org[ix + 1] - posArr[ix + 1]) * SPRING;
      vel[ix] *= DAMP;
      vel[ix + 1] *= DAMP;
      posArr[ix] += vel[ix];
      posArr[ix + 1] += vel[ix + 1];
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.005;

    // Fade in during first 1.2s
    if (matRef.current) {
      matRef.current.opacity = Math.min(0.48, t / 1.2 * 0.48);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        size={0.042}
        color="#00d4ff"
        transparent
        opacity={0}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ─── 3D name with entry animation (rises from below) ────────────────────────

function NameText() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Name starts below frame and rises in — begins at t=0.8s, arrives t=2.0s
    const rise = Math.min(1, Math.max(0, (t - 0.8) / 1.2));
    const eased = 1 - Math.pow(1 - rise, 4); // quartic ease-out for satisfying snap

    // Once settled, add a very slow breath
    const settled = rise >= 1;
    const breathe = settled ? Math.sin((t - 0.8 - 1.2) * 0.38) * 0.07 : 0;

    groupRef.current.position.y = -5.5 * (1 - eased) + breathe;

    // Subtle x sway with parallax
    groupRef.current.position.x =
      THREE.MathUtils.lerp(groupRef.current.position.x, mouse.smooth.x * 0.08, 0.04);
  });

  return (
    <group ref={groupRef} position={[0, -5.5, 0]}>
      {/* MATTHEW */}
      <Center position={[0, 0.65, 0]}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.78}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.025}
          bevelSize={0.012}
          bevelSegments={5}
        >
          MATTHEW
          <meshStandardMaterial
            color="#eef2f7"
            emissive="#0099cc"
            emissiveIntensity={0.35}
            metalness={0.45}
            roughness={0.25}
          />
        </Text3D>
      </Center>

      {/* ARVIDSON */}
      <Center position={[0, -0.28, 0]}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.78}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.025}
          bevelSize={0.012}
          bevelSegments={5}
        >
          ARVIDSON
          <meshStandardMaterial
            color="#eef2f7"
            emissive="#0099cc"
            emissiveIntensity={0.35}
            metalness={0.45}
            roughness={0.25}
          />
        </Text3D>
      </Center>

      {/* Subtitle — pure cyan, will bloom strongly */}
      <Center position={[0, -1.08, 0]}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.185}
          height={0.02}
          curveSegments={6}
        >
          SOFTWARE ENGINEER  ·  AI  ·  SYSTEMS
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={1.4}
          />
        </Text3D>
      </Center>
    </group>
  );
}

// ─── Camera with smooth parallax ─────────────────────────────────────────────

function ParallaxCamera() {
  const cameraRef = useRef({ x: 0, y: 0 });

  useFrame(({ camera }) => {
    // Smooth mouse
    mouse.smooth.x += (mouse.raw.x - mouse.smooth.x) * 0.05;
    mouse.smooth.y += (mouse.raw.y - mouse.smooth.y) * 0.05;

    // Camera parallax — moves opposite to mouse for depth feel
    cameraRef.current.x +=
      (mouse.smooth.x * 0.55 - cameraRef.current.x) * 0.035;
    cameraRef.current.y +=
      (mouse.smooth.y * 0.32 - cameraRef.current.y) * 0.035;

    camera.position.x = cameraRef.current.x;
    camera.position.y = cameraRef.current.y;
    // Look slightly toward where it came from — more realistic parallax
    camera.lookAt(
      cameraRef.current.x * 0.15,
      cameraRef.current.y * 0.15,
      0
    );
  });

  return null;
}

// ─── Scene ────────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <ParallaxCamera />

      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 4, 3]} intensity={3} color="#00c8f5" />
      <pointLight position={[-6, -2, -2]} intensity={1.2} color="#0044cc" />
      <pointLight position={[6, 2, 1]} intensity={0.9} color="#00ffcc" />
      <pointLight position={[0, -4, -4]} intensity={0.6} color="#001133" />

      {/* Deep fog adds atmosphere without killing far shards */}
      <fog attach="fog" args={["#050810", 14, 40]} />

      <Suspense fallback={null}>
        <Particles />
        {SHARDS.map((cfg, i) => (
          <Shard key={i} {...cfg} />
        ))}
        <NameText />
      </Suspense>

      {/* Postprocessing */}
      <EffectComposer>
        <Bloom
          intensity={1.6}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.35}
          mipmapBlur
        />
        <Vignette offset={0.28} darkness={0.7} />
      </EffectComposer>
    </>
  );
}

// ─── HTML EXPLORE button ──────────────────────────────────────────────────────
// Bracket corners are always visible. On hover:
//   1. A scan line sweeps top → bottom (sci-fi "scanning" read)
//   2. The connecting border between corners fades in
//   3. Text brightens to white with a cyan glow

const CORNERS = ["tl", "tr", "bl", "br"] as const;
type Corner = (typeof CORNERS)[number];

function cornerStyle(c: Corner): React.CSSProperties {
  return {
    position: "absolute",
    width: 14,
    height: 14,
    top: c.startsWith("t") ? 0 : undefined,
    bottom: c.startsWith("b") ? 0 : undefined,
    left: c.endsWith("l") ? 0 : undefined,
    right: c.endsWith("r") ? 0 : undefined,
    borderColor: "#00d4ff",
    borderTopWidth: c.startsWith("t") ? 1 : 0,
    borderBottomWidth: c.startsWith("b") ? 1 : 0,
    borderLeftWidth: c.endsWith("l") ? 1 : 0,
    borderRightWidth: c.endsWith("r") ? 1 : 0,
    borderStyle: "solid",
    pointerEvents: "none",
  };
}

function ScanLine() {
  return (
    <motion.span
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: 1,
        pointerEvents: "none",
        background:
          "linear-gradient(to right, transparent 0%, #00d4ff 20%, #ffffff 50%, #00d4ff 80%, transparent 100%)",
      }}
      initial={{ top: "0%", opacity: 0 }}
      animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.5, ease: "linear", times: [0, 0.05, 0.85, 1] }}
    />
  );
}

function ExploreButton({
  onClick,
  visible,
}: {
  onClick: () => void;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanId, setScanId] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    setHovered(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    setScanId((n) => n + 1);
    setScanning(true);
    timerRef.current = setTimeout(() => setScanning(false), 560);
  }

  function handleLeave() {
    setHovered(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
              padding: 0,
              userSelect: "none",
            }}
          >
            {/* Corner brackets — always visible */}
            {CORNERS.map((c) => (
              <span key={c} style={cornerStyle(c)} />
            ))}

            {/* Full border fades in on hover */}
            <motion.span
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                border: "1px solid #00d4ff",
                pointerEvents: "none",
              }}
              animate={{ opacity: hovered ? 0.4 : 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Scan line — mounts/unmounts each hover so animation always fires fresh */}
            {scanning && <ScanLine key={scanId} />}

            {/* Subtle inner glow on hover */}
            <motion.span
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                pointerEvents: "none",
                background: "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)",
              }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Label — centered with equal horizontal padding */}
            <motion.span
              style={{
                position: "relative",
                display: "block",
                padding: "15px 56px",
                fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.52em",
                // tracking pushes text right — compensate so it reads centered
                paddingLeft: 60,
                paddingRight: 52,
              }}
              animate={{
                color: hovered ? "#ffffff" : "#00d4ff",
                textShadow: hovered
                  ? "0 0 20px rgba(0,212,255,0.9)"
                  : "0 0 8px rgba(0,212,255,0.3)",
              }}
              transition={{ duration: 0.16 }}
            >
              EXPLORE
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Exported component ───────────────────────────────────────────────────────

export default function HeroScene({ onExplore }: { onExplore: () => void }) {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setButtonVisible(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.raw.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.raw.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  function handleExplore() {
    setButtonVisible(false);
    onExplore();
  }

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 52 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#060912" }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>

      <ExploreButton onClick={handleExplore} visible={buttonVisible} />
    </div>
  );
}
