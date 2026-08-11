import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import PersonJsonLd from "@/components/PersonJsonLd";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en/",
    languages: { "pt-BR": "/", en: "/en/", "x-default": "/" },
  },
};

export default function HomePage() {
  return (
    <>
      <PersonJsonLd locale="en" />
      <HomeContent locale="en" />
    </>
  );
}
