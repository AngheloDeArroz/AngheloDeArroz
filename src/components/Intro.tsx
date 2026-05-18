import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Intro = ({ onComplete }: { onComplete: () => void; [key: string]: any }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        // Slow down as it approaches 100
        const increment = prev > 80 ? Math.random() * 2 : Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg"
    >
      <div className="relative flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(0.8rem,3vw,1.5rem)] font-mono tracking-[0.5em] text-fg-muted/60 uppercase mb-2"
          >
            Anghelo
          </motion.p>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%", skewY: 10 }}
            animate={{ y: 0, skewY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,15vw,10rem)] font-medium leading-none tracking-tighter text-fg uppercase"
          >
            Dearroz
          </motion.h1>
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-[80vw]">
          <div className="h-[1px] w-full bg-border/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(percent, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <div className="flex justify-between w-full text-[10px] font-mono tracking-[0.2em] uppercase text-fg-muted/40">
            <motion.span
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Initializing Core
            </motion.span>
            <span className="tabular-nums">
              {Math.floor(Math.min(percent, 100))}%
            </span>
            <motion.span
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              v2.0.4
            </motion.span>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"
      />
    </motion.div>
  );
};
