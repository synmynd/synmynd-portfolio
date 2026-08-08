import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui";
import { AgentNetwork } from "@/components/sections/AgentNetwork";

const proofPoints = [
  { metric: "40+", label: "Automations shipped" },
  { metric: "5.0", label: "Average client rating" },
  { metric: "14", label: "Platforms integrated" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-pill bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent">
            <Sparkles size={13} />
            {site.tagline}
          </span>

          <h1 className="text-4xl font-bold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            We build the AI agents that{" "}
            <span className="text-accent">run your business.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            n8n orchestration, custom Python engines, and LLM-native systems —
            shipped by an engineering team you don&apos;t have to hire.
          </p>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Book a call
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/agents" variant="secondary" size="lg">
              See our agents
            </ButtonLink>
          </div>

          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-5">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <dt className="sr-only">{point.label}</dt>
                <dd className="font-mono text-2xl font-bold text-highlight">
                  {point.metric}
                </dd>
                <p className="text-xs text-muted">{point.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <AgentNetwork />
      </Container>
    </section>
  );
}
