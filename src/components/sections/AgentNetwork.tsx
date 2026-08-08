"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/*
  Interim hero visual: an SVG agent network with packets travelling the edges and
  a subtle parallax tilt toward the cursor. Phase 1 replaces this with the WebGL
  canvas version; the layout and node model stay the same so the swap is local.
*/

type Node = { id: string; x: number; y: number; label: string; ring?: boolean };

const nodes: Node[] = [
  { id: "in-a", x: 40, y: 60, label: "Email" },
  { id: "in-b", x: 40, y: 150, label: "Forms" },
  { id: "in-c", x: 40, y: 240, label: "CRM" },
  { id: "agent", x: 200, y: 150, label: "AI Agent", ring: true },
  { id: "out-a", x: 360, y: 60, label: "Slack" },
  { id: "out-b", x: 360, y: 150, label: "Database" },
  { id: "out-c", x: 360, y: 240, label: "Actions" },
];

const edges: [string, string][] = [
  ["in-a", "agent"],
  ["in-b", "agent"],
  ["in-c", "agent"],
  ["agent", "out-a"],
  ["agent", "out-b"],
  ["agent", "out-c"],
];

const byId = (id: string) => nodes.find((node) => node.id === id)!;

function edgePath(fromId: string, toId: string) {
  const from = byId(fromId);
  const to = byId(toId);
  const fromR = from.ring ? 40 : 26;
  const toR = to.ring ? 40 : 26;
  const x1 = from.x + fromR;
  const x2 = to.x - toR;
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${from.y} C ${mid} ${from.y}, ${mid} ${to.y}, ${x2} ${to.y}`;
}

export function AgentNetwork() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const element = containerRef.current;
    if (!element) return;

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: px * 12, y: py * -8 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-card border border-border bg-surface p-6"
      style={{ perspective: "1000px" }}
    >
      <motion.svg
        viewBox="0 0 420 300"
        className="w-full"
        role="img"
        aria-label="Diagram: email, forms, and CRM inputs feed an AI agent that writes to Slack, a database, and downstream actions."
        animate={{ rotateY: tilt.x, rotateX: tilt.y }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {edges.map(([from, to], i) => {
          const d = edgePath(from, to);
          return (
            <g key={`${from}-${to}`}>
              <path
                d={d}
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              {!reduceMotion && (
                <circle r="3.5" fill="var(--accent)">
                  <animateMotion
                    dur="2.8s"
                    begin={`${i * 0.35}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            {node.ring && (
              <circle
                cx={node.x}
                cy={node.y}
                r="52"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.4"
              >
                {!reduceMotion && (
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${node.x} ${node.y}`}
                    to={`360 ${node.x} ${node.y}`}
                    dur="24s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
            )}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.ring ? 40 : 26}
              fill="var(--surface-alt)"
              stroke={node.ring ? "var(--accent)" : "var(--border)"}
              strokeWidth="1.5"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.ring ? 9 : 5}
              fill="var(--accent)"
              className={node.ring ? "animate-pulse-glow" : undefined}
            />
            <text
              x={node.x}
              y={node.y + (node.ring ? 60 : 44)}
              textAnchor="middle"
              className="fill-[var(--muted)] font-mono text-[10px] uppercase tracking-wider"
            >
              {node.label}
            </text>
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
