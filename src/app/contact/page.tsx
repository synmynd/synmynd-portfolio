import type { Metadata } from "next";
import { Calendar, Clock, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, PageHeader, Section } from "@/components/ui";
import { FaqSection } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute call with SynMynd to map what's worth automating in your business.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email },
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what's eating your team's time."
        description="Thirty minutes is usually enough to tell whether automation is worth it for you. If it isn't, we'll say so."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Card className="p-8">
            <ContactForm />
          </Card>

          <div className="flex flex-col gap-4">
            <Card className="flex flex-col gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Calendar size={20} />
              </div>
              <h2 className="text-lg font-semibold">Rather just talk?</h2>
              {site.calLink ? (
                <a
                  href={site.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-pill bg-accent px-6 py-2.5 text-sm font-semibold text-accent-contrast transition-all hover:brightness-110"
                >
                  Pick a time
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-muted">
                  Direct booking is being set up. Send the form and we&apos;ll
                  reply with times within one business day.
                </p>
              )}
            </Card>

            <Card className="flex flex-col gap-5">
              {details.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <detail.icon
                    size={16}
                    className="mt-1 shrink-0 text-accent"
                  />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                      {detail.label}
                    </p>
                    <p className="text-sm">{detail.value}</p>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </Section>

      <FaqSection topic="contact" title="Before you write." />
    </>
  );
}
