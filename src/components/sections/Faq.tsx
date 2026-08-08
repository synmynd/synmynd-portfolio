import { Plus } from "lucide-react";
import { faqsFor } from "@/content/faqs";
import type { Faq } from "@/content/schema";
import { Section, SectionHeading } from "@/components/ui";

export function FaqSection({
  topic,
  title = "Questions, answered",
  eyebrow = "FAQ",
}: {
  topic: Faq["topics"][number];
  title?: string;
  eyebrow?: string;
}) {
  const items = faqsFor(topic);
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="flex flex-col">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-border py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  size={18}
                  className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-45 group-open:text-accent"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
