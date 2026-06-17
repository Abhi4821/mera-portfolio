import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    emoji: "💻",
    color: "from-indigo-500 to-purple-500",
    glow: "shadow-indigo-500/20",
    border: "border-indigo-500/30",
    skills: ["Python", "SQL"],
  },
  {
    title: "Libraries",
    emoji: "📚",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/30",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
  },
  {
    title: "Machine Learning",
    emoji: "🤖",
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/30",
    skills: ["Feature Engineering", "Model Evaluation", "Hyperparameter Tuning", "Predictive Modeling", "TensorFlow"],
  },
  {
    title: "NLP",
    emoji: "🧠",
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/30",
    skills: ["Text Preprocessing", "TF-IDF", "Word Embeddings", "Transformers (BERT)", "Hugging Face", "Text Classification", "Sentiment Analysis"],
  },
  {
    title: "DB / Tools",
    emoji: "🛠️",
    color: "from-orange-500 to-yellow-500",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/30",
    skills: ["AWS", "Git", "Docker", "Power BI"],
  },
  {
    title: "Explainable AI",
    emoji: "🔍",
    color: "from-teal-500 to-green-500",
    glow: "shadow-teal-500/20",
    border: "border-teal-500/30",
    skills: ["SHAP", "LIME", "Model Interpretability", "Feature Importance"],
  },
];

function SkillCard({ category, darkMode, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`rounded-2xl border p-6 transition-all duration-300 group cursor-default ${
        darkMode
          ? `bg-gray-900/60 ${category.border} hover:shadow-xl hover:${category.glow}`
          : `bg-white border-gray-200 hover:shadow-xl hover:${category.glow}`
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg shadow-lg`}>
          {category.emoji}
        </div>
        <h3 className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-default ${
              darkMode
                ? "bg-gray-800 text-gray-300 hover:bg-indigo-500/20 hover:text-indigo-300 border border-gray-700 hover:border-indigo-500/50"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 border border-gray-200 hover:border-indigo-300"
            }`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills({ darkMode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className={`py-24 px-6 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4"
          >
            Technical Expertise
          </motion.span>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Tools and technologies I use to build intelligent data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}