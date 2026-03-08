import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";

const UnifiedPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const isNavigating = useRef(false);

  // Sync Scroll to Route (On navigation/initial load)
  useEffect(() => {
    const sectionMap: { [key: string]: string } = {
      "/": "home",
      "/services": "services",
      "/portfolio": "portfolio",
      "/testimonials": "testimonials",
      "/about": "about",
      "/plans": "plans",
      "/contact": "contact",
    };

    const targetId = sectionMap[pathname];
    const element = sectionsRef.current[targetId];

    if (targetId && element) {
      // Calculate absolute position
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      // Only scroll if we are not already roughly at the target
      // This prevents the "snap back" when the Observer updates the URL
      const currentScroll = window.pageYOffset;
      if (Math.abs(currentScroll - offsetPosition) > 50) {
        isNavigating.current = true;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Use a longer timeout for smooth scroll completion
        const timeoutId = setTimeout(() => {
          isNavigating.current = false;
        }, 1000);
        
        return () => clearTimeout(timeoutId);
      }
    }
  }, [pathname]);

  // Sync Route to Scroll (On manual scroll)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Focus on the center 20% of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // If we are currently scrolling programmatically, ignore observer updates
      if (isNavigating.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
          if (window.location.pathname !== newPath) {
            navigate(newPath, { replace: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navigate]);

  return (
    <div className="flex flex-col">
      <section id="home" ref={(el) => (sectionsRef.current["home"] = el)}>
        <Index />
      </section>
      
      <section id="services" ref={(el) => (sectionsRef.current["services"] = el)}>
        <Services />
      </section>
      
      <section id="portfolio" ref={(el) => (sectionsRef.current["portfolio"] = el)}>
        <Portfolio />
      </section>
      
      <section id="testimonials" ref={(el) => (sectionsRef.current["testimonials"] = el)}>
        <Testimonials />
      </section>
      
      <section id="about" ref={(el) => (sectionsRef.current["about"] = el)}>
        <About />
      </section>
      
      <section id="plans" ref={(el) => (sectionsRef.current["plans"] = el)}>
        <Plans />
      </section>
      
      <section id="contact" ref={(el) => (sectionsRef.current["contact"] = el)}>
        <Contact />
      </section>
    </div>
  );
};

export default UnifiedPage;
