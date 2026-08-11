import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { CASE_SLUGS, casePath } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      alternates: { languages: { "pt-BR": `${SITE_URL}/`, en: `${SITE_URL}/en/` } },
    },
    {
      url: `${SITE_URL}/en/`,
      lastModified,
      alternates: { languages: { "pt-BR": `${SITE_URL}/`, en: `${SITE_URL}/en/` } },
    },
  ];

  const cases: MetadataRoute.Sitemap = CASE_SLUGS.flatMap((pair) => {
    const languages = {
      "pt-BR": `${SITE_URL}${casePath("pt", pair.pt)}`,
      en: `${SITE_URL}${casePath("en", pair.en)}`,
    };
    return [
      { url: languages["pt-BR"], lastModified, alternates: { languages } },
      { url: languages.en, lastModified, alternates: { languages } },
    ];
  });

  return [...homes, ...cases];
}
