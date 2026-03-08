import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility
      setVisible(window.scrollY > 400);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-10 right-10 z-50 h-14 w-14 flex items-center justify-center transition-all duration-500 ease-expo group",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      {/* Progress Ring (SVG) */}
      <svg className="absolute inset-0 h-full w-full -rotate-90 transform">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="transparent"
          className="text-neutral-200"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="150.8" // 2 * pi * r
          style={{ strokeDashoffset: 150.8 - (150.8 * scrollProgress) / 100 }}
          className="text-neutral-900 transition-all duration-300"
        />
      </svg>

      {/* Button Core */}
      <div className="h-10 w-10 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
        <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
      </div>
    </button>
  );
};

export default BackToTop;