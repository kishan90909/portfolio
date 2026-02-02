import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl bg-[#0B1220] border border-white/10 p-5 shadow-lg">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
          <span className="text-lg text-white">&lt;/&gt;</span>
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400">
            {project.category}
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-400 mb-5 leading-snug">
        {project.description}
      </p>

      {/* TECH STACK (LIKE SKILL ROWS) */}
      <div className="space-y-4 mb-6">
        {project.tech.slice(0, 3).map((tech, index) => (
          <div key={index}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">{tech.name}</span>
              <span className="text-blue-400">{tech.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex gap-4 text-gray-400">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <Github size={18} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <span className="text-xs text-gray-500">
          {project.year}
        </span>
      </div>

    </div>
  );
};

export default ProjectCard;
