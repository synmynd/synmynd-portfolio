"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Brain,
  Code,
  CheckSquare,
  Rocket,
} from "lucide-react";

const trustPoints = [
  "10+ Projects Shipped",
  "100% Client Satisfaction",
  "AI-Enhanced Workflows",
  "Global Reach",
];

// Flow diagram node component
function FlowNode({
  icon: Icon,
  label,
  delay,
  isPrimary = false,
  isSmall = false,
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
  isPrimary?: boolean;
  isSmall?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className={`relative z-10 flex items-center justify-center rounded-2xl border transition-colors ${
          isPrimary
            ? "h-16 w-16 border-primary bg-primary/10 shadow-lg shadow-primary/10"
            : isSmall
            ? "h-11 w-11 border-primary/40 bg-white"
            : "h-14 w-14 border-border bg-white shadow-sm"
        }`}
      >
        <Icon
          size={isPrimary ? 26 : isSmall ? 16 : 22}
          className={isPrimary || isSmall ? "text-primary" : "text-foreground/70"}
          strokeWidth={1.5}
        />
      </div>
      <span
        className={`max-w-[100px] text-center leading-tight ${
          isPrimary
            ? "text-xs font-semibold text-primary"
            : isSmall
            ? "text-[10px] font-medium text-muted"
            : "text-[11px] font-medium text-foreground/70"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

// Animated SVG line
function AnimatedLine({
  x1,
  y1,
  x2,
  y2,
  delay,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  dashed?: boolean;
}) {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#6ba1df"
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 4" : `${length}`}
      strokeDashoffset={dashed ? 0 : length}
      initial={dashed ? { opacity: 0 } : { strokeDashoffset: length }}
      animate={dashed ? { opacity: 1 } : { strokeDashoffset: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      strokeLinecap="round"
    />
  );
}

// Animated SVG Path for angled corners
function AnimatedPath({ d, delay }: { d: string; delay: number }) {
  // Approximate path length for the animation stroke calculation
  const length = 500;
  return (
    <motion.path
      d={d}
      stroke="#6ba1df"
      strokeWidth={1.5}
      fill="none"
      strokeDasharray={length}
      strokeDashoffset={length}
      initial={{ strokeDashoffset: length }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeInOut" }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

// Small arrowhead
function ArrowHead({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.polygon
      points={`${x - 5},${y - 4} ${x},${y} ${x - 5},${y + 4}`}
      fill="#6ba1df"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay + 0.6 }}
    />
  );
}

// Animated "data packet" dot passing along the line
function DataPacket({
  pathDefinition,
  delay,
  keyPoints,
  keyTimes = "0;0.25;1",
}: {
  pathDefinition: string;
  delay: number;
  keyPoints?: string;
  keyTimes?: string;
}) {
  return (
    <circle r="3" fill="#3267a6" className="filter drop-shadow-[0_0_4px_rgba(50,103,166,0.8)]" opacity="0">
      <animate
        attributeName="opacity"
        values="0;1;1"
        keyTimes="0;0.01;1"
        dur="100s"
        begin={`${delay}s`}
        fill="freeze"
      />
      <animateMotion
        dur="2.5s"
        repeatCount="indefinite"
        path={pathDefinition}
        begin={`${delay}s`}
        calcMode={keyPoints ? "linear" : undefined}
        keyPoints={keyPoints}
        keyTimes={keyPoints ? keyTimes : undefined}
      />
    </circle>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 sm:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-28 lg:grid-cols-2 lg:gap-16">
        {/* Left Column — Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-muted">
            <Sparkles size={14} className="text-primary" />
            AI Agents • Intelligent Automation • SaaS Solutions
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Architecting the Future of{" "}
            <span className="text-primary tracking-wide">
              Autonomous Business.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            <span className="text-primary font-semibold">Syn</span>
            <span className="text-foreground font-semibold">Mynd</span> is a
            high-performance AI studio. We specialize in n8n orchestration,
            custom Python automation, and LLM-integrated SaaS solutions built
            for the global market.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Consult an Expert
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-[3px]"
              />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              View Our Services
            </button>
          </div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-1.5 text-xs font-medium text-muted"
                >
                  <CheckCircle2
                    size={13}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        {/* Right Column — Flow Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex lg:items-center lg:justify-center"
        >
          <div className="relative w-full max-w-lg">
            <svg viewBox="0 0 450 310" fill="none" className="w-full h-auto" style={{ overflow: "visible" }}>
              {/* Lines Layer */}
              
              {/* Input Line: Business Requirements → AI Engine */}
              <AnimatedLine x1={84} y1={155} x2={186} y2={155} delay={0.8} />
              <ArrowHead x={186} y={155} delay={0.8} />
              <DataPacket pathDefinition="M 84 155 L 186 155" delay={2.0} />

              {/* Trunk Branch: AI Engine Output (Draws first) */}
              <AnimatedLine x1={274} y1={155} x2={294} y2={155} delay={1.4} />

              {/* Top Branch: AI Engine → LLM-Assisted Coding */}
              <AnimatedPath d="M 294 155 Q 302 155 302 147 L 302 66 Q 302 58 310 58 L 360 58" delay={1.7} />
              <ArrowHead x={360} y={58} delay={1.7} />
              <DataPacket 
                pathDefinition="M 274 155 L 294 155 Q 302 155 302 147 L 302 66 Q 302 58 310 58 L 360 58" 
                delay={2.6} 
                keyPoints="0;0.11428;1" 
              />

              {/* Middle Branch: AI Engine → Premium Solution */}
              <AnimatedLine x1={294} y1={155} x2={360} y2={155} delay={1.7} />
              <ArrowHead x={360} y={155} delay={1.7} />
              <DataPacket 
                pathDefinition="M 274 155 L 360 155" 
                delay={2.6} 
                keyPoints="0;0.23255;1" 
              />

              {/* Bottom Branch: AI Engine → Automated AI Testing */}
              <AnimatedPath d="M 294 155 Q 302 155 302 163 L 302 244 Q 302 252 310 252 L 360 252" delay={1.7} />
              <ArrowHead x={360} y={252} delay={1.7} />
              <DataPacket 
                pathDefinition="M 274 155 L 294 155 Q 302 155 302 163 L 302 244 Q 302 252 310 252 L 360 252" 
                delay={2.6} 
                keyPoints="0;0.11428;1" 
              />


              {/* ─ NODES LAYER ─ */}

              {/* Input Node: Business Requirements (Far Left) */}
              <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} whileHover={{ scale: 1.05 }} style={{ transformOrigin: "64px 155px" }}>
                <rect x="36" y="127" width="56" height="56" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                <svg x="50" y="141" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />
                </svg>
                <text x="64" y="196" fill="#374151" fontSize="10" fontWeight="500" textAnchor="middle">Business</text>
                <text x="64" y="208" fill="#374151" fontSize="10" fontWeight="500" textAnchor="middle">Requirements</text>
              </motion.g>

              {/* Center Node: SynMynd AI Engine */}
              <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.9 }} whileHover={{ scale: 1.05 }} style={{ transformOrigin: "230px 155px" }}>
                <rect x="190" y="115" width="80" height="80" rx="18" fill="#3267a6" fillOpacity="0.06" />
                <rect x="190" y="115" width="80" height="80" rx="18" fill="white" stroke="#3267a6" strokeWidth="1.5" />
                <svg x="210" y="135" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3267a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.002 6.5A3 3 0 0 1 5.602 5.125" /><path d="M11.8 12.5a4 4 0 1 1 0 8.49" /><path d="M12.2 12.5a4 4 0 1 0 0 8.49" />
                </svg>
                <text x="230" y="210" fill="#3267a6" fontSize="11" fontWeight="600" textAnchor="middle">SynMynd AI</text>
                <text x="230" y="222" fill="#3267a6" fontSize="11" fontWeight="600" textAnchor="middle">Engine</text>
              </motion.g>

              {/* Output Node 1 (Top Right): LLM-Assisted Coding */}
              <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.5 }} whileHover={{ scale: 1.05 }} style={{ transformOrigin: "390px 55px" }}>
                <rect x="366" y="31" width="48" height="48" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                <svg x="379" y="44" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3267a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
                <text x="390" y="92" fill="#374151" fontSize="9.5" fontWeight="500" textAnchor="middle">LLM-Assisted</text>
                <text x="390" y="104" fill="#374151" fontSize="9.5" fontWeight="500" textAnchor="middle">Coding</text>
              </motion.g>

              {/* Output Node 2 (Middle Right): Premium Solution */}
              <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }} whileHover={{ scale: 1.05 }} style={{ transformOrigin: "390px 155px" }}>
                <rect x="366" y="131" width="48" height="48" rx="12" fill="white" stroke="#3267a6" strokeOpacity="0.8" strokeWidth="1.5" />
                <svg x="379" y="144" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3267a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                <text x="390" y="192" fill="#374151" fontSize="9.5" fontWeight="500" textAnchor="middle">Premium</text>
                <text x="390" y="204" fill="#374151" fontSize="9.5" fontWeight="500" textAnchor="middle">Solution</text>
              </motion.g>

              {/* Output Node 3 (Bottom Right): Automated AI Testing */}
              <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.9 }} whileHover={{ scale: 1.05 }} style={{ transformOrigin: "390px 255px" }}>
                <rect x="366" y="231" width="48" height="48" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                <svg x="379" y="244" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3267a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <text x="390" y="292" fill="#374151" fontSize="9.5" fontWeight="500" textAnchor="middle">Automated</text>
                <text x="390" y="304" fill="#374151" fontSize="9.5" fontWeight="500" textAnchor="middle">AI Testing</text>
              </motion.g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
