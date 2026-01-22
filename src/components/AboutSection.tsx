'use client';

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// --- Font Awesome Icons (Brands) ---
import {
    faReact, faNodeJs, faAws, faPython, faJava, faCss3Alt,
    faGit, faLinux, faJsSquare
} from '@fortawesome/free-brands-svg-icons';

// --- Font Awesome Icons (Solid) ---
import {
    faDatabase, faC, faNetworkWired, faCloud, faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

// ICON SET
const TECH_ICONS = [
    { alt: "React", icon: faReact, color: '#61DAFB' },
    { alt: "Node.js", icon: faNodeJs, color: '#339933' },
    { alt: "Python", icon: faPython, color: '#3776AB' },
    { alt: "Java", icon: faJava, color: '#007396' },
    { alt: "TypeScript", icon: faJsSquare, color: '#3178C6' },
    { alt: "Tailwind CSS", icon: faCss3Alt, color: '#06B6D4' },
    { alt: "C++", icon: faC, color: '#00599c' }, 
    { alt: "AWS", icon: faAws, color: '#FF9900' },
    { alt: "SQL", icon: faDatabase, color: '#4479A1' },
    { alt: "Cloud", icon: faCloud, color: '#1B95E0' },
    { alt: "Cisco Networking", icon: faNetworkWired, color: '#1b74b6' },
    { alt: "Linux", icon: faLinux, color: '#FCC624' },
    { alt: "Git", icon: faGit, color: '#F05032' },
    { alt: "Cybersecurity", icon: faShieldHalved, color: '#00BFFF' },
];

const AboutSection: React.FC = () => {
    // Refs for Marquee (Marquee logic remains unchanged)
    const marqueeRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const position = useRef(0);
    const direction = useRef(1);
    const normalSpeed = 1;
    const scrollBoost = 3;
    const speed = useRef(normalSpeed);
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // Refs and State for Text Animation
    const headlineRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const [isHeadlineVisible, setIsHeadlineVisible] = useState(false);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    
    // Flag to track animation status
    const hasAnimatedUp = useRef(false); 
    // Ref to track the current scroll direction
    const scrollDirection = useRef<'up' | 'down'>('down'); 

    // --- MARQUEE & SCROLL DIRECTION LOGIC ---
    useEffect(() => {
        const initializePosition = () => {
            if (marqueeRef.current) {
                const width = marqueeRef.current.scrollWidth / 2; 
                position.current = -width;
            }
        };

        const animate = () => {
            if (marqueeRef.current) {
                const width = marqueeRef.current.scrollWidth / 2; 
                position.current += speed.current * direction.current;

                if (direction.current === 1) { 
                    if (position.current > 0) {
                        position.current -= width; 
                    }
                } else {
                    if (position.current < -width) {
                        position.current += width; 
                    }
                }
                marqueeRef.current.style.transform = `translateX(${position.current}px)`;
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            direction.current = currentScrollY < lastScrollY.current ? 1 : -1; 
            scrollDirection.current = currentScrollY > lastScrollY.current ? 'down' : 'up';
            speed.current = scrollBoost;

            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => { 
                speed.current = normalSpeed; 
            }, 150); 

            lastScrollY.current = currentScrollY;
        };
        
        initializePosition();
        window.addEventListener("resize", initializePosition);
        requestRef.current = requestAnimationFrame(animate);
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", initializePosition);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    useEffect(() => {
        // Use a single observer instance
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const target = entry.target;
                    
                    if (entry.isIntersecting) {
                        // 1. ANIMATION/SKIP LOGIC (When entering the viewport)
                        
                        // Condition A: Scroll UP and NOT animated yet -> Animate
                        if (scrollDirection.current === 'up' && !hasAnimatedUp.current) {
                            if (target === headlineRef.current) {
                                setIsHeadlineVisible(true);
                            } else if (target === descriptionRef.current) {
                                // Staggered animation
                                setTimeout(() => setIsDescriptionVisible(true), 300);
                            }
                        } 
                        // Condition B: Scroll DOWN or already animated (flag is true) -> Skip animation, set visible instantly
                        else if (scrollDirection.current === 'down' || hasAnimatedUp.current) {
                            if (target === headlineRef.current) {
                                setIsHeadlineVisible(true);
                            } else if (target === descriptionRef.current) {
                                setIsDescriptionVisible(true);
                            }
                        }
                    
                    } else {

                        if (entry.boundingClientRect.top >= window.innerHeight) {
                            
                            // Reset state and flag
                            if (hasAnimatedUp.current) {
                                hasAnimatedUp.current = false;
                                setIsHeadlineVisible(false);
                                setIsDescriptionVisible(false);
                                
                                // Re-observe the elements
                                if (headlineRef.current) observer.observe(headlineRef.current);
                                if (descriptionRef.current) observer.observe(descriptionRef.current);
                            }
                        }
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.1, 
            }
        );

        if (isHeadlineVisible && isDescriptionVisible && !hasAnimatedUp.current) {
            hasAnimatedUp.current = true;
        }

        // Start observing both elements
        if (headlineRef.current) observer.observe(headlineRef.current);
        if (descriptionRef.current) observer.observe(descriptionRef.current);

        return () => {
            // Cleanup observers
            if (headlineRef.current) observer.unobserve(headlineRef.current);
            if (descriptionRef.current) observer.unobserve(descriptionRef.current);
        };
    }, [isHeadlineVisible, isDescriptionVisible]); // Depend on visibility states to lock the flag

    // Ensure the scroll direction update logic runs consistently
    // (This is already handled in the Marquee useEffect, but we keep it clean)

    return (
        <section id="about" className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Headline Column - Controlled by visibility state */}
                    <div 
                        ref={headlineRef} 
                        className={`md:w-7/12 transition-all duration-1000 ease-out 
                            ${isHeadlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
                        }
                    >
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-gray-900">
                            Dedicated to excellence. Expertise across full-stack development
                            and network architecture.
                        </p>
                    </div>

                    {/* Description Column - Controlled by visibility state */}
                    <div 
                        ref={descriptionRef} 
                        className={`md:w-4/12 flex items-start pt-2 transition-all duration-1000 ease-out 
                            ${isDescriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
                        }
                    >
                        <p className="text-sm text-gray-700 leading-relaxed text-justify">
                            I am a student of Information Technology specializing in Network Technology.
                            Pursuing to be a full-stack developer in software, app, and web development.
                            My skills include programming, software development, web and app development, cloud computing, and cybersecurity principles.
                        </p>
                    </div>

                </div>
            </div>

            {/* Infinite Carousel */}
            <div className="w-full mt-16 pt-10 border-t border-gray-200 overflow-hidden">

                <div className="max-w-5xl mx-auto px-8 lg:px-16">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest text-center mb-10">
                        Technologies & Expertise
                    </h3>
                </div>

                {/* Masked container */}
                <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent,_black_10%,_black_90%,transparent)]">

                    {/* Moving Track - JavaScript controls animation */}
                    <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
                        {[...TECH_ICONS, ...TECH_ICONS].map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center p-4 mx-10 transition duration-500 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-lg"
                                style={{ width: "100px", flexShrink: 0 }} 
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    size="3x"
                                    title={item.alt}
                                    style={{ color: item.color }}
                                />
                                <p className="text-xs text-gray-600 font-medium text-center mt-3 whitespace-nowrap">
                                    {item.alt}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default AboutSection;
