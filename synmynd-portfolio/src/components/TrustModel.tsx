"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Zero Risk",
    description: "We deliver first, you pay when satisfied. No upfront costs, no hidden fees.",
  },
  {
    icon: Handshake,
    title: "Full Transparency",
    description:
      "Every milestone is shared. You see our progress in real-time, from code to deployment.",
  },
  {
    icon: BadgeCheck,
    title: "Guaranteed Satisfaction",
    description:
      "Payment follows complete validation. If you're not satisfied, you don't pay. Period.",
  },
];

export default function TrustModel() {
  return (
    <section className="px-8 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Our Promise
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A Startup Built on Integrity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            We operate on a{" "}
            <span className="font-medium text-foreground">
              Performance-First
            </span>{" "}
            model: We deliver the solution, you validate the results. Payment
            follows complete satisfaction.{" "}
            <span className="font-medium text-foreground">
              No risk, just results.
            </span>
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-border p-8 text-center transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                <pillar.icon size={22} className="text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
