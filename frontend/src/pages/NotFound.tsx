import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Access attempt to:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white selection:bg-black selection:text-white px-6">
      <Helmet>
        <title>404 | Page Not Found - 360 Marketing Agency</title>
      </Helmet>
      
      <div className="max-w-md w-full text-center">
        <ScrollReveal direction="up">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-8 block">
            Error 404
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-neutral-900">
            Lost in <br /> Orbit.
          </h1>
          <p className="text-neutral-500 text-lg font-light mb-12 leading-relaxed">
            The coordinate <span className="font-mono text-neutral-900 bg-neutral-100 px-2 rounded">{location.pathname}</span> 
            does not exist in our digital architecture.
          </p>
          <Link to="/">
            <button className="magnetic-btn bg-black text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-2 mx-auto hover:bg-neutral-800 transition-all shadow-xl">
              <ArrowLeft size={16} /> RETURN TO MISSION CONTROL
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default NotFound;
