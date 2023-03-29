import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <motion.div
      id="Home"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 2 }}
      layout
    >
      <div className="blob"></div>
      <div className="blob2"></div>
      <div className="hero min-h-fit w-full mt-10">
        <div className="flex hero-content w-full justify-around flex-col lg:flex-row">
          <div>
            <motion.h1
              className="lg:text-7xl md:text-5xl text-4xl font-bold text-primary mb-4 herot1"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 2 }}
            >
              Hi, I am El-Praise
            </motion.h1>
            <p className="lg:text-2xl md:text-xl text-sm font-light text-primary herot2">
              I'm a frontend developer with a passion <br /> for designing
              beautiful and user-friendly websites. <br /> Check out my work and
              let's collaborate!
            </p>
            <motion.button
              animate={{
                x: [-10, 10, -10, 10, 0],
                transition: { delay: 4, duration: 2 },
              }}
              layout
              className="btn mt-5 w-full h-1 lg:w-48 md:w-96 sm:w-96 hover:btn-secondary"
            >
              <a href="https://drive.google.com/file/d/1cU0vTt7KkxBbMyNl4-7LXYkRp2ljUcAu/view?usp=sharing">
                Resume
              </a>
            </motion.button>
          </div>
          <motion.img
            animate={{ x: [0, -5, 5, -5, 5, 0] }}
            transition={{ delay: 3, duration: 2 }}
            className="w-3/6 sm:opacity-100"
            src="/techg.png"
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 4 }}
        >
          <div className="fixed text-primary-focus top-4 right-4 mt-16 transform -translate-y-1/2 transition-all duration-300 ease-in-out flex flex-row icons">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="flex justify-center items-center text-2xl w-12 h-12 rounded-full transition-all duration-300  ease-in-out hover:bg-neutral my-4 mx-2 "
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="flex justify-center items-center text-2xl w-12 h-12 rounded-full transition-all duration-300 ease-in-out hover:bg-neutral my-4 mx-2"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="flex justify-center items-center text-2xl w-12 h-12 rounded-full transition-all duration-300 ease-in-out hover:bg-neutral my-4 mx-2"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
