import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, MouseEvent, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" }
];

const BurgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center z-10">
      <motion.span
        className="absolute h-[1.5px] w-6 bg-current"
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -7 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      />
      <motion.span
        className="absolute h-[1.5px] w-6 bg-current"
        animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      />
      <motion.span
        className="absolute h-[1.5px] w-6 bg-current"
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 7 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      />
    </div>
  );
};

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;

  const curveVariants = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <svg className="absolute top-0 -left-[100px] w-[100px] h-full fill-bg stroke-none pointer-events-none">
      <motion.path
        variants={curveVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

const Magnet = ({ children, strength = 0.5 }: { children: ReactNode; strength?: number; key?: string | number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const dX = (clientX - centerX) * strength;
    const dY = (clientY - centerY) * strength;
    setMousePos({ x: dX, y: dY });
  };

  const reset = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mobile button state
  const [isHovered, setIsHovered] = useState(false);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to update active tab
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveTab("");
      return;
    }

    const handleScrollSpy = () => {
      if (window.scrollY < 50) {
        setActiveTab("hero");
        return;
      }

      const sections = ["hero", ...NAV_ITEMS.map((item) => item.id)];
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveTab("contact");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveTab(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [location.pathname]);

  const handleClick = (id: string) => {
    setIsOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and layout before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const showBurger = hasScrolled || activeTab !== "hero" || location.pathname !== "/";

  return (
    <>
      {/* Mobile/Tablet Navigation (Below LG) */}
      <div className="lg:hidden">
        <AnimatePresence mode="wait">
          {!showBurger ? (
            <motion.nav
              key="links-mobile"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-8 left-0 w-full px-4 flex justify-center items-center z-[9999]"
            >
              <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 justify-center">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className="text-[0.65rem] md:text-[0.8125rem] tracking-[0.12em] uppercase font-mono text-fg/60 hover:text-fg whitespace-nowrap transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          ) : (
            <>
              <motion.div
                key="burger-mobile"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed top-8 right-8 z-[10000]"
              >
                <Magnet strength={0.25}>
                  <motion.button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative text-fg hover:text-bg transition-colors duration-300 focus:outline-none p-4 bg-bg/80 backdrop-blur-xl rounded-full border border-border shadow-lg overflow-hidden group"
                    aria-label="Toggle menu"
                  >
                    {/* Liquid Fill Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-accent pointer-events-none"
                      initial={{ y: "100%" }}
                      animate={{ y: isHovered ? "0%" : "100%" }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    />

                    <BurgerIcon isOpen={isOpen} />
                  </motion.button>
                </Magnet>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navigation (LG+) */}
      <nav className="fixed top-8 right-8 z-[9999] hidden lg:flex flex-col items-end gap-4">
        {NAV_ITEMS.map((item) => (
          <Magnet key={item.id} strength={0.2}>
            <button
              onClick={() => handleClick(item.id)}
              className="group relative text-[0.8125rem] tracking-[0.12em] uppercase font-mono transition-colors hover:text-accent focus:outline-none px-4 py-2"
            >
              <span className={activeTab === item.id ? "text-accent" : "text-fg-muted"}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </Magnet>
        ))}
      </nav>

      {/* Navigation Overlay (Shared) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "calc(100% + 100px)" }}
            animate={{ x: 0 }}
            exit={{ x: "calc(100% + 100px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9998] bg-bg w-full flex flex-col justify-between p-12 md:p-16 shadow-2xl"
          >
            <Curve />
            
            {/* Top Label */}
            <div className="flex justify-between items-center w-full">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-fg-muted/40">
                — Index
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-fg-muted/40">
                v2.0.4
              </span>
            </div>

            {/* Main Nav Items */}
            <div className="flex flex-col gap-6 my-auto items-center">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.1 + (0.05 * index),
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  onClick={() => handleClick(item.id)}
                  className="text-3xl sm:text-4xl tracking-[0.2em] uppercase font-mono transition-colors focus:outline-none hover:text-accent"
                >
                  <span className={activeTab === item.id ? "text-accent" : "text-fg"}>
                    {item.label}
                  </span>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="mobile-nav-dot"
                      className="h-1.5 w-1.5 rounded-full bg-accent mx-auto mt-2"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Bottom Footer Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 w-full pt-8 border-t border-border/20">
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-fg-muted/40 block">
                  — Socials
                </span>
                <div className="flex gap-6 text-lg">
                  <a
                    href="https://github.com/AngheloDeArroz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-muted hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anghelodearroz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-muted hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:angelodearroz@gmail.com"
                    className="text-fg-muted hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="text-left sm:text-right space-y-1">
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-fg-muted/40 block">
                  — Location
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-fg-muted block">
                  Batangas City, PH
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
