import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
// import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
// import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// 🔑 Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY = "xxxxxxxxxxxxxxx";

export default function Contact({ darkMode }) {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
      focused === field
        ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
        : darkMode
        ? "border-gray-700 focus:border-indigo-500"
        : "border-gray-300 focus:border-indigo-500"
    } ${darkMode ? "bg-gray-800 text-white placeholder-gray-500" : "bg-gray-50 text-gray-900 placeholder-gray-400"}`;

  return (
    <section
      id="contact"
      className={`py-24 px-6 ${darkMode ? "bg-gray-900/50" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            Get In Touch
          </span>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Have a project idea or opportunity? Drop a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center gap-6"
          >
            <div>
              <h3 className={`text-2xl font-black mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Say Hello! 👋
              </h3>
              <p className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                I&apos;m actively looking for data science and ML opportunities. Whether it&apos;s an internship, full-time role, or collaboration — I&apos;d love to connect!
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "yadavsurendrakumar992@gmail.com",
                  href: "mailto:yadavsurendrakumar992@gmail.com",
                },
                {
                  icon: <Mail size={18} />,
                  label: "GitHub",
                  value: "kumarsurendra10",
                  href: "https://github.com/kumarsurendra10",
                },
                {
                  icon: <Mail size={18} />,
                  label: "LinkedIn",
                  value: "surendra-yadav",
                  href: "https://www.linkedin.com/in/surendra-yadav-58b23127b/",
                },
              ].map(({ icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                    darkMode
                      ? "bg-gray-900/60 border-gray-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                      : "bg-gray-50 border-gray-200 hover:border-indigo-300 hover:shadow-md"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-200">
                    {icon}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                      {label}
                    </div>
                    <div className={`text-sm font-semibold truncate max-w-[180px] ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className={`rounded-3xl border p-8 ${
                darkMode
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="John Doe"
                    required
                    className={inputClass("name")}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="john@example.com"
                    required
                    className={inputClass("email")}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm font-medium"
                  >
                    <CheckCircle size={16} /> Message sent successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm font-medium"
                  >
                    <AlertCircle size={16} /> Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 ${
                    status === "sending"
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                  }`}
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}