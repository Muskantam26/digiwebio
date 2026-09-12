"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 1.8,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value and any prefix/suffix (e.g. "85+", "99.4%", "<24h")
    const match = value.match(/([^\d.]*)([\d.]+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let animationFrameId: number;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out expo
      const easeOut = 1 - Math.pow(2, -10 * progress);
      const current = targetNumber * easeOut;

      const formatted = isDecimal
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toString();

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
