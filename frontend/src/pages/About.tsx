import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Target,
  Eye,
  BarChart3,
  Lightbulb,
  MessageCircle,
  Heart,
  Shield,
  Zap,
  Users,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: BarChart3,
    title: "Data Artistry",
    desc: "Decisions fueled by high-fidelity analytics and measurable KPIs.",
  },
  {
    icon: Lightbulb,
    title: "Creative Edge",
    desc: "Bold, avant-garde ideas that cut through market noise.",
  },
  {
    icon: MessageCircle,
    title: "Radical Candor",
    desc: "Clear reporting and direct, honest collaboration.",
  },
  {
    icon: Target,
    title: "Pure Performance",
    desc: "Success defined by your growth, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "White-Glove Support",
    desc: "A dedicated concierge team for your brand's every need.",
  },
  {
    icon: Zap,
    title: "Elite Efficiency",
    desc: "Enterprise-grade precision at a competitive pace.",
  },
];

const team = [
  {
    name: "Aditya Kapoor",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Meera Joshi",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Rohan Singh",
    role: "Head of Digital",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Content Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    desc: "An obsession with excellence in every pixel.",
  },
  {
    icon: Users,
    title: "Unity",
    desc: "Your vision, amplified by our collective expertise.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Meticulous execution where every detail matters.",
  },
  { icon: Eye, title: "Foresight", desc: "Defining tomorrow's trends today." },
];

const About = () => {
  return (
    <div className="bg-white">
      <PageHeader
        category="Manifesto"
        title="Architecture of Growth"
        subtitle="Bridging the gap between creative artistry and data-driven dominance."
      />

      {/* STORY SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollAnimation>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] group-hover:bg-primary/10 transition-colors -z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                    alt="Agency Life"
                    className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <ScrollAnimation delay={200}>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary italic">
                  Our Origin
                </span>
                <h2 className="text-5xl font-extrabold tracking-tighter text-neutral-900 leading-[0.9] mt-4">
                  Born in Mumbai.
                  <br />
                  Scaled for the{" "}
                  <span className="italic font-light serif text-neutral-400">
                    World.
                  </span>
                </h2>
                <div className="space-y-6 text-neutral-500 font-light text-lg leading-relaxed mt-8">
                  <p>
                    360 Marketing was founded on a singular premise: premium
                    strategy shouldn't be a luxury reserved for the few.
                  </p>
                  <p>
                    From our Mumbai headquarters, we've orchestrated growth for
                    over 30 partners, blending high-fidelity storytelling with
                    cold, hard data. We don't just run ads; we build legacies.
                  </p>
                </div>
                <div className="pt-6">
                  <Button
                    variant="outline"
                    className="h-14 px-8 rounded-full border-neutral-200 hover:bg-black hover:text-white transition-all group"
                  >
                    View Our Legacy{" "}
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - LUXE CARDS */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ScrollAnimation>
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <Target className="text-primary mb-8" size={48} strokeWidth={1} />
              <h3 className="text-3xl font-bold tracking-tight mb-6">
                The Mission
              </h3>
              <p className="text-neutral-400 font-light text-lg leading-relaxed">
                To democratize elite marketing through innovative, data-driven
                ecosystems that drive consistent, measurable ROI for every
                mandate we hold.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <Eye className="text-primary mb-8" size={48} strokeWidth={1} />
              <h3 className="text-3xl font-bold tracking-tight mb-6">
                The Vision
              </h3>
              <p className="text-neutral-400 font-light text-lg leading-relaxed">
                To serve as India's most prestigious growth partner, setting the
                global standard for creative transparency and market leadership.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* WHY CHOOSE US - MINIMALIST GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-neutral-300 mb-4">
                Core Competencies
              </h2>
              <p className="text-4xl font-bold tracking-tighter">
                Engineered for dominance.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {reasons.map((r, i) => (
              <ScrollAnimation key={r.title} delay={i * 80}>
                <div className="p-12 border border-neutral-50 hover:bg-neutral-50 transition-colors group h-full">
                  <r.icon
                    className="text-primary mb-8 transition-transform group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold mb-4 tracking-tight">
                    {r.title}
                  </h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - EDITORIAL STYLE */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold tracking-tighter">
                The Collective.
              </h2>
              <p className="text-neutral-500 mt-4 font-light text-lg">
                A handpicked team of strategists, dreamers, and data scientists.
              </p>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-neutral-200 pb-2 hover:border-primary transition-all"
            >
              Join Our Team{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <ScrollAnimation key={m.name} delay={i * 100}>
                <div className="group relative">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href="#"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{m.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">
                    {m.role}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10">
              Transform your <br />
              narrative.
            </h2>
            <Button
              asChild
              className="h-20 px-12 rounded-full bg-black text-white text-xl hover:bg-primary transition-all shadow-2xl"
            >
              <Link to="/contact">Partner with Us</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
