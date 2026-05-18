import { Certification } from "../types";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CertificationRowProps {
  cert: Certification;
  key?: string | number;
}

const CertificationRow = ({ cert }: CertificationRowProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + (i * 0.05),
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 10 }}
      className="group flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-b border-border/50 last:border-b-0 overflow-hidden transition-colors duration-500"
    >
      <div className="w-[8ch] flex-shrink-0 text-[13px] font-mono text-fg-muted uppercase tabular-nums transition-colors duration-300 group-hover:text-accent">
        {cert.issueDate || cert.year}
      </div>
      
      <div className="flex flex-col flex-grow gap-4">
        <div>
          <span className="text-[11px] font-mono text-fg-muted/60 uppercase tracking-[0.2em] mb-1 block group-hover:text-fg-muted/80 transition-colors">
            {cert.issuer}
          </span>
          <h3 className="text-[1.2rem] text-fg font-serif italic mb-2 group-hover:text-accent transition-colors duration-300">
            {cert.title}
          </h3>
          
          {cert.skills && cert.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {cert.skills.slice(0, 4).map((skill, index) => (
                <motion.span 
                  key={index}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 bg-border/30 text-fg-muted rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
              {cert.skills.length > 4 && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 text-fg-muted/50"
                >
                  +{cert.skills.length - 4} more
                </motion.span>
              )}
            </div>
          )}
        </div>

        {cert.link && (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-accent hover:text-accent transition-colors w-fit relative"
            whileHover={{ x: 5 }}
          >
            <span className="relative">
              View Badge
              <motion.div 
                className="absolute -bottom-1 left-0 h-[1px] bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
            <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export const CertificationsSection = ({ certifications }: { certifications: Certification[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {certifications.map((cert) => (
        <CertificationRow key={cert.id} cert={cert} />
      ))}
    </motion.div>
  );
};
