import React from "react";
import { motion } from "framer-motion";

const Project = ({ project, onSelect }) => {
  return (
    <div className="relative card bg-base-100 shadow-xl mt-8">
      <img src={project.image} alt="" className=" bg-cover rounded shadow-lg" />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded"
      >
        <button
          className="px-4 py-2 btn lg:w-28 sm:w-22 md:w-24  w-12 rounded"
          onClick={onSelect}
        >
          View
        </button>
      </motion.div>
    </div>
  );
};

export default Project;
