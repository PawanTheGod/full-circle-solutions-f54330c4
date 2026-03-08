import ScrollAnimation from "@/components/ScrollAnimation";

const ClientLogos = () => {
    return (
        <section className="py-20 md:py-32 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <p className="text-center text-xs sm:text-sm font-bold tracking-[0.3em] text-foreground/40 uppercase mb-12">Trusted By Leading Brands</p>
                </ScrollAnimation>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-1000">
                    {["TechStart", "GrowthCo", "BrandBoost", "InnovateLab", "ScaleUp", "MediaPro", "StartupHub", "DigitalEdge"].map((name, i) => (
                        <ScrollAnimation key={name} delay={i * 50}>
                            <div className="text-center text-foreground hover:text-secondary transition-colors font-display font-extrabold text-2xl md:text-3xl tracking-tight select-none">
                                {name}
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
