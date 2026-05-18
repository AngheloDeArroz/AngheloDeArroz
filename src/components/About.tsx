import { Section } from "./Section";
import { motion } from "motion/react";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        className="flex flex-col gap-6 text-base text-fg-muted leading-relaxed text-justify"
      >
        <motion.p variants={itemVariants}>
          I am an Information Technology professional driven by genuine curiosity and a passion for building things that matter. My journey in tech started with a simple interest in how things work and has grown into a constant pursuit of learning something new every single day.
        </motion.p>
        <motion.p variants={itemVariants}>
          I work with Python, JavaScript, PHP, C++, and Dart, with experience across cloud platforms like AWS and Azure and both SQL and NoSQL databases. Lately I have been exploring artificial intelligence, an area I find endlessly fascinating and full of untapped potential.
        </motion.p>
        <motion.p variants={itemVariants}>
          I believe the best engineers are the ones who never stop learning. Every project teaches me something new, every problem sharpens my thinking, and every day is a chance to be slightly better than yesterday. I do not claim to know everything but I show up, put in the work, and keep growing.
        </motion.p>
        <motion.p variants={itemVariants}>
          If you are building something meaningful and want someone who is committed, adaptable, and genuinely passionate about technology, I would love to connect.
        </motion.p>
      </motion.div>
    </Section>
  );
};
