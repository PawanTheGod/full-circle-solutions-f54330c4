import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Star, Users, Award, TrendingUp } from "lucide-react";

const testimonials = [
  { quote: "360 Marketing transformed our online presence. Our website traffic increased by 200% in just 3 months!", name: "Sarah Johnson", role: "CEO", company: "TechStart", rating: 5 },
  { quote: "The team's creative approach to content marketing helped us stand out in a crowded market.", name: "Michael Chen", role: "Marketing Director", company: "GrowthCo", rating: 5 },
  { quote: "Professional, responsive, and results-driven. Highly recommend their services!", name: "Priya Sharma", role: "Founder", company: "BrandBoost", rating: 5 },
  { quote: "Their SEO expertise took us from page 5 to page 1 on Google. Incredible results!", name: "Rahul Verma", role: "CTO", company: "InnovateLab", rating: 5 },
  { quote: "The product photography they delivered was beyond our expectations. Absolutely stunning work.", name: "Anjali Patel", role: "E-commerce Manager", company: "FreshBite", rating: 5 },
  { quote: "We saw a 5x return on our Google Ads investment within the first quarter. Truly data-driven.", name: "David Kim", role: "Head of Growth", company: "ScaleUp", rating: 5 },
  { quote: "Their team feels like an extension of our own. Dedicated, creative, and always on time.", name: "Lisa Wong", role: "CMO", company: "MediaPro", rating: 5 },
  { quote: "From branding to web development, they handled everything seamlessly. One-stop solution!", name: "Arjun Mehta", role: "Co-Founder", company: "StartupHub", rating: 5 },
  { quote: "The landing page they built for our SaaS product boosted conversions by 40%. Game-changer!", name: "Emily Davis", role: "Product Manager", company: "DigitalEdge", rating: 5 },
];

const stats = [
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: TrendingUp, value: "90%", label: "Client Retention Rate" },
  { icon: Award, value: "50+", label: "Projects Delivered" },
];

const Testimonials = () => {
  return (
    <div>
      <PageHeader title="Client Success Stories" subtitle="Don't just take our word for it" />

      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollAnimation key={t.name} delay={i * 80}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">"{t.quote}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <ScrollAnimation key={s.label}>
                <div className="text-center">
                  <s.icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <div className="font-display text-3xl md:text-4xl font-bold mb-1">{s.value}</div>
                  <p className="text-sm text-primary-foreground/60">{s.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold mb-4">Ready to join our success stories?</h2>
            <p className="text-secondary-foreground/80 mb-8">Let's create remarkable results for your business.</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
