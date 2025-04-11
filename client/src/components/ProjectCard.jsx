import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-all w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
      <h2 className="text-lg sm:text-xl font-semibold text-blue-600">
        {project.title}
      </h2>
      <p className="text-sm text-gray-600 mt-1 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-3">
        <span className="text-sm font-medium text-gray-700">Tech Stack:</span>
        <p className="text-sm text-gray-500">{project.techStack?.join(", ")}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
