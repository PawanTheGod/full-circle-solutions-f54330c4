import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";
import { BarChart3, Video, PenTool, Code, ArrowRight } from "lucide-react";

const services = [
    { icon: BarChart3, title: "Digital Marketing", desc: "Reach your target audience with strategic campaigns across LinkedIn, Google, and social media." },
    { icon: Video, title: "Content Creation", desc: "Engaging visual content including photography, videos, reels, and event coverage." },
    { icon: PenTool, title: "Creative Services", desc: "Compelling copy and stunning designs that capture attention and drive conversions." },
    { icon: Code, title: "Web Development", desc: "Beautiful, high-performing websites built to convert visitors into customers." },
];

const ServicesPreview = () => {
    return (
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
    );
};

export default ServicesPreview;
