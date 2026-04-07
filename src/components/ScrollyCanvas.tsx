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

  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    let loadedFirstFrames = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      img.onload = () => {
        // Unlock immediately when the first 2 frames load for instant startup
        if (i < 2) {
          loadedFirstFrames++;
          if (loadedFirstFrames >= 1) {
            setImagesLoaded(true);
          }
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const drawFrame = useCallback((index: number) => {
    if (!images[index] || !canvasRef.current) return;
    
    const img = images[index];
    // Do not attempt to draw if the image is still downloading
    if (!img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set internal canvas resolution based on device pixel ratio for sharpness
    const dpr = window.devicePixelRatio || 1;
    // We update canvas width/height to window size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Image calculations to cover the whole canvas (object-fit: cover)
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
    // Dark background as fallback
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
      // use requestAnimationFrame for performance
      requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(0);
    }

    const handleResize = () => {
      if (imagesLoaded) {
        // Redraw current frame on resize
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
    <div className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
          <div className="text-white text-sm font-mono tracking-widest animate-pulse">
            LOADING ASSETS...
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollyCanvas;
