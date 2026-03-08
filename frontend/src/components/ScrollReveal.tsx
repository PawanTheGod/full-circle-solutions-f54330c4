import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  staggerChildren?: number;
}

/**
 * ScrollReveal Component
 * 
 * A reusable wrapper that reveals content as it scrolls into view.
 * Utilizes Framer Motion's useInView hook. Offers simple direction-based
 * reveals and stagger capabilities. Highly performant.
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  once = true,
  className = "",
  staggerChildren = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  // Define refined, subtler directional offsets
  const getOffset = () => {
    switch (direction) {
      case "up": return { y: 20, x: 0 };
      case "down": return { y: -20, x: 0 };
      case "left": return { x: 20, y: 0 };
      case "right": return { x: -20, y: 0 };
      case "none": return { x: 0, y: 0 };
      default: return { y: 20, x: 0 };
    }
  };

  const offset = getOffset();

  const variants = {
    hidden: { 
      opacity: 0, 
      x: offset.x, 
      y: offset.y 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: 0.5, // Faster, snappier reveal
        delay,
        ease: "easeOut" as any, // Simple easing, no dramatic curves
        staggerChildren,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
