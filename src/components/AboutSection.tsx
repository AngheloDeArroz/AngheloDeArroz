// src/components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg max-w-3xl">
        Hi, I'm Anghelo, a Network Technology student and IoT & Web Developer. I
        enjoy building projects that combine hardware and software.
      </p>
    </section>
  );
};

export default AboutSection;
