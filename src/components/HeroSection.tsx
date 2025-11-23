"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Magnet from "../ui/magnet";

const HeroSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
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

  // Track if the menu has been interacted with (for sidebar)
  const [hasToggled, setHasToggled] = useState(false);

  // NEW: Track if the burger has popped in at least once (to prevent depop on load)
  const [hasPopped, setHasPopped] = useState(false);

  // Centralized toggle function
  const toggleMenu = () => {
    setHasToggled(true);
    setMenuOpen((prev) => !prev);
  };

  // NEW: Update hasPopped when burger shows
  useEffect(() => {
    if (showBurger || menuOpen) {
      setHasPopped(true);
    }
  }, [showBurger, menuOpen]);

  // Handle marquee + scroll logic
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
      scrollTimeout.current = setTimeout(() => {
        speed.current = normalSpeed;
      }, 150);

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

    requestAnimationFrame(() => {
      setTimeout(() => {
        handleScroll();
      }, 50);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section className="h-[115vh] w-full relative overflow-hidden bg-[#9a9a98] text-white flex flex-col justify-end">
      {/* Navbar */}
      <nav ref={navbarRef} className="absolute top-0 left-0 w-full z-40 bg-transparent mt-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-2">
          <div className="flex justify-between h-16 items-center">
            <div className="text-white text-2xl font-semibold">@ Anghelo</div>

            {/* Mobile menu text */}
            <div
              className="md:hidden text-white text-lg cursor-pointer"
              onClick={toggleMenu}
            >
              Menu
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-8">
              <Magnet padding={50} magnetStrength={8}>
                <Link href="#about" className="text-white hover:text-gray-200 transition">About</Link>
              </Magnet>
              <Magnet padding={50} magnetStrength={8}>
                <Link href="#projects" className="text-white hover:text-gray-200 transition">Projects</Link>
              </Magnet>
              <Magnet padding={50} magnetStrength={8}>
                <Link href="#contact" className="text-white hover:text-gray-200 transition">Contact</Link>
              </Magnet>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Sticky Burger (Updated logic to allow Exit Animation) */}
      {mounted && (
        <div className={`fixed top-5 right-5 z-50 ${(showBurger || menuOpen)
            ? "animate-pop pointer-events-auto"
            : hasPopped
              ? "animate-depop pointer-events-none"
              : "opacity-0 pointer-events-none" // Hidden on initial load
          }`}>
          <Magnet padding={50} magnetStrength={10}>
            <div
              className="relative w-14 h-14 cursor-pointer flex justify-center items-center rounded-full overflow-hidden group bg-[#333333]"
              onClick={toggleMenu}
            >
              {/* Blue Liquid Fill Layer */}
              <div
                className={`absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-500 ease-in-out z-0 
                ${menuOpen ? "h-full" : "h-0 group-hover:h-full"}`}
              />

              {/* Top line */}
              <span
                className="absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10"
                style={{
                  transform: menuOpen ? "rotate(45deg)" : "translateY(-3px)",
                }}
              ></span>

              {/* Bottom line */}
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
            <p
              className={`${menuOpen ? "textIn" : "textOut"
                } text-gray-400 text-sm uppercase tracking-wider`}
              style={{ animationDelay: "0.05s" }}
            >
              Navigation
            </p>
            <hr
              className={`${menuOpen ? "textIn" : "textOut"} border-gray-700 mt-1`}
              style={{ animationDelay: "0.08s" }}
            />
          </div>

          <div className="flex flex-col space-y-8 pl-6">
            <Link
              href="#home"
              className={`${menuOpen ? "textIn" : "textOut"} text-white text-5xl font-normal py-2`}
              style={{ animationDelay: "0.12s" }}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`${menuOpen ? "textIn" : "textOut"} text-white text-5xl font-normal py-2`}
              style={{ animationDelay: "0.15s" }}
            >
              About
            </Link>

            <Link
              href="#projects"
              className={`${menuOpen ? "textIn" : "textOut"} text-white text-5xl font-normal py-2`}
              style={{ animationDelay: "0.18s" }}
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className={`${menuOpen ? "textIn" : "textOut"} text-white text-5xl font-normal py-2`}
              style={{ animationDelay: "0.21s" }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Background Image */}
      <img
        src="images/photo.png"
        alt="Background"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 h-[110vh] md:h-[114vh] w-auto object-cover"
      />

      {/* Text Block */}
      <div
        className="absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 bottom-44 md:left-auto md:bottom-auto md:right-32 md:top-[30%]"
      >
        {/* Arrow Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white mb-2 w-6 h-6 md:w-8 md:h-8"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>

        {/* Text */}
        <div className="flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl">
          <span>Information Technology</span>
          <span>Tech Enthusiast</span>
        </div>
      </div>

      {/* Left Text Block */}
      <div
        className="absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 top-[30%] md:left-32 md:top-[38%]"
      >
        <div className="flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl">
          <span>Creative Developer</span>
          <span>UX / UI Passionate</span>
        </div>
      </div>
      {/* Marquee */}
      <div
        ref={marqueeRef}
        className="absolute bottom-90 md:bottom-40 flex whitespace-nowrap text-[25vw] md:text-[15vw] font-normal leading-none tracking-tight z-30 text-white"
      >
        <span className="mr-20"> — Anghelo Dearroz</span>
        <span className="mr-20"> — Anghelo Dearroz</span>
      </div>
    </section>
  );
};

export default HeroSection;