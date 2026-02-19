import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaServer, FaCode, FaDatabase, FaCloud } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    icon: <FaCode />,
    question: "What technologies do you use as a Full-Stack Developer?",
    answer:
      "I work with React, Next.js, Tailwind CSS on the frontend and Node.js, Express, REST APIs on the backend."
  },
  {
    icon: <FaServer />,
    question: "Do you build scalable backend systems?",
    answer:
      "Yes. I design scalable backends using microservices architecture, JWT authentication, role-based access, and clean API structures."
  },
  {
    icon: <FaDatabase />,
    question: "Which databases do you work with?",
    answer:
      "I have experience with MongoDB, PostgreSQL, MySQL, and Redis, including schema design and performance optimization."
  },
  {
    icon: <FaCloud />,
    question: "Do you handle deployment and DevOps?",
    answer:
      "Yes. I deploy applications using Docker, CI/CD pipelines, and cloud platforms like AWS, Vercel, and Railway."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Variants for the answer content
  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -10 
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      y: 0,
      transition: {
        height: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        y: { duration: 0.3 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: -10,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <section
      id="faq"
      className="w-full max-w-4xl mx-auto px-6 py-20 text-white"
    >
      {/* Heading */}
      <h2 className="text-heading text-center mb-6">
        Frequently Asked Questions
      </h2>
      <p className="subtext text-center mb-16 max-w-2xl mx-auto">
        Common questions about my full-stack development work and process.
      </p>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm"
              initial={false}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 hover:bg-white/5 transition-all text-left"
              >
                <div className="flex items-center gap-5">
                  <motion.span 
                    className="text-lavender text-2xl"
                    animate={{ rotate: isOpen ? 90 : 0 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-xl sm:text-2xl font-medium text-neutral-200">{item.question}</span>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {isOpen ? (
                    <FiMinus className="text-3xl text-neutral-400" />
                  ) : (
                    <FiPlus className="text-3xl text-lavender" />
                  )}
                </motion.div>
              </button>

              {/* Answer with animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-8 pt-0 text-lg sm:text-xl lg:text-2xl text-neutral-400 leading-relaxed font-light"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
