import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, Brain, Zap } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={28} />,
    number: "01",
    title: "Spin the Code 2022",
    subtitle: "Ranked 12th / 1000+",
    description: "Secured 12th position out of 1000+ participants in a national-level coding competition.",
    gradient: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-500/20",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
  },
  {
    icon: <Zap size={28} />,
    number: "02",
    title: "Smart BU Hackathon 2023",
    subtitle: "Ranked 73 / 500",
    description: "Recognized for innovative problem-solving and teamwork during Bennett University's flagship hackathon.",
    gradient: "from-indigo-400 to-blue-500",
    glow: "shadow-indigo-500/20",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
  },
  {
    icon: <Code2 size={28} />,
    number: "03",
    title: "DSA Mastery",
    subtitle: "950+ Problems Solved",
    description: "Solved 950+ Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, and Coding Ninjas.",
    gradient: "from-green-400 to-teal-500",
    glow: "shadow-green-500/20",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
  },
  {
    icon: <Brain size={28} />,
    number: "04",
    title: "93% Model Accuracy",
    subtitle: "BERT Fake News Detection",
    description: "Achieved 93% accuracy and 0.92 F1-score on a fine-tuned BERT model for fake news classification.",
    gradient: "from-purple-400 to-pink-500",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
  },
];

export default function Achievements({ darkMode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      className={`py-24 px-6 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-4">
            Professional Achievements
          </span>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Certifications &{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Achievements showcasing technical expertise, problem-solving abilities, and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`rounded-2xl border p-6 transition-all duration-300 group cursor-default relative overflow-hidden ${
                darkMode
                  ? `bg-gray-900/60 ${item.border} hover:shadow-xl hover:${item.glow}`
                  : `bg-white border-gray-200 hover:shadow-xl`
              }`}
            >
              {/* Number watermark */}
              <div
                className={`absolute top-4 right-4 text-6xl font-black ${
                  darkMode ? "text-gray-800" : "text-gray-100"
                } select-none`}
              >
                {item.number}
              </div>

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0 transition-all duration-300`}
                >
                  {item.icon}
                </motion.div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className={`text-lg font-black mb-0.5 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}