import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "XYZ Analytics Pvt. Ltd.",
    duration: "Jun 2025 – Present",
    type: "Internship",
    description:
      "Working on end-to-end data analytics pipelines, building dashboards, and applying ML models to derive actionable business insights from large datasets.",
    skills: ["Python", "Pandas", "Power BI", "SQL", "Data Visualization", "EDA"],
    gradient: "from-indigo-500 to-purple-500",
    icon: "📊",
  },
];

export default function Experience({ darkMode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className={`py-24 px-6 ${darkMode ? "bg-gray-900/50" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Work Experience
          </span>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Experience
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Professional exposure and real-world contributions
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ x: 8, scale: 1.01 }}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 group ${
                darkMode
                  ? "bg-gray-900/60 border-gray-800 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                  : "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-2xl"
              }`}
            >
              {/* Left gradient border */}
              <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />

              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3">
                      <div>
                        <h3 className={`text-xl font-black mb-0.5 ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {exp.role}
                        </h3>
                        <p className={`font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
                          darkMode ? "bg-gray-800 text-gray-400 border border-gray-700" : "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}>
                          <Calendar size={12} /> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          <Briefcase size={12} /> {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.08 }}
                          className={`px-3 py-1.5 text-xs rounded-full font-semibold transition-all duration-200 ${
                            darkMode
                              ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20"
                              : "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}