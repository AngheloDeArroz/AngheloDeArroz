import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Section } from "./Section";
import { MapPin, BadgeCheck, Briefcase, Github, Terminal, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

type TerminalLine = {
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
};

export const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeModal, setActiveModal] = useState<null | 'cli'>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Terminal Emulator State
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { type: 'output', text: 'ANGHELO DEARROZ [anghelodearroz.me] (zsh)' },
    { type: 'output', text: 'Session: guest@anghelodearroz.me | Status: Ready' },
    { type: 'success', text: "Type '/help' to get started." },
    { type: 'output', text: '' },
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Set mounted status on client load to safely render Portals
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll lock when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  // Auto-focus terminal input when modal opens (preventing any automatic browser scroll jumps)
  useEffect(() => {
    if (activeModal === 'cli') {
      setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
      }, 100);
    }
  }, [activeModal]);

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: 'input' as const, text: `guest@anghelo:~$ ${cmd}` }];
    // Clean leading backslashes and slashes to support both \help and /help and help
    const cleanCmd = cmd.toLowerCase().replace(/^[\\/]/, '');

    let response: TerminalLine[] = [];

    switch (cleanCmd) {
      case 'help':
        response = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  /help     - Display this command dictionary' },
          { type: 'output', text: '  /about    - Summary of Anghelo\'s engineering background' },
          { type: 'output', text: '  /skills   - Core languages, databases, and network stack' },
          { type: 'output', text: '  /projects - View key development and cloud projects' },
          { type: 'output', text: '  /contact  - Fetch direct email and professional social coordinates' },
          { type: 'output', text: '  /clear    - Clear terminal shell display history' },
          { type: 'output', text: '  /exit     - Close this CLI session' }
        ];
        break;
      case 'about':
        response = [
          { type: 'output', text: 'Anghelo Dearroz is an IT professional driven by genuine curiosity.' },
          { type: 'output', text: 'Specializes in full-stack programming, cloud systems infrastructure,' },
          { type: 'output', text: 'and researching advanced software-AI product applications.' },
          { type: 'output', text: 'Location: Batangas City, Philippines.' }
        ];
        break;
      case 'skills':
        response = [
          { type: 'output', text: '🔧 Mastered Technical Stack:' },
          { type: 'output', text: '  • Languages   : Python, JavaScript/TypeScript, PHP, C++, Dart' },
          { type: 'output', text: '  • Cloud Ops   : AWS Academy Graduate, Microsoft Azure' },
          { type: 'output', text: '  • Databases   : Relational SQL, High-Speed NoSQL' },
          { type: 'output', text: '  • Network Ops : CCNA Security, Cyber Ops, Cisco Routing' }
        ];
        break;
      case 'projects':
        response = [
          { type: 'output', text: '📁 Featured Portfolio Projects:' },
          { type: 'output', text: '  • Containless CLI : Go/Docker lightweight sandbox container engine.' },
          { type: 'output', text: '  • OpenMerlin CLI  : Python console assistant designed to parse LLMs.' },
          { type: 'output', text: '  • Portfolio Site  : Glassmorphic interactive workspace with CLI.' }
        ];
        break;
      case 'contact':
        response = [
          { type: 'output', text: '📞 Direct Collaboration Links:' },
          { type: 'output', text: '  • Email    : angelodearroz@gmail.com' },
          { type: 'output', text: '  • LinkedIn : linkedin.com/in/anghelodearroz' },
          { type: 'output', text: '  • GitHub   : github.com/AngheloDeArroz' }
        ];
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'exit':
        setActiveModal(null);
        setTerminalInput('');
        return;
      default:
        response = [
          { type: 'error', text: `Command not found: '${cmd}'.` },
          { type: 'output', text: "Type '/help' to see available commands." }
        ];
        break;
    }

    setTerminalHistory([...newHistory, ...response]);
    setTerminalInput('');
  };

  return (
    <Section id="hero" delay={0.1}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-row items-stretch gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12"
      >
        {/* Left Container: Profile Image (Flips on theme toggle) */}
        <motion.div
          variants={itemVariants}
          className="relative w-20 sm:w-24 md:w-32 lg:w-40 aspect-square shrink-0 group self-center md:self-auto"
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
                src="/images/profile-dark.webp"
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
                src="/images/profile-light.webp"
                alt="Anghelo Dearroz Light"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/images/profile-dark.webp";
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Container: Details Column (Vertically distributed to match the photo's height exactly like a banner on all screen sizes) */}
        <div className="flex flex-col justify-between h-20 sm:h-24 md:h-32 lg:h-40 flex-grow min-w-0 w-full py-0.5">
          {/* Row 1: Name */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(1.15rem,5vw,2.5rem)] font-bold leading-none text-fg tracking-tight"
          >
            Anghelo Dearroz
            <BadgeCheck className="w-[0.65em] h-[0.65em] fill-[#0066cc] dark:fill-[#3897f0] text-bg shrink-0 inline-block ml-1.5 align-middle -translate-y-[2px]" />
          </motion.h1>

          {/* Row 2: Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1 text-fg-muted text-[9px] sm:text-xs md:text-sm font-medium tracking-wide"
          >
            <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-fg-muted/60 shrink-0" />
            <span>Batangas City, Philippines</span>
          </motion.div>

          {/* Row 3: Specialties */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border/60 pt-1 sm:pt-2 md:pt-3 w-full"
          >
            {/* Specialties separated by slashes */}
            <div className="text-[8px] sm:text-xs md:text-sm text-fg font-medium tracking-wide flex flex-wrap gap-x-1.5 gap-y-0.5">
              <span>Full Stack</span>
              <span className="text-fg-muted/40 font-mono font-normal opacity-60">\</span>
              <span>Cloud Foundations</span>
              <span className="text-fg-muted/40 font-mono font-normal opacity-60">\</span>
              <span>AI Integrations</span>
            </div>
          </motion.div>

          {/* Row 4: Action Buttons (Redesigned with highly custom developer sandbox metrics) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center gap-1.5 sm:gap-3 w-full mt-0.5 md:mt-0 select-none"
          >
            {/* Button 1: Solid Projects (Decorative badge) */}
            <div className="bg-fg text-bg px-2 sm:px-5 py-1 sm:py-2 rounded-sm text-[8px] sm:text-xs font-mono uppercase tracking-wider flex items-center justify-between gap-1 sm:gap-3 min-w-[70px] sm:min-w-[120px] md:min-w-[160px]">
              <div className="flex items-center gap-1 sm:gap-2">
                <Briefcase className="w-3 sm:w-4 h-3 sm:h-4 shrink-0" />
                <span>Projects</span>
              </div>
              <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 shrink-0 opacity-60" />
            </div>

            {/* Button 2: Outline - GitHub (Decorative badge) */}
            <div className="border border-border bg-surface/20 text-fg px-2 sm:px-5 py-1 sm:py-2 rounded-sm text-[8px] sm:text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-2">
              <Github className="w-3 sm:w-4 h-3 sm:h-4 shrink-0 mr-1" />
              <span>GitHub</span>
            </div>

            {/* Button 3: Outline - CLI (Fully functional interactive console modal) */}
            <button
              onClick={() => setActiveModal('cli')}
              className="border border-border bg-surface/20 text-fg hover:bg-surface/40 transition-colors px-2 sm:px-5 py-1 sm:py-2 rounded-sm text-[8px] sm:text-xs font-mono uppercase tracking-wider flex items-center justify-between gap-1 sm:gap-3 cursor-pointer sm:flex-grow-0 sm:max-w-[200px]"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Terminal className="w-3 sm:w-4 h-3 sm:h-4 shrink-0" />
                <span>cli</span>
              </div>
              <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 shrink-0 opacity-60" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Render modal in portal directly on document.body, keeping AnimatePresence intact */}
      {isMounted && createPortal(
        <AnimatePresence>
          {activeModal === 'cli' && (
            <motion.div
              key="cli-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-bg/20 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 cursor-pointer"
            >
              {/* Modal Container */}
              <motion.div
                key="cli-modal-container"
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0c0f16]/95 border border-[#1f293d] shadow-2xl rounded-lg w-full max-w-2xl overflow-hidden font-mono text-left relative flex flex-col"
              >
                {/* Terminal Title Bar */}
                <div className="bg-[#161b22] px-4 py-3 border-b border-[#21262d] flex items-center justify-between select-none relative">
                  {/* Left: Window controls */}
                  <div className="flex items-center gap-1.5 z-10">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:bg-[#ff5f56]/80 flex items-center justify-center group cursor-pointer"
                      aria-label="Close Terminal"
                    >
                      <span className="text-[7px] text-[#4c0002] font-bold opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                    </button>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dfa224] flex items-center justify-center group">
                      <span className="text-[7px] text-[#5c3e00] font-bold opacity-0 group-hover:opacity-100 transition-opacity">─</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1a9c2b] flex items-center justify-center group">
                      <span className="text-[7px] text-[#024d00] font-bold opacity-0 group-hover:opacity-100 transition-opacity">⤢</span>
                    </div>
                  </div>
                  {/* Center: Shell Info */}
                  <div className="text-xs text-[#8b949e] font-mono flex items-center gap-1.5 absolute inset-0 justify-center pointer-events-none">
                    <Terminal size={12} className="text-[#8b949e]/80" />
                    <span>guest@anghelodearroz: ~ (zsh)</span>
                  </div>
                  {/* Right Spacer */}
                  <div className="w-12"></div>
                </div>

                {/* Terminal Body */}
                <div 
                  ref={scrollRef}
                  onClick={() => inputRef.current?.focus()}
                  className="p-4 h-[350px] overflow-y-auto space-y-2 select-text scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent bg-[#0c0f16] cursor-text"
                >
                  {/* Lines History */}
                  {terminalHistory.map((line, idx) => {
                    if (line.type === 'input') {
                      const promptPart = "guest@anghelo:~$";
                      if (line.text.startsWith(promptPart)) {
                        const commandText = line.text.substring(promptPart.length);
                        return (
                          <div key={idx} className="font-mono text-[11px] sm:text-xs text-white">
                            <span className="text-emerald-500 font-bold">guest@anghelo:~$</span>
                            <span className="text-white font-medium ml-2">{commandText}</span>
                          </div>
                        );
                      }
                    }
                    return (
                      <div 
                        key={idx} 
                        className={
                          line.type === 'error' ? 'text-rose-400 font-medium' :
                          line.type === 'success' ? 'text-emerald-400 font-medium' :
                          line.type === 'input' ? 'text-white font-medium' :
                          'text-[#c9d1d9]'
                        }
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {line.text}
                      </div>
                    );
                  })}

                  {/* Live Inline Input Line */}
                  <form 
                    onSubmit={handleTerminalSubmit}
                    className="flex items-center gap-2 font-mono text-[11px] sm:text-xs pt-1"
                  >
                    <span className="text-emerald-500 font-bold shrink-0">guest@anghelo:~$</span>
                    <input 
                      ref={inputRef}
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder=""
                      className="bg-transparent border-none outline-none flex-grow w-full font-mono text-[11px] sm:text-xs focus:ring-0 focus:border-none p-0 text-white caret-emerald-500"
                      autoCapitalize="none"
                      autoComplete="off"
                    />
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Section>
  );
};
