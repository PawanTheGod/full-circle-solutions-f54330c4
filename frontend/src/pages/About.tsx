import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Target, Eye, BarChart3, Lightbulb, MessageCircle, Heart,
  Shield, Zap, Users, Linkedin,
} from "lucide-react";

const reasons = [
  { icon: BarChart3, title: "Data-Driven Strategies", desc: "Every decision backed by analytics and measurable KPIs." },
  { icon: Lightbulb, title: "Creative Excellence", desc: "Bold ideas that stand out in crowded markets." },
  { icon: MessageCircle, title: "Transparent Communication", desc: "Regular updates, clear reporting, and open collaboration." },
  { icon: Target, title: "Results-Focused Approach", desc: "We measure success by your growth, not vanity metrics." },
  { icon: Shield, title: "Dedicated Support", desc: "A committed team that's always there when you need them." },
  { icon: Zap, title: "Affordable Pricing", desc: "Enterprise-quality marketing at startup-friendly prices." },
];

const team = [
  { name: "Aditya Kapoor", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Meera Joshi", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Rohan Singh", role: "Head of Digital", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
  { name: "Sneha Reddy", role: "Content Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const values = [
  { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every project." },
  { icon: Users, title: "Collaboration", desc: "Your success is our success — we work as one team." },
  { icon: Target, title: "Excellence", desc: "We never settle for good enough when great is possible." },
  { icon: Eye, title: "Innovation", desc: "Staying ahead of trends to keep your brand relevant." },
];

const About = () => {
  return (
    <div>
      <PageHeader title="About 360 Marketing" subtitle="Your growth partner in digital and offline marketing" />

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                  alt="360 Marketing team working together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  360 Marketing was born out of a simple belief: every business, regardless of size, deserves access to world-class marketing. Founded in Mumbai, we set out to bridge the gap between affordable marketing and exceptional quality.
                </p>
                <p>
                  What started as a small team of passionate marketers has grown into a full-service agency serving 30+ clients across India. We combine data-driven strategies with creative storytelling to deliver measurable growth for our clients.
                </p>
                <p>
                  Today, we offer a comprehensive suite of services spanning digital marketing, content creation, web development, and physical marketing — providing truly 360-degree growth solutions.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fade-in-left">
              <Card className="h-full">
                <CardContent className="p-8">
                  <Target className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses with innovative, data-driven marketing solutions that drive sustainable growth. We aim to make premium marketing accessible and deliver measurable ROI for every client.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <Card className="h-full">
                <CardContent className="p-8">
                  <Eye className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted marketing partner for growing businesses, known for transparent communication, creative excellence, and consistent results that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Why Work With Us?</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <ScrollAnimation key={r.title} delay={i * 80}>
                <Card className="h-full hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <r.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-card-foreground">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <ScrollAnimation key={m.name} delay={i * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
                    <h3 className="font-display font-semibold text-card-foreground">{m.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{m.role}</p>
                    <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                      <Linkedin className="h-4 w-4 mx-auto" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <ScrollAnimation>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollAnimation key={v.title} delay={i * 100}>
                <div className="text-center">
                  <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold mb-4">Let's work together</h2>
            <p className="text-secondary-foreground/80 mb-8">Ready to take your brand to the next level?</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
