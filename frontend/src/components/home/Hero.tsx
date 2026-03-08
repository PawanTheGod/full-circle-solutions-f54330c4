import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center bg-background text-foreground overflow-hidden">
            {/* Ambient Top Glow Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-80" />

            {/* Main Gradient Background Layers */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--secondary)/0.18),transparent_70%)] pointer-events-none" />

            {/* Blurred Glowing Blobs for Depth */}
            <div className="absolute top-[10%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/25 rounded-full blur-[140px] pointer-events-none opacity-80 mix-blend-screen" />
            <div className="absolute bottom-[20%] right-[10%] translate-x-1/2 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none opacity-70 mix-blend-screen" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                {/* Small Top Text Box */}
                <div className="animate-fade-in opacity-0 mb-8" style={{ animationFillMode: 'forwards' }}>
                    <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] text-foreground/70 uppercase py-2 px-5 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm shadow-sm">
                        Innovation <span className="text-secondary mx-1">•</span> Technology <span className="text-secondary mx-1">•</span> Impact
                    </span>
                </div>

                {/* Main Heading with Gradient Text */}
                <h1
                    className="animate-fade-in opacity-0 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50 drop-shadow-sm"
                    style={{ animationDelay: "150ms", animationFillMode: 'forwards' }}
                >
                    Building the future<br className="hidden sm:block" />
                    {" "}through technology.
                </h1>

                {/* Description */}
                <p
                    className="animate-fade-in opacity-0 text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                    style={{ animationDelay: "300ms", animationFillMode: 'forwards' }}
                >
                    We design and develop modern digital solutions that combine
                    creativity, technology, and strategy to solve real-world
                    problems and deliver meaningful impact.
                </p>

                {/* Buttons */}
                <div
                    className="animate-fade-in opacity-0 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0"
                    style={{ animationDelay: "450ms", animationFillMode: 'forwards' }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-14 text-base font-semibold shadow-xl shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-secondary/30 active:translate-y-0 active:scale-95 w-full sm:w-auto"
                    >
                        <Link to="/contact">Get Started</Link>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-full px-10 h-14 text-base font-semibold border-border/60 bg-background/50 backdrop-blur-md text-foreground hover:bg-muted/80 hover:text-foreground transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 w-full sm:w-auto"
                    >
                        <Link to="/portfolio">View Our Work</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;