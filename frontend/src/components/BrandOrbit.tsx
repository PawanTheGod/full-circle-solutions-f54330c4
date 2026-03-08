import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BrandOrbit = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Create a spring-smoothed scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Rotation linked to scroll (2 full rotations over the page height)
  const rotation = useTransform(smoothProgress, [0, 1], [0, 720]);
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "360° MARKETING • PURE STRATEGY • CIRCULAR EVOLUTION • ";

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-[90] transition-all duration-700 ease-in-out",
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90 pointer-events-none"
      )}
    >
      <div className="relative w-32 h-32 flex items-center justify-center group">
        {/* ROTATING TEXT RING */}
        <motion.div 
          style={{ rotate: rotation }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[7.5px] font-bold tracking-[0.2em] uppercase fill-neutral-400 group-hover:fill-black transition-colors duration-500">
              <textPath xlinkHref="#circlePath">
                {text}
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* SCROLL PROGRESS RING */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 overflow-visible">
          <circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-neutral-100 fill-none"
            strokeWidth="1"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-neutral-900 fill-none"
            strokeWidth="1.5"
            style={{ 
              pathLength: scrollYProgress,
            }}
          />
        </svg>

        {/* CENTER BUTTON */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 border border-neutral-100 group-hover:bg-neutral-900 overflow-hidden"
        >
          <img 
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain group-hover:invert transition-all duration-500"
          />
        </button>
      </div>
    </div>
  );
};

export default BrandOrbit;
