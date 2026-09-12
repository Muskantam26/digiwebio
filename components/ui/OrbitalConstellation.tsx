"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Server,
  Database,
  Globe,
} from "lucide-react";

interface TechNode {
  name: string;
  category: string;
  icon: React.ElementType;
  angle: number; // in degrees
  orbitRadius: number; // in px
  color: string;
}

const ORBIT_1_NODES: TechNode[] = [
  { name: "Next.js 16", category: "Full-Stack", icon: Globe, angle: 0, orbitRadius: 140, color: "#E2F135" },
  { name: "React 19", category: "UI Engine", icon: Code2, angle: 120, orbitRadius: 140, color: "#38BDF8" },
  { name: "TypeScript 5", category: "Type Safety", icon: Layers, angle: 240, orbitRadius: 140, color: "#60A5FA" },
];

const ORBIT_2_NODES: TechNode[] = [
  { name: "Tailwind v4", category: "Styling", icon: Sparkles, angle: 45, orbitRadius: 230, color: "#2DD4BF" },
  { name: "MongoDB", category: "Database", icon: Database, angle: 135, orbitRadius: 230, color: "#4ADE80" },
  { name: "Node.js 22", category: "Runtime", icon: Server, angle: 225, orbitRadius: 230, color: "#22C55E" },
  { name: "GSAP Motion", category: "Animation", icon: Zap, angle: 315, orbitRadius: 230, color: "#FACC15" },
];

const ORBIT_3_NODES: TechNode[] = [
  { name: "Docker", category: "Containers", icon: Cpu, angle: 30, orbitRadius: 310, color: "#38BDF8" },
  { name: "GraphQL", category: "API Spec", icon: Code2, angle: 120, orbitRadius: 310, color: "#F472B6" },
  { name: "Redis", category: "In-Memory Cache", icon: Server, angle: 210, orbitRadius: 310, color: "#F87171" },
  { name: "Vercel Edge", category: "Global CDN", icon: Globe, angle: 300, orbitRadius: 310, color: "#E2F135" },
];

export default function OrbitalConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateOffset, setRotateOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Subtle 3D perspective tilt
    setRotateOffset({
      x: (y / (rect.height / 2)) * -12,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto h-[500px] sm:h-[620px] flex items-center justify-center overflow-hidden select-none my-6 group/constellation"
      style={{ perspective: "1000px" }}
    >
      {/* Background Ambient Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#E2F135]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Main 3D Tilting Stage */}
      <motion.div
        animate={{
          rotateX: 48 + rotateOffset.x,
          rotateY: rotateOffset.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Central Core: DigiWebIO Logo */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#121316] border-2 border-[#E2F135] flex items-center justify-center shadow-[0_0_50px_rgba(226,241,53,0.35)] cursor-pointer group/core"
        >
          <div className="absolute -inset-2 rounded-full bg-[#E2F135]/15 blur-md animate-pulse" />
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/AppLogo.png"
              alt="DigiWebIO Core"
              width={140}
              height={45}
              className="object-contain filter drop-shadow-[0_0_10px_rgba(226,241,53,0.6)] scale-150"
            />
          </div>
        </div>

        {/* Orbit Ring 1 (Inner) */}
        <div className="absolute w-[280px] h-[280px] rounded-full border border-[#E2F135]/25 border-dashed pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ width: "280px", height: "280px", transformStyle: "preserve-3d" }}
          className="absolute flex items-center justify-center pointer-events-none"
        >
          {ORBIT_1_NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * node.orbitRadius;
            const y = Math.sin(rad) * node.orbitRadius;
            const Icon = node.icon;

            return (
              <div
                key={i}
                style={{
                  transform: `translate(${x}px, ${y}px) translateZ(15px)`,
                }}
                className="absolute pointer-events-auto"
              >
                {/* Reverse rotation to keep node upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-2 bg-[#121316] border border-[#252830] hover:border-[#E2F135] px-3 py-1.5 rounded-full shadow-xl shadow-black/80 hover:scale-115 transition-all cursor-pointer group/node"
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: node.color }} />
                  <span className="text-xs font-mono font-bold text-white group-hover/node:text-[#E2F135] transition-colors whitespace-nowrap">
                    {node.name}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Orbit Ring 2 (Middle) */}
        <div className="absolute w-[460px] h-[460px] rounded-full border border-[#252830] pointer-events-none" />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ width: "460px", height: "460px", transformStyle: "preserve-3d" }}
          className="absolute flex items-center justify-center pointer-events-none"
        >
          {ORBIT_2_NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * node.orbitRadius;
            const y = Math.sin(rad) * node.orbitRadius;
            const Icon = node.icon;

            return (
              <div
                key={i}
                style={{
                  transform: `translate(${x}px, ${y}px) translateZ(20px)`,
                }}
                className="absolute pointer-events-auto"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-2 bg-[#0E1013] border border-[#252830] hover:border-[#E2F135] px-3 py-1.5 rounded-full shadow-xl shadow-black/80 hover:scale-115 transition-all cursor-pointer group/node"
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: node.color }} />
                  <span className="text-xs font-mono font-semibold text-slate-200 group-hover/node:text-white transition-colors whitespace-nowrap">
                    {node.name}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Orbit Ring 3 (Outer) */}
        <div className="absolute w-[620px] h-[620px] rounded-full border border-[#191B20] border-dotted pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          style={{ width: "620px", height: "620px", transformStyle: "preserve-3d" }}
          className="absolute flex items-center justify-center pointer-events-none"
        >
          {ORBIT_3_NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * node.orbitRadius;
            const y = Math.sin(rad) * node.orbitRadius;
            const Icon = node.icon;

            return (
              <div
                key={i}
                style={{
                  transform: `translate(${x}px, ${y}px) translateZ(25px)`,
                }}
                className="absolute pointer-events-auto"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-2 bg-[#121316]/90 border border-[#252830] hover:border-[#E2F135] px-2.5 py-1.5 rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer group/node"
                >
                  <Icon className="w-3 h-3" style={{ color: node.color }} />
                  <span className="text-[11px] font-mono text-slate-400 group-hover/node:text-white transition-colors whitespace-nowrap">
                    {node.name}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Subtle Hint Pill */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 bg-[#0A0B0D]/80 border border-[#252830] px-3 py-1 rounded-full pointer-events-none">
        Hover & move cursor to tilt orbital plane
      </div>
    </div>
  );
}
