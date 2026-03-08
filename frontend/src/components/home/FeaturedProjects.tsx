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
                            <Link to="/portfolio" className="group block relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 transform hover:-translate-y-2 border border-border/40 hover:border-secondary/40 bg-muted/20">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-3 drop-shadow-md block">{p.category}</span>
                                        <h3 className="font-display font-extrabold text-white text-2xl flex items-center justify-between">
                                            {p.title}
                                            <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 backdrop-blur-sm border border-secondary/30">
                                                <ArrowRight className="h-5 w-5 text-white" />
                                            </div>
                                        </h3>
                                    </div>
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
