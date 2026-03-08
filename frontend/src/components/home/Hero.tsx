import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
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
        </section>
    );
};

export default Hero;
