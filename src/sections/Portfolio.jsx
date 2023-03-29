import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Project from "./Project";
import { projects } from "./Projects";

// const projects = [
//   {
//     id: 1,
//     category: "Web",
//     image: "/r.jpeg",
//     liveSite: "https://www.example.com/project1",
//     github: "https://github.com/username/project1",
//   },
//   {
//     id: 2,
//     category: "Design",
//     image: "/r.jpeg",
//     liveSite: "https://www.example.com/project2",
//     github: "https://github.com/username/project2",
//   },
//   {
//     id: 3,
//     category: "Web",
//     image: "/r.jpeg",
//     liveSite: "https://www.example.com/project2",
//     github: "https://github.com/username/project2",
//   },
//   // ...
// ];

const categories = ["All", "Web App", "Landing Pages"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      id="Projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      // layout
    >
      <div className="p-4 mt-10 max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-bold text-primary text-center mb-8">
          Projects
        </h1>
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${
                category === selectedCategory
                  ? "bg-primary secondary-content"
                  : "bg-primary-content "
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ duration: 0.4 }}
            >
              <Project
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="bg-base-200 p-4 rounded shadow-lg lg:w-3/5 md:w-4/5 sm:w-full w-4/5"
              >
                <img src={selectedProject.image} alt="" className="w-full" />
                <h1 className="text-xl sm:text-2xl lg:text-4xl md:text-2xl text-primary-focus font-bold my-4 ">
                  {selectedProject.title}
                </h1>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={selectedProject.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center lg:px-4 px-2 py-2 lg:py-2 btn-secondary rounded"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Site
                  </a>
                  <a
                    href={selectedProject.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center lg:px-4 px-2 py-2 lg:py-2 btn-success bg-gray-800 text-white rounded hover:bg-gray-900"
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </a>
                </div>
                <p className="text-primary text-sm lg:text-lg md:text-lg sm:text-lg w-3/4 my-4">
                  {selectedProject.description}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Portfolio;
