import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
// import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
const projects = [
  {
    title: "Context-Aware Fake News Detection",
    subtitle: "using BERT + Explainable AI",
    description:
      "A context-aware fake news detection system using BERT and Hugging Face Transformers with explainable AI techniques (SHAP) to interpret model predictions.",
    bullets: [
      "Fine-tuned BERT model achieving 93% accuracy and 0.92 F1-score",
      "Implemented SHAP-based explainability for model interpretability",
      "Deployed using Streamlit for real-time predictions",
      "Improved performance over multiple baseline models",
    ],
    tech: ["Python", "BERT", "Hugging Face", "SHAP", "TensorFlow", "Streamlit"],
    github: "https://github.com/kumarsurendra10",
    live: "https://github.com/kumarsurendra10",
    gradient: "from-indigo-500 to-purple-600",
    accent: "indigo",
  },
  {
    title: "Loan Default Prediction",
    subtitle: "using ML + DL with Explainable Insights",
    description:
      "An explainable loan default prediction system using hybrid ML and deep learning models with SHAP-based interpretability for transparent financial decisions.",
    bullets: [
      "Hybrid ML + ANN model achieving 92% accuracy and 0.90 F1-score",
      "Feature engineering and imbalanced data handling",
      "SHAP-based explainability for feature importance",
      "Scikit-learn and TensorFlow pipeline integration",
    ],
    tech: ["Python", "TensorFlow", "SHAP", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/kumarsurendra10",
    live: "https://github.com/kumarsurendra10",
    gradient: "from-purple-500 to-pink-600",
    accent: "purple",
  },
  {
    title: "Hybrid Demand Forecasting",
    subtitle: "using ML & LSTM",
    description:
      "A hybrid demand forecasting system combining ML models with LSTM for time series prediction, featuring Streamlit dashboard for interactive visualization.",
    bullets: [
      "LSTM + ML hybrid approach for superior time series forecasting",
      "Time-based features and lag variables for trend capture",
      "Achieved lower RMSE than all baseline models",
      "Interactive Streamlit dashboard for business stakeholders",
    ],
    tech: ["Python", "TensorFlow (LSTM)", "BERT", "SHAP", "Matplotlib", "Streamlit"],
    github: "https://github.com/kumarsurendra10",
    live: "https://github.com/kumarsurendra10",
    gradient: "from-pink-500 to-rose-600",
    accent: "pink",
  },
];

function ProjectCard({ project, darkMode, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 group ${
        darkMode
          ? "bg-gray-900/60 border-gray-800 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
          : "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10"
      }`}
    >
      {/* Gradient Top Bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      {/* Card Header */}
      <div className={`p-6 bg-gradient-to-br ${project.gradient} opacity-10 absolute inset-0 rounded-2xl pointer-events-none`} />

      <div className="p-6">
        {/* Title */}
        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          <p className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Expandable Bullets */}
        <motion.div
          animate={{ height: expanded ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <ul className="mb-4 space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className={`text-sm flex items-start gap-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} flex-shrink-0`} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`text-xs flex items-center gap-1 mb-4 transition-colors ${
            darkMode ? "text-gray-500 hover:text-indigo-400" : "text-gray-400 hover:text-indigo-600"
          }`}
        >
          {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> Show details</>}
        </button>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.05 }}
              className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-indigo-500/50 hover:text-indigo-300"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
              darkMode
                ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10"
                : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            <ExternalLink size={18} /> GitHub
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white transition-all duration-200`}
          >
            <ExternalLink size={16} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ darkMode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className={`py-24 px-6 ${darkMode ? "bg-gray-900/50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            My Work
          </span>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            AI/ML projects focused on real-world impact with explainable and production-ready solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} darkMode={darkMode} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}