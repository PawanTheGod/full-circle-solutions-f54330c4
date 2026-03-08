import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor Component
 * 
 * Replaces the default cursor with an animated ring that follows mouse behavior
 * using Framer Motion springs for realistic physical lag. Incorporates 
 * mix-blend-mode for visibility across black/white backgrounds.
 */
const CustomCursor: React.FC = () => {
  // Check if device is touch-capable (hide cursor if true)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) return null;

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth follow effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const minMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", minMove);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("mouseleave", mouseLeave);
    
    // Initial visibility check
    setIsVisible(true);

    // Add event listeners to all interactive elements for hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", minMove);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>
        {`
          * {
            cursor: none;
          }
        `}
      </style>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="w-1 h-1 bg-white rounded-full bg-blend-difference mix-blend-difference"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0 : 1
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
