import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";

const categories = ["All", "Digital Marketing", "Content", "Web Development", "Physical Marketing"];

const projects = [
  { title: "TechStart SEO Overhaul", client: "TechStart", category: "Digital Marketing", desc: "Complete SEO strategy that tripled organic traffic.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { title: "GrowthCo Social Campaign", client: "GrowthCo", category: "Digital Marketing", desc: "Multi-platform campaign reaching 2M+ impressions.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" },
  { title: "FreshBite Product Shoot", client: "FreshBite", category: "Content", desc: "Product photography for e-commerce launch.", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop" },
  { title: "BrandBoost Website", client: "BrandBoost", category: "Web Development", desc: "Modern responsive website with 40% conversion uplift.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" },
  { title: "InnovateLab Reels", client: "InnovateLab", category: "Content", desc: "Viral social media reels with 500K+ views.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" },
  { title: "ScaleUp Landing Page", client: "ScaleUp", category: "Web Development", desc: "High-converting landing page for SaaS product.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" },
  { title: "MediaPro Brochures", client: "MediaPro", category: "Physical Marketing", desc: "Corporate brochure design and print production.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop" },
  { title: "StartupHub Google Ads", client: "StartupHub", category: "Digital Marketing", desc: "Google Ads campaign with 5x ROAS.", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop" },
  { title: "DigitalEdge Business Cards", client: "DigitalEdge", category: "Physical Marketing", desc: "Premium business card design with foil finishing.", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <PageHeader title="Our Work" subtitle="Success stories from clients we've helped grow" />

      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          {/* Filters */}
          <ScrollAnimation>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === c
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollAnimation key={p.title} delay={i * 80}>
                <div className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-medium text-secondary bg-secondary/20 rounded-full px-3 py-1 w-fit mb-2">{p.category}</span>
                    <h3 className="font-display font-bold text-primary-foreground text-lg">{p.title}</h3>
                    <p className="text-primary-foreground/70 text-sm mt-1">{p.client} — {p.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8">Load More Projects</Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <h2 className="font-display text-2xl font-bold text-center text-foreground mb-10">Brands We've Worked With</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["TechStart", "GrowthCo", "BrandBoost", "InnovateLab", "ScaleUp", "MediaPro", "StartupHub", "DigitalEdge", "FreshBite", "CloudNine", "PixelPerfect", "DataDriven"].map((name, i) => (
              <ScrollAnimation key={name} delay={i * 50}>
                <div className="text-center text-muted-foreground/40 hover:text-muted-foreground transition-colors font-display font-bold text-lg">{name}</div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold mb-4">Want to see your brand here?</h2>
            <p className="text-secondary-foreground/80 mb-8">Let's create something amazing together.</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
