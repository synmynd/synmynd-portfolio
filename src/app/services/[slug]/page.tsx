import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { Badge, Card, PageHeader, Section, SectionHeading } from "@/components/ui";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/Cta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.tagline}
      >
        {service.stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col gap-10">
            <p className="text-lg leading-relaxed text-muted">
              {service.description}
            </p>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">What you get</h2>
              <ul className="flex flex-col gap-2.5">
                {service.deliverables.map((item) => (
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
          </div>

          <Card className="flex flex-col gap-5 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold">Outcomes</h2>
            <ul className="flex flex-col gap-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="border-l-2 border-accent pl-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {outcome}
                  </p>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-2 w-full">
              Discuss this service
              <ArrowRight size={15} />
            </ButtonLink>
            <Link
              href="/pricing"
              className="text-center text-sm text-muted transition-colors hover:text-accent"
            >
              See pricing
            </Link>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Also from us" title="Other services." />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {others.map((other) => (
            <Card key={other.slug} interactive as="article">
              <Link href={`/services/${other.slug}`} className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">{other.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {other.tagline}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
