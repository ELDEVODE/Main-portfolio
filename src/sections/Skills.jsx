import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { skills } from "./SkillList";

const SkillsList = () => {
  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div id="Tech" className="p-4 sm:px-8 md:px-16 lg:px-24 mt-28">
      <h1 className="text-5xl sm:text-7xl text-primary-focus font-bold mb-4 text-center">
        Technologies
      </h1>
      <p className="text-primary text-lg  mb-8 text-center">
        Here are some of the technologies that I am proficient in:
      </p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <IconContext.Provider value={{ size: "3em" }}>
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center my-2"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <skill.icon className="text-primary-focus" />
              </motion.div>
              <h3 className="text-2xl text-primary font-semibold mt-2">
                {skill.name}
              </h3>
              <motion.p
                className="text-lg text-primary w-32 text-center"
                variants={itemVariants}
              >
                {skill.experience}
              </motion.p>
            </motion.div>
          ))}
        </IconContext.Provider>
      </motion.div>
    </div>
  );
};

export default SkillsList;
