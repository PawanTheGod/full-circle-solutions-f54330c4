import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    }}
    exit={{
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    }}
    style={{ willChange: "opacity, transform" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
