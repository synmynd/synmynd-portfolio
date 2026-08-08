import type { Metadata } from "next";
import { agents } from "@/content/agents";
import { AgentGrid } from "@/components/sections/AgentGrid";
import { PageHeader, Section } from "@/components/ui";
import { CtaSection } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Production AI agents built by SynMynd — lead qualification, support triage, invoice processing, and more. See the workflow and the numbers behind each one.",
};

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Agents"
        title="Agents doing real work, right now."
        description="Each one runs in production for a real business. Open any of them to see the workflow, the stack, and what it actually changed."
      />

      <Section>
        <AgentGrid agents={agents} />
      </Section>

      <CtaSection
        title="Want one of these running in your business?"
        description="Most of these took under four weeks to build. Book a call and we'll tell you which one fits your workload."
      />
    </>
  );
}
