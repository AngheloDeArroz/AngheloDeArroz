import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/AngheloDeArroz",
      icon: <Github className="w-5 h-5" />,
      username: "AngheloDeArroz"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anghelodearroz",
      icon: <Linkedin className="w-5 h-5" />,
      username: "anghelodearroz"
    }
  ];

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
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-8 max-w-2xl"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <label className="text-[0.65rem] md:text-sm uppercase tracking-[0.2em] text-fg-muted font-mono">
          Direct Contact
        </label>
        <a 
          href="mailto:angelodearroz@gmail.com" 
          className="group flex items-center gap-3 text-xl md:text-4xl font-serif italic text-fg hover:text-accent transition-all duration-300"
        >
          <Mail className="w-6 h-6 md:w-8 md:h-8" />
          <span>angelodearroz@gmail.com</span>
        </a>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            variants={itemVariants}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 md:p-6 border border-border bg-fg/[0.02] hover:bg-fg/[0.05] hover:border-accent/30 transition-all duration-300 flex flex-col gap-3 md:gap-4"
          >
            <div className="flex justify-between items-start">
              <div className="text-accent scale-90 md:scale-100">
                {link.icon}
              </div>
              <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <p className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest text-fg-muted font-mono mb-0.5 md:mb-1">{link.label}</p>
              <p className="text-sm md:text-lg font-medium text-fg truncate">{link.username}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
