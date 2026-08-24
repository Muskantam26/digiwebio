import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { PROJECTS_DATA, BLOG_POSTS_DATA } from "@/data/initialData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/team",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = PROJECTS_DATA.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS_DATA.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
