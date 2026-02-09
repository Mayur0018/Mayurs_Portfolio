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
      <h2 className="text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-neutral-400 mb-12">
        Common questions about my full-stack development work
      </p>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className="border border-neutral-700 rounded-xl overflow-hidden"
              initial={false}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <div className="flex items-center gap-4 text-left">
                  <motion.span 
                    className="text-lavender text-xl"
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-medium">{item.question}</span>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {isOpen ? (
                    <FiMinus className="text-xl text-white" />
                  ) : (
                    <FiPlus className="text-xl text-lavender" />
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
                    className="px-5 py-4 text-neutral-300 bg-neutral-950 leading-relaxed"
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