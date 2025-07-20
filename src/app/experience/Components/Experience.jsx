"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  FiChevronDown,
  FiExternalLink,
  FiAward,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const experience = [
  {
    title: "Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications using cutting-edge technologies. Spearheaded architectural decisions and mentored junior team members.",
    highlights: [
      "Boosted application performance by 40% through advanced optimization techniques",
      "Designed and implemented CI/CD pipeline reducing deployment time by 65%",
      "Introduced TypeScript adoption improving code quality by 30%",
      "Conducted technical interviews for 15+ engineering candidates",
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS", "GraphQL"],
    link: "#",
    achievements: [
      "Employee of the Year 2023",
      "Innovation Award for CI/CD Implementation",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions LLC",
    period: "2020 - 2022",
    description:
      "Built responsive, accessible user interfaces with React ecosystem. Collaborated closely with UX designers to create award-winning experiences.",
    highlights: [
      "Reduced page load time by 30% through code splitting and lazy loading",
      "Achieved WCAG 2.1 AA compliance for all customer-facing applications",
      "Created shared component library saving 20+ hours weekly",
      "Presented at 3 internal tech talks on performance optimization",
    ],
    skills: ["React", "Redux", "CSS-in-JS", "Jest", "Webpack"],
    link: "#",
    achievements: [
      "Spot Award for Accessibility Leadership",
      "Top Performer Q2 2021",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Contributed to full-stack development while learning modern web technologies. Participated in all agile ceremonies and code reviews.",
    highlights: [
      "Developed internal dashboard saving 15+ hours weekly for operations team",
      "Contributed to open-source libraries used in production",
      "Proposed and implemented 3 process improvements adopted company-wide",
      "Received full-time offer upon graduation",
    ],
    skills: ["JavaScript", "Python", "Django", "PostgreSQL", "Git"],
    link: "#",
    achievements: ["Outstanding Intern Award"],
  },
];

const SkillPill = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium cursor-default"
      style={{
        background:
          "linear-gradient(90deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.2) 100%)",
        color: "#fecaca",
      }}
      whileHover={{
        scale: 1.05,
        background:
          "linear-gradient(90deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.3) 100%)",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {skill}
      <motion.span
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 3 : 0,
        }}
        className="ml-1"
      >
        ✨
      </motion.span>
    </motion.span>
  );
};

const ExperienceItem = ({ exp, index, scrollYProgress }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const itemRef = useRef(null);

  const { scrollYProgress: itemScroll } = useScroll({
    target: itemRef,
    offset: ["start center", "end start"],
  });

  // Enhanced animations
  const opacity = useTransform(itemScroll, [0, 0.8, 1], [0.3, 1, 1]);
  const y = useTransform(itemScroll, [0, 1], [50, 0]);
  const scale = useTransform(itemScroll, [0, 1], [0.98, 1]);
  const rotateX = useTransform(itemScroll, [0, 1], [10, 0]);
  const glow = useTransform(
    itemScroll,
    [0, 1],
    ["0 0 0 rgba(239,68,68,0)", "0 5px 20px rgba(239,68,68,0.3)"]
  );

  // Background gradient animation
  const background = useTransform(
    itemScroll,
    [0, 1],
    ["rgba(15, 23, 42, 0.3)", "rgba(15, 23, 42, 0.6)"]
  );

  // Border animation
  const border = useTransform(
    itemScroll,
    [0, 1],
    ["1px solid rgba(239,68,68,0.1)", "1px solid rgba(239,68,68,0.3)"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative pl-12 pb-16 last:pb-0 group"
      style={{ opacity, y }}
    >
      {/* Enhanced timeline dot with halo effect */}
      <motion.div
        className="absolute left-0 top-0 w-6 h-6 rounded-full z-10 flex items-center justify-center"
        style={{
          boxShadow: useTransform(
            itemScroll,
            [0, 1],
            ["0 0 0 rgba(239,68,68,0.3)", "0 0 15px rgba(239,68,68,0.5)"]
          ),
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          style={{
            scale: useTransform(itemScroll, [0, 1], [0.9, 1]),
          }}
        >
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced timeline track with pulse effect */}
      {index !== experience.length - 1 && (
        <motion.div
          className="absolute left-3 top-6 w-0.5 h-full"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-b from-red-500/50 to-transparent"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      )}

      {/* Enhanced experience card with 3D tilt effect */}
      <motion.div
        ref={itemRef}
        className="p-8 rounded-2xl shadow-2xl ml-6 transition-all duration-300 overflow-hidden backdrop-blur-sm"
        style={{
          scale,
          background,
          border,
          rotateX,
          boxShadow: glow,
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 40px -10px rgba(239, 68, 68, 0.4)",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Floating corner accent */}
        <motion.div
          className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-red-900/20 blur-xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <motion.h3
                className="text-2xl font-bold text-white mb-1"
                whileHover={{ x: 3 }}
              >
                {exp.title}
              </motion.h3>
              <motion.p
                className="text-lg text-red-400 font-medium flex items-center group"
                whileHover={{ x: 3 }}
              >
                {exp.company}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <FiExternalLink className="inline opacity-0 group-hover:opacity-100 transition" />
                  </a>
                )}
              </motion.p>
            </div>
            <motion.span
              className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-gradient-to-r from-red-900/50 to-red-800/50 text-red-100 font-medium rounded-full text-sm flex items-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              {exp.period}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="ml-2 transition-transform"
              >
                <FiChevronDown />
              </motion.span>
            </motion.span>
          </div>

          <motion.p
            className="text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 1 }}
            animate={{ opacity: isExpanded ? 0.7 : 1 }}
          >
            {exp.description}
          </motion.p>

          {/* Skills chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {exp.skills.map((skill, i) => (
              <SkillPill key={i} skill={skill} />
            ))}
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-5">
                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-white mb-3">
                      <FiCode className="mr-2 text-red-400" />
                      Key Contributions
                    </h4>
                    <ul className="space-y-3 pl-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div>
                      <h4 className="flex items-center text-lg font-semibold text-white mb-3">
                        <FiAward className="mr-2 text-red-400" />
                        Recognitions
                      </h4>
                      <ul className="space-y-2 pl-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i + 0.3 }}
                          >
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax and scroll effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="experience"
      ref={ref}
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
        {/* Enhanced section header with advanced animations */}
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
              <FiLayers className="mr-2 text-red-400 animate-pulse" />
              <span className="text-red-300 font-medium tracking-wider">
                PROFESSIONAL JOURNEY
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
            Career{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Milestones
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
            Tracing my professional evolution through key roles, achievements,
            and continuous growth
          </motion.p>
        </motion.div>

        {/* Interactive timeline */}
        <div className="max-w-4xl mx-auto relative">
          {experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              exp={exp}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Enhanced Floating CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
          }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            animate={{
              boxShadow: [
                "0 5px 15px rgba(239, 68, 68, 0.3)",
                "0 10px 25px rgba(239, 68, 68, 0.4)",
                "0 5px 15px rgba(239, 68, 68, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Let's Build Something Amazing Together
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
