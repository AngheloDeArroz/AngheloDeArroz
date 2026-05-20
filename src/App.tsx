import { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import { CertificationsSection } from "./components/CertificationsSection";
import { Contact } from "./components/Contact";
import { PROJECTS, CERTIFICATIONS } from "./constants";
import { Intro } from "./components/Intro";
import { ProjectDetail } from "./pages/ProjectDetail";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Project } from "./types";

const Home = ({ isInitialized }: { isInitialized: boolean }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: ReactMouseEvent) => {
    // Raw viewport coords — unaffected by scroll or parent transforms
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{
          opacity: isInitialized ? 1 : 0,
          scale: isInitialized ? 1 : 0.98,
          filter: isInitialized ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <main className="mx-auto max-w-[850px] lg:max-w-[950px] px-[clamp(1.5rem,5vw,4rem)] pt-24 lg:pt-12 pb-16">
          <Hero />

          <About />

          <Section id="projects" delay={0.2}>
            <h2 className="text-2xl text-fg mb-8 border-b border-border pb-2">
              Selected Work
            </h2>

            {/* Mouse tracking wrapper for the preview */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="flex flex-col"
            >
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={0}
                  isInitialized={isInitialized}
                  onHover={() => setHoveredProject(project)}
                  onLeave={() => setHoveredProject(null)}
                />
              ))}
            </div>
          </Section>

          <Section id="certifications" delay={0.3}>
            <h2 className="text-2xl text-fg mb-8 border-b border-border pb-2">
              Certifications
            </h2>
            <CertificationsSection certifications={CERTIFICATIONS} />
          </Section>

          <Section id="contact" delay={0.4}>
            <h2 className="text-2xl text-fg mb-6 border-b border-border pb-2">
              Contact
            </h2>
            <Contact />
          </Section>

          <footer className="mt-8 pt-8 border-t border-border w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-fg-muted font-mono">Inquiries</p>
              <a href="mailto:angelodearroz@gmail.com" className="text-[1rem] text-fg hover:text-accent transition-colors duration-300">
                angelodearroz@gmail.com
              </a>
              <div className="h-[1px] w-full bg-accent opacity-20"></div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1">
              <p className="text-[11px] text-fg font-medium">Anghelo Dearroz</p>
              <p className="text-[10px] text-fg-muted font-mono uppercase tracking-[0.15em]">© 2026 — Batangas City, PH</p>
            </div>
          </footer>
        </main>
      </motion.div>

      {/* Portal: renders outside the filtered motion.div so position:fixed works correctly */}
      {createPortal(
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              className="pointer-events-none fixed z-[9999] w-[280px] aspect-[16/10] overflow-hidden border border-border bg-bg shadow-2xl rounded-sm"
              style={{ left: 0, top: 0 }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 24,
                y: mousePos.y - 110,
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                x: { type: "spring", stiffness: 200, damping: 20, mass: 0.08 },
                y: { type: "spring", stiffness: 200, damping: 20, mass: 0.08 },
              }}
            >
              <motion.img
                key={hoveredProject.id}
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isInitialized && location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isInitialized, location.pathname]);

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-bg">
      <AnimatePresence mode="wait">
        {!isInitialized && location.pathname === "/" && (
          <Intro key="intro" onComplete={() => setIsInitialized(true)} />
        )}
      </AnimatePresence>

      {(isInitialized || location.pathname !== "/") && <Navigation />}

      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home isInitialized={isInitialized} />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"
      />
    </div>
  );
}
