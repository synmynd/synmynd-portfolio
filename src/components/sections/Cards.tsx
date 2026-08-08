import Link from "next/link";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import type { Agent, CaseStudy, Service } from "@/content/schema";
import { Badge, Card } from "@/components/ui";
import { Icon } from "@/lib/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card interactive className="group flex flex-col gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Icon name={service.icon} size={20} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{service.tagline}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {service.stack.slice(0, 4).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-accent"
      >
        Learn more
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </Card>
  );
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/agents/${agent.slug}`} className="group block">
      <Card interactive className="flex h-full flex-col gap-4 p-0">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-t-card border-b border-border bg-surface-alt">
          {/* Generated placeholder until demo videos are supplied. */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          <PlayCircle
            size={40}
            className="relative text-muted transition-colors group-hover:text-accent"
            strokeWidth={1.25}
          />
          {!agent.videoUrl && (
            <span className="absolute bottom-3 right-3 rounded-pill border border-border bg-base/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
              Demo coming soon
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6 pt-2">
          <h3 className="text-base font-semibold leading-snug">
            {agent.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{agent.summary}</p>
          <p className="font-mono text-xs text-accent">{agent.outcome}</p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {agent.platforms.slice(0, 3).map((platform) => (
              <Badge key={platform}>{platform}</Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}

const platformLabels: Record<CaseStudy["platform"], string> = {
  upwork: "Upwork",
  fiverr: "Fiverr",
  direct: "Direct",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <Card interactive className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="accent">{platformLabels[study.platform]}</Badge>
          <span
            className="flex items-center gap-0.5 text-accent"
            aria-label={`${study.review.rating} out of 5`}
          >
            {Array.from({ length: study.review.rating }).map((_, i) => (
              <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">{study.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{study.summary}</p>
        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
          {study.results.slice(0, 3).map((result) => (
            <div key={result.label}>
              <p className="font-mono text-sm font-semibold text-highlight">
                {result.metric}
              </p>
              <p className="text-xs text-muted">{result.label}</p>
            </div>
          ))}
        </div>
      </Card>
    </Link>
  );
}
