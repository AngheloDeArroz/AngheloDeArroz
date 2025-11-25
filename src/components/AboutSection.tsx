'use client';

import React, { useEffect, useRef } from "react";
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
    const marqueeRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    
    // Marquee state refs
    const position = useRef(0);
    const direction = useRef(1); // 1: Left-to-Right (Scroll Up), -1: Right-to-Left (Scroll Down)
    
    // Speed state refs
    const normalSpeed = 1;      
    const scrollBoost = 3;      
    const speed = useRef(normalSpeed);
    
    // Scroll detection refs
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        
        // Function to set the correct initial position
        const initializePosition = () => {
            if (marqueeRef.current) {
                const width = marqueeRef.current.scrollWidth / 2; 
                // Initialize position to the start of the duplicate content (-width)
                position.current = -width;
            }
        };

        const animate = () => {
            if (marqueeRef.current) {
                // Total width of one set of icons
                const width = marqueeRef.current.scrollWidth / 2; 

                // 1. Update position based on speed and direction
                position.current += speed.current * direction.current;

                // 2. Loop Logic: Seamless Reset
                if (direction.current === 1) { // Moving Left-to-Right (Scroll Up)
                    // If the entire track has moved right past the start point (0), reset it
                    if (position.current > 0) {
                        position.current -= width; 
                    }
                } else { // Moving Right-to-Left (Scroll Down)
                    // If the track has moved left past the duplicate content (-width), reset it
                    if (position.current < -width) {
                        position.current += width; 
                    }
                }
                
                // 3. Apply transformation
                marqueeRef.current.style.transform = `translateX(${position.current}px)`;
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // 1. Determine Direction
            // Scroll Up (current < last) -> positive direction (LTR)
            // Scroll Down (current > last) -> negative direction (RTL)
            direction.current = currentScrollY < lastScrollY.current ? 1 : -1; 
            
            // 2. Apply Speed Boost
            speed.current = scrollBoost;

            // 3. Reset Speed after a short delay
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => { 
                speed.current = normalSpeed; 
            }, 150); 

            lastScrollY.current = currentScrollY;
        };
        
        // --- SETUP ---
        // Initialize position on mount/resize
        initializePosition();
        window.addEventListener("resize", initializePosition);
        
        // Start the animation loop
        requestRef.current = requestAnimationFrame(animate);
        
        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // --- CLEANUP ---
        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", initializePosition);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);


    return (
        <section id="about" className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Headline Column */}
                    <div className="md:w-7/12">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-gray-900">
                            Dedicated to excellence. Expertise across full-stack development
                            and network architecture.
                        </p>
                    </div>

                    {/* Description Column */}
                    <div className="md:w-4/12 flex items-start pt-2">
                        <p className="text-sm text-gray-700 leading-relaxed text-justify">
                            I am a student of Information Technology specializing in Network Technology.
                            I am a full-stack developer experienced in software, app, and web development.
                            My skills include networking, cloud computing, and cybersecurity fundamentals.
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
                                // Hover and Transition classes applied here
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