import type { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/sections/Cards";
import { PageHeader, Section } from "@/components/ui";
import { FaqSection } from "@/components/sections/Faq";
import { CtaSection } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agent ecosystems, n8n orchestration, custom Python engines, and SaaS engineering. Fixed-price automation work built to run in production.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Four ways we remove manual work."
        description="From a single workflow to a full product build. Every engagement is fixed price and scoped before it starts."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <FaqSection topic="services" />
      <CtaSection />
    </>
  );
}
