import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * SmoothScroll Component
 * 
 * Implements buttery-smooth momentum scrolling across the entire application
 * using the Lenis library. Handles scroll restoration on route changes and
 * cleans up RAF loop on unmount.
 */
const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const requestRef = useRef<number>();
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize Lenis with custom settings for a premium feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Standard behavior for touch devices
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF Loop
    const animate = (time: number) => {
      lenis.raf(time);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
