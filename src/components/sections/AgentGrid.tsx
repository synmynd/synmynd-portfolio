"use client";

import { useMemo, useState } from "react";
import type { Agent } from "@/content/schema";
import { AgentCard } from "./Cards";
import { cn } from "@/lib/utils";

const useCaseLabels: Record<Agent["useCase"], string> = {
  sales: "Sales",
  support: "Support",
  operations: "Operations",
  marketing: "Marketing",
  data: "Data",
  finance: "Finance",
};

export function AgentGrid({ agents }: { agents: Agent[] }) {
  const [useCase, setUseCase] = useState<string>("all");
  const [platform, setPlatform] = useState<string>("all");

  const useCases = useMemo(
    () => [...new Set(agents.map((agent) => agent.useCase))],
    [agents],
  );
  const platforms = useMemo(
    () => [...new Set(agents.flatMap((agent) => agent.platforms))].sort(),
    [agents],
  );

  const filtered = agents.filter(
    (agent) =>
      (useCase === "all" || agent.useCase === useCase) &&
      (platform === "all" || agent.platforms.includes(platform)),
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <FilterRow
          label="Use case"
          options={[
            { value: "all", label: "All" },
            ...useCases.map((value) => ({
              value,
              label: useCaseLabels[value],
            })),
          ]}
          active={useCase}
          onChange={setUseCase}
        />
        <FilterRow
          label="Platform"
          options={[
            { value: "all", label: "All" },
            ...platforms.map((value) => ({ value, label: value })),
          ]}
          active={platform}
          onChange={setPlatform}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      ) : (
        <p className="rounded-card border border-border bg-surface px-6 py-14 text-center text-sm text-muted">
          No agents match that combination yet.
        </p>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          aria-pressed={active === option.value}
          className={cn(
            "rounded-pill border px-3.5 py-1.5 text-xs font-medium transition-colors",
            active === option.value
              ? "border-accent bg-accent-soft text-accent"
              : "border-border text-muted hover:border-accent/50 hover:text-text",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
