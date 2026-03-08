import Hero from "@/components/home/Hero";
import ScrollIndicator from "@/components/home/ScrollIndicator";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientLogos from "@/components/home/ClientLogos";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="overflow-x-hidden relative min-h-screen bg-animated-gradient">
      {/* Ambient Orbs - Toned Down */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-secondary/15 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[60vh] bg-primary/10 rounded-full blur-[140px] mix-blend-screen opacity-25 animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vh] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-30 animation-delay-4000"></div>

        {/* Structural Texture Layers */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-noise opacity-100"></div>

        {/* Sublayer to soften the black background slightly and add light spill */}
        <div className="absolute inset-0 bg-background/5 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-0">
        <Hero />
        <ScrollIndicator />
      </div>
      <ServicesPreview />
      <StatsSection />
      <FeaturedProjects />
      <ClientLogos />
      <CTASection />
    </div>
  );
};

export default Index;
