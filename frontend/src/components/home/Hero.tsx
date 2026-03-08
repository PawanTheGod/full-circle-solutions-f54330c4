import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden pt-20">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in flex flex-col items-center">

                    {/* Small Top Text */}
                    <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-foreground/60 uppercase mb-8">
                        Innovation • Technology • Impact
                    </span>

                    {/* Main Heading */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground mb-8 max-w-5xl mx-auto">
                        Building the future<br />
                        through technology.
                    </h1>

                    {/* Description */}
                    <p
                        className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12"
                        style={{ animationDelay: "200ms" }}
                    >
                        We design and develop modern digital solutions that combine
                        creativity, technology, and strategy to solve real-world
                        problems and deliver meaningful impact.
                    </p>

                    {/* Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        style={{ animationDelay: "400ms" }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-secondary/25 transition-all w-full sm:w-auto"
                        >
                            <Link to="/contact">Get Started</Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 h-14 text-base font-medium border-border/50 text-foreground hover:bg-muted/50 transition-all w-full sm:w-auto"
                        >
                            <Link to="/portfolio">View Our Work</Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;