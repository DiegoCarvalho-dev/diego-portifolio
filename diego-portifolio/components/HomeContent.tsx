import type { Locale } from "@/content/types";
import { getCaseStudies, getHome, getOtherProjects } from "@/lib/dictionaries";
import Reveal from "@/components/Reveal";
import Hero from "@/components/sections/Hero";
import HowIWork from "@/components/sections/HowIWork";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import OtherProjects from "@/components/sections/OtherProjects";
import StackSection from "@/components/sections/StackSection";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomeContent({ locale }: { locale: Locale }) {
  const home = getHome(locale);

  return (
    <main id="main">
      <Hero dict={home.hero} locale={locale} />
      <Reveal>
        <HowIWork dict={home.how} />
      </Reveal>
      <Reveal>
        <FeaturedProjects locale={locale} dict={home.featured} cases={getCaseStudies(locale)} />
      </Reveal>
      <Reveal>
        <OtherProjects locale={locale} dict={home.other} projects={getOtherProjects(locale)} />
      </Reveal>
      <Reveal>
        <StackSection dict={home.stack} />
      </Reveal>
      <Reveal>
        <Experience locale={locale} dict={home.experience} />
      </Reveal>
      <Reveal>
        <About locale={locale} dict={home.about} />
      </Reveal>
      <Reveal>
        <Contact locale={locale} dict={home.contact} />
      </Reveal>
    </main>
  );
}
