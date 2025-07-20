"use client";
import { useState, useRef } from "react";
import axios from "axios";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiExternalLink,
} from "react-icons/fi";
import {
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:1000/message", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const formVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      id="contact"
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
                GET IN TOUCH
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
            Let's{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Work Together
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
            Whether you have a project in mind, want to collaborate, or just
            want to say hello—I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Enhanced content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          {/* Enhanced left content */}
          <motion.div variants={itemVariants} className="flex-1 space-y-8">
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-lg group-hover:bg-red-900/50 transition flex-shrink-0 backdrop-blur-sm border border-red-800/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiMail className="text-xl text-red-400" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email me at</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="font-medium text-lg flex items-center text-gray-200 hover:text-red-400 transition group"
                  >
                    your.email@example.com
                    <FiExternalLink className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-gray-400">Find me on</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      icon: <FaLinkedin className="text-lg" />,
                      url: "https://linkedin.com",
                      color: "hover:bg-blue-600/20 hover:text-blue-400",
                      name: "LinkedIn",
                    },
                    {
                      icon: <FaGithub className="text-lg" />,
                      url: "https://github.com",
                      color: "hover:bg-gray-600/20 hover:text-gray-200",
                      name: "GitHub",
                    },
                    {
                      icon: <FaTwitter className="text-lg" />,
                      url: "https://twitter.com",
                      color: "hover:bg-sky-600/20 hover:text-sky-400",
                      name: "Twitter",
                    },
                    {
                      icon: <FaDiscord className="text-lg" />,
                      url: "https://discord.com",
                      color: "hover:bg-indigo-600/20 hover:text-indigo-400",
                      name: "Discord",
                    },
                    {
                      icon: <SiUpwork className="text-lg" />,
                      url: "https://upwork.com",
                      color: "hover:bg-green-600/20 hover:text-green-400",
                      name: "Upwork",
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800/30 rounded-lg transition border border-gray-700/50 text-gray-300 flex items-center gap-2 ${social.color}`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      {social.icon}
                      <span className="text-sm hidden sm:inline-block">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="w-full h-64 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative"
                >
                  <FaPaperPlane className="text-6xl text-red-500/80 z-10 relative" />
                  <motion.div
                    className="absolute inset-0 bg-red-500 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced right content - Form */}
          <motion.div
            variants={formVariants}
            className="flex-1 w-full max-w-lg"
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50"
              whileHover={{
                boxShadow: "0 20px 50px -10px rgba(239, 68, 68, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 flex items-center text-gray-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FaPaperPlane className="mr-2 text-red-500 animate-pulse" />
                Send Me a Message
              </motion.h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition placeholder-gray-500 text-gray-200 backdrop-blur-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition placeholder-gray-500 text-gray-200 backdrop-blur-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <FiMessageSquare className="text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition placeholder-gray-500 text-gray-200 backdrop-blur-sm"
                      placeholder="Hello there, I'd like to talk about..."
                      required
                    ></textarea>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-all ${
                      isSubmitting
                        ? "bg-gray-700/50 cursor-not-allowed text-gray-400"
                        : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl text-white"
                    } relative overflow-hidden group`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mt-4 p-4 rounded-lg backdrop-blur-sm ${
                      submitStatus === "success"
                        ? "bg-green-900/30 border border-green-500/50"
                        : "bg-red-900/30 border border-red-500/50"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <p className="text-green-300 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    ) : (
                      <p className="text-red-300 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        Failed to send message. Please try again later.
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
