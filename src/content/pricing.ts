import { define, pricingPlanSchema, type PricingPlan } from "./schema";

/*
  Anchored to 2026 market rates for n8n / Make / Zapier work: published agency
  rates run $2.5K-$15K for a first project and $500-$8K/mo on retainer, with
  Upwork mid-range materially lower. These sit between the two.
*/
export const plans: PricingPlan[] = define(pricingPlanSchema, "pricing plan", [
  {
    slug: "automation-audit",
    name: "Automation Audit",
    price: 249,
    type: "project",
    summary:
      "A full review of how you work today and a prioritised map of what's worth automating first.",
    features: [
      "Process review across your current stack",
      "Map of every automatable workflow",
      "Prioritised roadmap with ROI estimates",
      "Delivered within 72 hours",
      "Fee credited against any build booked within 30 days",
    ],
    bestFor: "Anyone deciding where to start",
    popular: false,
    highlight: "Fee credited back",
  },
  {
    slug: "single-workflow",
    name: "Single Workflow Build",
    price: 749,
    type: "project",
    summary:
      "One production workflow, built properly — error handling included, not an afterthought.",
    features: [
      "One end-to-end workflow",
      "Up to 3 app integrations",
      "Error handling and retries",
      "Handover documentation",
      "14 days of post-launch support",
    ],
    bestFor: "One clear, repetitive process",
    popular: false,
  },
  {
    slug: "self-hosted-setup",
    name: "Self-Hosted n8n Setup",
    price: 999,
    type: "project",
    summary:
      "Your own n8n instance on your own infrastructure. No per-task fees, no vendor ceiling.",
    features: [
      "Server provisioning and hardening",
      "Docker, Postgres, and SSL configuration",
      "Automated backups and restore testing",
      "Monitoring and uptime alerts",
      "Team walkthrough and documentation",
    ],
    bestFor: "Teams that want to own the stack",
    popular: false,
  },
  {
    slug: "multi-tool-system",
    name: "Multi-Tool Automation System",
    price: 2499,
    type: "project",
    summary:
      "Several connected workflows spanning your stack, sharing error handling and one logging layer.",
    features: [
      "3-5 connected production workflows",
      "Unlimited app integrations within scope",
      "Shared error handling and alerting",
      "Logging dashboard",
      "30 days of post-launch support",
    ],
    bestFor: "Multiple departments and tools",
    popular: false,
  },
  {
    slug: "platform-migration",
    name: "Platform Migration",
    price: 2999,
    type: "project",
    summary:
      "Move off Zapier, Make, or Power Automate onto n8n and stop paying per task.",
    features: [
      "Up to 10 workflows rebuilt in n8n",
      "Full parity testing before cutover",
      "Zero-downtime switchover",
      "Cost comparison report",
      "30 days of post-migration support",
    ],
    bestFor: "Teams outgrowing per-task pricing",
    popular: false,
  },
  {
    slug: "ai-agent-build",
    name: "AI Agent Build",
    price: 3999,
    type: "project",
    summary:
      "A production LLM agent with retrieval, tools, memory, and the guardrails that keep it safe.",
    features: [
      "Agent architecture and prompt design",
      "RAG pipeline over your own data",
      "Tool-calling into your existing systems",
      "Evaluation suite and guardrails",
      "Token-cost monitoring dashboard",
      "30 days of tuning after launch",
    ],
    bestFor: "Work that needs judgement, not just rules",
    popular: false,
  },
  {
    slug: "custom-engine",
    name: "Custom Engine / SaaS",
    price: 7500,
    pricePrefix: "from",
    type: "project",
    summary:
      "Bespoke Python services, data pipelines, or a full product build. Scoped per project.",
    features: [
      "Custom scrapers and extraction services",
      "Data pipelines built for real volume",
      "APIs and backend services",
      "Full-stack product builds",
      "Test coverage, CI, and deployment",
    ],
    bestFor: "Problems no existing tool solves",
    popular: false,
  },

  {
    slug: "essential-care",
    name: "Essential Care",
    price: 499,
    priceSuffix: "/mo",
    type: "retainer",
    summary:
      "Someone watching your automations so a silent failure doesn't become a silent problem.",
    features: [
      "Uptime monitoring and error alerts",
      "Credential and OAuth refresh",
      "One small build per month",
      "Monthly results report",
      "48-hour response time",
    ],
    bestFor: "1-2 live automations",
    popular: false,
  },
  {
    slug: "growth-ops",
    name: "Growth Ops",
    price: 1499,
    priceSuffix: "/mo",
    type: "retainer",
    summary:
      "Continuous build-out for teams that keep finding new things worth automating.",
    features: [
      "Everything in Essential Care",
      "2-3 new workflows per month",
      "Prompt tuning and optimisation",
      "24-hour response SLA",
      "Quarterly strategy review",
    ],
    bestFor: "3-8 live automations",
    popular: true,
  },
  {
    slug: "ai-agent-ops",
    name: "AI Agent Ops",
    price: 2999,
    priceSuffix: "/mo",
    type: "retainer",
    summary:
      "Live LLM agents need active ownership. Prompts drift, models change, costs creep.",
    features: [
      "Everything in Growth Ops",
      "Ongoing prompt iteration and evaluation",
      "Token-cost monitoring and reduction",
      "Model upgrade migrations",
      "12-hour response SLA",
    ],
    bestFor: "Production AI agents",
    popular: false,
  },
  {
    slug: "embedded-engineer",
    name: "Embedded Engineer",
    price: 5500,
    priceSuffix: "/mo",
    type: "retainer",
    summary:
      "A full-time engineer inside your team, without the hiring, the payroll, or the ramp-up.",
    features: [
      "Everything in AI Agent Ops",
      "Dedicated engineer on your team",
      "Private Slack channel",
      "Unlimited queued builds",
      "4-hour response SLA",
      "Weekly strategy call",
    ],
    bestFor: "Teams treating us as in-house",
    popular: false,
    highlight: "Hire us full-time",
  },
]);

export const projectPlans = plans.filter((plan) => plan.type === "project");
export const retainerPlans = plans.filter((plan) => plan.type === "retainer");

/** Two months free, rounded to the nearest dollar. */
export function annualPrice(monthly: number) {
  return monthly * 10;
}
