import type { Locale } from "@/content/types";
import { getHome } from "@/lib/dictionaries";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_URL } from "@/content/site";

/** JSON-LD schema.org/Person para os mecanismos de busca. */
export default function PersonJsonLd({ locale }: { locale: Locale }) {
  const hero = getHome(locale).hero;
  const sameAs = [GITHUB_URL];
  if (!LINKEDIN_URL.includes("SEU-USUARIO")) sameAs.push(LINKEDIN_URL);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: hero.name,
    jobTitle: hero.role,
    email: `mailto:${EMAIL}`,
    telephone: "+55 84 99418-2380",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Natal",
      addressRegion: "RN",
      addressCountry: "BR",
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
