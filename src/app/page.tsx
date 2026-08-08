import Link from "next/link";
import { ArrowRight, Eye, Gauge, ShieldCheck, Workflow } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { PlatformMarquee } from "@/components/sections/PlatformMarquee";
import { ServiceCard, AgentCard } from "@/components/sections/Cards";
import { CtaSection, TaglineBand } from "@/components/sections/Cta";
import { FaqSection } from "@/components/sections/Faq";
import { Card, Section, SectionHeading } from "@/components/ui";
import { services } from "@/content/services";
import { agents } from "@/content/agents";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Built to survive production",
    description:
      "Error handling, retries, and alerting from day one. Most automation fails quietly the first time an API returns something unexpected — ours tells you.",
  },
  {
    icon: Eye,
    title: "Fixed price, stated upfront",
    description:
      "You get a firm number before work starts. No hourly billing, no scope creep invoices, and infrastructure costs passed through at cost with no markup.",
  },
  {
    icon: Gauge,
    title: "Measured in hours saved",
    description:
      "Every engagement starts by quantifying the manual work you're paying for today, so the return is a number you can check rather than a claim.",
  },
  {
    icon: Workflow,
    title: "You own everything",
    description:
      "The workflows, the code, the infrastructure. Fully documented and handed over. Nothing is locked to us and you can leave whenever you want.",
  },
];

const strategy = [
  {
    step: "01",
    title: "Audit",
    description:
      "We map how work actually moves through your business today and rank every process by how much time automating it would give back.",
  },
  {
    step: "02",
    title: "Prove",
    description:
      "We build the highest-value workflow first and put it in production. You see a real return before committing to anything larger.",
  },
  {
    step: "03",
    title: "Scale",
    description:
      "With one system proven, we expand across departments — each new workflow reusing the error handling and logging already in place.",
  },
  {
    step: "04",
    title: "Operate",
    description:
      "We monitor what's live, respond to incidents, and keep finding the next process worth removing. This is where a retainer earns its cost.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformMarquee />

      <Section>
        <SectionHeading
          eyebrow="Why SynMynd"
          title="Automation that still works in month six."
          description="Anyone can wire together a demo. The difference shows up when an API changes, a credential expires, or volume triples overnight."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {differentiators.map((item) => (
            <Card key={item.title} className="flex flex-col gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title="What we build."
            description="Four capabilities that cover everything from a single workflow to a full product."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            All services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Our plans"
          title="How we work with you."
          description="The same four stages on every engagement, whether it's one workflow or a full automation programme."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {strategy.map((phase) => (
            <li key={phase.step}>
              <Card className="flex h-full flex-col gap-3">
                <span className="font-mono text-sm font-bold text-accent">
                  {phase.step}
                </span>
                <h3 className="text-lg font-semibold">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {phase.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="AI Agents"
            title="Agents already doing the work."
            description="Real systems running in production. Open one to see the workflow and the numbers behind it."
          />
          <Link
            href="/agents"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            All agents <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.slice(0, 3).map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      </Section>

      <TaglineBand />
      <FaqSection topic="services" title="Common questions." />
      <CtaSection />
    </>
  );
}
