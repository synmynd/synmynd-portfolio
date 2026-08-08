export const site = {
  name: "SynMynd",
  url: "https://synmynd.com",
  title: "SynMynd — AI Automation & Agent Engineering",
  description:
    "We build the AI agents and automation systems that run your business. n8n orchestration, custom Python engines, and LLM-native products — shipped by an engineering team you don't have to hire.",
  tagline: "Hire us full-time. Skip the payroll.",
  email: "hello@synmynd.com",
  location: "Bahawalpur, Pakistan — working globally",
  /** Set once the Cal.com event is created; CTAs fall back to /contact. */
  calLink: "",
} as const;

export const nav = [
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services" },
  { label: "AI Agents", href: "/agents" },
  { label: "Client Stories", href: "/work" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Client Stories", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "AI Agent Ecosystems", href: "/services/ai-agents" },
      { label: "n8n Orchestration", href: "/services/n8n-orchestration" },
      { label: "Custom Python Engines", href: "/services/custom-python" },
      { label: "SaaS Engineering", href: "/services/saas-engineering" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "AI Agents", href: "/agents" },
      { label: "Pricing", href: "/pricing" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const socials = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
  { label: "Upwork", href: "#", icon: "briefcase" },
] as const;
