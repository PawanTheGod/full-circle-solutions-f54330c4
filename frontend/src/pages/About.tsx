import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ArrowRight, 
  BarChart, 
  Palette, 
  MessageSquare, 
  Target, 
  Users, 
  Zap,
  ArrowUpRight
} from "lucide-react";

const values = [
  { icon: BarChart, title: "Data Artistry", description: "Decisions fueled by high-fidelity analytics and measurable KPIs." },
  { icon: Palette, title: "Creative Edge", description: "Bold client-grade ideas that cut through market noise." },
  { icon: MessageSquare, title: "Radical Candor", description: "Clear reporting and direct honest collaboration." },
  { icon: Target, title: "Pure Performance", description: "Success defined by your growth, not vanity metrics." },
  { icon: Users, title: "White-Glove Support", description: "A dedicated strategist team for seamless execution." },
  { icon: Zap, title: "Elite Efficiency", description: "Enterprise-grade systems at competitive pace." },
];

const team = [
  { name: "Aditya Kapoor", role: "FOUNDER & CEO", initial: "A" },
  { name: "Meera Joshi", role: "CREATIVE DIRECTOR", initial: "M" },
  { name: "Rohan Singh", role: "HEAD OF DIGITAL", initial: "R" },
  { name: "Sneha Reddy", role: "STRATEGY LEAD", initial: "S" },
];

const About = () => {
  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-sans text-neutral-900">
      <Helmet>
        <title>About Us | 360 Marketing Agency - Architecture of Growth</title>
        <meta name="description" content="Discover the 360 Manifesto. Born in Mumbai, scaled for the world. Meet the collective engineering the future of digital dominance." />
      </Helmet>
      
      {/* 1. PAGE HEADER - Clean Manifesto */}
      <section className="bg-white pt-32 pb-32 border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mb-8 inline-block">
              Manifesto
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Architecture of Growth.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              Bridging the gap between creative artistry and data-driven dominance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ORIGIN STORY - Mumbai to World Narrative */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative group overflow-hidden rounded-[3rem]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                  alt="360 Marketing Team"
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="max-w-xl">
                <span className="text-xs text-neutral-400 tracking-[0.3em] font-bold mb-6 block uppercase">
                  Our Origin
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
                  Born in Mumbai.<br />Scaled for the World.
                </h2>
                <div className="space-y-6 text-neutral-500 font-light text-lg leading-relaxed">
                  <p>
                    360 Marketing was founded on a singular premise: premium 
                    strategy shouldn't be a luxury reserved for the few.
                  </p>
                  <p>
                    From our Mumbai headquarters, we've orchestrated growth for over 
                    50 partners, blending high-fidelity storytelling with cold, hard 
                    data. We don't just run ads; we build legacies.
                  </p>
                </div>
                <div className="pt-10">
                  <Link to="/portfolio" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 hover:border-black transition-all max-w-fit">
                    View Our Legacy
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - High-Fidelity Cards */}
      <section className="py-32 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 lg:p-12 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">The Mission</h3>
                <p className="text-neutral-400 font-light text-lg leading-relaxed">
                  To democratize elite marketing through innovative, 
                  data-driven ecosystems that drive consistent, 
                  measurable ROI for every mandate we hold.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.15}>
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 lg:p-12 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">The Vision</h3>
                <p className="text-neutral-400 font-light text-lg leading-relaxed">
                  To serve as India's most prestigious growth partner, 
                  setting the global standard for creative transparency 
                  and market leadership.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES - Corporate Philosophy */}
      <section className="py-32 bg-white border-y border-neutral-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="text-xs text-neutral-400 tracking-[0.3em] font-bold mb-4 block uppercase">
                Corporate Philosophy
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Engineered for dominance.</h2>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {values.map((value, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-10 lg:p-12 border border-neutral-50 hover:bg-neutral-50 transition-all duration-300 group h-full">
                  <value.icon className="w-10 h-10 mb-8 text-neutral-400 group-hover:text-neutral-900 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION - Honest Representation */}
      <section className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">The Collective.</h2>
              <p className="text-neutral-500 font-light text-lg">
                A handpicked team of strategists, dreamers, and data scientists.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center group">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-neutral-200 flex items-center justify-center text-4xl font-bold text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500 transform group-hover:scale-105">
                    {member.initial}
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-1">{member.name}</h4>
                  <p className="text-[10px] text-neutral-400 font-bold tracking-[0.2em] uppercase">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="text-center">
              <Link to="/contact">
                <button className="magnetic-btn px-12 py-5 bg-black text-white rounded-full font-bold shadow-xl hover:bg-neutral-900 transition-all active:scale-95 hover:scale-[1.02] inline-flex items-center gap-2">
                  Join Our Team
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default About;
