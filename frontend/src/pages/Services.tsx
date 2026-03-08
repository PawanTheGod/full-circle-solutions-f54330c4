import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  BarChart3, Search, Megaphone, Instagram,
  Camera, Video, Film, Calendar, Scissors,
  PenTool, Palette, Code, Globe, Layout,
  CreditCard, FileText, Printer, ArrowUpRight
} from "lucide-react";

const sections = [
  {
    title: "Digital Dominance",
    id: "digital",
    desc: "Precision-engineered campaigns for the modern algorithm.",
    services: [
      { icon: BarChart3, title: "LinkedIn Authority", desc: "B2B lead generation through strategic executive positioning.", price: "₹25,000/mo" },
      { icon: Search, title: "Search Ecosystems", desc: "Omnichannel SEO to ensure you own your market's search intent.", price: "From ₹15,000/mo" },
      { icon: Megaphone, title: "Performance Media", desc: "Data-driven PPC management across Google and Meta networks.", price: "From ₹20,000/mo" },
    ],
  },
  {
    title: "Visual Storytelling",
    id: "content",
    desc: "Capturing the essence of your brand in high-fidelity.",
    services: [
      { icon: Camera, title: "Artistic Photography", desc: "High-end product and lifestyle shoots for premium brands.", price: "₹10,000 - ₹25,000" },
      { icon: Film, title: "Cinematic Reels", desc: "Short-form vertical storytelling optimized for rapid virality.", price: "₹5,000 - ₹12,000" },
      { icon: Scissors, title: "Post-Production", desc: "Professional grading, sound design, and motion graphics.", price: "From ₹8,000" },
    ],
  },
  {
    title: "Digital Architecture",
    id: "web",
    desc: "Building seamless high-performance web ecosystems.",
    services: [
      { icon: Code, title: "Bespoke Platforms", desc: "Custom web development focused on conversion and speed.", price: "₹1.5 Lakh+" },
      { icon: Layout, title: "Conversion Nodes", desc: "High-impact landing pages for specific marketing funnels.", price: "From ₹25,000" },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        category="Capabilities"
        title="Solutions for a new era" 
        subtitle="A multi-disciplinary approach to scaling brands in a fragmented digital landscape." 
      />

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {sections.map((section, si) => (
              <div key={section.title} className="grid lg:grid-cols-12 gap-12">
                
                {/* STICKY SECTION HEADER */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                  <ScrollAnimation>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary italic mb-4 block">
                      0{si + 1} — discipline
                    </span>
                    <h2 className="text-4xl font-extrabold tracking-tighter mb-6">{section.title}</h2>
                    <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-xs">
                      {section.desc}
                    </p>
                  </ScrollAnimation>
                </div>

                {/* SERVICES GRID */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
                  {section.services.map((s, i) => (
                    <ScrollAnimation key={s.title} delay={i * 100}>
                      <div className="group p-8 rounded-[2rem] bg-neutral-50 border border-transparent hover:border-neutral-200 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                          <s.icon strokeWidth={1.5} size={20} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
                        <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                          {s.desc}
                        </p>
                        <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">{s.price}</span>
                          <Link to="/contact" className="p-2 rounded-full bg-neutral-100 group-hover:bg-primary group-hover:text-white transition-all">
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL CAPABILITIES BOX */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tighter mb-4">Physical Marketing & Branding</h2>
              <p className="text-neutral-400 font-light leading-relaxed">
                We also offer premium offline solutions including high-end business card design, brochure architecture, and newspaper ad placements for brands that require a physical footprint.
              </p>
            </div>
            <Button asChild className="h-16 px-10 rounded-2xl bg-white text-black hover:bg-primary hover:text-white transition-all shadow-xl font-bold">
              <Link to="/contact">Discuss Custom Mandate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CONCIERGE CTA */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-8 text-neutral-900">
              Curated for your <br />ambition.
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto mb-12 text-lg font-light leading-relaxed">
              Don't settle for off-the-shelf solutions. Let's engineer a bespoke growth roadmap tailored to your specific market position.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="h-20 px-12 rounded-full bg-black text-white text-lg hover:bg-primary transition-all shadow-2xl">
                <Link to="/contact">Request Partnership</Link>
              </Button>
              <Button asChild variant="ghost" className="h-20 px-12 rounded-full text-lg border border-neutral-100">
                <Link to="/portfolio">Explore Case Studies</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;