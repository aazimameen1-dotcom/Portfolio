"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

const Overlay = ({ scrollYProgress }: OverlayProps) => {
  // Section 1: 0% to 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const display1 = useTransform(scrollYProgress, (pos) => pos > 0.16 ? "none" : "flex");

  // Section 2: 25% to 50%
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [100, -100]);
  const display2 = useTransform(scrollYProgress, (pos) => pos < 0.24 || pos > 0.51 ? "none" : "flex");

  // Section 3: 60% to 85%
  const opacity3 = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.75, 0.85],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.6, 0.85], [100, -100]);
  const display3 = useTransform(scrollYProgress, (pos) => pos < 0.59 ? "none" : "flex");

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
      {/* SECTION 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1, display: display1 }}
        className="absolute inset-0 flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
          Aazim Ameen
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-lg">
          Photographer | Applied AI Explorer
        </p>
      </motion.div>

      {/* SECTION 2: Left aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2, display: display2 }}
        className="absolute inset-0 flex-col items-start justify-center left-8 md:left-24 text-left pointer-events-auto max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          Creative & Technical.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          Self-employed photographer with over five years of experience specializing in creative and technical photography. Proficient in Adobe Lightroom, photography, and video production, combining artistic vision with technical expertise to deliver impactful visual content.
        </p>
      </motion.div>

      {/* SECTION 3: Right aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3, display: display3 }}
        className="absolute inset-0 flex-col items-end justify-center right-8 md:right-24 text-right pointer-events-auto max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          Crafting Narratives.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-light">
          Student at IUST, Pulwama pursuing a B.S. in Design Your Own Degree. Dedicated to crafting compelling visual narratives that resonate with diverse audiences through Photography and Vibe Coding.
        </p>
      </motion.div>
    </div>
  );
};

export default Overlay;
