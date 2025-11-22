// src/components/ProjectsSection.tsx
"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
