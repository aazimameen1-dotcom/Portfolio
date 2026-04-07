"use client";

import { motion, MotionValue, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

const Overlay = ({ scrollYProgress }: OverlayProps) => {
  const [activeSection, setActiveSection] = useState<number>(1);

  // Track the scroll safely via framer motion's optimized event listener
  // We divide the 500vh scroll into 3 explicit stages.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      if (activeSection !== 1) setActiveSection(1);
    } else if (latest >= 0.25 && latest < 0.6) {
      if (activeSection !== 2) setActiveSection(2);
    } else if (latest >= 0.6) {
      if (activeSection !== 3) setActiveSection(3);
    }
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      {/* mode="wait" completely guarantees the previous text visually disappears before the next text renders */}
      <AnimatePresence mode="wait">
        
        {/* SECTION 1: Center */}
        {activeSection === 1 && (
          <motion.div
            key="section-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full px-8 md:px-24 flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              Aazim Ameen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-lg">
              Photographer | Applied AI Explorer
            </p>
          </motion.div>
        )}

        {/* SECTION 2: Left aligned */}
        {activeSection === 2 && (
          <motion.div
            key="section-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full px-8 md:px-24 flex flex-col items-start justify-center text-left"
          >
            <div className="max-w-full w-full md:max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
                Creative & Technical.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Self-employed photographer with over five years of experience specializing in creative and technical photography. Proficient in Adobe Lightroom, photography, and video production, combining artistic vision with technical expertise to deliver impactful visual content.
              </p>
            </div>
          </motion.div>
        )}

        {/* SECTION 3: Right aligned */}
        {activeSection === 3 && (
          <motion.div
            key="section-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full px-8 md:px-24 flex flex-col items-end justify-center text-right"
          >
            <div className="max-w-full w-full md:max-w-2xl ml-auto">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
                Crafting Narratives.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light">
                Student at IUST, Pulwama pursuing a B.S. in Design Your Own Degree. Dedicated to crafting compelling visual narratives that resonate with diverse audiences through Photography and Vibe Coding.
              </p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Overlay;
