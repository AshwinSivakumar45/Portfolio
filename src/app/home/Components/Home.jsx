"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiDownload,
  FiMenu,
  FiX,
  FiChevronRight,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Particles initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: darkMode ? "#ec4899" : "#ef4444",
      },
      links: {
        color: darkMode ? "#ec4899" : "#ef4444",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/yourusername",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/yourusername",
      name: "LinkedIn",
    },
    {
      icon: <FaTwitter size={20} />,
      url: "https://twitter.com/yourusername",
      name: "Twitter",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/yourusername",
      name: "Instagram",
    },
    {
      icon: <HiOutlineMail size={22} />,
      url: "mailto:your.email@example.com",
      name: "Email",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Particle Background */}
      <div className="fixed inset-0 z-0 opacity-20 dark:opacity-30">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      {/* Vertical Social Links */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="h-24 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5, scale: 1.1 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 + index * 0.1 }}
          >
            <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.name}
            </span>
            <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-pink-400 transition-colors">
              {link.icon}
            </span>
          </motion.a>
        ))}
        <div className="h-24 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
      </motion.div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen relative z-10 flex items-center"
      >
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.p
                  className="text-pink-500 dark:text-pink-400 text-lg font-semibold uppercase tracking-widest mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  🚀 Hello, I’m
                </motion.p>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
                  <span className="block text-gray-900 dark:text-white drop-shadow-sm">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-gradient bg-[length:300%_300%] bg-pos-0 hover:bg-pos-100 transition-all duration-1000">
                        ASHWIN
                      </span>
                    </motion.span>
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300 text-3xl mt-2 font-medium">
                    Full-Stack MERN Developer
                  </span>
                </h1>

                <motion.div
                  className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 mb-10 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p>
                    Passionate about building elegant, performant, and
                    user-centric web applications. From crafting pixel-perfect
                    UIs to architecting scalable backend systems, I deliver
                    complete digital experiences using the power of the MERN
                    stack.
                  </p>
                  <p>
                    Let's collaborate and turn your ideas into impact-driven
                    solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 shadow-lg
                  hover:shadow-xl hover:brightness-110 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>📬</span> Get In Touch
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>💻</span> View Projects
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2 flex justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative max-w-md">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-3xl opacity-20 blur-xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />

                <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={"/Untitled-removebg-preview.png"}
                    alt="Ashwin's Profile"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Mobile Social Links */}
                <motion.div
                  className="lg:hidden flex justify-center space-x-4 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                      whileHover={{ y: -3, scale: 1.1 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      <span className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-pink-400">
                        {link.icon}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
