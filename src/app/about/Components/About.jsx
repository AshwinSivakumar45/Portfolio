"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { FaQuoteLeft, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FiExternalLink,
  FiGithub,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

const About = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("experience");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
      description: "Building production applications",
    },
    {
      value: "20+",
      label: "Projects Delivered",
      description: "Across various industries",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Consistently positive feedback",
    },
    {
      value: "∞",
      label: "Problems Solved",
      description: "And always ready for more",
    },
  ];

  const certifications = [
    {
      name: "React Certified Developer",
      issuer: "React Training",
      date: "Issued May 2023",
      expiry: "Expires May 2025",
      credentialId: "RT-2023-0542",
      skills: ["React Hooks", "Context API", "Performance Optimization"],
      verifyUrl: "#",
    },
    {
      name: "Node.js Services Developer",
      issuer: "OpenJS Foundation",
      date: "Issued Mar 2022",
      expiry: "Expires Mar 2024",
      credentialId: "OJSD-2287",
      skills: ["REST APIs", "Authentication", "Error Handling"],
      verifyUrl: "#",
    },
    {
      name: "TypeScript Professional",
      issuer: "TypeScript Academy",
      date: "Issued Jan 2023",
      expiry: "No Expiry",
      credentialId: "TSP-8872",
      skills: ["Advanced Types", "Decorators", "Compiler API"],
      verifyUrl: "#",
    },
  ];

  const expertise = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development with modern frameworks",
      icon: "👨‍💻",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, accessible user experiences",
      icon: "🎨",
    },
    {
      title: "Cloud Architecture",
      description: "Scalable, secure cloud infrastructure deployment",
      icon: "☁️",
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized code",
      icon: "⚡",
    },
  ];

  const experience = [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Innovators",
      period: "2021 - Present",
      achievements: [
        "Led migration to Next.js, improving performance by 40%",
        "Implemented design system used by 15+ products",
        "Mentored 5 junior developers",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2019 - 2021",
      achievements: [
        "Built SaaS platform with 10k+ monthly users",
        "Reduced API response times by 65%",
        "Introduced automated testing pipeline",
      ],
    },
  ];

  const education = [
    {
      degree: "MSc Computer Science",
      institution: "Tech University",
      period: "2017 - 2019",
      highlights: [
        "Specialized in Human-Computer Interaction",
        "Published research on UI patterns",
        "Graduated with honors",
      ],
    },
    {
      degree: "BSc Software Engineering",
      institution: "State University",
      period: "2013 - 2017",
      highlights: [
        "President of Developer Student Club",
        "Built campus event management system",
        "Dean's list all semesters",
      ],
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Animated background elements */}
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
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
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
                PROFESSIONAL PROFILE
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
            About{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Me
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
            Passionate developer with a focus on creating elegant solutions to
            complex problems. Combining technical expertise with creative vision
            to build exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
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
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
              }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Bio */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                My Story
              </span>
            </h3>

            <div className="space-y-6 text-gray-300">
              <p>
                I'm a full-stack developer with over 3 years of professional
                experience building web applications for startups and
                enterprises. My journey in tech began when I built my first
                website at 15, and I've been obsessed with creating digital
                experiences ever since.
              </p>

              <p>
                What drives me is solving real problems through technology. I
                take pride in writing clean, efficient code and crafting
                interfaces that users love. My approach combines technical rigor
                with design sensibility to deliver products that are both
                powerful and delightful.
              </p>

              <p>
                When I'm not coding, you'll find me contributing to open source,
                exploring new technologies, or mentoring aspiring developers. I
                believe in continuous learning and pushing the boundaries of
                what's possible with web technologies.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(239, 68, 68, 0.5)",
                  }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-100">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
                <FiExternalLink className="ml-1 opacity-70" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
                <FiExternalLink className="ml-1 opacity-70" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-lg" />
                <span>Twitter</span>
                <FiExternalLink className="ml-1 opacity-70" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right column - Experience/Education */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-100">
                Certifications
              </h3>
              <div className="flex items-center text-red-400 text-sm">
                <FiAward className="mr-1.5" />
                <span>{certifications.length} Achieved</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="p-5 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-red-400/30 transition-colors group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -3 }}
                  transition={{
                    delay: 0.1 * index,
                    hover: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-gray-100 group-hover:text-red-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-red-400 mt-1">{cert.issuer}</p>
                    </div>
                    <div className="p-2 bg-red-500/10 rounded-lg border border-red-400/20">
                      <FiAward className="text-red-400" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                    <span className="text-xs text-gray-400">
                      Issued: {cert.date}
                    </span>
                    {cert.credentialId && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        className="text-xs flex items-center text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <FiExternalLink className="mr-1" size={12} />
                        Verify
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional CTA */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="inline-flex items-center text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                View all certifications
                <FiArrowRight className="ml-1.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
