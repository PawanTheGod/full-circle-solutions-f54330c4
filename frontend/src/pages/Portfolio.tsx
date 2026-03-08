import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "TechNova Branding",
    category: "DIGITAL",
    description: "Comprehensive digital branding strategy",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "FitLife Socials",
    category: "CONTENT",
    description: "Engaging content creation for fitness brand",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Quantum E-Commerce",
    category: "WEB",
    description: "High-conversion startup e-commerce platform",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Apex Annual Summit",
    category: "PHYSICAL",
    description: "Print materials and offline advertising",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    featured: true,
  },
  {
    id: 5,
    title: "GlowUp Drive",
    category: "DIGITAL",
    description: "Instagram promotion and influencer outreach",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Urban Roots",
    category: "PHYSICAL",
    description: "Premium business cards and flyers",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Luxe Vision",
    category: "CONTENT",
    description: "Cinematic brand film for luxury fashion",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "Cyber Dynamics",
    category: "WEB",
    description: "SaaS dashboard design and development",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
  },
];

const FILTERS = ["ALL", "DIGITAL", "CONTENT", "WEB", "PHYSICAL"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-sans text-neutral-900">
      <Helmet>
        <title>Portfolio | 360 Marketing Agency - The Archive of Excellence</title>
        <meta name="description" content="View our curated case studies in digital strategy, web development, and cinematic content. Discover how we drive ROI for global partners." />
      </Helmet>
      
      {/* 1. PAGE HEADER - Clean Introduction */}
      <section className="bg-white pt-32 pb-32 border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mb-8 inline-block">
              Case Studies
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              The Archive of Excellence.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              A curated selection of mandates where we redefined the boundaries of growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FILTER SYSTEM - Interactive & Clean */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 border
                ${activeFilter === filter 
                  ? "bg-black text-white border-black" 
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PROJECT GRID - Professional Bento Layout */}
      <section className="pb-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.05,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-100 cursor-pointer shadow-sm
                    ${project.featured ? "md:col-span-2 md:row-span-1 lg:row-span-2" : ""}
                  `}
                >
                  {/* Project image with subtle 700ms grayscale and 1.02 scale */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 transform group-hover:scale-[1.02]"
                  />

                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 lg:p-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-bold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-light mb-8 line-clamp-2 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                      <ArrowRight className="w-6 h-6 text-white translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
                    </div>
                  </div>
                  
                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[2.5rem] transition-all duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGOS SECTION */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <p className="text-center text-[11px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-12">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 font-bold tracking-tighter text-2xl text-neutral-400">
              <span>TECH_NOVA</span>
              <span>QUANTUM</span>
              <span>LUMINA</span>
              <span>APEX_CORP</span>
              <span>ELITE_GDS</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-40 bg-neutral-50 text-center border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to be our next <br />
              success story?
            </h2>
            <p className="text-neutral-500 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
              Limited slots available for Q3/Q4 strategic partnerships. Let's redefine what's possible for your brand.
            </p>
            <Link to="/contact">
              <button className="magnetic-btn bg-black text-white px-12 py-5 rounded-full font-medium text-lg hover:bg-neutral-900 transition-all active:scale-95 hover:scale-[1.02] shadow-elevation-mid">
                Start Your Mandate
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
