import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Personal",
    badge: "For Individuals",
    price: "₹5,000",
    period: "/month",
    highlighted: false,
    features: [
      "Social Media Content Creation",
      "LinkedIn Profile Optimization",
      "Basic Graphic Design",
      "Monthly Strategy Call",
      "Email Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    badge: "Most Popular",
    price: "₹50,000",
    period: "/month",
    highlighted: true,
    features: [
      "Everything in Personal",
      "Website Development",
      "Advanced Content Marketing",
      "SEO & Google Ads",
      "Custom Graphics & Branding",
      "Dedicated Account Manager",
      "Priority Support",
      "Monthly Analytics Reports",
    ],
    cta: "Get Started",
  },
  {
    name: "Custom",
    badge: "For Agencies",
    price: "Custom",
    period: " Pricing",
    highlighted: false,
    features: [
      "Fully Customized Solutions",
      "White Label Services",
      "Unlimited Revisions",
      "24/7 Support",
      "Dedicated Team",
    ],
    cta: "Contact Us",
  },
];

const faqs = [
  { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can switch plans at any time. Changes take effect from the next billing cycle." },
  { q: "Is there a minimum contract period?", a: "No, all plans are month-to-month. You can cancel anytime without any penalties." },
  { q: "What payment methods do you accept?", a: "We accept UPI, bank transfers, credit/debit cards, and PayPal for international clients." },
  { q: "Do you offer discounts for annual plans?", a: "Yes! Annual plans come with a 15% discount compared to monthly billing." },
  { q: "What's included in the Custom plan?", a: "The Custom plan is tailored to your specific needs. Contact us for a detailed proposal based on your requirements." },
  { q: "How soon can I get started?", a: "Once payment is confirmed, we typically onboard new clients within 2-3 business days." },
];

const Plans = () => {
  return (
    <div>
      <PageHeader title="Choose Your Plan" subtitle="Flexible pricing for individuals and enterprises" />

      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollAnimation key={plan.name} delay={i * 100}>
                <Card className={`h-full relative ${plan.highlighted ? "border-secondary shadow-xl shadow-secondary/10 scale-105" : "border-border"}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    {!plan.highlighted && (
                      <span className="text-xs text-muted-foreground font-medium mb-2">{plan.badge}</span>
                    )}
                    <CardTitle className="font-display text-xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-full ${
                        plan.highlighted
                          ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                    >
                      <Link to="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding max-w-3xl">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold text-center text-foreground mb-10">Frequently Asked Questions</h2>
          </ScrollAnimation>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <ScrollAnimation key={i} delay={i * 50}>
                <AccordionItem value={`faq-${i}`} className="bg-card rounded-lg border px-4">
                  <AccordionTrigger className="text-sm font-medium text-card-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-secondary-foreground/80 mb-8">Choose a plan and start growing your business today.</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Plans;
