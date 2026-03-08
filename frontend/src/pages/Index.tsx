import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "react-countup";
import { 
  useScroll, 
  useTransform, 
  motion, 
  useSpring,
  AnimatePresence 
} from "framer-motion";
import {
  BarChart3,
  Video,
  PenTool,
  Code,
  ArrowRight,
  Briefcase,
  Users,
  Clock,
  Layers,
  ArrowUpRight,
  Camera,
  Search,
  Target,
  Zap,
  Trophy,
} from "lucide-react";

// --- Data ---
const services = [
  {
    icon: BarChart3,
    title: "Digital Mastery",
    desc: "Precision-targeted growth through elite social channels and high-conversion copy.",
  },
  {
    icon: Camera,
    title: "Visual Storytelling",
    desc: "High-fidelity product shoots, reels, and cinematic films that command attention.",
  },
  {
    icon: Layers,
    title: "Physical Presence",
    desc: "Dominating the tangible world through billboard advertising and outdoor campaigns.",
  },
  {
    icon: Code,
    title: "Digital Architecture",
    desc: "Bespoke, high-performance web ecosystems built for seamless user conversion.",
  },
];

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Mandates Executed" },
  { icon: Users, value: 30, suffix: "+", label: "Global Partners" },
  { icon: Clock, value: 5, suffix: "+", label: "Years of Mastery" },
  { icon: Layers, value: 12, suffix: "+", label: "Domain Expertises" },
];

const projects = [
  {
    title: "The Modern Rebrand",
    cat: "Identity",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Growth Ecosystem",
    cat: "Strategy",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Digital Architecture",
    cat: "Development",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate360 = useTransform(smoothProgress, [0, 1], [0, 360]);
  const scale360 = useTransform(smoothProgress, [0, 0.5], [1, 1.2]);
  const opacity360 = useTransform(smoothProgress, [0, 0.3], [0.03, 0]);

  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-['Outfit',sans-serif] text-neutral-900">
      <Helmet>
        <title>360 Marketing Agency | Master Your Brand Evolution</title>
        <meta name="description" content="Pune's premier marketing collective. Data-driven strategy, cinematic creative production, and high-performance digital architecture." />
      </Helmet>
      
      {/* 1. HERO SECTION - Clean & Professional */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* LARGE ROTATING BRAND CIRCLE */}
        <motion.div 
          style={{ rotate: rotate360, scale: scale360, opacity: opacity360 }}
          className="absolute w-[800px] h-[800px] border-dashed border-[40px] border-neutral-900 rounded-full pointer-events-none -top-40 -right-40 z-0"
        />
        
        {/* Animated Background Element */}
        <div className="mesh-gradient-bg" />
        
        <div className="container mx-auto px-6 max-w-7xl pt-20 flex flex-col items-center text-center relative z-10">
          
          <ScrollReveal direction="up" delay={0}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-500 bg-white/50 backdrop-blur-md border border-neutral-200/50 px-4 py-2 rounded-full mb-8 inline-block shadow-sm">
              360° Evolution
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl text-neutral-900 pb-4">
              Where Strategy <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600">Meets Art</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-600 font-['Inter',sans-serif] font-light max-w-2xl mt-8 leading-relaxed mx-auto">
              Transforming emerging brands into industry icons through <span className="font-medium text-neutral-900">high-performance digital marketing</span> and bespoke creative solutions.
            </p>
          </ScrollReveal>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 pb-16">
            <ScrollReveal direction="up" delay={0.3}>
              <Link to="/contact" replace>
                <button className="magnetic-btn bg-black text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-neutral-900 transition-all active:scale-95 hover:scale-[1.02] uppercase tracking-widest text-sm flex items-center gap-2 group">
                  Initiate Evolution
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:animate-ping" />
                </button>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <Link to="/plans" replace>
                <button className="glass-light px-12 py-5 rounded-full font-bold text-neutral-800 hover:bg-white hover:text-black transition-all active:scale-95 hover:scale-[1.02] border border-neutral-100 shadow-xl uppercase tracking-widest text-sm backdrop-blur-md">
                  Investment Strategies
                </button>
              </Link>
            </ScrollReveal>
          </div>

          {/* SERVICE INFLUENCE PILLARS */}
          <ScrollReveal direction="up" delay={0.6} className="w-full">
            <div className="mt-8 border-t border-neutral-100/50 pt-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-8">Integrated Ecosystems</p>
              <div className="flex flex-wrap justify-center gap-4 px-4 max-w-5xl mx-auto">
                {[
                  { label: "Strategic Authority", icon: BarChart3 },
                  { label: "Cinematic Creative", icon: Camera },
                  { label: "Digital Architecture", icon: Code },
                ].map((service, idx) => (
                  <Link key={idx} to="/services" replace>
                    <div className="group relative px-6 py-4 bg-white/50 backdrop-blur-sm border border-neutral-100 rounded-2xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <service.icon className="w-4 h-4 text-neutral-600 group-hover:text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-bold tracking-tight">{service.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* DIRECT IMPACT BADGE */}
          <ScrollReveal direction="up" delay={0.8}>
              <div className="mt-16 flex items-center justify-center gap-3 text-neutral-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200" />
                  ))}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-black font-extrabold">50+ Brands</span> Engineered for Scale
                </p>
              </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STATS SECTION - Elegant Counters */}
      {/* Wrap everything in one stagger block to prevent visual pop-in */}
      <section className="py-32 bg-black text-white border-y border-neutral-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((s, i) => (
                <div key={i} className="text-center group p-6 rounded-2xl glass-dark border-transparent hover:border-white/10 transition-colors">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 text-white">
                    <CountUp end={s.value} duration={2.5} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                  </div>
                  <p className="text-xs md:text-sm text-neutral-400 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          {/* STRATEGIC ALLIANCES - Subtle Trust Bar */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-16 pt-16 border-t border-neutral-800/50">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-600 text-center mb-8">Ecosystem Partners</p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
                <span className="text-xl font-black tracking-tighter">GOOGLE_ADS</span>
                <span className="text-xl font-black tracking-tighter">META_BLUEPRINT</span>
                <span className="text-xl font-black tracking-tighter">SHOPIFY_PLUS</span>
                <span className="text-xl font-black tracking-tighter">LINKEDIN_MARKETING</span>
                <span className="text-xl font-black tracking-tighter">HUBSPOT_PLATINUM</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. SERVICE CARDS - Subtle Hover States */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <ScrollReveal direction="up">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
                Mastering every touchpoint.
              </h2>
              <p className="text-neutral-500 text-lg">
                We bridge the gap between technical precision and creative resonance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 0.1}>
                {/* 
                  IMPLEMENTATION NOTE: 
                  - Minimalist background (white on neutral-50)
                  - Hover lift limited to -2px/4px visually via transform
                  - Soft, premium shadow handling instead of high-contrast glowing borders 
                */}
                <div className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl h-full border border-neutral-100">
                  <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-neutral-100 transition-transform duration-300 text-neutral-700">
                    <s.icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 360° PROTOCOL - Modern Process Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-6 block">The Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                The 360° Protocol.
              </h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed">
                A disciplined four-phase maneuver engineered to move brands from obscurity to market dominance. 
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-neutral-100 z-0" />
            
            {[
              { step: "01", title: "Gap Audit", icon: Search, desc: "We deep-dive into your existing digital architecture to identify friction points and unclaimed market share." },
              { step: "02", title: "Strategic Roadmap", icon: Target, desc: "We engineer a bespoke execution plan, selecting only the high-impact maneuvers that align with your ROI goals." },
              { step: "03", title: "Precision Execution", icon: Zap, desc: "Our collective deploys cinematic creative and high-performance ads with institutional-grade accuracy." },
              { step: "04", title: "Market Dominance", icon: Trophy, desc: "We scale what works, reinforcing your brand position until you command the categorical narrative." },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15} direction="up" className="relative z-10">
                <div className="group text-center">
                  <div className="w-16 h-16 bg-white border border-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO PREVIEW - Professional Image Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                The Archive of Excellence
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Link to="/portfolio" replace className="text-sm font-medium text-neutral-500 hover:text-black transition-colors flex items-center gap-1">
                View all cases <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {projects.map((p, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl cursor-pointer ${p.className || ''}`}>
                  {/* Subtle 700ms Grayscale to Color transition + Barely noticeable 1.02 zoom */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out transform group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
                  />
                  {/* Clean gradient overlay, appearing gently on hover (300ms) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-white/70 font-medium mb-2 block">
                        {p.cat}
                      </span>
                      <h4 className="text-white text-2xl font-bold tracking-tight flex items-center gap-2">
                        {p.title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100" />
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. INVESTMENT PREVIEW - Direct Path to Pricing */}
      <section className="py-32 bg-white border-y border-neutral-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl text-left">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-4 block">Scalable Partnerships</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">Precision Tiers.</h2>
                <p className="text-neutral-500 text-lg font-light leading-relaxed">
                  Transparent investment structures engineered for every stage of your brand journey.
                </p>
              </div>
              <Link to="/plans" replace>
                <Button className="rounded-full bg-neutral-900 px-8 py-6 h-auto text-xs font-bold tracking-widest uppercase hover:bg-black active:scale-95 transition-transform">
                  View Full Mandates <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter Spark", price: "₹5,000+", desc: "For solo founders & startups." },
              { name: "Strategic Growth", price: "₹25,000+", desc: "For emerging market leaders.", featured: true },
              { name: "Market Dominance", price: "₹1,00,000+", desc: "For teams ready to lead." },
            ].map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className={`p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl ${plan.featured ? 'bg-neutral-900 text-white border-black scale-105' : 'bg-neutral-50 border-neutral-100 text-neutral-900'}`}>
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                    <span className={`text-xs ${plan.featured ? 'text-neutral-400' : 'text-neutral-400'}`}>/mo</span>
                  </div>
                  <p className={`text-sm mb-10 font-light ${plan.featured ? 'text-neutral-300' : 'text-neutral-500'}`}>{plan.desc}</p>
                  <Link to="/plans" replace>
                    <button className={`w-full py-4 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all active:scale-95 ${plan.featured ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-200 text-black hover:bg-neutral-300'}`}>
                      Select Path
                    </button>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION - Conversion Optimized */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-neutral-900">
              Ready to transcend the competition?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-neutral-500 text-lg md:text-xl mb-10 font-light">
              Limited slots available for Q3/Q4 strategic partnerships. Build your digital legacy today.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Link to="/contact" replace>
              <button className="magnetic-btn bg-black text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-neutral-900 transition-all active:scale-95 hover:scale-[1.02] shadow-elevation-mid hover:shadow-elevation-high">
                Secure Your Consultation
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. DYNAMIC MARQUEE - Strategic Separator */}
      <section className="py-20 bg-black overflow-hidden border-y border-neutral-900">
        <div className="marquee-container">
          <div className="marquee-content inline-flex items-center">
            {["STRATEGY", "CREATIVE", "DIGITAL", "BRANDING", "DEVELOPMENT", "MARKETING", "STRATEGY", "CREATIVE", "DIGITAL", "BRANDING", "DEVELOPMENT", "MARKETING"].map((text, i) => (
              <div key={i} className="flex items-center gap-8 mx-12">
                <span className="text-5xl md:text-7xl font-bold tracking-tighter text-white/10 hover:text-white/40 transition-colors duration-700 cursor-default">
                  {text}
                </span>
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER/NEWSLETTER SNIPPET */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 tracking-tight">Join the inner circle.</h3>
            <p className="text-neutral-400 text-sm">Actionable insights sent straight to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex gap-2 max-w-md">
            <input 
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 transition-colors outline-none text-sm"
            />
            <button className="px-6 py-3 bg-white text-black rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
