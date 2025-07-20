"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Get all sections
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      // Determine which section is currently in view
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 300
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const closeMobileMenu = () => setMobileOpen(false);

  // Helper function to determine link style
  const getLinkStyle = (sectionId) => {
    const baseStyle =
      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
    const isActive = activeSection === sectionId;

    return `${baseStyle} ${
      isActive
        ? "text-red-400 font-semibold"
        : "text-gray-300 hover:text-red-400"
    }`;
  };

  const getMobileLinkStyle = (sectionId) => {
    const baseStyle = "block px-3 py-2 rounded-md text-base font-medium";
    const isActive = activeSection === sectionId;

    return `${baseStyle} ${
      isActive
        ? "text-red-400 bg-gray-800 font-semibold"
        : "text-gray-300 hover:text-red-400 hover:bg-gray-800"
    }`;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-gray-900/90 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left - Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                ASHWIN
              </span>
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className={getLinkStyle("home")}>
              Home
            </Link>
            <Link href="#about" className={getLinkStyle("about")}>
              About
            </Link>
            <Link href="#skills" className={getLinkStyle("skills")}>
              Skills
            </Link>
            <Link href="#projects" className={getLinkStyle("projects")}>
              Projects
            </Link>
            <Link href="#experience" className={getLinkStyle("experience")}>
              Experience
            </Link>
            <Link href="#contact" className={getLinkStyle("contact")}>
              Contact
            </Link>
          </div>

          {/* Right - Download CV Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              className={`ml-4 px-4 py-2 rounded-md border text-sm font-medium transition-all duration-300 flex items-center ${
                scrolled
                  ? "border-red-500/50 bg-red-900/20 text-red-300 hover:bg-red-900/30"
                  : "border-red-500/30 text-red-400 hover:bg-red-900/20"
              }`}
            >
              <FiDownload className="mr-2" />
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#home"
                onClick={closeMobileMenu}
                className={getMobileLinkStyle("home")}
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={closeMobileMenu}
                className={getMobileLinkStyle("about")}
              >
                About
              </Link>
              <Link
                href="#skills"
                onClick={closeMobileMenu}
                className={getMobileLinkStyle("skills")}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                onClick={closeMobileMenu}
                className={getMobileLinkStyle("projects")}
              >
                Projects
              </Link>
              <Link
                href="#experience"
                onClick={closeMobileMenu}
                className={getMobileLinkStyle("experience")}
              >
                Experience
              </Link>
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className={getMobileLinkStyle("contact")}
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                download
                onClick={closeMobileMenu}
                className="block px-3 py-2 mt-4 rounded-md text-base font-medium text-center border border-red-500/50 text-red-400 hover:bg-red-900/20"
              >
                <div className="flex items-center justify-center">
                  <FiDownload className="mr-2" />
                  Download CV
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
