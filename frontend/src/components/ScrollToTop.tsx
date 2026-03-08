import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures the window scrolls to the top whenever the pathname changes.
 * Essential for SPA production UX.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
