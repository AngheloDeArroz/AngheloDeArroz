import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, Calendar, Tag, Github } from "lucide-react";
import { useEffect } from "react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono">
        <p>Project not found.</p>
        <button onClick={() => navigate("/")} className="ml-4 underline">Go Back</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg"
    >
      <div className="mx-auto max-w-[720px] px-[clamp(1.5rem,5vw,4rem)] pt-24 lg:pt-12 pb-32">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-fg-muted hover:text-accent transition-colors mb-12 font-mono text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </motion.button>

        <header className="mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,8vw,5rem)] font-medium leading-none tracking-tighter text-fg mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 items-center text-xs font-mono uppercase tracking-[0.2em] text-fg-muted"
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-accent" />
              <span>{project.year || "2026"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={14} className="text-accent" />
              <span>{project.tags.join(", ")}</span>
            </div>
          </motion.div>
        </header>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-[16/9] overflow-hidden border border-border mb-16"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,250px] gap-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Deep Dive</h2>
              <div className="space-y-6">
                <p className="text-xl text-fg-muted leading-relaxed font-serif italic italic-none">
                  {project.fullDescription}
                </p>
                {project.technicalChallenge && (
                  <div className="pt-8 border-t border-border/50">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-fg mb-4">Technical Challenges</h3>
                    <p className="text-fg-muted leading-relaxed whitespace-pre-line">
                      {project.technicalChallenge}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-12"
          >
            {project.platforms && project.platforms.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Platform</h2>
                <ul className="text-sm space-y-2 text-fg-muted font-mono uppercase tracking-wider">
                  {project.platforms.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Links</h2>
              <div className="flex flex-col gap-4">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-fg hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
                  >
                    <span>{project.link.includes("npmjs.com") ? "NPM Package" : "Live Site"}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.vscodeLink && (
                  <a
                    href={project.vscodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-fg hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
                  >
                    <span>VS Code Extension</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-fg hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
                  >
                    <span>GitHub</span>
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"
      />
    </motion.div>
  );
};
