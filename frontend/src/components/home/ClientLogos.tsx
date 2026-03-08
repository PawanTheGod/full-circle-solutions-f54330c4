import ScrollAnimation from "@/components/ScrollAnimation";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Flame, TrendingUp, Zap, Target, Rocket, Activity, Globe, MonitorSmartphone } from "lucide-react";

// Mapping the required brand names to generic tech/marketing icons since actual logos aren't provided
const brands = [
    { name: "TechStart", icon: Zap },
    { name: "GrowthCo", icon: TrendingUp },
    { name: "BrandBoost", icon: Flame },
    { name: "InnovateLab", icon: Activity },
    { name: "ScaleUp", icon: Rocket },
    { name: "MediaPro", icon: MonitorSmartphone },
    { name: "StartupHub", icon: Globe },
    { name: "DigitalEdge", icon: Target },
];

const ClientLogos = () => {
    return (
        <section className="bg-background border-t border-border/40 overflow-hidden py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ScrollAnimation>
                    <p className="text-center text-xs sm:text-sm font-bold tracking-[0.3em] text-foreground/40 uppercase">Trusted By Leading Brands</p>
                </ScrollAnimation>
            </div>

            {/* The infinite slider must span full width, not be constrained by the container */}
            <div className="w-full opacity-70 grayscale hover:grayscale-0 transition-all duration-1000">
                <InfiniteSlider gap={64} duration={40} durationOnHover={80} className="py-4">
                    {brands.map((Brand, i) => (
                        <div key={Brand.name + i} className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors group px-4">
                            <Brand.icon className="h-8 w-8 md:h-10 md:w-10 text-foreground/50 group-hover:text-secondary transition-colors" />
                            <span className="font-display font-extrabold text-2xl md:text-3xl tracking-tight select-none">
                                {Brand.name}
                            </span>
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
};

export default ClientLogos;
