import Lightning from "./components/Lightning";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background global */}
      <Lightning
        hue={260}
        xOffset={0}
        speed={1}
        intensity={1}
        size={1}
      />

      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
