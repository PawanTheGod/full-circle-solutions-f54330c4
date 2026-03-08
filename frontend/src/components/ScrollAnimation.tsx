import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-left" | "fade-in-right" | "scale-in";
  delay?: number;
}

const animationClassMap = {
  "fade-in": "animate-fade-in",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "scale-in": "animate-scale-in",
};

const ScrollAnimation = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
}: ScrollAnimationProps) => {
  const { ref, isVisible: observerVisible } = useScrollAnimation(0.1);
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isVisible = observerVisible || forceVisible;
  const activeAnimationClass =
    animationClassMap[animation] || "animate-fade-in";

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isVisible && activeAnimationClass, className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
