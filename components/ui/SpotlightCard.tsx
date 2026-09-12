"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(226, 241, 53, 0.12)",
  borderColor = "rgba(226, 241, 53, 0.4)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-[#121316] border border-[#252830] transition-colors duration-300 ${className}`}
      {...props}
    >
      {/* Spotlight Radial Hover Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Subtle Dynamic Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0,
          boxShadow: `inset 0 0 0 1px ${borderColor}`,
        }}
      />

      {/* Card Children Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
