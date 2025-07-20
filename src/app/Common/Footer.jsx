"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", name: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", name: "Twitter" },
    { icon: <FaEnvelope />, href: "mailto:contact@example.com", name: "Email" },
  ];

  return (
    <footer className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Wave background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 backdrop-blur-sm -z-20" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-10">
          {/* Social links with animated circles */}
          <div className="relative flex space-x-8">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white hover:text-blue-300 transition-colors p-3 block"
                  title={link.name}
                >
                  {link.icon}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Text content */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white">
              Let's Work Together
            </h2>
            <p className="text-blue-200 max-w-lg mx-auto">
              Have a project in mind or want to chat? Feel free to reach out
              through any of the platforms above.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-blue-300/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
