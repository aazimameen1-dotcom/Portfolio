"use client";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="bg-[#121212] py-24 px-8 md:px-24 text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-gray-400">Experience</h2>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-gray-700">
              <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-white block" />
              <h3 className="text-2xl font-bold">Video Editor</h3>
              <p className="text-gray-400 font-mono mb-2">Freelance · July 2021 &ndash; Present</p>
              <p className="text-gray-400 font-light">
                Providing high-quality video editing services. Combining artistic vision with technical expertise to deliver impactful visual content.
              </p>
            </div>

            <div className="relative pl-8 border-l border-gray-700">
              <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-gray-600 block" />
              <h3 className="text-2xl font-bold">Photo Editor</h3>
              <p className="text-gray-400 font-mono mb-2">Freelance · Nov 2019 &ndash; Present</p>
              <p className="text-gray-400 font-light">
                Specializing in Adobe Lightroom and professional digital asset management.
              </p>
            </div>

            <div className="relative pl-8 border-l border-gray-700">
              <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-gray-600 block" />
              <h3 className="text-2xl font-bold">Photographer</h3>
              <p className="text-gray-400 font-mono mb-2">Self-employed · Jan 2020 &ndash; Present</p>
              <p className="text-gray-400 font-light">
                Freelance photographer dedicated to crafting compelling visual narratives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education & Extra Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-gray-400">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Islamic University of Science & Technology, Pulwama</h3>
                <p className="text-gray-400 font-mono mb-2">BS, Design Your own Degree (DYoD) · Expected Aug 2025</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Government Higher Secondary School Ladhu</h3>
                <p className="text-gray-400 font-mono mb-2">Higher Secondary Education · Mar 2018 &ndash; Mar 2023</p>
              </div>
            </div>
          </div>

          {/* Skills & Certs */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-gray-400">Skills & Certs</h2>
            
            <div className="mb-6">
              <h4 className="text-lg text-white font-bold mb-4">Top Skills</h4>
              <div className="flex flex-wrap gap-3">
                {["Vibe Coding", "Adobe Lightroom", "Photography", "Video Production"].map((skill) => (
                  <span key={skill} className="px-4 py-2 border border-white/20 rounded-full text-sm font-light text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg text-white font-bold mb-4">Certifications</h4>
              <ul className="list-disc pl-5 text-gray-400 space-y-2 font-light">
                <li>Deloitte Australia - Cyber Job Simulation</li>
                <li>Vibe Coding Course</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
