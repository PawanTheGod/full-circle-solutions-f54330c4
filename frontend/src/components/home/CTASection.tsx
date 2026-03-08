import { Link } from "react-router-dom";
import { FlowButton } from "@/components/ui/flow-button";
import ScrollAnimation from "@/components/ScrollAnimation";

const CTASection = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] py-24 px-8 text-center relative overflow-hidden backdrop-blur-md shadow-2xl shadow-primary/5">
                        {/* Decorative glowing blobs */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight drop-shadow-sm">
                                Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/70">legendary?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                                Let's discuss how we can help you achieve your goals with premium digital marketing and software development.
                            </p>
                            <div className="flex justify-center mt-8">
                                <Link to="/contact">
                                    <FlowButton text="Start Your Project" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default CTASection;
