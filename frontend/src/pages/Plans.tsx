import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, Plus, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter Spark",
    price: "5,000 - 15,000",
    description: "For solo founders & stealth startups",
    features: [
      "LinkedIn Authority Basics",
      "Core Viral Loop Content",
      "Executive Brand Identity",
      "ROI-Focused Strategy Check-ins",
    ],
    cta: "SPARK GROWTH",
    featured: false,
  },
  {
    name: "Strategic Growth",
    price: "25,000 - 75,000",
    description: "For established emerging brands",
    features: [
      "Full LinkedIn Ecosystem Mgmt",
      "Cinematic Viral Production",
      "AI-Optimized SEO Foundations",
      "Dedicated Growth Catalyst",
    ],
    cta: "ACCELERATE NOW",
    featured: true,
  },
  {
    name: "Market Dominance",
    price: "1,00,000 - 3,50,000",
    description: "For teams ready to lead",
    features: [
      "Bespoke Digital Platforms",
      "Institutional-Scale Performance Ads",
      "Global PR & Narrative Design",
      "Creative Production Retainer",
    ],
    cta: "SECURE LEADERSHIP",
    featured: false,
  },
  {
    name: "Enterprise Elite",
    price: "4,00,000 - 8,00,000+",
    description: "For global organizations",
    features: [
      "White-Label Agency Extensions",
      "Institutional-Grade Tech Ecosystems",
      "Unlimited Creative Iterations",
      "24/7 Global Concierge Support",
    ],
    cta: "REQUEST MANDATE",
    featured: false,
  },
];

const faqs = [
  {
    question: "Can I adjust my retainer tier?",
    answer: "Flexibility is core to our partnership. Retainer tiers can be adjusted with a 14-day notice prior to the next billing cycle.",
  },
  {
    question: "Is there a long-term commitment?",
    answer: "We believe in results over restrictions. All partnerships are on a month-to-month basis unless a multi-quarter roadmap is requested.",
  },
  {
    question: "How is onboarding handled?",
    answer: "After securing your slot, we assign a dedicated Project Manager to orchestrate your onboarding within 7 business days.",
  },
];

const Plans = () => {
  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-sans text-neutral-900">
      <Helmet>
        <title>Investment Tiers | 360 Marketing Agency - Scale Your Mandate</title>
        <meta name="description" content="Transparent pricing for global growth. Choose from Growth Retainer, Market Leader, or Custom Mandate tiers designed for ambitious brands." />
      </Helmet>
      
      {/* 1. PAGE HEADER - Clean Introduction */}
      <section className="bg-white pt-32 pb-32 border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mb-8 inline-block">
              Retainers
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Investment tiers for global growth.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              Transparent pricing designed for ambitious brands ready to transcend the ordinary.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. PRICING CARDS - Premium Tier Display */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div
                  className={`relative flex flex-col h-full rounded-[3rem] p-10 lg:p-12 transition-all duration-300 group
                    ${plan.featured 
                      ? "bg-white text-neutral-900 shadow-xl border-neutral-200 border hover:-translate-y-2" 
                      : "bg-[#f4f4f4] text-neutral-800 border-transparent border hover:-translate-y-1 hover:shadow-lg"
                    }`}
                >
                  {/* Featured Badge */}
                  {plan.featured && (
                    <div className="absolute top-8 right-8 bg-neutral-900 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-12">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 mb-2">
                      {plan.description}
                    </p>
                    <h3 className="text-3xl font-bold tracking-tight mb-8">
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1">
                      {plan.price === "PoA" ? (
                        <span className="text-5xl font-bold tracking-tighter">PoA</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold tracking-tighter">₹{plan.price}</span>
                          <span className="text-sm font-light text-neutral-400">/mo</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow space-y-6 mb-12">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-4">
                        <div className={`mt-1 p-0.5 rounded-full ${plan.featured ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-600"}`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-neutral-500 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <button className={`w-full py-5 rounded-full font-bold text-sm tracking-widest transition-all active:scale-95 duration-300
                      ${plan.featured 
                        ? "bg-neutral-900 text-white hover:bg-black shadow-lg" 
                        : "bg-white text-neutral-900 border border-neutral-100 hover:bg-neutral-50"
                      }`}>
                      {plan.cta} →
                    </button>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL ADD-ONS - Hybrid Strategy */}
      <section className="py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-6 block">The Tangible Perimeter</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Physical Expansion.</h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-10">
                  For brands that require a physical footprint, we offer precision offline maneuvers 
                  that synchronize perfectly with your digital ecosystem.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Billboard Placement", price: "Custom Quote" },
                    { title: "Premium Brand Print", price: "₹2,500+" },
                    { title: "Event Curation", price: "Premium Only" },
                    { title: "OOH Strategy", price: "On Quote" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                      <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-xs text-neutral-500">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden grayscale contrast-125">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                    alt="Corporate Architecture" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-[2.5rem] shadow-2xl text-neutral-900 hidden md:block max-w-xs">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Hybrid Mandate</p>
                  <p className="text-lg font-bold leading-tight">Combine Digital Mastery with Physical Presence.</p>
                  <Link to="/contact">
                    <button className="mt-6 flex items-center gap-2 text-xs font-black border-b-2 border-black pb-1 hover:gap-4 transition-all active:scale-95">
                      REQUEST HYBRID QUOTE <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FAQ SECTION - Trust Building */}
      <section className="py-32 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
              Partnership Clarifications.
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <details className="group border border-neutral-100 rounded-3xl p-6 md:p-8 cursor-pointer hover:bg-neutral-50 transition-all duration-300">
                  <summary className="flex items-center justify-between font-bold text-lg md:text-xl tracking-tight list-none">
                    {faq.question}
                    <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                      <Plus className="w-5 h-5 text-neutral-400" />
                    </div>
                  </summary>
                  <div className="mt-6 text-neutral-500 font-light leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-40 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10">
              Ready to secure dominance?
            </h2>
            <p className="text-neutral-500 text-lg md:text-xl mb-12 font-light">
              Don't just compete. Transcend the market with a persistent, data-driven strategy 
              engineered for institutional-grade scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <button className="magnetic-btn bg-black text-white px-12 py-5 rounded-full font-bold shadow-xl hover:bg-neutral-900 transition-all active:scale-95 hover:scale-[1.02]">
                  Initiate Mandate
                </button>
              </Link>
              <Link to="/services">
                <button className="flex items-center gap-2 px-12 py-5 rounded-full font-bold text-neutral-700 hover:bg-white hover:text-black transition-all active:scale-95 hover:scale-[1.02] border border-neutral-100 shadow-sm">
                  Review Capabilities
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

export default Plans;
