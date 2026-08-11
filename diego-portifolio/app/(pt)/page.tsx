import Hero from "@/components/sections/Hero";
import { home } from "@/content/pt/home";

export default function HomePage() {
  return (
    <main id="main">
      <Hero dict={home.hero} locale="pt" />
    </main>
  );
}
