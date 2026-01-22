"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "RRJ Watch: Mobile",
        description: "A smart Flutter-based application for real-time monitoring and automation of fish aquariums. Allows remote feeding control and pH balancing via mobile interface.",
        tags: ["Flutter", "Firebase", "Dart", "IoT"],
        color: "bg-blue-600",
        height: "h-96",
        image: "/images/projects/rrj-flutter.png",
        link: "https://github.com/AngheloDeArroz/RRJ_Watch"
    },
    {
        id: 2,
        title: "RRJ Watch: Web",
        description: "The digital management interface built with Next.js. Features a 'Live Dashboard' with negligible latency, propagating sensor data instantly from Firestore using React Query.",
        tags: ["Next.js", "React Query", "Tailwind", "Firebase"],
        color: "bg-cyan-500",
        height: "h-72",
        image: "/images/projects/rrj-web.png",
        link: "https://github.com/AngheloDeArroz/RRJ_Watch_Web"
    },
    {
        id: 3,
        title: "HappyHome Services",
        description: "A professional platform connecting homeowners with service providers. Features AWS S3 image storage and WorkOS for enterprise-grade authentication.",
        tags: ["Next.js", "MongoDB", "AWS S3", "WorkOS"],
        color: "bg-emerald-500",
        height: "h-80",
        image: "/images/projects/happyhome.png",
        link: "https://github.com/AngheloDeArroz/happyhome_services"
    },
    {
        id: 4,
        title: "Cashflow Tracker",
        description: "A sleek, dark-themed desktop financial tool built with Python. Leverages CustomTkinter for the UI and MySQL for secure data persistence.",
        tags: ["Python", "CustomTkinter", "MySQL", "Matplotlib"],
        color: "bg-neutral-800",
        height: "h-96",
        image: "/images/projects/cashflow.png",
        link: "https://github.com/AngheloDeArroz/CashFlowTracker"
    }
];

export default function ProjectsSection() {
    return (
        <section className="min-h-0 bg-[#9a9a98] text-white pt-20 pb-20 px-4 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-white uppercase italic">
                        Selected <span className="opacity-70 not-italic">Works</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-white rounded-full"></div>
                    <p className="mt-8 text-white/90 max-w-2xl text-xl leading-relaxed">
                        A collection of mobile solutions, web platforms, and desktop tools. 
                        Bridging the gap between hardware and software.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 gap-10 space-y-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <div className="break-inside-avoid group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4">
            
            {/* Clickable Overlay for the whole image area */}
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-20"
            />

            {/* Image Container */}
            <div className={`relative w-full ${project.height} overflow-hidden ${project.color}`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-black text-2xl uppercase tracking-[0.2em] text-center px-6">
                   {project.title}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 bg-white relative">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                        {project.title}
                    </h3>
                    
                    {/* Clickable Arrow Link */}
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-30 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl flex-shrink-0 hover:bg-blue-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>

                <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                        <span 
                            key={tag} 
                            className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-md bg-gray-100 text-gray-400 border border-gray-200 transition-colors group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}