"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  triggerOnMount?: boolean;
  speed?: number; // interval ms
  scrambleChars?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
}

const DEFAULT_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?01";

export default function TextScramble({
  text,
  className = "",
  triggerOnHover = true,
  triggerOnMount = false,
  speed = 35,
  scrambleChars = DEFAULT_CHARS,
  as: Component = "span",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const totalIterations = text.length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) {
              return text[index];
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("");
      });

      iteration += 1;

      if (iteration > totalIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  }, [text, isScrambling, speed, scrambleChars]);

  useEffect(() => {
    if (triggerOnMount) {
      startScramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [triggerOnMount, startScramble]);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      startScramble();
    }
  };

  return (
    <Component
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{ willChange: "contents" }}
    >
      {displayText}
    </Component>
  );
}
