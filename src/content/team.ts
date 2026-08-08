import { define, teamMemberSchema, type TeamMember } from "./schema";

export const team: TeamMember[] = define(teamMemberSchema, "team member", [
  {
    slug: "anas-bin-saeed",
    name: "Anas Bin Saeed",
    role: "Founder & CEO",
    bio: "Leads strategy and architecture at SynMynd. Works directly with clients to turn manual processes into systems that run themselves.",
    links: {},
  },
  {
    slug: "shaaf-fareed",
    name: "Shaaf Fareed",
    role: "Co-Founder",
    bio: "Runs delivery and client operations, making sure every engagement ships on scope and stays supported after launch.",
    links: {},
  },
  {
    slug: "saad-kiyani",
    name: "Saad Kiyani",
    role: "AI Automation Engineer",
    bio: "Builds n8n orchestration and LLM agent workflows, with a focus on error handling and reliability in production.",
    links: {},
  },
  {
    slug: "sadia-abdullah",
    name: "Sadia Abdullah",
    role: "AI Automation Engineer",
    bio: "Specialises in data pipelines and integrations, connecting systems that were never designed to talk to each other.",
    links: {},
  },
  {
    slug: "tayyab-arshad",
    name: "Tayyab Arshad",
    role: "AI Automation Engineer",
    bio: "Works across Python services and custom engines, building the pieces that off-the-shelf tools can't handle.",
    links: {},
  },
  {
    slug: "areeba-abdullah",
    name: "Areeba Abdullah",
    role: "AI Automation Engineer",
    bio: "Focuses on agent design and prompt engineering, tuning systems until they hold up against real-world input.",
    links: {},
  },
]);
