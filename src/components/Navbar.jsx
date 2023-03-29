import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown relative">
            <motion.label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </motion.label>
            <motion.ul
              variants={menuVariants}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <motion.li variants={menuItemVariants}>
                <a href="#Home">Homepage</a>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <a href="#Projects">Projects</a>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <a href="#Tech">Technologies</a>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <a href="#About">About</a>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <a href="#Contact">Contact</a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className="navbar-center">
          <motion.a
            className="btn btn-ghost normal-case text-xl text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Eldevode
          </motion.a>
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}

export default Navbar;
