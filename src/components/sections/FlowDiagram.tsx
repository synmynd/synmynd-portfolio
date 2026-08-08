import { cn } from "@/lib/utils";
import type { Agent } from "@/content/schema";

const kindStyles: Record<Agent["flow"][number]["kind"], string> = {
  trigger: "border-accent/60 bg-accent-soft text-accent",
  logic: "border-border bg-surface-alt text-text",
  ai: "border-accent/40 bg-surface-alt text-text",
  action: "border-border bg-surface-alt text-text",
};

const kindLabels: Record<Agent["flow"][number]["kind"], string> = {
  trigger: "Trigger",
  logic: "Logic",
  ai: "AI",
  action: "Action",
};

/** Static, server-rendered flow. React Flow (pannable) lands in Phase 2. */
export function FlowDiagram({ flow }: { flow: Agent["flow"] }) {
  return (
    <div className="rounded-card border border-border bg-surface p-6">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        Workflow
      </p>
      <ol className="flex flex-col gap-0">
        {flow.map((node, i) => (
          <li key={node.id} className="flex flex-col">
            <div
              className={cn(
                "flex items-center justify-between gap-4 rounded-xl border px-4 py-3",
                kindStyles[node.kind],
              )}
            >
              <span className="text-sm font-medium">{node.label}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">
                {kindLabels[node.kind]}
              </span>
            </div>
            {i < flow.length - 1 && (
              <span
                aria-hidden
                className="ml-6 h-5 w-px bg-gradient-to-b from-accent/60 to-border"
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
