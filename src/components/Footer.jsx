import { motion } from "framer-motion";
import { GitCommit, Mail, Heart, GitBranch, Link } from "lucide-react";
// import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = ["Home", "Skills", "Projects", "Education", "Experience", "Achievements", "Contact"];

export default function Footer({ darkMode }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`py-12 px-6 border-t ${
        darkMode ? "bg-gray-950 border-gray-800" : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.03 }} className="text-center lg:text-left">
            <div className="text-2xl font-black mb-1">
              <span className="text-indigo-500">S</span>
              <span className={darkMode ? "text-white" : "text-gray-900"}>urendra</span>
              <span className="text-indigo-500">.</span>
            </div>
            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Data Scientist • ML Engineer • AI Enthusiast
            </p>
          </motion.div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <motion.button
                key={link}
                onClick={() => scrollTo(link)}
                whileHover={{ y: -2 }}
                className={`text-sm transition-colors duration-200 ${
                  darkMode ? "text-gray-500 hover:text-indigo-400" : "text-gray-500 hover:text-indigo-600"
                }`}
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: <GitCommit size={18} />, href: "https://github.com/kumarsurendra10", label: "GitHub" },
              { icon: <Link size={18} />, href: "https://www.linkedin.com/in/surendra-yadav-58b23127b/", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:yadavsurendrakumar992@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className={`p-2.5 rounded-full border transition-all duration-200 ${
                  darkMode
                    ? "border-gray-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-400"
                    : "border-gray-300 text-gray-500 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-sm ${
            darkMode ? "border-gray-800 text-gray-600" : "border-gray-200 text-gray-500"
          }`}
        >
          <span>© 2026 Surendra Kumar Yadav. All Rights Reserved.</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400 mx-1" fill="currentColor" /> using React • Tailwind CSS • Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}