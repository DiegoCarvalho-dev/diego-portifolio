import { useEffect, useState } from "react";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";

function App() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setShowWhatsapp(true);
      }
    };

    const handleScroll = () => {
      if (!isMobile && window.scrollY > 50) {
        setShowWhatsapp(true);
      } else if (!isMobile && window.scrollY <= 50) {
        setShowWhatsapp(false);
      }
    };

    checkIfMobile();
    
    if (!isMobile) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />

      <a
        href="https://wa.me/5584994182380"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo no WhatsApp"
        className={`
          fixed z-50
          w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16
          bottom-4 right-4 xs:bottom-5 xs:right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8
          rounded-full
          bg-green-500 hover:bg-green-600
          flex items-center justify-center
          shadow-lg
          transition-all duration-500 ease-out
          float-soft
          ${isMobile || showWhatsapp
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7"
        >
          <path d="M19.11 17.89c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16 3C9.38 3 4 8.38 4 15c0 2.65.87 5.1 2.34 7.07L4 29l7.1-2.29A11.9 11.9 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 21.82c-2.05 0-3.96-.6-5.58-1.63l-.4-.25-4.21 1.36 1.37-4.1-.26-.42A9.83 9.83 0 0 1 6.18 15c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82z" />
        </svg>
      </a>
    </div>
  );
}

export default App;