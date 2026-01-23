"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CertificationsSection from "../components/CertificationsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Magnet from "../ui/magnet";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [closestMagnet, setClosestMagnet] = useState<string | null>(null);

  const mobileNavItems = [
    { id: "home", label: "Home", href: "#home", delay: "0.12s" },
    { id: "about", label: "About", href: "#about", delay: "0.15s" },
    { id: "projects", label: "Projects", href: "#projects", delay: "0.18s" },
    { id: "certifications", label: "Certifications", href: "#certifications", delay: "0.21s" },
    { id: "contact", label: "Contact", href: "#contact", delay: "0.24s" },
  ];

  /* Logic for menu interaction */
  const toggleMenu = () => {
    setHasToggled(true);
    setMenuOpen(prev => !prev);
  };

  /* Logic for active navigation state */
  const shouldShowBullet = (sectionId: string) => {
    if (hoveredLink) return hoveredLink === sectionId;
    return activeSection === sectionId;
  };

  /* Logic for section detection during scroll */
  useEffect(() => {
    const sections = ["home", "about", "projects", "certifications", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Logic for scroll tracking */
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const current = window.scrollY;
      setShowBurger(current > 50);
      setScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Logic for persistent burger appearance */
  useEffect(() => {
    if (showBurger || menuOpen) setHasPopped(true);
  }, [showBurger, menuOpen]);

  /* Logic for body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Motion configurations */
  const heroParallax = useSpring({
    y: scrollY * -0.2,
    config: { tension: 120, friction: 20 },
  });

  const aboutParallax = useSpring({
    y: scrollY * -0.1,
    config: { tension: 120, friction: 20 },
  });

  const bottomContentParallax = useSpring({
    y: scrollY * -0.1,
    config: { tension: 120, friction: 20 },
  });

  return (
    <main className="scroll-smooth bg-neutral-900 overflow-x-hidden no-scrollbar">

      {/* Floating Menu Toggle */}
      {mounted && (
        <div
          className={`fixed top-5 right-5 z-[110] ${(showBurger || menuOpen)
            ? "animate-pop pointer-events-auto"
            : hasPopped
              ? "animate-depop pointer-events-none"
              : "opacity-0 pointer-events-none"
            } md:top-8 md:right-8`}
        >
          <Magnet padding={50} magnetStrength={10}>
            <div
              className="relative w-14 h-14 md:w-20 md:h-20 cursor-pointer flex justify-center items-center rounded-full overflow-hidden group bg-[#333333]"
              onClick={toggleMenu}
            >
              <div className={`absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-500 ease-in-out z-0 ${menuOpen ? "h-full" : "h-0 group-hover:h-full"}`} />
              <span className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10" style={{ transform: menuOpen ? "rotate(45deg)" : "translateY(-3px)" }} />
              <span className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10" style={{ transform: menuOpen ? "rotate(-45deg)" : "translateY(3px)" }} />
            </div>
          </Magnet>
        </div>
      )}

      {/* Slide-out Menu Panel */}
      {mounted && (
        <div
          className={`menuPanel fixed top-0 right-0 h-full flex flex-col px-10 z-[100] w-full md:w-[400px] ${menuOpen
            ? "openWave"
            : hasToggled
              ? "closeWave"
              : "translate-x-[100%] pointer-events-none"
            }`}
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {/* Header Section */}
          <div className="mt-32 mb-4">
            <p className={`${menuOpen ? "textIn" : "textOut"} text-gray-500 text-xs uppercase tracking-[0.2em] font-bold`} style={{ animationDelay: "0.05s" }}>Navigation</p>
            <hr className={`${menuOpen ? "textIn" : "textOut"} border-gray-800 mt-2`} style={{ animationDelay: "0.08s" }} />
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-1 pl-4">
            {mobileNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group flex items-center ${menuOpen ? "textIn" : "textOut"}`}
                style={{ animationDelay: item.delay }}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={toggleMenu}
              >
                <span className={`mr-4 h-2 w-2 rounded-full bg-blue-500 transition-all duration-300 ${shouldShowBullet(item.id) ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                <span className="text-white text-3xl md:text-4xl font-light py-3 group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Sectioning Divider */}
          <div className="mt-8 mb-4">
            <hr className={`${menuOpen ? "textIn" : "textOut"} border-gray-800`} style={{ animationDelay: "0.27s" }} />
          </div>

          {/* Social Footer Section */}
          <div className="mt-auto mb-16 pl-4">
            <p className={`${menuOpen ? "textIn" : "textOut"} text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-6`} style={{ animationDelay: "0.3s" }}>Socials</p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/anghelo-de-arroz-bb17a537b"
                target="_blank"
                rel="noopener noreferrer"
                className={`${menuOpen ? "textIn" : "textOut"} text-gray-400 hover:text-white transition-colors text-xl`}
                style={{ animationDelay: "0.33s" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/AngheloDeArroz"
                target="_blank"
                rel="noopener noreferrer"
                className={`${menuOpen ? "textIn" : "textOut"} text-gray-400 hover:text-white transition-colors text-xl`}
                style={{ animationDelay: "0.36s" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anghelodechavezdearroz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${menuOpen ? "textIn" : "textOut"} text-gray-400 hover:text-white transition-colors text-xl`}
                style={{ animationDelay: "0.39s" }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Section Content Area */}
      <div className="relative z-10 overflow-hidden h-[115vh] w-full" id="home">
        <HeroSection
          heroStyle={heroParallax}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          mobileNavItems={mobileNavItems}
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          shouldShowBullet={shouldShowBullet}
          activeSection={activeSection}
          closestMagnet={closestMagnet}
          setClosestMagnet={setClosestMagnet}
        />
      </div>

      <div className="relative z-20 bg-white">
        <animated.div id="about" style={aboutParallax} className="relative z-20">
          <AboutSection />
        </animated.div>
      </div>

      <animated.div
        style={{
          ...bottomContentParallax,
          marginBottom: `calc(${scrollY * -0.1}px)`
        }}
        className="relative z-30 bg-white"
      >
        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="certifications">
          <CertificationsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <div className="bg-neutral-900">
          <Footer />
        </div>
      </animated.div>

    </main>
  );
}