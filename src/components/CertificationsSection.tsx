"use client";

import { useState } from "react";

const certificates = [
    {
        id: 1,
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "Amazon Web Services",
        date: "November 2025",
        credentialId: "AWS-FG-2025-1112",
        description: "Foundational-level certification demonstrating expertise in basic cloud concepts and AWS services.",
        imagePath: "/AngheloDeArroz/images/certificate_images/AWS_Cloud_Foundations.png",
    },
    {
        id: 2,
        title: "AWS Cloud Security Foundations",
        issuer: "Amazon Web Services",
        date: "2025",
        credentialId: "AWS-SEC-FOUND",
        description: "Validates understanding of core AWS security concepts and best practices for cloud infrastructure.",
        imagePath: "/AngheloDeArroz/images/certificate_images/AWS_CLOUD_SECURITY _FOUNDATIONS.png",
    },
    {
        id: 3,
        title: "CCNAv7 Switching, Routing, and Wireless Essentials",
        issuer: "Cisco Networking Academy",
        date: "2025",
        credentialId: "CCNA-V7-SRWE",
        description: "Intermediate networking concepts focusing on switching, routing, and wireless infrastructure.",
        imagePath: "/AngheloDeArroz/images/certificate_images/CCNAv7 .png",
    },
    {
        id: 4,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "2025",
        credentialId: "CISCO-CYBER",
        description: "Basic principles of cybersecurity, legal and ethical issues, and network protection techniques.",
        imagePath: "/AngheloDeArroz/images/certificate_images/Introduction to Cybersecurity.png",
    },
    {
        id: 5,
        title: "Network Defense",
        issuer: "Cisco Networking Academy",
        date: "2025",
        credentialId: "CISCO-DEFENSE",
        description: "Technical skills required to design, implement, and support network security.",
        imagePath: "/AngheloDeArroz/images/certificate_images/Network Defense.png",
    }
];

export default function CertificationsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    };

    const currentCert = certificates[currentIndex];

    return (
        <section className="min-h-0 bg-white pt-16 pb-20 px-4 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-gray-900">
                        Certifications <span className="text-gray-600">&amp; Credentials</span>
                    </h2>
                    <div className="h-1 w-20 bg-gray-900 rounded-full"></div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Arrows */}
                    <button onClick={handlePrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 lg:-translate-x-20 z-30 transition-opacity hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 lg:translate-x-20 z-30 transition-opacity hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Main Card */}
                    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row min-h-[500px]">

                        {/* Image Side */}
                        <div className="w-full lg:w-3/5 bg-neutral-100 flex items-center justify-center p-6 md:p-10">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={currentCert.imagePath}
                                    alt={currentCert.title}
                                    className="max-w-full max-h-[450px] object-contain shadow-lg rounded-sm"
                                />
                            </div>
                        </div>

                        {/* Info Side */}
                        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white border-l border-gray-50">
                            {/* Removed Official Badge Section */}

                            <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight">
                                {currentCert.title}
                            </h3>
                            <p className="text-xl font-bold text-blue-600 mb-6">{currentCert.issuer}</p>

                            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
                                {currentCert.description}
                            </p>

                            <div className="pt-6 border-t border-gray-100">
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">Date Issued</span>
                                <span className="font-bold text-gray-900 text-lg">{currentCert.date}</span>
                            </div>

                            <button
                                onClick={() => window.open('https://www.credly.com/users/anghelo-de-arroz', '_blank')}
                                className="mt-10 w-full py-4 bg-gray-900 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-3 group"
                            >
                                <span>View on Credly</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Indicator Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-700 ${index === currentIndex ? 'w-16 bg-gray-900' : 'w-4 bg-gray-200 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}