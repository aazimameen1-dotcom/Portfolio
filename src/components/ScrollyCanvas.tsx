"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 000 to 119

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollyCanvas = ({ scrollYProgress }: ScrollyCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));

        if (loadedCount === FRAME_COUNT) {
          // Slight artificial pause to let the user see 100%
          setTimeout(() => setImagesLoaded(true), 150);
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const drawFrame = useCallback((index: number) => {
    if (!images[index] || !canvasRef.current) return;
    
    const img = images[index];
    if (!img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;

    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      renderWidth = rect.width;
      renderHeight = rect.width / imgRatio;
      xOffset = 0;
      yOffset = (rect.height - renderHeight) / 2;
    } else {
      renderWidth = rect.height * imgRatio;
      renderHeight = rect.height;
      xOffset = (rect.width - renderWidth) / 2;
      yOffset = 0;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesLoaded) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(0);
    }

    const handleResize = () => {
      if (imagesLoaded) {
        const currentProgress = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(currentProgress * FRAME_COUNT)
        );
        drawFrame(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, scrollYProgress, drawFrame]);

  return (
    <>
      <div className="absolute inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
      </div>

      {!imagesLoaded && (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-[#121212] z-[9999]">
          <div className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4 tabular-nums">
            {loadingProgress}%
          </div>
          <div className="text-gray-500 text-sm font-mono tracking-widest uppercase">
            Loading Cinematic Assets
          </div>
          
          <div className="w-64 md:w-96 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollyCanvas;
