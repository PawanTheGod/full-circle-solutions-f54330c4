import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

const projects = [
    { title: "TechStart Rebrand", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
    { title: "GrowthCo Campaign", category: "Content Creation", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" },
    { title: "BrandBoost Website", category: "Web Development", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" },
];

const FeaturedProjects = () => {
    return (
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
    );
};

export default FeaturedProjects;
