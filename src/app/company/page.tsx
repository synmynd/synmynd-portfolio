import type { Metadata } from "next";
import { team } from "@/content/team";
import { site } from "@/content/site";
import { Card, PageHeader, Section, SectionHeading } from "@/components/ui";
import { CtaSection } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Company",
  description:
    "SynMynd is an AI automation studio building agents and workflow systems for teams worldwide. Meet the people behind the work.",
};

const values = [
  {
    title: "Say the number first",
    description:
      "Fixed prices, stated before work starts. If we think a project isn't worth the spend, we say so rather than taking the money.",
  },
  {
    title: "Build for the bad day",
    description:
      "Anything can be made to work once. We build for the API outage, the malformed input, and the credential that expires at 3am.",
  },
  {
    title: "Hand over everything",
    description:
      "Code, infrastructure, documentation. If you decide to bring it in-house, we make that easy instead of making it painful.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="A small team that ships production systems."
        description={`SynMynd is an AI automation studio. We build the agents and workflows that remove manual work from businesses — ${site.location.toLowerCase()}.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Our story" title="Why we exist." />
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              Most businesses are paying salaries for work software should be
              doing. Not complex work — copying data between systems, re-typing
              invoices, chasing enquiries that arrived overnight. It&apos;s
              expensive, it&apos;s demoralising, and it scales badly.
            </p>
            <p>
              We started SynMynd because the tools to fix that finally got good
              enough. n8n and LLMs together can absorb a genuinely large share of
              routine operational work. The gap isn&apos;t capability anymore —
              it&apos;s that building these systems properly, so they hold up
              under real conditions, still takes engineering judgement.
            </p>
            <p>
              That&apos;s the whole business. We find the work worth removing, we
              build systems that remove it, and we stay on to make sure they keep
              working.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Values" title="How we operate." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Team"
          title="The people who build it."
          description="No account managers between you and the engineers doing the work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.slug} className="flex flex-col gap-4">
              <div
                aria-hidden
                className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft font-mono text-lg font-bold text-accent"
              >
                {initials(member.name)}
              </div>
              <div>
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {member.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
