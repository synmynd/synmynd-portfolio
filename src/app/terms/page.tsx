import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/ui";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply to using the ${site.name} website and engaging our services.`,
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Container>
      <LegalPage
        title="Terms of Service"
        sections={[
          {
            heading: "Using this site",
            body: [
              `This website is provided for information. Content may change without notice, and nothing here constitutes a binding offer until confirmed in a written proposal.`,
            ],
          },
          {
            heading: "Pricing",
            body: [
              `Prices shown are indicative starting points for typical scopes. Final pricing is confirmed in a written proposal before any work begins. Infrastructure and third-party costs — hosting, LLM API usage, and software subscriptions — are billed to the client directly at cost and are not included in our fees.`,
            ],
          },
          {
            heading: "Engagements",
            body: [
              `Each project is governed by its own agreement covering scope, timeline, payment schedule, and support period. Where a project is contracted through a third-party platform, that platform's terms also apply.`,
            ],
          },
          {
            heading: "Intellectual property",
            body: [
              `On full payment, the client owns the workflows, code, and configuration produced for their engagement. We retain ownership of any pre-existing tooling and general know-how used in delivery.`,
              `Site content, branding, and marks remain the property of ${site.name}.`,
            ],
          },
          {
            heading: "Liability",
            body: [
              `We build with error handling, testing, and monitoring, but no software is guaranteed to be free of faults. Our liability under any engagement is limited to the fees paid for that engagement. We are not liable for indirect or consequential loss.`,
            ],
          },
          {
            heading: "Contact",
            body: [`Questions about these terms can be sent to ${site.email}.`],
          },
        ]}
      />
    </Container>
  );
}
