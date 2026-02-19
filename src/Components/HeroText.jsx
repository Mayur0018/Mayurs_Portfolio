import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 md:mt-40 text-center md:text-left rounded-3xl bg-clip-text c-space">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Mayur
        </motion.h1>
        
        <div className="flex flex-col items-center md:items-start">
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl font-black md:font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <span className="md:hidden">Building</span>
            <span className="hidden md:inline text-neutral-300">A Developer <br /> Dedicated to Crafting</span>
          </motion.p>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl sm:text-7xl md:text-8xl"
            />
          </motion.div>
          
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl font-black md:font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <span className="md:hidden">Web Applications</span>
            <span className="hidden md:inline">Web Solutions</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
