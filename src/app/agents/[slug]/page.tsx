import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, PlayCircle } from "lucide-react";
import { agents, getAgent, relatedAgents } from "@/content/agents";
import { AgentCard } from "@/components/sections/Cards";
import { FlowDiagram } from "@/components/sections/FlowDiagram";
import { CtaSection } from "@/components/sections/Cta";
import {
  Badge,
  Card,
  Container,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) return {};
  return {
    title: agent.title,
    description: agent.summary,
    alternates: { canonical: `/agents/${agent.slug}` },
  };
}

export default async function AgentPage({ params }: Params) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) notFound();

  const related = relatedAgents(agent.slug);

  return (
    <>
      <PageHeader eyebrow="AI Agent" title={agent.title} description={agent.summary}>
        {agent.platforms.map((platform) => (
          <Badge key={platform}>{platform}</Badge>
        ))}
      </PageHeader>

      {/* Demo video sits above the fold; placeholder until files are supplied. */}
      <Container className="py-10">
        <div className="overflow-hidden rounded-card border border-border bg-surface">
          {agent.videoUrl ? (
            <video
              controls
              preload="none"
              poster={agent.thumbnail}
              className="aspect-video w-full"
            >
              <source src={agent.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-3">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <PlayCircle
                size={52}
                className="relative text-muted"
                strokeWidth={1.25}
              />
              <p className="relative font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Demo video coming soon
              </p>
            </div>
          )}
        </div>
      </Container>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <SectionHeading eyebrow="The problem" title="What wasn't working." />
              <p className="text-base leading-relaxed text-muted">
                {agent.problem}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="The build" title="How we built it." />
              <ul className="flex flex-col gap-2.5">
                {agent.build.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    <span className="text-base text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Results" title="What changed." />
              <div className="grid gap-4 sm:grid-cols-3">
                {agent.results.map((result) => (
                  <Card key={result.label} className="flex flex-col gap-1">
                    <p className="font-mono text-2xl font-bold text-highlight">
                      {result.metric}
                    </p>
                    <p className="text-sm text-muted">{result.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <FlowDiagram flow={agent.flow} />
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="More agents"
          title="You might also want these."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <AgentCard key={item.slug} agent={item} />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
