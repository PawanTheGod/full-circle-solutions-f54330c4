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
        <section className="section-padding bg-background relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-foreground/60 uppercase mb-4 block">
                            Our Expertise
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">What We Do</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive marketing solutions tailored for your business growth, combining creativity with technical excellence.</p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {services.map((s, i) => (
                        <ScrollAnimation key={s.title} delay={i * 100}>
                            <Card className="group relative bg-gradient-to-b from-muted/50 to-background border-border/40 hover:border-secondary/50 shadow-sm hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 transition-all duration-500 h-full rounded-2xl overflow-hidden backdrop-blur-sm">
                                {/* Subtle inner glow effect for SaaS feel */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <CardContent className="p-8 flex flex-col items-start gap-5 h-full relative z-10">
                                    <div className="h-14 w-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                                        <s.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-foreground mt-2 group-hover:text-secondary transition-colors duration-300">{s.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>
                                    <Link to="/services" className="text-sm font-semibold text-secondary hover:text-secondary/80 flex items-center gap-2 mt-4 group/link">
                                        Learn More <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
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
