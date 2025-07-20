"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiAmazon,
  SiFirebase,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const skills = [
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    proficiency: 90,
    description: "Building interactive UIs with hooks and context API",
    link: "https://reactjs.org",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    proficiency: 85,
    description: "Strongly typed JavaScript for scalable applications",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    category: "Language",
    proficiency: 95,
    description: "ES6+ features and modern patterns",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Framework",
    proficiency: 88,
    description: "SSR, SSG, and API routes implementation",
    link: "https://nextjs.org",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    proficiency: 85,
    description: "Building efficient server-side applications",
    link: "https://nodejs.org",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Markup",
    proficiency: 95,
    description: "Semantic markup and accessibility",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "Styling",
    proficiency: 90,
    description: "Modern layouts with Flexbox and Grid",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "CSS Framework",
    proficiency: 92,
    description: "Utility-first CSS framework",
    link: "https://tailwindcss.com",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    proficiency: 80,
    description: "NoSQL database with Mongoose ODM",
    link: "https://www.mongodb.com",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    proficiency: 75,
    description: "Relational database management",
    link: "https://www.postgresql.org",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    category: "API",
    proficiency: 78,
    description: "Query language for APIs",
    link: "https://graphql.org",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Version Control",
    proficiency: 85,
    description: "Version control and collaboration",
    link: "https://git-scm.com",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    category: "Cloud",
    proficiency: 70,
    description: "Cloud services and deployment",
    link: "https://aws.amazon.com",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    category: "Backend",
    proficiency: 75,
    description: "Realtime database and authentication",
    link: "https://firebase.google.com",
  },
  {
    name: "Figma",
    icon: FaFigma,
    category: "Design",
    proficiency: 65,
    description: "UI/UX design and prototyping",
    link: "https://www.figma.com",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
    proficiency: 72,
    description: "Containerization and deployment",
    link: "https://www.docker.com",
  },
];

const SkillCard = ({ skill, scrollYProgress }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress: itemScroll } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const opacity = useTransform(itemScroll, [0, 0.8, 1], [0.3, 1, 1]);
  const y = useTransform(itemScroll, [0, 1], [30, 0]);
  const scale = useTransform(itemScroll, [0, 1], [0.95, 1]);
  const rotateX = useTransform(itemScroll, [0, 1], [5, 0]);

  const background = useTransform(
    itemScroll,
    [0, 1],
    ["rgba(15, 23, 42, 0.3)", "rgba(15, 23, 42, 0.5)"]
  );

  const border = useTransform(
    itemScroll,
    [0, 1],
    ["1px solid rgba(239, 68, 68, 0.1)", "1px solid rgba(239, 68, 68, 0.3)"]
  );

  const glow = useTransform(
    itemScroll,
    [0, 1],
    ["0 0 0 rgba(239, 68, 68, 0)", "0 0 10px rgba(239, 68, 68, 0.3)"]
  );

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-xl backdrop-blur-sm h-full"
      style={{
        opacity,
        y,
        scale,
        rotateX,
        background,
        border,
        boxShadow: glow,
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 15px 30px -5px rgba(239, 68, 68, 0.3)",
        borderColor: "rgba(239, 68, 68, 0.5)",
        background: "rgba(15, 23, 42, 0.7)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a
        href={skill.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="text-center h-full flex flex-col">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.2) 100%)",
            }}
            whileHover={{
              scale: 1.1,
              background:
                "linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.3) 100%)",
            }}
          >
            <skill.icon className="w-8 h-8 text-red-400 z-10" />
            <motion.div
              className="absolute inset-0 bg-red-500/10"
              animate={{
                scale: isHovered ? 1.5 : 1,
                opacity: isHovered ? 0.3 : 0,
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <h3 className="font-bold text-xl text-gray-100 mb-2 group-hover:text-red-400 transition-colors">
            {skill.name}
            <FiExternalLink className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>

          <p className="text-sm text-red-400/80 mb-3">{skill.category}</p>

          <div className="w-full bg-gray-800 rounded-full h-2 mb-4 mt-auto">
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.p
                className="text-sm text-gray-300 mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {skill.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </a>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
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
              <span className="text-red-300 font-medium tracking-wider">
                TECHNICAL MASTERY
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
            My{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Skills
            </span>{" "}
            & Expertise
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
            The technologies and tools I use to create exceptional digital
            experiences
          </motion.p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
