"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 500vh ScrollyTelling Section */}
      <div ref={containerRef} className="relative h-[500vh]">
        {/* Sticky Canvas Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Workaround for iOS/WebKit: establish an explicit relative containing block */}
          <div className="relative w-full h-full">
            {/* We pass scrollYProgress to ScrollyCanvas for rendering the frames */}
            <ScrollyCanvas scrollYProgress={scrollYProgress} />
            
            {/* The Text Overlay sits correctly over the canvas */}
            <Overlay scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* The Work Grid comes after the scrolling canvas finishes */}
      <Projects />
      
      {/* Resume Section with Personal Details */}
      <Resume />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
