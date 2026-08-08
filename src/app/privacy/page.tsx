import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/ui";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your data.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Container>
      <LegalPage
        title="Privacy Policy"
        sections={[
          {
            heading: "What we collect",
            body: [
              `When you submit our contact form we collect your name, email address, company name, the service you're interested in, and your message. If you use our chat widget we also store the conversation for the duration of your session.`,
              `We collect anonymous analytics about how the site is used — pages viewed, approximate region, and referring source. This is not tied to your identity.`,
            ],
          },
          {
            heading: "How we use it",
            body: [
              `Contact details are used solely to respond to your enquiry and, if we work together, to deliver the engagement. We do not sell your data or share it with advertisers.`,
              `Form submissions are processed through our automation platform and delivered to our team inbox.`,
            ],
          },
          {
            heading: "Third parties",
            body: [
              `We use a small number of processors to run this site and our operations, including our hosting provider, our automation platform, and our email provider. Each is bound by its own data-processing terms.`,
              `Chat conversations may be processed by a large language model provider in order to generate a response.`,
            ],
          },
          {
            heading: "Retention",
            body: [
              `Enquiries are retained for as long as needed to respond and, where a project follows, for the duration of the engagement plus any period required for accounting. Chat transcripts are retained for up to 90 days.`,
            ],
          },
          {
            heading: "Your rights",
            body: [
              `You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it. Email ${site.email} and we'll action it within 30 days.`,
            ],
          },
          {
            heading: "Contact",
            body: [
              `Questions about this policy can be sent to ${site.email}.`,
            ],
          },
        ]}
      />
    </Container>
  );
}
