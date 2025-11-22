// src/app/page.jsx
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
