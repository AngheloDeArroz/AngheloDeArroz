"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="min-h-0 flex items-start justify-center bg-white text-black pb-24 pt-0 px-6 relative z-50"
        >
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-8 order-2 md:order-1">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-black">
                            Let's <span className="text-blue-500">Connect</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full mb-6"></div>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Email link directed to Gmail Compose */}
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=anghelodechavezdearroz@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 cursor-pointer transition-transform duration-300 hover:scale-105 w-fit"
                        >
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-gray-700" />
                            </div>
                            <span className="text-lg md:text-xl font-medium text-gray-800 break-all">
                                anghelodechavezdearroz@gmail.com
                            </span>
                        </a>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <SocialLink 
                            icon={faLinkedin} 
                            href="https://www.linkedin.com/in/anghelo-de-arroz-bb17a537b" 
                        />
                        <SocialLink 
                            icon={faGithub} 
                            href="https://github.com/AngheloDeArroz" 
                        />
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-2xl transition-transform duration-500 hover:scale-105">
                        <Image
                            src="/images/linkedinphoto.png"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ icon, href }: { icon: any; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-900 hover:text-white"
        >
            <FontAwesomeIcon icon={icon} className="text-lg" />
        </a>
    );
}