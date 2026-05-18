import { ArrowRight } from "lucide-react";
import { Project } from "../types";
import { useState, useRef, MouseEvent as ReactMouseEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

const MotionLink = motion.create(Link);

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  // Mark animation as complete after the entrance animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (cardRef.current && !isAnimating) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <MotionLink
      ref={cardRef}
      variants={itemVariants}
      to={`/project/${project.id}`}
      className="group relative flex flex-col gap-2 py-5 focus:outline-none border-b border-border/50 last:border-b-0"
      onMouseEnter={() => {
        if (!isAnimating) setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isHovered && !isAnimating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePos.x - 100,
              y: mousePos.y - 120,
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.08 }}
            className="pointer-events-none absolute z-20 w-[240px] aspect-[4/3] overflow-hidden border border-border bg-bg shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-baseline justify-between gap-4 relative z-10">
        <h3 className="text-[clamp(1.1rem,3vw,1.5rem)] text-fg transition-colors group-hover:text-accent font-serif italic leading-none">
          {project.title}
        </h3>
        <AnimatePresence>
          {isHovered && !isAnimating && (
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
      
      {/* Decorative hover effect */}
      <motion.div
        className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
    </MotionLink>
  );
};
