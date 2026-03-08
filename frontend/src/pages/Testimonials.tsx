import { Star, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: 50, suffix: "Cr+", label: "CAPITAL DEPLOYED" },
  { value: 120, suffix: "+", label: "GLOBAL MANDATES" },
  { value: 12, suffix: "", label: "EXECUTION AREAS" },
  { value: 98, suffix: "%", label: "SUCCESS RATE" },
];

const testimonials = [
  {
    quote: "360 Marketing engineered a complete digital overhaul. They scaled our inbound MQL flow by 340% within 4 months, reducing our Customer Acquisition Cost by nearly 60%.",
    author: "Sarah Jenkins",
    role: "VP, TECHNOLOGY SALES",
    company: "Enterprise SaaS",
    rating: 5,
  },
  {
    quote: "The LinkedIn Authority program transformed our executive positioning. Our outbound engagement rate tripled, and we secured 4 enterprise-level contracts in the first quarter alone.",
    author: "Michael Chen",
    role: "HEAD OF GROWTH",
    company: "Quantum Logistics",
    rating: 5,
  },
  {
    quote: "Most agencies promise 'growth'—360 delivers architecture. Their bespoke web ecosystem didn't just look premium; it boosted our checkout conversion by 24% overnight.",
    author: "Elena Rodriguez",
    role: "FOUNDER",
    company: "FitLife Apparel",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-sans text-neutral-900 overflow-hidden">
      <Helmet>
        <title>Testimonials | 360 Marketing Agency - Institutional Trust</title>
        <meta name="description" content="Read client success stories and verified testimonials. Discover why global brands trust 360 Marketing for strategic growth and digital dominance." />
      </Helmet>
      
      {/* 1. PAGE HEADER - Stats Dashboard Feel */}
      <section className="bg-white pt-32 pb-32 border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mb-8 inline-block">
                Institutional Trust
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                Numbers that define dominance.
              </h1>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-10 text-center border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    className="text-5xl lg:text-6xl font-bold block mb-3 tracking-tighter"
                  />
                  <p className="text-[10px] text-neutral-400 tracking-[0.2em] font-bold uppercase">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TESTIMONIALS SECTION - Voices of Trust */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs text-neutral-400 tracking-[0.3em] font-bold mb-4 block uppercase">
                Voices of Trust
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Client Sentiments.
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-500 font-medium">
                  Rated 4.9 on <span className="text-neutral-900">Clutch</span> & <span className="text-neutral-900">Google</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15} direction="up">
                <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-full border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-neutral-700 text-lg mb-10 flex-grow font-light leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-8 border-t border-neutral-50">
                    <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-white text-xl font-bold group-hover:bg-black transition-colors">
                      {testimonial.author[0]}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-neutral-900 tracking-tight">
                          {testimonial.author}
                        </p>
                        <BadgeCheck size={16} className="text-blue-500" />
                      </div>
                      <p className="text-[10px] text-neutral-400 tracking-widest font-bold uppercase mt-1 leading-none">
                        {testimonial.role} — {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA SECTION */}
      <section className="bg-black py-40 text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
              Join the Dominant Elite.
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-10 font-light">
              Experience the same level of strategic architecture that transformed 
              these industry leaders into market dominators.
            </p>
            <Link to="/contact" replace>
              <button className="magnetic-btn bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-neutral-200 transition-all active:scale-95 hover:scale-[1.02] shadow-xl">
                Start Your Journey
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
    </div>
  );
};

export default Testimonials;
