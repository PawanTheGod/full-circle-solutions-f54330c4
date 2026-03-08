import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BarChart3,
  Search,
  Megaphone,
  Camera,
  Film,
  Scissors,
  Code,
  Layout,
  ArrowRight,
  ArrowUpRight,
  Users,
  Layers,
  Briefcase,
  PenTool,
  Video,
} from "lucide-react";

const sections = [
  {
    title: "Digital Mastery",
    id: "digital",
    desc: "Precision-engineered growth through the modern digital ecosystem.",
    services: [
      {
        icon: Camera,
        title: "Product Shoots",
        desc: "High-fidelity industrial and lifestyle product photography for premium catalogs.",
        price: "From ₹15,000",
      },
      {
        icon: Film,
        title: "Reels & Short-form",
        desc: "Viral-ready vertical storytelling optimized for rapid brand perception.",
        price: "From ₹8,000",
      },
      {
        icon: Video,
        title: "Event Videography",
        desc: "Comprehensive coverage of corporate summits, launches, and elite gatherings.",
        price: "On Quote",
      },
      {
        icon: Scissors,
        title: "Video Editing",
        desc: "High-end post-production including color grading and motion graphics.",
        price: "From ₹5,000",
      },
      {
        icon: BarChart3,
        title: "LinkedIn Excellence",
        desc: "Strategic executive positioning and B2B lead generation architecture.",
        price: "₹25,000/mo",
      },
      {
        icon: PenTool,
        title: "Strategic Copywriting",
        desc: "High-conversion narrative design for ads, websites, and brand manifestos.",
        price: "From ₹10,000",
      },
      {
        icon: Layout,
        title: "Graphic Design",
        desc: "Bespoke visual identities and marketing assets that command attention.",
        price: "From ₹12,000",
      },
    ],
  },
  {
    title: "Physical Presence",
    id: "physical",
    desc: "Dominating the tangible world through high-impact offline maneuvers.",
    services: [
      {
        icon: Megaphone,
        title: "Billboard Advertising",
        desc: "Prime OOH inventory acquisition and strategic placement for maximum reach.",
        price: "On Quote",
      },
      {
        icon: Users,
        title: "Brand Collabs",
        desc: "Mediating high-value partnerships and cross-brand ecosystem integrations.",
        price: "Premium Only",
      },
      {
        icon: Layers,
        title: "Outdoor Campaigns",
        desc: "Holistic on-ground activations and experiential marketing roadmaps.",
        price: "From ₹50,000",
      },
      {
        icon: Briefcase,
        title: "Business Card Design",
        desc: "Tangible identity systems that make a definitive first impression.",
        price: "From ₹2,500",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-sans text-neutral-900">
      <Helmet>
        <title>Services | 360 Marketing Agency - Precision Growth Engineering</title>
        <meta name="description" content="Explore our elite services: Digital Strategy, Cinematic Creative Production, and High-Performance Web Architecture for ambitious brands." />
      </Helmet>
      
      {/* 1. PAGE HEADER - Clean Introduction */}
      <section className="bg-white pt-32 pb-32 border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mb-8 inline-block">
              Capabilities
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Solutions for a new era.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              A multi-disciplinary approach to scaling brands in a fragmented digital landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. DISCIPLINE SECTIONS - Professional Card Layout */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-24">
            {sections.map((section, si) => (
              <ScrollReveal key={section.id} direction="up">
                <div className="glass-dark rounded-[3rem] p-8 lg:p-16 border border-neutral-100/10">
                  <div className="max-w-3xl mb-16">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4 font-semibold">
                      0{si + 1} — {section.title.toUpperCase()}
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                      {section.title}
                    </h2>
                    <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed">
                      {section.desc}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-3xl p-8 border border-neutral-100 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl flex flex-col h-full"
                      >
                        <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                          <service.icon strokeWidth={1.5} className="w-6 h-6" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 tracking-tight text-neutral-900">
                          {service.title}
                        </h3>
                        
                        <p className="text-sm text-neutral-500 mb-8 leading-relaxed flex-grow">
                          {service.desc}
                        </p>
                        
                        <div className="flex items-center justify-between border-t border-neutral-50 pt-6">
                          <p className="text-2xl font-bold tracking-tight">
                            {service.price.split('/')[0]}
                            {service.price.includes('/') && (
                              <span className="text-sm text-neutral-400 font-light">
                                /{service.price.split('/')[1]}
                              </span>
                            )}
                          </p>
                          <ArrowRight className="w-5 h-5 text-neutral-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL MARKETING SECTION - Dark Contrast */}
      <section className="bg-black py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-400 bg-white/5 px-3 py-1.5 rounded-full mb-8 inline-block">
                Custom Mandates
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white tracking-tight">
                Physical Marketing & Branding
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
                We also offer premium offline solutions including high-end 
                business card design, brochure architecture, and newspaper 
                ad placements for brands that require a physical footprint.
              </p>
              <Link to="/contact" replace>
                <button className="magnetic-btn bg-white text-black hover:bg-neutral-200 px-10 py-5 rounded-full font-medium text-lg transition-all active:scale-95 hover:scale-[1.02]">
                  Discuss Custom Mandate
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION - Conversion Focused */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Curated for your ambition.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-neutral-500 text-lg md:text-xl mb-12 font-light">
              Don't settle for off-the-shelf solutions. Let's engineer a bespoke 
              growth roadmap tailored to your specific market position.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" replace>
                <button className="magnetic-btn bg-black text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-neutral-900 transition-all active:scale-95 hover:scale-[1.02] shadow-elevation-mid">
                  Request Partnership
                </button>
              </Link>
              <Link to="/portfolio" replace>
                <button className="group flex items-center gap-2 px-10 py-5 rounded-full font-medium text-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-all active:scale-95 hover:scale-[1.02] border border-neutral-100">
                  Explore Case Studies
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
    </div>
  );
};

export default Services;
