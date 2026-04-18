import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.domain;
  const pages = [
    "",
    "/services",
    "/portfolio",
    "/pricing",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [...pages, ...pages.map((path) => `${path}?lang=fr`)].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
