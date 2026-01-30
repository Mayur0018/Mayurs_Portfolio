import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 sm:px-6 backdrop-blur-sm">
      <motion.div
        className="
          relative w-full max-w-2xl
          max-h-[90vh] overflow-y-auto
          border border-white/10
          shadow-lg rounded-2xl
          bg-gradient-to-l from-midnight to-navy
        "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-md top-4 right-4 bg-midnight hover:bg-gray-600"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full max-h-60 sm:max-h-72 object-cover rounded-t-2xl"
        />

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white">
            {title}
          </h5>

          <p className="mb-3 text-sm sm:text-base text-neutral-400">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-2 text-sm sm:text-base text-neutral-400"
            >
              {subDesc}
            </p>
          ))}

          {/* Footer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg hover-animation"
                />
              ))}
            </div>

            {/* CTA */}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm sm:text-base font-medium text-white hover-animation"
              >
                View Project
                <img src="assets/arrow-up.svg" className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
