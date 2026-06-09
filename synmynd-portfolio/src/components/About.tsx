"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Brain, Globe } from "lucide-react";

const highlights = [
  { icon: Gauge, label: "3× Faster Delivery", description: "AI-accelerated workflows" },
  { icon: ShieldCheck, label: "Battle-Tested Code", description: "LLM-assisted engineering" },
  { icon: Brain, label: "AI-Native Thinking", description: "Every decision is augmented" },
  { icon: Globe, label: "Global Clientele", description: "Built for international scale" },
];

export default function About() {
  return (
    <section id="about" className="px-8 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            The Elite, AI-Enhanced Collective
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Engineered for the World.
          </h2>
        </motion.div>

        {/* Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-base leading-relaxed text-muted"
        >
          <p>
            <span className="text-primary font-semibold">Syn</span>
            <span className="text-foreground font-semibold">Mynd</span> is a
            high-performance collective of seasoned architects, engineers, and
            strategists. Our team is composed of the top-tier talent from
            Bahawalpur&apos;s most respected tech firms: vetted professionals who
            have shipped complex products at a global scale. Today, we are
            unified under a single mission: to provide international clients
            with a level of engineering precision that legacy studios simply
            cannot match.
          </p>
          <p>
            We don&apos;t just use AI; we are{" "}
            <span className="font-medium text-foreground">AI-enhanced</span>.
            Our entire development lifecycle is built on the latest LLM-assisted
            engineering practices. By integrating advanced AI into our core DNA,
            we achieve a development velocity and code integrity that redefines
            industry standards. For our clients, this translates to measurably
            faster deployment, more rigorous testing, and solutions that are
            inherently more innovative.
          </p>
          <p>
            From intelligent n8n orchestrations to full-stack SaaS ecosystems, we
            don&apos;t just build software that works. We engineer{" "}
            <span className="font-medium text-foreground">
              intelligent systems that outperform expectations
            </span>
            .
          </p>
        </motion.div>

        {/* Stat Highlights - 4 columns */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rounded-2xl border border-border p-5 text-center transition-colors hover:border-primary/30"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                <item.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-1 text-xs text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
