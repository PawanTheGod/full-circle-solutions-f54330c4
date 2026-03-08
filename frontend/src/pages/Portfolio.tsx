import React, { useState } from 'react';
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ALL_PROJECTS = [
  { id: 1, title: 'TechNova Branding', category: 'Digital', description: 'Comprehensive digital branding strategy', imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80', size: 'large' },
  { id: 2, title: 'FitLife Socials', category: 'Content', description: 'Engaging content creation for fitness brand', imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', size: 'small' },
  { id: 3, title: 'Quantum E-Commerce', category: 'Web', description: 'High-conversion startup e-commerce platform', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', size: 'small' },
  { id: 4, title: 'Apex Annual Summit', category: 'Physical', description: 'Print materials and offline advertising', imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', size: 'large' },
  { id: 5, title: 'GlowUp Drive', category: 'Digital', description: 'Instagram promotion and influencer outreach', imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80', size: 'small' },
  { id: 6, title: 'Urban Roots', category: 'Physical', description: 'Premium business cards and flyers', imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80', size: 'small' },
];

const FILTERS = ['All', 'Digital', 'Content', 'Web', 'Physical'];

const CLIENT_LOGOS = [
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Tesla', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white">
      <PageHeader 
        category="Case Studies"
        title="The Archive of Excellence" 
        subtitle="A curated selection of mandates where we redefined the boundaries of growth." 
      />

      {/* FILTER NAVIGATION */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {FILTERS.map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-[0.3em] font-bold pb-2 transition-all duration-300 ${
                activeFilter === filter 
                ? "text-primary border-b-2 border-primary" 
                : "text-neutral-400 border-b-2 border-transparent hover:text-neutral-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* BENTO MASONRY GRID */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
            {filteredProjects.map((project, i) => (
              <ScrollAnimation 
                key={project.id} 
                delay={i * 100}
                className={`${project.size === 'large' ? 'md:row-span-2' : 'md:row-span-1'}`}
              >
                <div className="group relative h-full w-full overflow-hidden rounded-[2.5rem] bg-neutral-100">
                  {/* Image */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  
                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tighter mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm font-light mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <Link 
                      to={`/portfolio/${project.id}`} 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all self-end"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO CLOUD - HIGH END */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-400 mb-16">
            Institutional Trust
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale">
            {CLIENT_LOGOS.map((logo) => (
              <img 
                key={logo.name} 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto object-contain" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to be our next <br />success story?
            </h2>
            <Button asChild className="h-20 px-12 rounded-full bg-black text-white text-lg hover:bg-primary transition-all shadow-2xl">
              <Link to="/contact">Start Your Mandate</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;