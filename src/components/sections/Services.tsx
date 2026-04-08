"use client";

import { motion } from "framer-motion";
import { Workflow, Terminal, Bot, Layers } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Enterprise-grade workflows using n8n, Zapier, and Make.com. We architect orchestration pipelines that eliminate manual processes and scale with your business.",
    tags: ["n8n", "Zapier", "Make.com", "Workflows"],
  },
  {
    icon: Terminal,
    title: "Custom Python Engines",
    description:
      "High-scale web scraping, data transformation, and bespoke backend automation scripts. Purpose-built Python solutions that handle complexity at volume.",
    tags: ["Python", "Web Scraping", "Backend", "Automation"],
  },
  {
    icon: Bot,
    title: "AI Agent Ecosystems",
    description:
      "No-code and low-code AI agents designed for 24/7 autonomous operation. Intelligent systems that learn, adapt, and deliver results around the clock.",
    tags: ["AI Agents", "No-Code", "Low-Code", "LLMs"],
  },
  {
    icon: Layers,
    title: "SaaS Engineering",
    description:
      "Language-agnostic, scalable software architectures developed with AI-enhanced precision. From MVP to enterprise, we build products that last.",
    tags: ["Full-Stack", "Scalable", "Cloud", "AI-Enhanced"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-8 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Four pillars of technical excellence, each powered by AI-enhanced
            engineering practices and built to international standards.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10">
                <service.icon
                  size={24}
                  className="text-primary"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
