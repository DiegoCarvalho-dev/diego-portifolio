import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </div>
  );
}

export default App;
