import Hero from "@/components/sections/Hero";
import { home } from "@/content/en/home";

export default function HomePage() {
  return (
    <main id="main">
      <Hero dict={home.hero} locale="en" />
    </main>
  );
}
