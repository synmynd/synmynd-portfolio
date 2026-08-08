import { z } from "zod";

/*
  Content is authored as typed modules and validated at import time, so a bad
  edit fails the build rather than shipping a broken page. Icons are stored as
  string keys and resolved to Lucide components at render (see lib/icons.ts) to
  keep content free of React imports.
*/

const slug = z.string().regex(/^[a-z0-9-]+$/, "slug must be kebab-case");

export const platformSchema = z.object({
  name: z.string(),
  category: z.enum(["automation", "ai", "comms", "data", "commerce"]),
});

export const serviceSchema = z.object({
  slug,
  icon: z.string(),
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  outcomes: z.array(z.string()).min(2),
  deliverables: z.array(z.string()).min(2),
  stack: z.array(z.string()).min(1),
  featured: z.boolean().default(false),
});

export const pricingPlanSchema = z.object({
  slug,
  name: z.string(),
  price: z.number(),
  priceSuffix: z.string().optional(),
  pricePrefix: z.string().optional(),
  type: z.enum(["project", "retainer"]),
  summary: z.string(),
  features: z.array(z.string()).min(2),
  bestFor: z.string(),
  popular: z.boolean().default(false),
  highlight: z.string().optional(),
});

export const teamMemberSchema = z.object({
  slug,
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  links: z
    .object({ linkedin: z.string().optional(), github: z.string().optional() })
    .default({}),
});

export const agentSchema = z.object({
  slug,
  title: z.string(),
  summary: z.string(),
  outcome: z.string(),
  platforms: z.array(z.string()).min(1),
  useCase: z.enum([
    "sales",
    "support",
    "operations",
    "marketing",
    "data",
    "finance",
  ]),
  thumbnail: z.string().optional(),
  videoUrl: z.string().optional(),
  problem: z.string(),
  build: z.array(z.string()).min(2),
  results: z.array(z.object({ metric: z.string(), label: z.string() })).min(1),
  flow: z
    .array(z.object({ id: z.string(), label: z.string(), kind: z.enum(["trigger", "logic", "ai", "action"]) }))
    .min(2),
});

export const caseStudySchema = z.object({
  slug,
  title: z.string(),
  client: z.string(),
  platform: z.enum(["upwork", "fiverr", "direct"]),
  summary: z.string(),
  description: z.string(),
  services: z.array(z.string()).min(1),
  stack: z.array(z.string()).min(1),
  results: z.array(z.object({ metric: z.string(), label: z.string() })).min(1),
  review: z.object({
    quote: z.string(),
    author: z.string(),
    rating: z.number().min(1).max(5),
    url: z.string().optional(),
  }),
  draft: z.boolean().default(false),
});

export const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
  topics: z.array(z.enum(["pricing", "services", "process", "contact"])).min(1),
});

export type Platform = z.infer<typeof platformSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type PricingPlan = z.infer<typeof pricingPlanSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Agent = z.infer<typeof agentSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type Faq = z.infer<typeof faqSchema>;

/** Validates a content collection and reports the offending entry by index. */
export function define<T extends z.ZodTypeAny>(
  schema: T,
  label: string,
  items: unknown[],
): z.infer<T>[] {
  return items.map((item, i) => {
    const parsed = schema.safeParse(item);
    if (!parsed.success) {
      throw new Error(
        `Invalid ${label} entry at index ${i}: ${parsed.error.message}`,
      );
    }
    return parsed.data;
  });
}
