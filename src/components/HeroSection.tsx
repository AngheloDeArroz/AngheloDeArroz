"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Magnet from "../ui/magnet";
import DecryptedText from "../ui/decrypted";

const HeroSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Refs for desktop links used for the magnet effect and rendering
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Marquee/Animation Refs and Variables
  const requestRef = useRef<number>(0);
  const position = useRef(0);
  const direction = useRef(1);
  const normalSpeed = 2;
  const speed = useRef(normalSpeed);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // State Variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [closestMagnet, setClosestMagnet] = useState<string | null>(null);

  const desktopLinks = [
    { id: "desktop-about", label: "About", href: "#about", ref: aboutRef },
    { id: "desktop-projects", label: "Projects", href: "#projects", ref: projectsRef },
    { id: "desktop-certifications", label: "Certifications", href: "#certifications", ref: certificationsRef },
    { id: "desktop-contact", label: "Contact", href: "#contact", ref: contactRef },
  ];

  const toggleMenu = () => {
    // Removed setHasToggled(true) as hasToggled is unused
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targets = [
        { id: "desktop-about", ref: aboutRef },
        { id: "desktop-projects", ref: projectsRef },
        { id: "desktop-certifications", ref: certificationsRef },
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

  // Intersection Observer: Updates active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "projects", "certifications", "contact"];
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


  // Animation and Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      direction.current = currentScrollY > lastScrollY.current ? -1 : 1;
      speed.current = normalSpeed + 4;
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
    // Added a slight delay for initial scroll check
    requestAnimationFrame(() => setTimeout(handleScroll, 50));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Body overflow for mobile menu
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

            {/* Mobile Menu Button */}
            <div
              className="md:hidden text-white text-lg cursor-pointer"
              onClick={toggleMenu}
            >
              Menu
            </div>

            {/* Desktop Navigation Links */}
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
                      {/* The bullet indicator is correctly implemented with group-hover */}
                      <span className="absolute -bottom-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                    </Link>
                  </Magnet>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Background Image/Photo */}
      <img src="images/photo.png" alt="Background" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 h-[110vh] md:h-[114vh] w-auto object-cover" />

      {/* Right/Bottom Text Block */}
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

      {/* Left/Top (Desktop) -> Right/Bottom (Mobile) Text Block */}
      <div className="absolute z-30 flex flex-col items-end md:items-start gap-2 select-none pointer-events-none right-6 bottom-16 md:right-auto md:left-32 md:top-[38%] md:bottom-auto">
        <div className="flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl text-right md:text-left">
          <span>Developer | Programmer</span>
          <span>Pursuing excellence</span>
        </div>
      </div>

      {/* Marquee Text */}
      <div
        ref={marqueeRef}
        className="absolute bottom-72 md:bottom-32 flex whitespace-nowrap text-[35vw] md:text-[18vw] font-semibold leading-none tracking-tight z-30 text-white select-none cursor-default"
      >
        <span className="mr-20"> — Anghelo De Arroz</span>
        <span className="mr-20"> — Anghelo De Arroz</span>
      </div>
    </section>
  );
};

export default HeroSection;