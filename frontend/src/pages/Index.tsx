import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  BarChart3,
  Video,
  PenTool,
  Code,
  ChevronDown,
  Star,
  ArrowRight,
  Briefcase,
  Users,
  Clock,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- Sophisticated Counter ---
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const services = [
  { icon: BarChart3, title: "Digital Strategy", desc: "Precision-targeted growth through LinkedIn, Google, and elite social channels." },
  { icon: Video, title: "Creative Production", desc: "High-fidelity visual storytelling, from event coverage to cinematic brand films." },
  { icon: PenTool, title: "Design Systems", desc: "Stunning visual identities and conversion-optimized copy that commands attention." },
  { icon: Code, title: "Technical Solutions", desc: "Bespoke, high-performance web ecosystems built for seamless user conversion." },
];

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Mandates Executed" },
  { icon: Users, value: 30, suffix: "+", label: "Global Partners" },
  { icon: Clock, value: 5, suffix: "+", label: "Years of Mastery" },
  { icon: Layers, value: 12, suffix: "+", label: "Domain Expertises" },
];

const projects = [
  { title: "The Modern Rebrand", cat: "Identity", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { title: "Growth Ecosystem", cat: "Strategy", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" },
  { title: "Digital Architecture", cat: "Development", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80" },
];

const Index = () => {
  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white">
      
      {/* ELITE HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-50 -z-10" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8 text-left">
            <ScrollAnimation>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
                360° Evolution
              </span>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mt-6 text-neutral-900">
                Where Strategy <br /> Meets <span className="italic font-light serif text-neutral-400">Art.</span>
              </h1>
              <p className="text-xl text-neutral-500 font-light max-w-lg mt-8 leading-relaxed">
                Transforming emerging brands into industry icons through high-performance digital marketing and bespoke creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button asChild className="h-16 px-10 rounded-2xl bg-black text-white hover:scale-105 transition-transform text-lg shadow-2xl">
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
                <Button asChild variant="ghost" className="h-16 px-8 rounded-2xl text-lg group">
                  <Link to="/portfolio" className="flex items-center gap-2">
                    View Curated Work <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={200} className="relative hidden lg:block">
             <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Studio Workspace"
                />
             </div>
             {/* Floating Achievement Card */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 animate-float">
                <p className="text-4xl font-bold tracking-tighter">98%</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Client Retention</p>
             </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* DOMAIN EXPERTISE (Services) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">Expertise</span>
              <h2 className="text-5xl font-bold tracking-tighter mt-4 leading-tight">Mastering every touchpoint of the consumer journey.</h2>
            </div>
            <Link to="/services" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-neutral-100 pb-2 hover:border-primary transition-all">
              Explore Services <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {services.map((s, i) => (
              <ScrollAnimation key={s.title} delay={i * 100}>
                <div className="group p-10 bg-[#fafafa] hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 h-full border border-transparent hover:border-neutral-100 rounded-[2rem]">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <s.icon strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS THAT MATTER */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-white group-hover:text-primary transition-colors duration-500">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS (Projects) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-neutral-300 text-center mb-20 italic">Curated Portfolio</h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <ScrollAnimation key={p.title} delay={i * 150}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8">
                    <img 
                      src={p.img} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                      alt={p.title} 
                    />
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
                      <ArrowUpRight />
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{p.cat}</span>
                  <h3 className="text-2xl font-bold tracking-tight mt-2">{p.title}</h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTIGE TESTIMONIALS */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <div className="flex justify-center gap-1 mb-8">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-primary text-primary" />)}
              </div>
              <h3 className="text-3xl md:text-5xl font-light italic text-neutral-800 leading-tight">
                "360 Marketing didn't just provide a service; they provided a roadmap to industry leadership. Our conversion metrics haven't been the same since."
              </h3>
              <div className="mt-12">
                <p className="font-bold text-lg tracking-tight">Sarah Johnson</p>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">CEO, TechStart Global</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10">
              Ready to transcend <br /> the competition?
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto mb-12 text-lg font-light">
              Limited slots available for Q3/Q4 strategic partnerships. Let's discuss your brand's future.
            </p>
            <Button asChild className="h-20 px-12 rounded-full bg-neutral-900 text-white text-xl hover:bg-primary transition-all shadow-2xl">
              <Link to="/contact">Secure Your Consultation</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Index;