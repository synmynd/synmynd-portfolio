import type { Metadata } from "next";
import { projectPlans, retainerPlans } from "@/content/pricing";
import { PlanCard } from "@/components/sections/PlanCard";
import { RetainerPlans } from "@/components/sections/RetainerPlans";
import { PageHeader, Section, SectionHeading } from "@/components/ui";
import { FaqSection } from "@/components/sections/Faq";
import { CtaSection } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-price automation packages from $249 and monthly retainers from $499. No hourly billing, no scope creep, infrastructure billed at cost.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Fixed prices, stated before we start."
        description="No hourly billing and no open-ended engagements. You get a firm number, and if we think the project isn't worth the spend we'll tell you."
      />

      <Section>
        <SectionHeading
          eyebrow="Project packages"
          title="One-time builds."
          description="Scoped, priced, and delivered against a firm timeline."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectPlans.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Retainers"
          title="Ongoing partnership."
          description="For automations that matter enough that failure has a real cost — and for teams that keep finding new work worth removing."
        />
        <RetainerPlans plans={retainerPlans} />
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-card border border-border bg-surface p-8">
          <h2 className="text-lg font-semibold">
            What isn&apos;t included in these prices
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Infrastructure runs on your accounts and is billed to you directly at
            cost — n8n Cloud or VPS hosting, LLM API usage, and any third-party
            subscriptions your workflows depend on. We never mark these up, and
            we estimate them during scoping so there are no surprises on the
            first invoice.
          </p>
        </div>
      </Section>

      <FaqSection topic="pricing" title="Pricing questions." />
      <CtaSection
        title="Not sure which one you need?"
        description="Start with the $249 audit. We'll map what's worth automating and credit the fee against whatever you book."
      />
    </>
  );
}
