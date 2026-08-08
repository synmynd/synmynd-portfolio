import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui";

export function TaglineBand() {
  return (
    <section className="border-y border-border bg-accent-soft">
      <Container className="flex flex-col items-center gap-5 py-14 text-center">
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {site.tagline}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          A dedicated engineer inside your team from $5,500/month. No hiring, no
          onboarding, no payroll — just someone who ships.
        </p>
        <ButtonLink href="/pricing#embedded-engineer" size="lg">
          See how it works
          <ArrowRight size={16} />
        </ButtonLink>
      </Container>
    </section>
  );
}

export function CtaSection({
  title = "Let's find what's worth automating.",
  description = "Book a 30-minute call. We'll map your processes and tell you honestly whether there's enough there to be worth our time.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <div className="flex flex-col items-center gap-6 rounded-card border border-border bg-surface px-6 py-16 text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact" size="lg">
            Book a call
            <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink href="/pricing" variant="secondary" size="lg">
            View pricing
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
