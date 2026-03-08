import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  BarChart3, Search, Megaphone, Instagram,
  Camera, Video, Film, Calendar, Scissors,
  PenTool, Palette,
  Code, Globe, Layout,
  CreditCard, FileText, Printer,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  price?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, delay = 0 }: ServiceCardProps) => (
  <ScrollAnimation delay={delay}>
    <Card className="group h-full hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display font-semibold text-lg text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {price && <p className="text-sm font-semibold text-secondary">{price}</p>}
        <Button asChild size="sm" className="mt-auto w-fit bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">
          <Link to="/contact">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  </ScrollAnimation>
);

const sections = [
  {
    title: "Digital Marketing",
    icon: BarChart3,
    services: [
      { icon: BarChart3, title: "LinkedIn Marketing", desc: "Strategic B2B campaigns on LinkedIn to generate high-quality leads and build industry authority.", price: "₹25,000/mo" },
      { icon: Search, title: "SEO Services", desc: "Improve your search engine rankings with on-page, off-page, and technical SEO strategies.", price: "From ₹15,000/mo" },
      { icon: Megaphone, title: "Google Ads Management", desc: "Data-driven PPC campaigns on Google to drive targeted traffic and maximize ROI.", price: "From ₹20,000/mo" },
      { icon: Instagram, title: "Instagram Promotion", desc: "Grow your brand presence on Instagram with engaging content and targeted advertising.", price: "From ₹10,000/mo" },
    ],
  },
  {
    title: "Content Creation",
    icon: Video,
    services: [
      { icon: Camera, title: "Product Photography", desc: "Professional product shoots that showcase your offerings in the best light.", price: "₹5,000 - ₹10,000" },
      { icon: Video, title: "Product Videos", desc: "Engaging product videos that tell your brand story and drive conversions.", price: "₹8,000 - ₹15,000" },
      { icon: Film, title: "Social Media Reels", desc: "Short-form vertical videos optimized for Instagram Reels and YouTube Shorts.", price: "₹3,000 - ₹7,000" },
      { icon: Calendar, title: "Event Coverage", desc: "Comprehensive photo and video coverage for corporate events and launches.", price: "From ₹15,000" },
      { icon: Scissors, title: "Video Editing", desc: "Professional video editing with motion graphics, color grading, and sound design.", price: "₹5,000 - ₹12,000" },
    ],
  },
  {
    title: "Creative Services",
    icon: PenTool,
    services: [
      { icon: PenTool, title: "Professional Copywriting", desc: "Persuasive copy for websites, ads, emails, and social media that converts readers into customers.", price: "From ₹5,000" },
      { icon: Palette, title: "Graphic Design", desc: "Eye-catching visuals including social media graphics, banners, infographics, and brand assets.", price: "From ₹3,000" },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    services: [
      { icon: Code, title: "Startup Websites", desc: "Modern, responsive websites designed to establish your startup's online presence.", price: "₹1 - ₹2 Lakh" },
      { icon: Globe, title: "Business Websites", desc: "Full-featured business websites with CMS, analytics, and conversion optimization.", price: "From ₹1.5 Lakh" },
      { icon: Layout, title: "Landing Pages", desc: "High-converting landing pages designed for specific campaigns and lead generation.", price: "From ₹25,000" },
    ],
  },
  {
    title: "Physical Marketing",
    icon: Printer,
    services: [
      { icon: CreditCard, title: "Business Cards", desc: "Premium business cards that make a lasting first impression with elegant designs.", price: "From ₹2,000" },
      { icon: FileText, title: "Flyers & Brochures", desc: "Eye-catching print materials for events, promotions, and brand awareness campaigns.", price: "From ₹3,000" },
      { icon: Printer, title: "Offline Advertising", desc: "Traditional advertising solutions including hoardings, newspaper ads, and promotional materials.", price: "Custom Pricing" },
    ],
  },
];

const Services = () => {
  return (
    <div>
      <PageHeader title="Our Services" subtitle="Comprehensive marketing solutions for businesses of all sizes" />

      {sections.map((section, si) => (
        <section key={section.title} className={`section-padding ${si % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container mx-auto container-padding">
            <ScrollAnimation>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{section.title}</h2>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.services.map((s, i) => (
                <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.desc} price={s.price} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold mb-4">Not sure which service you need?</h2>
            <p className="text-secondary-foreground/80 mb-8">Let us help you find the right solution for your business.</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
