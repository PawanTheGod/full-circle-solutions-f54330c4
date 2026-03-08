import React, { useRef } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Quote, ArrowLeft, ArrowRight, Star, BadgeCheck } from "lucide-react";

const STATS = [
  { id: 1, label: "Capital Deployed", value: "₹5Cr+" },
  { id: 2, label: "Global Mandates", value: "120+" },
  { id: 3, label: "Creative Awards", value: "12" },
  { id: 4, label: "Success Rate", value: "98%" },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechNova SaaS",
    text: '"360 Marketing engineered a complete digital overhaul. They scaled our inbound MQL flow by 340% within 4 months, reducing our Customer Acquisition Cost by nearly 60%."',
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Growth, Quantum Logistics",
    text: '"Their data-driven approach is ruthless and effective. They built a bespoke lead-capture architecture that converted at 4x our previous industry benchmark. Undeniable ROI."',
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, FitLife Apparel",
    text: '"The strategic creative they delivered outperformed our internal creative team 10 to 1. They drove a 500% lift in ROAS during our Q4 scaling phase. Institutional grade."',
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* BENTO STATS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-[2.5rem] overflow-hidden mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 text-center group hover:bg-neutral-50 transition-colors"
            >
              <ScrollAnimation>
                <span className="block text-4xl md:text-5xl font-extrabold tracking-tighter text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                  {stat.label}
                </span>
              </ScrollAnimation>
            </div>
          ))}
        </div>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <ScrollAnimation>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary italic mb-4 block">
                Voices of Trust
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-none mb-6">
                Client Sentiments<span className="text-primary">.</span>
              </h2>
              <div className="flex items-center gap-3 bg-neutral-50 border border-neutral-100 py-2 px-4 rounded-full w-fit">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <span className="text-xs font-bold tracking-tight">Rated 4.9/5 on Clutch & Google</span>
              </div>
            </ScrollAnimation>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
            >
              <ArrowLeft
                size={20}
                className="group-active:-translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
            >
              <ArrowRight
                size={20}
                className="group-active:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          ref={carouselRef}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="min-w-full md:min-w-[400px] snap-start p-8 md:p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 flex flex-col justify-between"
            >
              <div>
                <Quote
                  className="text-primary/20 mb-8"
                  size={40}
                  fill="currentColor"
                />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800 italic mb-10">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold tracking-tight text-neutral-900">
                      {t.name}
                    </h4>
                    <BadgeCheck size={16} className="text-blue-500 min-w-4" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
