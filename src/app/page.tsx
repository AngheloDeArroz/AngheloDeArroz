"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"; 
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Magnet from "../ui/magnet"; 

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Burger menu states
  const [mounted, setMounted] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);

  // 🔥 ACTIVE SECTION STATE (BEING PASSED TO HEROSECTION)
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);
  const [closestMagnet, setClosestMagnet] = useState(null);

  const mobileNavItems = [
    { id: "home", label: "Home", href: "#home", delay: "0.12s" },
    { id: "about", label: "About", href: "#about", delay: "0.15s" },
    { id: "projects", label: "Projects", href: "#projects", delay: "0.18s" },
    { id: "contact", label: "Contact", href: "#contact", delay: "0.21s" },
  ];

  const toggleMenu = () => {
    setHasToggled(true);
    setMenuOpen(prev => !prev);
  };

  //  Bullet visibility logic (kept here, passed down)
  const shouldShowBullet = (sectionId) => {
    if (hoveredLink) return hoveredLink === sectionId;
    return activeSection === sectionId;
  };

  // ✔ Observer: detect which section is in view
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" } // middle of viewport
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  // -----------------------------------------------------------------

  // Pop animation
  useEffect(() => {
    if (showBurger || menuOpen) setHasPopped(true);
  }, [showBurger, menuOpen]);

  // Scroll handler
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

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Parallax
  const heroParallax = useSpring({
    y: scrollY * -0.2,
    config: { tension: 120, friction: 20 },
  });

  const aboutParallax = useSpring({
    y: scrollY * -0.1,
    config: { tension: 120, friction: 20 },
  });

  return (
    <main className="scroll-smooth">

      {/* 🟦 Sticky Burger Icon */}
      {mounted && (
        <div
          className={`fixed top-5 right-5 z-[100] ${
            (showBurger || menuOpen)
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
              <div
                className={`absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-500 ease-in-out z-0 
                ${menuOpen ? "h-full" : "h-0 group-hover:h-full"}`}
              />
              <span
                className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10"
                style={{ transform: menuOpen ? "rotate(45deg)" : "translateY(-3px)" }}
              />
              <span
                className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10"
                style={{ transform: menuOpen ? "rotate(-45deg)" : "translateY(3px)" }}
              />
            </div>
          </Magnet>
        </div>
      )}

      {/* 🟥 Side Menu */}
      {mounted && (
        <div
          className={`menuPanel fixed top-0 right-0 h-full flex flex-col px-6 z-50 w-full md:w-1/3 ${
            menuOpen
              ? "openWave"
              : hasToggled
              ? "closeWave"
              : "translate-x-[100%] pointer-events-none"
          }`}
          style={{ backgroundColor: "#333333" }}
        >
          <div className="mt-32 mb-4">
            <p
              className={`${menuOpen ? "textIn" : "textOut"} text-gray-400 text-sm uppercase tracking-wider`}
              style={{ animationDelay: "0.05s" }}
            >
              Navigation
            </p>
            <hr
              className={`${menuOpen ? "textIn" : "textOut"} border-gray-700 mt-1`}
              style={{ animationDelay: "0.08s" }}
            />
          </div>

          <div className="flex flex-col space-y-2 pl-6">
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
                <span
                  className={`mr-4 h-3 w-3 rounded-full bg-white transition-all duration-300 ${
                    shouldShowBullet(item.id)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                />
                <span className="text-white text-5xl font-normal py-2">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* HERO */}
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

      {/* ABOUT */}
      <animated.div
        id="about"
        style={aboutParallax}
        className="relative z-30"
      >
        <AboutSection />
      </animated.div>


      {/* CONTACT */}
      <div id="contact" className="h-[80vh] bg-black text-white flex justify-center items-center">
        Contact Section Placeholder
      </div>
    </main>
  );
}
