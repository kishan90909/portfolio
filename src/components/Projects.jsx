import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Code2,
  Zap,
  Eye,
  Users,
  TrendingUp,
  X,
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { projectsData } from '../data/projectsData.js';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, combining design and functionality
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <AnimatePresence>
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="w-[360px]"
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable
                  glareMaxOpacity={0.2}
                  className="flip-card min-h-[300px] w-full"
                >
                  <div className="flip-card-inner h-full w-full">

                    {/* ================= FRONT ================= */}
                    <div className="flip-card-front min-h-[300px] w-full">
                      <div className="glass-effect rounded-2xl overflow-hidden h-full flex flex-col">

                        {/* IMAGE */}
                        <div className="relative h-24 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Code2 size={28} className="text-primary/30" />
                          )}
                        </div>

                        {/* CONTENT */}
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="text-sm font-semibold mb-1">
                            {project.title}
                          </h3>

                          <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-snug">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.slice(0, 3).map(tech => (
                              <span
                                key={tech}
                                className="text-[11px] px-2 py-1 rounded-md bg-gray-100 dark:bg-dark-light"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ================= BACK ================= */}
                    <div className="flip-card-back min-h-[300px] w-full">
                      <div className="glass-effect rounded-2xl p-4 h-full flex flex-col">

                        <h4 className="text-sm font-semibold mb-3 text-center">
                          Achievements
                        </h4>

                        <ul className="space-y-2 text-xs mb-4">
                          {project.achievements.slice(0, 2).map((a, i) => (
                            <li key={i} className="flex gap-2">
                              <Zap size={14} className="text-yellow-500 mt-0.5" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>

                        {/* VIEW DETAILS */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="mb-3 text-xs px-3 py-2 rounded-md bg-primary text-white"
                        >
                          View Details
                        </button>

                        <div className="flex flex-col gap-2 mt-auto">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center gap-2 py-2 rounded-md text-xs bg-primary/90 text-white"
                          >
                            <ExternalLink size={14} />
                            Live
                          </a>

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center gap-2 py-2 rounded-md text-xs border border-primary text-primary"
                          >
                            <Github size={14} />
                            GitHub
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code2 />, value: '30K+', label: 'Lines of Code' },
              { icon: <Eye />, value: '100K+', label: 'Project Views' },
              { icon: <Users />, value: '1K+', label: 'Users Reached' },
              { icon: <TrendingUp />, value: '99%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/20 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-dark-light rounded-2xl max-w-4xl w-full p-8"
            >
              <div className="flex justify-between mb-6">
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)}>
                  <X />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedProject.longDescription}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
