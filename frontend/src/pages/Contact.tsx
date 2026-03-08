import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHeader from "@/components/PageHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const faqs = [
  { q: "How quickly can you start on my project?", a: "We typically begin within 2-3 business days of confirming your requirements and payment." },
  { q: "Do you work with startups?", a: "Absolutely! We love working with startups and offer special packages tailored for early-stage businesses." },
  { q: "What's your typical project timeline?", a: "Timelines vary by project. Most marketing campaigns launch within 1-2 weeks, while websites take 3-6 weeks." },
  { q: "Can I see examples of your work first?", a: "Of course! Visit our Portfolio page to see case studies, or we can share specific examples relevant to your industry." },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "Message sent! ✅", description: data.message || "We'll get back to you within 24 hours." });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
        setErrors({});
      } else {
        toast({
          title: "Something went wrong",
          description: data.message || "Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Could not reach the server. Please check your connection or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader title="Get In Touch" subtitle="Let's discuss how we can help your business grow" />

      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollAnimation animation="fade-in-left">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital">Digital Marketing</SelectItem>
                    <SelectItem value="content">Content Creation</SelectItem>
                    <SelectItem value="creative">Creative Services</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="physical">Physical Marketing</SelectItem>
                    <SelectItem value="consultation">Not Sure / Consultation</SelectItem>
                  </SelectContent>
                </Select>
                <div>
                  <Textarea
                    placeholder="Your Message *"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
                  size="lg"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </ScrollAnimation>

            {/* Info */}
            <ScrollAnimation animation="fade-in-right">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a href="mailto:hello@360marketing.in" className="text-sm text-muted-foreground hover:text-secondary transition-colors">hello@360marketing.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-secondary transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Address</p>
                    <p className="text-sm text-muted-foreground">123 Business Park, Andheri West,<br />Mumbai, Maharashtra 400053</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon – Fri: 9:00 AM – 7:00 PM<br />Sat: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-medium text-foreground mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding max-w-3xl">
          <ScrollAnimation>
            <h2 className="font-display text-3xl font-bold text-center text-foreground mb-10">Before You Reach Out</h2>
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
    </div>
  );
};

export default Contact;
