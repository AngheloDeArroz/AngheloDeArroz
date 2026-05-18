import { useState, useEffect } from "react";
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

const Home = ({ isInitialized }: { isInitialized: boolean }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ 
        opacity: isInitialized ? 1 : 0, 
        scale: isInitialized ? 1 : 0.98,
        filter: isInitialized ? "blur(0px)" : "blur(10px)"
      }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <main className="mx-auto max-w-[850px] lg:max-w-[950px] px-[clamp(1.5rem,5vw,4rem)] pt-[15vh] lg:pt-[10vh] pb-16">
        <Hero />

        <About />

        <Section id="projects" delay={0.2}>
          <h2 className="text-2xl text-fg mb-8 border-b border-border pb-2">
            Selected Work
          </h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
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
