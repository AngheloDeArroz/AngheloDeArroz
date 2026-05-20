import { ArrowRight } from "lucide-react";
import { Project } from "../types";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInitialized: boolean;
  onHover: () => void;
  onLeave: () => void;
  key?: string | number;
}

export const ProjectCard = ({
  project,
  onHover,
  onLeave,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative flex flex-col gap-2 py-5 focus:outline-none border-b border-border/50 last:border-b-0"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onLeave();
      }}
    >
      <div className="flex items-baseline justify-between gap-4 relative z-10">
        <h3 className="text-[clamp(1.1rem,3vw,1.5rem)] text-fg transition-colors group-hover:text-accent font-serif italic leading-none">
          {project.title}
        </h3>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.15 }}
              className="text-accent"
            >
              <ArrowRight size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="text-[10px] uppercase tracking-[0.2em] text-fg-muted font-mono">
          {project.tags.join(" • ")}
        </div>
      </div>

      <p className="text-base text-fg-muted/60 leading-relaxed max-w-xl relative z-10">
        {project.description}
      </p>
    </Link>
  );
};
