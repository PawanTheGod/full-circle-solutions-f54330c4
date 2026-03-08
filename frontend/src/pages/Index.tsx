import Hero from "@/components/home/Hero";
import ScrollIndicator from "@/components/home/ScrollIndicator";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientLogos from "@/components/home/ClientLogos";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative">
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
