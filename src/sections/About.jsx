import React from "react";
import { motion } from "framer-motion";
import myPicture from "/pic.png";

function About() {
  return (
    <motion.div
      id="About"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 2 }}
      layout
    >
      <div className="hero min-h-fit w-full mt-10">
        <div className="flex hero-content w-full justify-around flex-col lg:flex-row">
          <motion.img
            animate={{ x: [0, -5, 5, -5, 5, 0] }}
            transition={{ delay: 3, duration: 2 }}
            className=" w-52 lg:w-64 md:w-56 sm:w-52 sm:opacity-100 rounded-full mb-20"
            src="/pflj.jpeg"
            alt=""
          />
          <div className="mb-20 mx-8 ">
            <motion.h1
              className="lg:text-7xl md:text-5xl text-4xl font-bold text-primary mb-4 herot1"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 2 }}
            >
              About Me
            </motion.h1>
            <p className="lg:text-2xl md:text-xl text-lg font-light text-primary herot2">
              I am a passionate 💻Fullstack developer with 4 years of experience
              in HTML, 🎨CSS, ⚛️JavaScript, and React. I love creating
              responsive designs, optimizing websites, and adding cool
              🌟animations to enhance the user experience. I prioritize my
              clients' needs, stay up-to-date with the latest trends in the
              industry, and always aim for high-quality results. Let's work
              together to create something amazing! 🚀
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
