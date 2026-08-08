import { define, serviceSchema, type Service } from "./schema";

export const services: Service[] = define(serviceSchema, "service", [
  {
    slug: "ai-agents",
    icon: "bot",
    title: "AI Agent Ecosystems",
    tagline: "Agents that carry real workload, not demos.",
    description:
      "We design and ship production LLM agents that read your data, call your tools, and complete work end to end — with the guardrails, evaluation, and cost controls that keep them trustworthy once they're live.",
    outcomes: [
      "Agents that handle a defined job without a human in the loop",
      "Retrieval over your own documents and systems, not generic answers",
      "Token spend that stays predictable month over month",
    ],
    deliverables: [
      "Agent architecture and prompt design",
      "RAG pipeline over your data sources",
      "Tool-calling integrations with your existing stack",
      "Evaluation suite and regression tests",
      "Cost monitoring and alerting dashboard",
    ],
    stack: ["OpenAI", "Anthropic", "LangChain", "n8n", "Supabase"],
    featured: true,
  },
  {
    slug: "n8n-orchestration",
    icon: "workflow",
    title: "n8n Orchestration",
    tagline: "Production workflows that wire your whole stack together.",
    description:
      "Most automation breaks the first time an API returns something unexpected. We build workflows with real error handling, retries, and observability — self-hosted if you want to own the infrastructure outright.",
    outcomes: [
      "Manual processes removed, measured in hours per week",
      "Failures that alert you instead of failing silently",
      "Full ownership of your automation, no per-task pricing",
    ],
    deliverables: [
      "Workflow design and build",
      "Error handling, retries, and dead-letter queues",
      "Self-hosted n8n deployment with backups",
      "Monitoring, logging, and alerting",
      "Handover documentation and team training",
    ],
    stack: ["n8n", "Zapier", "Make", "Slack", "Airtable"],
    featured: true,
  },
  {
    slug: "custom-python",
    icon: "code",
    title: "Custom Python Engines",
    tagline: "For the work no off-the-shelf tool can do.",
    description:
      "When a workflow tool hits its ceiling, we drop into Python. Scrapers that survive layout changes, data pipelines that handle scale, and services built to run unattended for years.",
    outcomes: [
      "Automation of processes no SaaS product covers",
      "Data pipelines that hold up under real volume",
      "Code you own outright, documented and tested",
    ],
    deliverables: [
      "Bespoke scrapers and data extraction services",
      "ETL and data pipelines",
      "REST and webhook APIs",
      "Scheduled jobs with retry and alerting",
      "Test coverage and deployment setup",
    ],
    stack: ["Python", "FastAPI", "Playwright", "Postgres", "Docker"],
    featured: true,
  },
  {
    slug: "saas-engineering",
    icon: "layers",
    title: "SaaS Engineering",
    tagline: "From idea to a product with paying users.",
    description:
      "Full product builds with AI at the core rather than bolted on. We handle architecture, build, and launch — then stay on to iterate once real users start telling you what they actually need.",
    outcomes: [
      "A working product in front of users in weeks",
      "Architecture that survives your first growth spike",
      "An AI layer that's genuinely useful, not decorative",
    ],
    deliverables: [
      "Product architecture and technical planning",
      "Full-stack build with Next.js and Python",
      "Authentication, billing, and admin tooling",
      "LLM feature integration",
      "Deployment, CI, and monitoring",
    ],
    stack: ["Next.js", "TypeScript", "Python", "Postgres", "Stripe"],
    featured: true,
  },
]);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
