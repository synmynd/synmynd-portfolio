import { define, faqSchema, type Faq } from "./schema";

export const faqs: Faq[] = define(faqSchema, "faq", [
  {
    question: "How much does an automation project cost?",
    answer:
      "A single production workflow starts at $749. Multi-tool systems run $2,499, AI agent builds $3,999, and custom engines from $7,500. If you're not sure what you need, the $249 Automation Audit maps it out and the fee is credited against any build you book within 30 days.",
    topics: ["pricing"],
  },
  {
    question: "Are infrastructure costs included?",
    answer:
      "No, and we're upfront about it. n8n Cloud or VPS hosting, LLM API usage, and any third-party subscriptions are billed to you directly at cost. We never mark them up. We'll estimate them during scoping so there are no surprises.",
    topics: ["pricing"],
  },
  {
    question: "Do I need a retainer after the build?",
    answer:
      "Not always. Every project includes post-launch support. A retainer makes sense when a workflow is business-critical, when APIs you depend on change often, or when you keep finding new processes worth automating. If none of that applies, a one-time build is genuinely enough.",
    topics: ["pricing", "process"],
  },
  {
    question: "What's the difference between n8n, Zapier, and Make?",
    answer:
      "Zapier is the easiest to start with and the most expensive at scale, because you pay per task. Make sits in the middle with better branching logic. n8n can be self-hosted, so you own the infrastructure and stop paying per execution — it also handles custom code and AI agents far better. We work across all three and recommend based on your volume and control requirements, not our preference.",
    topics: ["services"],
  },
  {
    question: "How long does a project take?",
    answer:
      "The audit is delivered in 72 hours. A single workflow typically takes 5-7 days, a multi-tool system 2-3 weeks, and an AI agent build 3-4 weeks. Custom engines and product builds are scoped individually. We give you a firm timeline before any work starts.",
    topics: ["process"],
  },
  {
    question: "Do we own the automations you build?",
    answer:
      "Yes, entirely. You own the workflows, the code, and the infrastructure. Everything is documented and handed over. If you ever want to bring it in-house or move to another provider, nothing is locked to us.",
    topics: ["process", "services"],
  },
  {
    question: "What happens when an automation breaks?",
    answer:
      "Everything we build has error handling, retries, and alerting from day one, so failures surface immediately instead of silently. During the support window we fix them at no cost. On a retainer, monitoring and incident response are part of the scope with a defined SLA.",
    topics: ["process"],
  },
  {
    question: "Can you work with our existing automations?",
    answer:
      "Yes. We regularly take over workflows built by someone else — auditing them, fixing reliability issues, and extending them. We can also migrate you from Zapier or Make to n8n if per-task pricing is becoming the constraint.",
    topics: ["services", "process"],
  },
  {
    question: "How do we get started?",
    answer:
      "Book a call and we'll spend 30 minutes understanding your processes. If there's a fit, we scope the work and send a fixed price. No hourly billing and no open-ended engagements.",
    topics: ["contact", "process"],
  },
]);

export function faqsFor(topic: Faq["topics"][number]) {
  return faqs.filter((faq) => faq.topics.includes(topic));
}
