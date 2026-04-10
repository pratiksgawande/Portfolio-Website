import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Medicinal Leaf Detection",
    desc: "Deep learning model to identify medicinal plants from leaf images.",
  },
  {
    title: "Movie Recommendation System",
    desc: "ML-based recommendation engine using user preferences.",
  },
  {
    title: "Tumor Detection System",
    desc: "AI model to detect tumors from medical images.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 backdrop-blur-md bg-white/5 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">Pratik</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center h-[90vh] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm <span className="text-blue-500">Pratik</span> 👋
        </motion.h1>

        <p className="mt-4 text-gray-400 text-lg max-w-xl">
          Computer Science Engineer building modern web apps & AI-powered solutions.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="#projects" className="px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600">
            View Work
          </a>
          <a href="#contact" className="px-6 py-2 border border-gray-500 rounded-xl hover:bg-gray-800">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          I am skilled in React, Node.js, and Machine Learning. I build impactful
          projects solving real-world problems like healthcare AI and
          recommendation systems.
        </p>
      </section>

      {/* Skills */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["React", "Node.js", "MongoDB", "Python", "Machine Learning"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>

              <div className="flex gap-3 mt-4">
                <button className="flex items-center gap-1 text-blue-400 hover:underline">
                  🔗 Live
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:underline">
                  💻 Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-gray-400 mt-2">Let's build something amazing 🚀</p>

        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="https://github.com/pratiksgawande" target="_blank" rel="noopener noreferrer">
            🐙 GitHub
          </a>
          <a href="https://www.linkedin.com/in/pratik-gawande-aa4121263" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="mailto:pratikgawande169@gmail.com" target="_blank" rel="noopener noreferrer">
            ✉️ Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 mt-10 border-t border-white/10">
        <p className="text-gray-500">© 2026 Pratik. Built with React ⚡</p>
      </footer>
    </div>
  );
}
