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
  CheckCircle,
  Users,
  Briefcase,
  Clock,
  Layers,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- Counter Component ---
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
          const duration = 1500;
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// --- Testimonial Data ---
const testimonials = [
  {
    quote: "360 Marketing transformed our online presence. Our website traffic increased by 200% in just 3 months!",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    rating: 5,
  },
  {
    quote: "The team's creative approach to content marketing helped us stand out in a crowded market.",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthCo",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and results-driven. Highly recommend their services!",
    name: "Priya Sharma",
    role: "Founder",
    company: "BrandBoost",
    rating: 5,
  },
];

const services = [
  { icon: BarChart3, title: "Digital Marketing", desc: "Reach your target audience with strategic campaigns across LinkedIn, Google, and social media." },
  { icon: Video, title: "Content Creation", desc: "Engaging visual content including photography, videos, reels, and event coverage." },
  { icon: PenTool, title: "Creative Services", desc: "Compelling copy and stunning designs that capture attention and drive conversions." },
  { icon: Code, title: "Web Development", desc: "Beautiful, high-performing websites built to convert visitors into customers." },
];

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Layers, value: 10, suffix: "+", label: "Services Offered" },
];

const projects = [
  { title: "TechStart Rebrand", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { title: "GrowthCo Campaign", category: "Content Creation", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" },
  { title: "BrandBoost Website", category: "Web Development", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" },
];

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto container-padding text-center py-32">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
            360 Marketing —{" "}
            <span className="text-secondary">Complete Digital & Offline</span>{" "}
            Growth Solutions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            We help businesses grow with data-driven digital marketing, creative content, and powerful web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 text-base">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary-foreground/50" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive marketing solutions tailored for your business growth.</p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollAnimation key={s.title} delay={i * 100}>
                <Card className="group border-border hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-card-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="text-sm font-medium text-secondary hover:underline flex items-center gap-1 mt-auto">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="font-display text-4xl md:text-5xl font-bold mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-primary-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">A glimpse of the projects that drive real results for our clients.</p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollAnimation key={p.title} delay={i * 100}>
                <div className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-medium text-secondary bg-secondary/20 rounded-full px-3 py-1 w-fit mb-2">{p.category}</span>
                    <h3 className="font-display font-bold text-primary-foreground text-lg">{p.title}</h3>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollAnimation key={t.name} delay={i * 100}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
                    <div className="mt-auto flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">Trusted By Leading Brands</p>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["TechStart", "GrowthCo", "BrandBoost", "InnovateLab", "ScaleUp", "MediaPro", "StartupHub", "DigitalEdge"].map((name, i) => (
              <ScrollAnimation key={name} delay={i * 50}>
                <div className="text-center text-muted-foreground/40 hover:text-muted-foreground transition-colors font-display font-bold text-lg md:text-xl">
                  {name}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <ScrollAnimation>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-lg mx-auto">Let's discuss how we can help you achieve your goals with data-driven marketing.</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Index;
