"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Magnet from "../ui/magnet";
import DecryptedText from "../ui/decrypted";

const HeroSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const requestRef = useRef<number>(0);
  const position = useRef(0);
  const direction = useRef(1);
  const normalSpeed = 1.5;
  const speed = useRef(normalSpeed);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [mounted, setMounted] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);

  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const [closestMagnet, setClosestMagnet] = useState<string | null>(null);

  const desktopLinks = [
    { id: "desktop-about", label: "About", href: "#about", ref: aboutRef },
    { id: "desktop-projects", label: "Projects", href: "#projects", ref: projectsRef },
    { id: "desktop-contact", label: "Contact", href: "#contact", ref: contactRef },
  ];

  const mobileNavItems = [
    { id: "home", label: "Home", href: "#home", delay: "0.12s" },
    { id: "about", label: "About", href: "#about", delay: "0.15s" },
    { id: "projects", label: "Projects", href: "#projects", delay: "0.18s" },
    { id: "contact", label: "Contact", href: "#contact", delay: "0.21s" },
  ];

  const toggleMenu = () => {
    setHasToggled(true);
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (showBurger || menuOpen) setHasPopped(true);
  }, [showBurger, menuOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targets = [
        { id: "desktop-about", ref: aboutRef },
        { id: "desktop-projects", ref: projectsRef },
        { id: "desktop-contact", ref: contactRef },
      ];

      let closestId: string | null = null;
      let minDistance = Infinity;
      const activationThreshold = 100;

      targets.forEach((target) => {
        if (target.ref.current) {
          const rect = target.ref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dist = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) +
            Math.pow(e.clientY - centerY, 2)
          );

          if (dist < minDistance) {
            minDistance = dist;
            closestId = target.id;
          }
        }
      });

      if (minDistance < activationThreshold) {
        setClosestMagnet(closestId);
      } else {
        setClosestMagnet(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const shouldShowBullet = (sectionId: string) => {
    if (hoveredLink) return hoveredLink === sectionId;
    return activeSection === sectionId;
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth < 768) {
        setShowBurger(currentScrollY > 50);
      } else if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setShowBurger(rect.bottom <= 0);
      }
      direction.current = currentScrollY > lastScrollY.current ? -1 : 1;
      speed.current = normalSpeed + 1.5;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => { speed.current = normalSpeed; }, 150);
      lastScrollY.current = currentScrollY;
    };

    const animate = () => {
      if (marqueeRef.current) {
        const width = marqueeRef.current.scrollWidth / 2;
        position.current += speed.current * direction.current;
        if (position.current < -width) position.current += width;
        if (position.current > 0) position.current -= width;
        marqueeRef.current.style.transform = `translateX(${position.current}px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    requestAnimationFrame(() => setTimeout(handleScroll, 50));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <section id="home" className="h-[115vh] w-full relative overflow-hidden bg-[#9a9a98] text-white flex flex-col justify-end">
      {/* Navbar */}
      <nav ref={navbarRef} className="absolute top-0 left-0 w-full z-40 bg-transparent mt-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-2">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo with Magnet + Decrypted Text */}
            <div className="text-white text-lg font-semibold relative z-10">
              <Magnet padding={30} magnetStrength={7}>
                <div className="cursor-pointer px-2 py-1">
                  <DecryptedText
                    text="© Code by Anghelo"
                    animateOn="hover"
                    speed={80}
                    maxIterations={10}
                    className="text-white"
                    encryptedClassName="text-gray-300"
                    parentClassName=""
                    sequential={true}
                  />
                </div>
              </Magnet>
            </div>

            <div
              className="md:hidden text-white text-lg cursor-pointer"
              onClick={toggleMenu}
            >
              Menu
            </div>

            <div className="hidden md:flex space-x-4">
              {desktopLinks.map((link) => (
                <div 
                  key={link.id} 
                  ref={link.ref} 
                  className="relative z-10 p-2"
                >
                  <Magnet
                    padding={50}
                    magnetStrength={4} 
                    disabled={closestMagnet !== link.id}
                  >
                    <Link 
                      href={link.href} 
                      className="relative flex flex-col items-center group cursor-pointer"
                    >
                      <span className="text-white transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="absolute -bottom-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                    </Link>
                  </Magnet>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Burger - */}
      {mounted && (
        <div className={`fixed top-5 right-5 z-50 ${(showBurger || menuOpen)
            ? "animate-pop pointer-events-auto"
            : hasPopped
              ? "animate-depop pointer-events-none"
              : "opacity-0 pointer-events-none"
          } md:top-8 md:right-8`}> 
          <Magnet padding={50} magnetStrength={10}>
            <div
              //  size 
              className="relative w-14 h-14 md:w-20 md:h-20 cursor-pointer flex justify-center items-center rounded-full overflow-hidden group bg-[#333333]"
              onClick={toggleMenu}
            >
              <div
                className={`absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-500 ease-in-out z-0 
                ${menuOpen ? "h-full" : "h-0 group-hover:h-full"}`}
              />
              <span
                className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10"
                style={{
                  transform: menuOpen ? "rotate(45deg)" : "translateY(-3px)",
                }}
              ></span>
              <span
                className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10"
                style={{
                  transform: menuOpen ? "rotate(-45deg)" : "translateY(3px)",
                }}
              ></span>
            </div>
          </Magnet>
        </div>
      )}

      {/* Side Menu */}
      {mounted && (
        <div
          className={`menuPanel fixed top-0 right-0 h-full flex flex-col px-6 z-40 w-full md:w-1/3 ${menuOpen
              ? "openWave"
              : hasToggled
                ? "closeWave"
                : "translate-x-[100%] pointer-events-none"
            }`}
          style={{ backgroundColor: "#333333" }}
        >
          <div className="mt-32 mb-4">
            <p className={`${menuOpen ? "textIn" : "textOut"} text-gray-400 text-sm uppercase tracking-wider`} style={{ animationDelay: "0.05s" }}>
              Navigation
            </p>
            <hr className={`${menuOpen ? "textIn" : "textOut"} border-gray-700 mt-1`} style={{ animationDelay: "0.08s" }} />
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
                onClick={() => setMenuOpen(false)}
              >
                <span className={`mr-4 h-3 w-3 rounded-full bg-white transition-all duration-300 ease-in-out ${shouldShowBullet(item.id) ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                <span className="text-white text-5xl font-normal py-2">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <img src="images/photo.png" alt="Background" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 h-[110vh] md:h-[114vh] w-auto object-cover" />

      <div className="absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 bottom-44 md:left-auto md:bottom-auto md:right-32 md:top-[30%]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-2 w-6 h-6 md:w-8 md:h-8">
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <div className="flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl">
          <span>Information Technology</span>
          <span>Tech Enthusiast</span>
        </div>
      </div>

      <div className="absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 top-[30%] md:left-32 md:top-[38%]">
        <div className="flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl">
          <span>Creative Developer</span>
          <span>UX / UI Passionate</span>
        </div>
      </div>

      <div 
        ref={marqueeRef} 
        className="absolute bottom-90 md:bottom-40 flex whitespace-nowrap text-[25vw] md:text-[15vw] font-normal leading-none tracking-tight z-30 text-white select-none cursor-default"
      >
        <span className="mr-20"> — Anghelo Dearroz</span>
        <span className="mr-20"> — Anghelo Dearroz</span>
      </div>
    </section>
  );
};

export default HeroSection;