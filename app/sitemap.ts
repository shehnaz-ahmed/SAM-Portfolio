import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";
export default function sitemap():MetadataRoute.Sitemap { const base="https://example.com"; return [{url:base,lastModified:new Date()},...projects.map(p=>({url:`${base}/projects/${p.slug}`,lastModified:new Date()}))]; }
