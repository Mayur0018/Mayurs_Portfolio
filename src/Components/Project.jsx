import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 gap-6 sm:gap-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex flex-col gap-2">
          <p className="text-xl sm:text-2xl font-semibold text-white">{title}</p>
          <div className="flex gap-4 sm:gap-5 text-neutral-400 flex-wrap text-sm sm:text-base">
            {tags.map((tag) => (
              <span key={tag.id} className="opacity-80">#{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 cursor-pointer hover-animation text-sm sm:text-base font-medium px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 h-4" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
