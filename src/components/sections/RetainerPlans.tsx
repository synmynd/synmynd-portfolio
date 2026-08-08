"use client";

import { useState } from "react";
import type { PricingPlan } from "@/content/schema";
import { annualPrice } from "@/content/pricing";
import { PlanCard } from "./PlanCard";
import { cn } from "@/lib/utils";

export function RetainerPlans({ plans }: { plans: PricingPlan[] }) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="mt-10 flex flex-col gap-10">
      <div
        role="radiogroup"
        aria-label="Billing period"
        className="inline-flex w-fit gap-1 rounded-pill border border-border p-1"
      >
        {[
          { value: false, label: "Monthly" },
          { value: true, label: "Annual · 2 months free" },
        ].map((option) => (
          <button
            key={option.label}
            role="radio"
            aria-checked={annual === option.value}
            onClick={() => setAnnual(option.value)}
            className={cn(
              "rounded-pill px-4 py-2 text-sm font-medium transition-colors",
              annual === option.value
                ? "bg-accent text-accent-contrast"
                : "text-muted hover:text-text",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.slug}
            plan={plan}
            price={annual ? annualPrice(plan.price) : plan.price}
            suffix={annual ? "/yr" : "/mo"}
            note={
              annual
                ? `$${plan.price.toLocaleString("en-US")}/mo billed annually`
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
