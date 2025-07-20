"use client";

import { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPaperPlane,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiUpwork,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: "Pay Fund",
    description:
      "A MERN stack crowdfunding platform that connects creators with supporters. Features real-time campaign tracking and secure payments.",
    tags: ["MERN", "Payment Gateway", "Fullstack"],
    image: "/Crowd Funding.png",
    githubLink: "#",
    previewLink: "#",
    techIcons: [
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
      { icon: <FaReact className="text-blue-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    ],
  },
  {
    id: 2,
    title: "Turf Booking",
    description:
      "Sports facility booking system with real-time availability, online payments, and admin dashboard for management.",
    tags: ["MERN", "Fullstack", "Booking System"],
    image: "/Turf booking website.png",
    githubLink: "#",
    previewLink: "#",
    techIcons: [
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
      { icon: <FaReact className="text-blue-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    ],
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    description:
      "Interactive multiplayer game with real-time updates, user authentication, and game history tracking.",
    tags: ["Game", "Interactive", "JavaScript"],
    image: "/Rock Paper Scissor.png",
    githubLink: "#",
    previewLink: "#",
    techIcons: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
    ],
  },
  {
    id: 4,
    title: "Swiggy Clone",
    description:
      "Food delivery platform clone with restaurant listings, menu browsing, and cart functionality.",
    tags: ["Clone", "UI/UX", "Responsive"],
    image: "/Swiggy Clone.png",
    githubLink: "#",
    previewLink: "#",
    techIcons: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    ],
  },
  {
    id: 5,
    title: "Gourmet Hub",
    description:
      "Modern restaurant website with menu display, reservation system, and gallery showcasing culinary creations.",
    tags: ["Food", "Restaurant", "UI Design"],
    image: "/food website.png",
    githubLink: "#",
    previewLink: "#",
    techIcons: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    ],
  },
  {
    id: 6,
    title: "Portfolio",
    description:
      "Personal portfolio built with Next.js featuring modern animations, responsive design, and project showcase.",
    tags: ["Portfolio", "Next.js", "Animations"],
    image: "/portfolio.jpg",
    githubLink: "#",
    previewLink: "#",
    techIcons: [
      { icon: <TbBrandNextjs className="text-white" />, name: "Next.js" },
      { icon: <FaReact className="text-blue-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative h-[420px] overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50 shadow-2xl backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={project.image}
          alt="Project Preview"
          className="h-full w-full object-cover object-center"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="rounded-full bg-gradient-to-r from-red-600/90 to-red-800/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-red-800/50"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.h3
          className="text-2xl font-bold text-white mb-2"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 mb-6 text-sm leading-relaxed"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {project.techIcons.map((tech, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="text-2xl">{tech.icon}</div>
                <span className="text-xs text-gray-400 mt-1">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={project.githubLink}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/80 text-white transition-all hover:bg-gray-700 hover:text-red-400 backdrop-blur-sm border border-gray-700/50"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={project.previewLink}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/80 text-white transition-all hover:bg-gray-700 hover:text-red-400 backdrop-blur-sm border border-gray-700/50"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live preview"
            >
              <FiExternalLink className="text-lg" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef(null);

  const filters = ["All", "MERN", "Fullstack", "UI/UX", "JavaScript", "React"];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
          )
        )
      );
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full blur-xl"
          style={{ y: yBg, opacity: opacityBg, scale: scaleBg }}
          animate={{
            background: [
              "radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(15,23,42,0) 70%)",
              "radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(15,23,42,0) 70%)",
              "radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(15,23,42,0) 70%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -right-40 -bottom-40 h-[30rem] w-[30rem] rounded-full blur-xl"
          style={{ y: yBg, opacity: opacityBg, scale: scaleBg }}
          animate={{
            background: [
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 70%)",
              "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(15,23,42,0) 70%)",
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 70%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/4 h-[50rem] w-[50rem] -translate-x-1/2 blur-xl"
          style={{ y: yBg, opacity: opacityBg, scale: scaleBg }}
          animate={{
            background: [
              "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(15,23,42,0) 70%)",
              "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(15,23,42,0) 70%)",
              "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(15,23,42,0) 70%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 6,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="px-6 py-2 rounded-full inline-flex items-center bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane className="mr-2 text-red-400 animate-pulse" />
              <span className="text-red-300 font-medium tracking-wider">
                MY WORK
              </span>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Explore my collection of work that showcases my skills and
            creativity in web development.
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 border-red-700/50"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border-gray-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400 mb-6 text-lg">
                No projects found matching "{activeFilter}"
              </p>
              <motion.button
                onClick={() => setActiveFilter("All")}
                className="rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 font-medium text-white shadow-lg shadow-red-900/30 transition-all backdrop-blur-sm border border-red-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
