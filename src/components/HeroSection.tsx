"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

  // Client-only setup
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky burger for mobile after scrolling a bit
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <section className="h-[115vh] w-full relative overflow-hidden bg-[#9a9a98] text-white flex flex-col justify-end">

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="absolute top-0 left-0 w-full z-50 bg-transparent"
      >


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-white text-2xl font-semibold">@ Anghelo</div>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-white hover:text-gray-200 transition">About</Link>
              <Link href="#projects" className="text-white hover:text-gray-200 transition">Projects</Link>
              <Link href="#contact" className="text-white hover:text-gray-200 transition">Contact</Link>
            </div>

            {/* Mobile "Menu" text */}
            <div
              className="md:hidden text-white font-medium cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)} // Add this line
            >
              Menu
            </div>

          </div>
        </div>
      </nav>

      {/* Sticky Burger Menu */}
      {mounted && showBurger && (
        <div
          className="fixed top-5 right-5 z-50 bg-black bg-opacity-70 p-4 rounded-full cursor-pointer flex flex-col items-center justify-center h-14 w-14"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-[#9a9a98] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#9a9a98]"></span>
        </div>
      )}

      {/* Side Menu */}
      {mounted && (
        <div
          className={`fixed top-0 right-0 h-full transform transition-transform duration-300 flex flex-col px-6 z-50
                      w-full md:w-1/3 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ backgroundColor: "#333333" }}
        >
          {/* Close Button */}
          <div
            className="absolute top-5 right-5 z-50 bg-black bg-opacity-70 p-4 rounded-full cursor-pointer flex items-center justify-center h-14 w-14"
            onClick={() => setMenuOpen(false)}
          >
            <span className="absolute block w-6 h-0.5 bg-[#9a9a98] rotate-45"></span>
            <span className="absolute block w-6 h-0.5 bg-[#9a9a98] -rotate-45"></span>
          </div>


          {/* Navigation label */}
          <div className="mt-32 mb-4">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Navigation</p>
            <hr className="border-gray-700 mt-1" />
          </div>

          {/* Menu links */}
          <div className="flex flex-col space-y-8">
            <Link
              href="#home"
              className="text-white text-5xl font-normal py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white text-5xl font-normal py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-white text-5xl font-normal py-2"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-white text-5xl font-normal py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Background image */}
      <img
        src="images/photo.png"
        alt="Background"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 h-[110vh] md:h-[114vh] w-auto object-cover"
      />


      {/* Marquee text */}
      <div
        ref={marqueeRef}
        className="absolute bottom-90 md:bottom-40 flex whitespace-nowrap text-[25vw] md:text-[15vw] font-normal leading-none tracking-tight z-40 text-white"

      >
        <span className="mr-20"> — ANGHELO — DEARROZ</span>
        <span className="mr-20"> — ANGHELO — DEARROZ</span>
      </div>
    </section>
  );
};

export default HeroSection;

