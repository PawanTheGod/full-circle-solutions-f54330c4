import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Growth Retainer",
    badge: "For Solo Founders",
    price: "₹5,000",
    period: "/mo",
    highlighted: false,
    desc: "A baseline digital presence managed by experts.",
    features: [
      "Social Media Content Strategy",
      "LinkedIn Profile Authority",
      "Executive Graphic Assets",
      "Monthly Strategy Consultation",
    ],
    cta: "Initiate Plan",
  },
  {
    name: "Market Leader",
    badge: "Our Premiere Tier",
    price: "₹50,000",
    period: "/mo",
    highlighted: true,
    desc: "Full-scale aggressive growth and web dominance.",
    features: [
      "Everything in Growth",
      "Bespoke Website Development",
      "Performance SEO & Ads",
      "Dedicated Creative Lead",
      "Priority Launch Cycle",
    ],
    cta: "Secure Dominance",
  },
  {
    name: "Custom Mandate",
    badge: "For Organizations",
    price: "PoA",
    period: "",
    highlighted: false,
    desc: "Tailored infrastructure for enterprise-grade needs.",
    features: [
      "White-Label Agency Services",
      "Global Media Buying",
      "24/7 Priority Concierge",
      "Unlimited Creative Revisions",
    ],
    cta: "Request Proposal",
  },
];

const faqs = [
  {
    q: "Can I adjust my retainer tier?",
    a: "Flexibility is core to our partnership. Retainer tiers can be adjusted with a 14-day notice prior to the next billing cycle.",
  },
  {
    q: "Is there a long-term commitment?",
    a: "We believe in results over restrictions. All partnerships are on a month-to-month basis unless a multi-quarter roadmap is requested.",
  },
  {
    q: "How is onboarding handled?",
    a: "New mandates go through a 48-hour 'Deep-Dive' period where we audit your current presence before execution begins.",
  },
  {
    q: "What about custom ad spend?",
    a: "Pricing covers our management and creative fee. Direct ad spend budgets are managed transparently through your own accounts.",
  },
];

const Plans = () => {
  return (
    <div className="bg-[#fafafa]">
      <PageHeader
        category="Retainers"
        title="Investment tiers for global growth"
        subtitle="Transparent pricing designed for ambitious brands ready to transcend the ordinary."
      />
      <div className="container mx-auto px-6 flex flex-col items-center justify-center -mt-8 mb-20 relative z-10">
         <ScrollAnimation>
           <div className="flex flex-col sm:flex-row gap-4 items-center">
             <Button asChild className="h-14 px-8 rounded-full bg-primary hover:bg-black text-white shadow-lg transition-all font-bold tracking-wide">
               <Link to="/contact">Discuss Custom Mandate</Link>
             </Button>
             <Button asChild variant="outline" className="h-14 px-8 rounded-full border-neutral-200 hover:bg-neutral-100 transition-all font-bold tracking-wide">
               <a href="#tiers">Compare Tiers</a>
             </Button>
           </div>
         </ScrollAnimation>
      </div>

      {/* PRICING SECTION */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollAnimation key={plan.name} delay={i * 100}>
                <Card
                  className={`flex flex-col h-full border-none transition-all duration-500 rounded-[2.5rem] overflow-hidden ${
                    plan.highlighted
                      ? "bg-neutral-900 text-white shadow-2xl scale-105 z-10"
                      : "bg-neutral-50 text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  <CardHeader className="p-10 pb-6 text-left">
                    <span
                      className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block ${plan.highlighted ? "text-primary" : "text-neutral-400"}`}
                    >
                      {plan.badge}
                    </span>
                    <CardTitle className="text-3xl font-bold tracking-tighter mb-4">
                      {plan.name}
                    </CardTitle>
                    <p
                      className={`text-sm font-light leading-relaxed mb-8 ${plan.highlighted ? "text-neutral-400" : "text-neutral-500"}`}
                    >
                      {plan.desc}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold tracking-tighter">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm font-medium ${plan.highlighted ? "text-neutral-500" : "text-neutral-400"}`}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-10 pt-0 flex flex-col flex-1">
                    <div
                      className={`h-[1px] w-full mb-10 ${plan.highlighted ? "bg-neutral-800" : "bg-neutral-200"}`}
                    />

                    <ul className="space-y-5 mb-12 flex-grow">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 group">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-primary text-white" : "bg-neutral-900 text-white"}`}
                          >
                            <Check className="h-3 w-3" />
                          </div>
                          <span
                            className={`text-sm font-light tracking-wide ${plan.highlighted ? "text-neutral-300" : "text-neutral-600"}`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full h-14 rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 group ${
                        plan.highlighted
                          ? "bg-white text-black hover:bg-primary hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                          : "bg-neutral-900 text-white hover:bg-black"
                      }`}
                    >
                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2"
                      >
                        {plan.cta}{" "}
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* LUXE FAQ SECTION */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollAnimation>
                <HelpCircle
                  className="text-primary mb-6"
                  size={40}
                  strokeWidth={1}
                />
                <h2 className="text-5xl font-bold tracking-tighter mb-6">
                  Partnership <br />
                  Clarifications.
                </h2>
                <p className="text-neutral-400 text-lg font-light max-w-md">
                  We believe in radical transparency. If your question isn't
                  addressed here, our concierge is available for a direct call.
                </p>
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto mt-8 font-bold tracking-widest text-xs uppercase group"
                >
                  Contact Concierge{" "}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-2 transition-transform"
                    size={14}
                  />
                </Button>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <ScrollAnimation key={i} delay={i * 100}>
                  <details className="group border-b border-neutral-800 pb-6 transition-all">
                    <summary className="list-none cursor-pointer flex justify-between items-center py-6 text-xl font-medium text-neutral-200 hover:text-white transition-colors">
                      {faq.q}
                      <span className="text-2xl font-light group-open:rotate-45 transition-transform duration-500">
                        +
                      </span>
                    </summary>
                    <p className="text-neutral-500 font-light leading-relaxed text-lg max-w-2xl animate-in fade-in slide-in-from-top-2 duration-500">
                      {faq.a}
                    </p>
                  </details>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-8 text-neutral-900">
              Your evolution <br />
              begins now.
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto mb-12 text-lg font-light">
              Don't just compete. Transcend the market with a 360° strategy.
            </p>
            <Button
              asChild
              className="h-20 px-12 rounded-full bg-black text-white text-lg hover:bg-primary transition-all shadow-2xl"
            >
              <Link to="/contact">Schedule Private Consultation</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Plans;
