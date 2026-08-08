import { Check } from "lucide-react";
import type { PricingPlan } from "@/content/schema";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export function PlanCard({
  plan,
  price,
  suffix,
  note,
}: {
  plan: PricingPlan;
  price?: number;
  suffix?: string;
  note?: string;
}) {
  const amount = price ?? plan.price;
  const displaySuffix = suffix ?? plan.priceSuffix;

  return (
    <Card
      id={plan.slug}
      className={cn(
        "flex scroll-mt-24 flex-col gap-5",
        plan.popular && "border-accent shadow-[0_0_40px_-16px_var(--glow)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        {plan.popular && (
          <span className="rounded-pill bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-contrast">
            Most popular
          </span>
        )}
        {!plan.popular && plan.highlight && (
          <span className="rounded-pill bg-accent-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
            {plan.highlight}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1.5">
        {plan.pricePrefix && (
          <span className="text-sm text-muted">{plan.pricePrefix}</span>
        )}
        <span className="font-mono text-3xl font-bold">
          ${amount.toLocaleString("en-US")}
        </span>
        {displaySuffix && (
          <span className="text-sm text-muted">{displaySuffix}</span>
        )}
      </div>
      {note && <p className="-mt-3 text-xs text-accent">{note}</p>}

      <p className="text-sm leading-relaxed text-muted">{plan.summary}</p>

      <ul className="flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-accent"
              strokeWidth={2.5}
            />
            <span className="text-sm text-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-2">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Best for: {plan.bestFor}
        </p>
        <ButtonLink
          href="/contact"
          variant={plan.popular ? "primary" : "secondary"}
          className="w-full"
        >
          Book a call
        </ButtonLink>
      </div>
    </Card>
  );
}
