import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="bg-secondary/5 border border-secondary/20 rounded-[2.5rem] py-20 px-8 text-center relative overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">Ready to build something legendary?</h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                                Let's discuss how we can help you achieve your goals with premium digital marketing and software development.
                            </p>
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-14 text-lg font-medium shadow-lg shadow-secondary/25 transition-all w-full sm:w-auto group">
                                <Link to="/contact">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default CTASection;
