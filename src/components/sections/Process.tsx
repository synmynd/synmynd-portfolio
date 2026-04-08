"use client";

import { motion } from "framer-motion";
import { MessageSquare, Hammer, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consult",
    description:
      "We listen, analyze your requirements, and design a custom strategy tailored to your business goals.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build",
    description:
      "Our AI-enhanced team engineers your solution with speed, precision, and rigorous quality testing.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver",
    description:
      "We deploy, validate results together, and only finalize when you are 100% satisfied.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-8 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A Simple, Transparent Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            No guesswork, no hidden steps. Three phases from idea to launch.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-8 translate-x-full bg-border md:block">
                  <ArrowRight
                    size={12}
                    className="absolute -right-1 -top-[5px] text-border"
                  />
                </div>
              )}

              <div className="rounded-2xl border border-border p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Step number */}
                <span className="text-xs font-semibold tracking-widest text-primary/40">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mx-auto mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5">
                  <step.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
