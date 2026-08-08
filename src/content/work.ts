import { caseStudySchema, define, type CaseStudy } from "./schema";

/*
  Placeholder case studies. Every entry is `draft: true` until real project
  details and the verified review URL are supplied — drafts are excluded from
  the public index. Leave `review.url` unset to render the "Coming soon" chip.
*/
export const caseStudies: CaseStudy[] = define(caseStudySchema, "case study", [
  {
    slug: "ecommerce-order-automation",
    title: "Order-to-fulfilment automation for a US e-commerce operator",
    client: "US-based e-commerce brand, 12-person team",
    platform: "upwork",
    summary:
      "Connected the storefront, warehouse, and support desk so orders flowed end to end without anyone re-typing them.",
    description:
      "Orders were manually copied from Shopify into a warehouse system and again into the support tool, three times per order. We replaced the whole chain with a single n8n system including exception handling for out-of-stock and address-validation failures.",
    services: ["n8n Orchestration", "Custom Python Engines"],
    stack: ["n8n", "Shopify", "Python", "Postgres", "Slack"],
    results: [
      { metric: "14 hrs", label: "Saved per week" },
      { metric: "99.8%", label: "Order accuracy" },
      { metric: "3", label: "Systems unified" },
    ],
    review: {
      quote:
        "Placeholder — replace with the client's verbatim review text from Upwork.",
      author: "Verified Upwork client",
      rating: 5,
    },
    draft: true,
  },
  {
    slug: "recruiting-screening-agent",
    title: "CV screening agent for a recruiting agency",
    client: "European recruiting agency",
    platform: "upwork",
    summary:
      "An agent that reads every application, scores it against the role, and writes a shortlist summary for the recruiter.",
    description:
      "Recruiters were spending most of the working day reading CVs. We built a screening agent that parses each application, scores it against structured role criteria, flags the reasoning behind every score, and produces a ranked shortlist with notes.",
    services: ["AI Agent Ecosystems"],
    stack: ["n8n", "OpenAI", "Airtable", "Google Workspace"],
    results: [
      { metric: "85%", label: "Screening time removed" },
      { metric: "400+", label: "Applications per week" },
      { metric: "2 days", label: "Faster time to shortlist" },
    ],
    review: {
      quote:
        "Placeholder — replace with the client's verbatim review text from Upwork.",
      author: "Verified Upwork client",
      rating: 5,
    },
    draft: true,
  },
  {
    slug: "real-estate-lead-engine",
    title: "Lead capture and follow-up engine for a property team",
    client: "Real estate team, Middle East",
    platform: "fiverr",
    summary:
      "Every enquiry captured, enriched, and followed up automatically until a human took over.",
    description:
      "Leads came in across portals, WhatsApp, and the website with no single view. We unified intake, added enrichment, and built a follow-up sequence that ran until an agent claimed the lead.",
    services: ["n8n Orchestration", "AI Agent Ecosystems"],
    stack: ["n8n", "OpenAI", "HubSpot", "WhatsApp"],
    results: [
      { metric: "0", label: "Leads lost to slow follow-up" },
      { metric: "3x", label: "Contact rate" },
      { metric: "< 5 min", label: "First response" },
    ],
    review: {
      quote:
        "Placeholder — replace with the client's verbatim review text from Fiverr.",
      author: "Verified Fiverr client",
      rating: 5,
    },
    draft: true,
  },
  {
    slug: "saas-reporting-pipeline",
    title: "Automated reporting pipeline for a SaaS company",
    client: "B2B SaaS company, 40 employees",
    platform: "direct",
    summary:
      "Replaced a manual weekly reporting process with a pipeline that publishes itself every Monday morning.",
    description:
      "A analyst spent most of Monday assembling the same report from five data sources. We built a pipeline that extracts, reconciles, and publishes it automatically, with anomaly flagging so surprises get attention rather than being buried.",
    services: ["Custom Python Engines"],
    stack: ["Python", "Postgres", "n8n", "Slack"],
    results: [
      { metric: "7 hrs", label: "Saved every week" },
      { metric: "Monday 6am", label: "Report delivery" },
      { metric: "5", label: "Data sources reconciled" },
    ],
    review: {
      quote: "Placeholder — replace with the client's review text.",
      author: "Verified client",
      rating: 5,
    },
    draft: true,
  },
]);

/** Drafts stay out of the public index until real content lands. */
export const publishedCaseStudies = caseStudies.filter((study) => !study.draft);

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
