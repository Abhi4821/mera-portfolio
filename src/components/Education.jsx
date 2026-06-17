import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education({ darkMode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      className={`py-24 px-6 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-4">
            Academic Background
          </span>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Education
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            My academic journey and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
            darkMode
              ? "bg-gray-900/60 border-gray-800 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/10"
              : "bg-white border-gray-200 hover:border-green-300 hover:shadow-2xl"
          }`}
        >
          {/* Top Gradient Bar */}
          <div className="h-2 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500" />

          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <GraduationCap size={32} className="text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
                  <div>
                    <h3 className={`text-2xl font-black mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      B.Tech Computer Science & Engineering
                    </h3>
                    <p className="text-green-400 font-semibold text-lg">Bennett University</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>2022 – 2026</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                      darkMode ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Award size={16} className="text-green-400" />
                    <span className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      CGPA: 8.86 / 10.00
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                      darkMode ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <GraduationCap size={16} className="text-teal-400" />
                    <span className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      B.Tech Degree
                    </span>
                  </motion.div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <p className={`text-sm font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Machine Learning",
                      "Database Management",
                      "Computer Networks",
                      "NLP",
                      "Statistical ML",
                      "OOP",
                      "Operating Systems",
                    ].map((course) => (
                      <motion.span
                        key={course}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-200 ${
                          darkMode
                            ? "bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20"
                            : "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
                        }`}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}