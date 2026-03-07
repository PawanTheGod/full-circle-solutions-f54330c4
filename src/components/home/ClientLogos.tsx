import ScrollAnimation from "@/components/ScrollAnimation";

const ClientLogos = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto container-padding">
                <ScrollAnimation>
                    <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">Trusted By Leading Brands</p>
                </ScrollAnimation>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {["TechStart", "GrowthCo", "BrandBoost", "InnovateLab", "ScaleUp", "MediaPro", "StartupHub", "DigitalEdge"].map((name, i) => (
                        <ScrollAnimation key={name} delay={i * 50}>
                            <div className="text-center text-muted-foreground/40 hover:text-muted-foreground transition-colors font-display font-bold text-lg md:text-xl">
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
