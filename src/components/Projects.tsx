"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "MindMaze-ai",
    category: "TypeScript",
    description: "AI-powered maze generation and interactive logical pathway solver.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/aazimameen1-dotcom/MindMaze-ai",
  },
  {
    title: "IUST Complaint Website",
    category: "PHP",
    description: "A centralized complaint registration and tracking portal built for IUST.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    link: "https://github.com/aazimameen1-dotcom/IUST-COMPLAINT-WEBSITE",
  },
  {
    title: "Computation Quiz",
    category: "HTML",
    description: "An interactive, web-based quiz model structured for computation assessments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "https://github.com/aazimameen1-dotcom/computation-quiz",
  },
  {
    title: "Burushaski Dictionary",
    category: "HTML",
    description: "A digital dictionary interface serving the Burushaski language ecosystem.",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop",
    link: "https://github.com/aazimameen1-dotcom/burushaski-dictionary",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#121212] py-32 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Selected Work.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            A showcase of my recent GitHub repositories exploring logic, structure, and university tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {PROJECTS.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-900 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-colors duration-500 z-20" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
