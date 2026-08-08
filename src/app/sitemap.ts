import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { agents } from "@/content/agents";
import { publishedCaseStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/agents", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/work", priority: 0.8 },
    { path: "/company", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...agents.map((agent) => ({
      url: `${site.url}/agents/${agent.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...publishedCaseStudies.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
