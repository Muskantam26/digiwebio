"use client";

import React, { useRef, useEffect } from "react";

interface InteractiveGridProps {
  cellSize?: number;
  className?: string;
  glowColor?: string; // hex or rgb
}

export default function InteractiveGrid({
  cellSize = 44,
  className = "",
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Map of active grid cells: key = "col,row", value = intensity (1.0 down to 0)
    const activeCells = new Map<string, number>();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || y < 0 || x > width || y > height) return;

      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);

      // Light up center cell and immediate neighbors with varying intensities
      activeCells.set(`${col},${row}`, 1.0);
      activeCells.set(`${col - 1},${row}`, Math.max(activeCells.get(`${col - 1},${row}`) || 0, 0.5));
      activeCells.set(`${col + 1},${row}`, Math.max(activeCells.get(`${col + 1},${row}`) || 0, 0.5));
      activeCells.set(`${col},${row - 1}`, Math.max(activeCells.get(`${col},${row - 1}`) || 0, 0.5));
      activeCells.set(`${col},${row + 1}`, Math.max(activeCells.get(`${col},${row + 1}`) || 0, 0.5));
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint base grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render & decay illuminated cells
      activeCells.forEach((intensity, key) => {
        if (intensity <= 0.01) {
          activeCells.delete(key);
          return;
        }

        const [colStr, rowStr] = key.split(",");
        const col = parseInt(colStr, 10);
        const row = parseInt(rowStr, 10);

        const x = col * cellSize;
        const y = row * cellSize;

        // Glowing fill
        ctx.fillStyle = `rgba(226, 241, 53, ${intensity * 0.16})`;
        ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        // Glowing border
        ctx.strokeStyle = `rgba(226, 241, 53, ${intensity * 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.strokeRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);

        // Decay intensity
        activeCells.set(key, intensity * 0.94);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cellSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
