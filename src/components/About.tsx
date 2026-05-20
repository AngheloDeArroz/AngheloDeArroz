import { Section } from "./Section";
import { motion } from "motion/react";
import { Cloud, GitBranch, Cpu } from "lucide-react";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Section id="about" delay={0.15}>
      <motion.h2 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl text-fg mb-8 border-b border-border pb-2"
      >
        About
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch"
      >
        {/* Left biography column */}
        <div className="flex flex-col gap-6 text-base text-fg-muted leading-relaxed text-justify flex-grow justify-center">
          <motion.p variants={itemVariants}>
            I am an Information Technology professional driven by genuine curiosity and a passion for building things that matter. My journey in tech began with a simple interest in how things work, evolving into a dedicated pursuit of learning something new every single day.
          </motion.p>
          <motion.p variants={itemVariants}>
            I believe the best engineers are those who commit to lifelong growth. I do not claim to know everything, but I show up, embrace complex challenges, and consistently put in the work to refine my technical craftsmanship. Every project is an opportunity to push limits.
          </motion.p>
          <motion.p variants={itemVariants}>
            If you are building something meaningful and want a highly adaptable, committed, and genuinely passionate developer to collaborate with, I would love to connect.
          </motion.p>
        </div>

        {/* Right column: Single h-full unified card stretching to exact same height */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-[320px] lg:w-[350px] shrink-0"
        >
          <div className="border border-border/80 bg-surface/10 p-5 rounded-sm h-full flex flex-col justify-between gap-5">
            {/* 1. Core Focus Areas */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Core Focus Areas</h3>
              <div className="space-y-3">
                {/* Pillar 1 */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-2.5 items-start border-l-2 border-accent/40 pl-2.5 py-0.5 group cursor-default"
                >
                  <Cloud className="w-4 h-4 text-accent shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <div>
                    <h4 className="text-xs font-semibold text-fg leading-tight">Cloud Infrastructure</h4>
                    <p className="text-[10px] text-fg-muted mt-0.5 leading-snug">AWS graduate skilled in cloud security & architecture.</p>
                  </div>
                </motion.div>

                {/* Pillar 2 */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-2.5 items-start border-l-2 border-emerald-500/40 pl-2.5 py-0.5 group cursor-default"
                >
                  <GitBranch className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 transition-transform group-hover:rotate-12" />
                  <div>
                    <h4 className="text-xs font-semibold text-fg leading-tight">Open Source Projects</h4>
                    <p className="text-[10px] text-fg-muted mt-0.5 leading-snug">Building accessible tools and contributing to collaborative codebases.</p>
                  </div>
                </motion.div>

                {/* Pillar 3 */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-2.5 items-start border-l-2 border-indigo-500/40 pl-2.5 py-0.5 group cursor-default"
                >
                  <Cpu className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5 transition-transform group-hover:rotate-45" />
                  <div>
                    <h4 className="text-xs font-semibold text-fg leading-tight">AI Applications</h4>
                    <p className="text-[10px] text-fg-muted mt-0.5 leading-snug">LLM mentor products and Pinecone RAG databases.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="border-t border-border/50" />

            {/* 2. Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Tech Stack</h3>
              <div className="flex flex-wrap gap-1">
                {["Python", "TypeScript", "JavaScript", "PHP", "C++", "Dart", "Docker", "AWS", "Azure", "SQL", "NoSQL", "Git", "Linux", "Tailwind"].map((tech) => (
                  <motion.span 
                    key={tech} 
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 450, damping: 15 }}
                    className="px-1.5 py-0.5 bg-surface/30 border border-border/60 rounded-sm text-[9px] font-mono text-fg-muted select-none cursor-default transition-colors hover:text-fg hover:border-accent/40"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="border-t border-border/50" />

            {/* 3. Workflow Philosophy */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Workflow</h3>
              <div className="space-y-1.5 text-[10px] font-mono text-fg-muted leading-tight">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>CI/CD Deployment Pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Clean Architecture & Refactoring</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
