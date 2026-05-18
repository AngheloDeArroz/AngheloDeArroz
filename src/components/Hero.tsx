import { Section } from "./Section";
import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const TITLE = "Information Technology";

export const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const socialLinks = [
    { id: "github", icon: <Github className="w-[1.1em] h-[1.1em]" />, href: "https://github.com/AngheloDeArroz" },
    { id: "linkedin", icon: <Linkedin className="w-[1.1em] h-[1.1em]" />, href: "https://www.linkedin.com/in/anghelodearroz" },
    { id: "email", icon: <Mail className="w-[1.1em] h-[1.1em]" />, href: "mailto:angelodearroz@gmail.com" },
  ];

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = TITLE;
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 40 : 120);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <Section id="hero" delay={0.1}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-6 md:gap-10 mb-8 md:mb-12"
      >
        <motion.div 
          variants={itemVariants}
          className="relative w-24 md:w-32 lg:w-40 aspect-square shrink-0 group"
          onClick={toggleTheme}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="w-full h-full relative cursor-pointer"
            animate={{ rotateY: theme === "light" ? 180 : 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front (Dark) */}
            <div 
              className="absolute inset-0 w-full h-full border border-border overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                alt="Anghelo Dearroz Dark"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Back (Light) */}
            <div 
              className="absolute inset-0 w-full h-full border border-border overflow-hidden"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" 
                alt="Anghelo Dearroz Light"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col justify-center gap-2 md:gap-3 min-w-0 flex-1">
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(1.15rem,5vw,2.625rem)] font-medium leading-none text-fg tracking-tight pr-2"
          >
            Anghelo Dearroz
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="text-[clamp(0.7rem,1.5vw,0.9rem)] text-fg-muted font-mono tracking-[0.2em] uppercase flex items-center gap-1 h-[1.5em] whitespace-nowrap"
          >
            <span>{displayText}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              className="w-[1px] md:w-[2px] h-[1.1em] bg-accent inline-block align-middle"
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-1.5 text-fg-muted text-[clamp(0.45rem,0.9vw,0.75rem)] font-mono uppercase tracking-wider"
          >
            <MapPin className="w-[1.2em] h-[1.2em] text-accent" />
            <span>Batangas City, Philippines</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5 md:gap-8 text-[clamp(0.85rem,1.5vw,1.1rem)]"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted hover:text-accent transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
