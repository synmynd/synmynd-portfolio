import { createElement } from "react";
import {
  Bot,
  Braces,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Github,
  Layers,
  Linkedin,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/** Content stores icons as string keys; this is the only place they resolve. */
const icons = {
  bot: Bot,
  braces: Braces,
  briefcase: Briefcase,
  code: Code2,
  cpu: Cpu,
  database: Database,
  github: Github,
  layers: Layers,
  linkedin: Linkedin,
  sparkles: Sparkles,
  workflow: Workflow,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

function getIcon(name: string): LucideIcon {
  return icons[name as IconName] ?? Sparkles;
}

/**
 * Renders a content-declared icon. Resolving through createElement keeps the
 * component identity stable across renders, which a locally-assigned
 * `const Icon = ...` would not.
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  return createElement(getIcon(name), props);
}
