import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
// import { Mail, Download, ChevronDown } from "lucide-react";
import { Mail, Download, ChevronDown, GitGraph } from "lucide-react";

// import { GitHub, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Aspiring Data Scientist",
  "ML Engineer",
  "AI Enthusiast",
  "Python Developer",
];

export default function Hero({ darkMode }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ${
        darkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        {/* Animated grid */}
        <div
          className={`absolute inset-0 opacity-[0.03] ${darkMode ? "block" : "hidden"}`}
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-24 z-10">
      
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-15 py-2 rounded-full border border-green-500/10 bg-green-500/10 text-green-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-5xl lg:text-7xl font-black mb-4 leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Surendra
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kumar Yadav
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl lg:text-2xl font-semibold mb-6 h-8"
          >
            <span className="text-indigo-400">{displayed}</span>
            <span className="animate-pulse text-indigo-400">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-lg max-w-xl mb-8 leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Aspiring Data Scientist with expertise in Python, machine learning, and NLP.
            Passionate about building scalable AI solutions and extracting meaningful insights from data.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "10 0 30px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="px-15 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all duration-200 flex items-center gap-2"
            >
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className={`px-8 py-3 rounded-full font-semibold border transition-all duration-200 flex items-center gap-2 ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
                  : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600"
              }`}
            >
              <Download size={16} /> Resume
            </motion.a>
          </motion.div>


        </motion.div>

        {/* Right — Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          {[
            { value: "8.86", label: "CGPA", sub: "Bennett University" },
            { value: "950+", label: "DSA Problems", sub: "LeetCode & GFG" },
            { value: "3", label: "AI/ML Projects", sub: "Production Ready" },
            { value: "93%", label: "Best Model", sub: "BERT Accuracy" },
          ].map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className={`px-8 py-5 rounded-2xl border transition-all duration-200 cursor-default ${
                darkMode
                  ? "bg-gray-900/60 border-gray-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                  : "bg-gray-50 border-gray-200 hover:border-indigo-300 hover:shadow-md"
              }`}
            >
              <div className="text-2xl font-black text-indigo-500">{value}</div>
              <div className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{label}</div>
              <div className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"}`}>{sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer"
        onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}