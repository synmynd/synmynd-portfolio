import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Quote, Star } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/content/work";
import { CaseStudyCard } from "@/components/sections/Cards";
import { CtaSection } from "@/components/sections/Cta";
import {
  Badge,
  Card,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

const platformLabels = {
  upwork: "Upwork",
  fiverr: "Fiverr",
  direct: "Direct engagement",
} as const;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    robots: study.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 2);

  return (
    <>
      <PageHeader eyebrow="Client Story" title={study.title} description={study.summary}>
        <Badge tone="accent">{platformLabels[study.platform]}</Badge>
        {study.services.map((service) => (
          <Badge key={service}>{service}</Badge>
        ))}
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <SectionHeading eyebrow="The project" title="What we did." />
              <p className="text-base leading-relaxed text-muted">
                {study.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {study.results.map((result) => (
                <Card key={result.label} className="flex flex-col gap-1">
                  <p className="font-mono text-2xl font-bold text-highlight">
                    {result.metric}
                  </p>
                  <p className="text-sm text-muted">{result.label}</p>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {study.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="flex flex-col gap-5 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <Quote size={22} className="text-accent" />
              <span
                className="flex items-center gap-0.5 text-accent"
                aria-label={`${study.review.rating} out of 5`}
              >
                {Array.from({ length: study.review.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
            </div>
            <blockquote className="text-base leading-relaxed text-text">
              {study.review.quote}
            </blockquote>
            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium">{study.review.author}</p>
              <p className="text-xs text-muted">{study.client}</p>
            </div>

            {study.review.url ? (
              <a
                href={study.review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-6 py-2.5 text-sm font-semibold text-accent-contrast transition-all hover:brightness-110"
              >
                Read the verified review
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-pill border border-border px-6 py-2.5 text-sm font-medium text-muted">
                Verified review link coming soon
              </span>
            )}
          </Card>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-border">
          <SectionHeading eyebrow="More work" title="Other projects." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <CaseStudyCard key={item.slug} study={item} />
            ))}
          </div>
        </Section>
      )}

      <CtaSection />
    </>
  );
}
