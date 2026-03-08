import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight } from "lucide-react";

const projects = [
    { title: "TechStart Rebrand", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
    { title: "GrowthCo Campaign", category: "Content Creation", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" },
    { title: "BrandBoost Website", category: "Web Development", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" },
];

const FeaturedProjects = () => {
    return (
        <section className="section-padding bg-background relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-foreground/60 uppercase mb-4 block">
                            Our Portfolio
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">Featured Work</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A glimpse of the projects that drive real results and elevate industry standards.</p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <ScrollAnimation key={p.title} delay={i * 100}>
                            <Link to="/portfolio" className="group block relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 bg-muted/10">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-xs font-bold tracking-wider text-secondary uppercase mb-3 drop-shadow-md">{p.category}</span>
                                    <h3 className="font-display font-extrabold text-white text-2xl flex items-center justify-between">
                                        {p.title}
                                        <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </h3>
                                </div>
                            </Link>
                        </ScrollAnimation>
                    ))}
                </div>

                <div className="text-center mt-16 md:mt-20">
                    <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-medium border-border hover:bg-muted/50 transition-all">
                        <Link to="/portfolio">View All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
