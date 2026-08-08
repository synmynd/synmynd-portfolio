import { define, platformSchema, type Platform } from "./schema";

/** Named explicitly because these are the terms buyers actually search for. */
export const platforms: Platform[] = define(platformSchema, "platform", [
  { name: "n8n", category: "automation" },
  { name: "Zapier", category: "automation" },
  { name: "Make", category: "automation" },
  { name: "OpenAI", category: "ai" },
  { name: "Anthropic", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "Slack", category: "comms" },
  { name: "HubSpot", category: "comms" },
  { name: "Notion", category: "data" },
  { name: "Airtable", category: "data" },
  { name: "Supabase", category: "data" },
  { name: "Google Workspace", category: "data" },
  { name: "Stripe", category: "commerce" },
  { name: "Shopify", category: "commerce" },
]);
