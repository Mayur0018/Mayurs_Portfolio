import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Particles } from "../components/Particles";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center section-spacing c-space"
    > 
      <Particles
        className="absolute inset-0 -z-50"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-md w-full p-8 rounded-2xl border border-white/10 bg-primary text-center"
      >
        <h2 className="text-heading mb-3">Let’s Connect</h2>
        <p className="text-neutral-400 mb-8">
          Have a project in mind or just want to say hi?  
          Reach out directly 👇
        </p>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:mayurnish18@gmail.com"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-radial from-lavender to-royal text-white"
          >
            <FaEnvelope size={20} />
            <span>Email Me</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/9106481092"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-green-500 text-white"
          >
            <FaWhatsapp size={22} />
            <span>Chat on WhatsApp</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
