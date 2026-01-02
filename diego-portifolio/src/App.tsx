import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default App;
