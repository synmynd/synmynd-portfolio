import { define, agentSchema, type Agent } from "./schema";

/*
  Placeholder entries so the grid and detail layouts are locked in. Replace the
  copy as real demos land, and add `videoUrl` per agent — the detail page shows
  a "Demo coming soon" state until then.
*/
export const agents: Agent[] = define(agentSchema, "agent", [
  {
    slug: "inbound-lead-qualifier",
    title: "Inbound Lead Qualifier",
    summary:
      "Reads every inbound enquiry, scores it against your ideal customer profile, and routes it to the right person with context attached.",
    outcome: "Response time cut from hours to under two minutes",
    platforms: ["n8n", "OpenAI", "HubSpot", "Slack"],
    useCase: "sales",
    problem:
      "Enquiries arrived across a web form, a shared inbox, and LinkedIn. Nobody owned triage, so good leads sat unanswered overnight while the team manually re-typed details into the CRM.",
    build: [
      "Single n8n intake normalising every channel into one payload",
      "LLM scoring pass against a defined ideal customer profile",
      "Automatic enrichment from public company data",
      "CRM record created with the summary and score attached",
      "Slack alert routed by territory with a one-click claim action",
    ],
    results: [
      { metric: "< 2 min", label: "Average response time" },
      { metric: "100%", label: "Enquiries logged in CRM" },
      { metric: "9 hrs", label: "Saved per week" },
    ],
    flow: [
      { id: "intake", label: "Multi-channel intake", kind: "trigger" },
      { id: "normalise", label: "Normalise payload", kind: "logic" },
      { id: "score", label: "LLM qualification", kind: "ai" },
      { id: "enrich", label: "Company enrichment", kind: "logic" },
      { id: "crm", label: "Create CRM record", kind: "action" },
      { id: "notify", label: "Route to Slack", kind: "action" },
    ],
  },
  {
    slug: "support-triage-agent",
    title: "Support Triage Agent",
    summary:
      "Answers repeat questions from your own documentation and escalates anything it isn't confident about to a human.",
    outcome: "Roughly 60% of tickets resolved without a human",
    platforms: ["n8n", "Anthropic", "Slack", "Notion"],
    useCase: "support",
    problem:
      "The support inbox was dominated by the same dozen questions, all answerable from existing docs, which buried the tickets that genuinely needed attention.",
    build: [
      "RAG index built over the existing help centre and internal notes",
      "Confidence threshold that escalates rather than guessing",
      "Draft replies posted for human approval during rollout",
      "Full conversation logging for later evaluation",
      "Weekly report on unanswered question themes",
    ],
    results: [
      { metric: "60%", label: "Tickets auto-resolved" },
      { metric: "4x", label: "Faster first response" },
      { metric: "0", label: "Confident wrong answers shipped" },
    ],
    flow: [
      { id: "ticket", label: "New ticket", kind: "trigger" },
      { id: "retrieve", label: "Retrieve from docs", kind: "ai" },
      { id: "draft", label: "Draft answer", kind: "ai" },
      { id: "confidence", label: "Confidence gate", kind: "logic" },
      { id: "reply", label: "Send reply", kind: "action" },
      { id: "escalate", label: "Escalate to human", kind: "action" },
    ],
  },
  {
    slug: "invoice-processing-engine",
    title: "Invoice Processing Engine",
    summary:
      "Pulls invoices from email, extracts line items, validates them against purchase orders, and files them for approval.",
    outcome: "Six hours of weekly data entry reduced to twelve minutes",
    platforms: ["n8n", "OpenAI", "Google Workspace", "Airtable"],
    useCase: "finance",
    problem:
      "Invoices arrived as PDFs in dozens of formats and were re-keyed by hand, which was slow and produced errors that only surfaced at month end.",
    build: [
      "Inbox watcher isolating invoice attachments",
      "Vision model extracting structured line items from any layout",
      "Validation against open purchase orders",
      "Exception queue for anything that fails validation",
      "Approved records written to the finance system",
    ],
    results: [
      { metric: "6 hrs → 12 min", label: "Weekly processing time" },
      { metric: "99.2%", label: "Extraction accuracy" },
      { metric: "3 days", label: "Faster month-end close" },
    ],
    flow: [
      { id: "email", label: "Invoice received", kind: "trigger" },
      { id: "extract", label: "Vision extraction", kind: "ai" },
      { id: "validate", label: "Match against PO", kind: "logic" },
      { id: "exception", label: "Exception queue", kind: "logic" },
      { id: "file", label: "File for approval", kind: "action" },
    ],
  },
  {
    slug: "content-repurposing-agent",
    title: "Content Repurposing Agent",
    summary:
      "Takes one long-form piece and produces platform-native versions for every channel, kept in your voice.",
    outcome: "One article becomes twelve assets in under five minutes",
    platforms: ["n8n", "OpenAI", "Notion", "Slack"],
    useCase: "marketing",
    problem:
      "Long-form content was published once and never reused, because manually reshaping it for each channel took longer than writing it did.",
    build: [
      "Voice profile built from existing published work",
      "Per-channel generation with platform-specific constraints",
      "Human review queue before anything publishes",
      "Scheduled distribution across channels",
      "Performance loop feeding results back into the prompt",
    ],
    results: [
      { metric: "12", label: "Assets per article" },
      { metric: "< 5 min", label: "Generation time" },
      { metric: "3x", label: "Publishing cadence" },
    ],
    flow: [
      { id: "source", label: "New article", kind: "trigger" },
      { id: "voice", label: "Apply voice profile", kind: "ai" },
      { id: "generate", label: "Per-channel drafts", kind: "ai" },
      { id: "review", label: "Human review", kind: "logic" },
      { id: "publish", label: "Schedule & publish", kind: "action" },
    ],
  },
  {
    slug: "competitor-monitor",
    title: "Competitor Monitoring Agent",
    summary:
      "Watches competitor pricing, releases, and job posts, then reports only what actually changed and why it matters.",
    outcome: "Weekly manual research replaced by a five-minute digest",
    platforms: ["n8n", "Python", "Anthropic", "Slack"],
    useCase: "data",
    problem:
      "Competitive research was done manually and inconsistently, so pricing changes were often noticed weeks after they happened.",
    build: [
      "Resilient scrapers that survive layout changes",
      "Change detection with noise filtering",
      "LLM summarisation explaining the significance of each change",
      "Weekly digest delivered to Slack",
      "Immediate alerts for pricing moves",
    ],
    results: [
      { metric: "Same day", label: "Pricing change detection" },
      { metric: "5 min", label: "Weekly review time" },
      { metric: "18", label: "Competitors tracked" },
    ],
    flow: [
      { id: "schedule", label: "Scheduled crawl", kind: "trigger" },
      { id: "scrape", label: "Extract pages", kind: "logic" },
      { id: "diff", label: "Detect changes", kind: "logic" },
      { id: "summarise", label: "Summarise impact", kind: "ai" },
      { id: "digest", label: "Deliver digest", kind: "action" },
    ],
  },
  {
    slug: "onboarding-orchestrator",
    title: "Client Onboarding Orchestrator",
    summary:
      "Turns a signed contract into provisioned accounts, a kickoff schedule, and a populated project workspace.",
    outcome: "Onboarding shortened from four days to under an hour",
    platforms: ["n8n", "Stripe", "Slack", "Notion"],
    useCase: "operations",
    problem:
      "Every new client triggered the same fifteen manual steps across six tools, and any missed step surfaced as a bad first impression.",
    build: [
      "Contract signature as the single trigger",
      "Account provisioning across every internal tool",
      "Project workspace generated from a template",
      "Kickoff scheduling with automatic calendar invites",
      "Welcome sequence with owner assignment",
    ],
    results: [
      { metric: "4 days → 1 hr", label: "Time to onboard" },
      { metric: "15", label: "Manual steps removed" },
      { metric: "0", label: "Missed setup steps" },
    ],
    flow: [
      { id: "signed", label: "Contract signed", kind: "trigger" },
      { id: "provision", label: "Provision accounts", kind: "action" },
      { id: "workspace", label: "Build workspace", kind: "action" },
      { id: "schedule", label: "Schedule kickoff", kind: "action" },
      { id: "welcome", label: "Welcome sequence", kind: "action" },
    ],
  },
]);

export function getAgent(slug: string) {
  return agents.find((agent) => agent.slug === slug);
}

/** Same use case first, then same platform, padded with the most recent. */
export function relatedAgents(slug: string, count = 3) {
  const current = getAgent(slug);
  if (!current) return agents.slice(0, count);

  const others = agents.filter((agent) => agent.slug !== slug);
  const scored = others.map((agent) => {
    const sharedPlatforms = agent.platforms.filter((platform) =>
      current.platforms.includes(platform),
    ).length;
    const score =
      (agent.useCase === current.useCase ? 10 : 0) + sharedPlatforms;
    return { agent, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.agent);
}
