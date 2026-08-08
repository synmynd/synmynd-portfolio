import type { Metadata } from "next";
import { caseStudies, publishedCaseStudies } from "@/content/work";
import { CaseStudyCard } from "@/components/sections/Cards";
import { Card, PageHeader, Section } from "@/components/ui";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Real automation projects delivered by SynMynd, with verified client reviews from Upwork and Fiverr.",
};

/*
  Drafts are hidden in production but visible locally so layout can be reviewed
  before real content lands. Flip `draft: false` in content/work.ts to publish.
*/
const isProduction = process.env.NODE_ENV === "production";

export default function WorkPage() {
  const visible = isProduction ? publishedCaseStudies : caseStudies;
  const showingDrafts = !isProduction && publishedCaseStudies.length === 0;

  return (
    <>
      <PageHeader
        eyebrow="Client Stories"
        title="Work we've shipped, reviewed by the people who paid for it."
        description="Every review below is hosted on Upwork or Fiverr, not written by us. Follow the link on any project to read it at the source."
      />

      <Section>
        {showingDrafts && (
          <p className="mb-8 rounded-card border border-accent/40 bg-accent-soft px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent">
            Local preview — placeholder content, hidden in production
          </p>
        )}

        {visible.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {visible.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        ) : (
          <Card className="flex flex-col items-center gap-4 px-6 py-16 text-center">
            <h2 className="text-xl font-semibold">Case studies publishing soon</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              We&apos;re writing up recent projects with their verified reviews.
              In the meantime, book a call and we&apos;ll walk you through work
              relevant to your situation.
            </p>
            <ButtonLink href="/contact">Book a call</ButtonLink>
          </Card>
        )}
      </Section>

      <CtaSection />
    </>
  );
}
