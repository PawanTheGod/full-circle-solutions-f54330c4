import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter, 
  Loader2, 
  Check, 
  Plus 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const contactFaqs = [
  {
    question: "How quickly can you start?",
    answer: "Once the partnership is secured and a 50% advance is cleared, we assign your dedicated Project Manager and kick off within 5-7 business days.",
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. Our 'Growth Retainer' tier was engineered specifically for lean, capital-constrained teams ready to punch above their weight.",
  },
  {
    question: "What is the typical timeline?",
    answer: "Project timelines vary by mandate complexity. A conversion landing page typically takes 2-3 weeks, while comprehensive brand ecosystems require 8-12 weeks.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const baseUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        if (submitStatus !== 'success') setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-[#fafafa] selection:bg-black selection:text-white font-sans text-neutral-900">
      <Helmet>
        <title>Contact Us | 360 Marketing Agency - Premium ROI Solutions</title>
        <meta name="description" content="Connect with Pune's elite marketing collective. Submit your project brief for digital strategy, creative production, and brand scaling." />
      </Helmet>
      
      {/* 1. PAGE HEADER - Conversion Optimized */}
      <section className="bg-white pt-32 pb-32 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mb-8 inline-block">
                Direct Channel
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
                Let's build<br />something legendary.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Whether you need 200hr/month scope or a full-scale brand 
                transformation, our concierge is available for a direct call. 
                Share your vision — we'll take it from there.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FORM + INFO LAYOUT */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* FORM COLUMN */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="up" className="h-full">
                <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-neutral-100 shadow-xl overflow-hidden min-h-[600px] flex flex-col justify-center relative">
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, y: -20 }}
                        className="text-center py-12"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                        >
                          <Check className="w-12 h-12 text-white" strokeWidth={3} />
                        </motion.div>
                        
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Mandate Received.</h2>
                        <p className="text-neutral-500 text-lg mb-10 max-w-sm mx-auto font-light leading-relaxed">
                          Your project brief has been prioritized. Our strategy lead will reach out personally within 12-24 business hours.
                        </p>
                        
                        <div className="p-6 bg-neutral-50 rounded-3xl mb-10 text-left max-w-sm mx-auto border border-neutral-100">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 text-center">Protocol Sequence</p>
                          <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm font-medium">
                              <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">1</span>
                              Initial Architecture Audit
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium">
                              <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">2</span>
                              Competitive Gap Analysis
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium">
                              <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">3</span>
                              Strategic Roadmapping Call
                            </li>
                          </ul>
                        </div>
                        
                        <button 
                          onClick={() => setSubmitStatus('idle')}
                          className="text-sm font-bold tracking-widest uppercase hover:underline underline-offset-8 transition-all"
                        >
                          ← DISPATCH ANOTHER BRIEF
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                      >
                        <h2 className="text-2xl font-bold mb-10 tracking-tight">Project Inquiry</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-8">
                          {/* Name input with floating label */}
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="peer w-full bg-transparent border-b border-neutral-200 
                                py-3 text-neutral-900 placeholder-transparent
                                focus:border-black transition-colors outline-none font-medium"
                              placeholder="Name"
                            />
                            <label
                              htmlFor="name"
                              className="absolute left-0 -top-3.5 text-neutral-400 text-xs
                                transition-all
                                peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                                peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black font-semibold uppercase tracking-widest"
                            >
                              Your Name
                            </label>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Email input */}
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="peer w-full bg-transparent border-b border-neutral-200 
                                  py-3 text-neutral-900 placeholder-transparent
                                  focus:border-black transition-colors outline-none font-medium"
                                placeholder="Email"
                              />
                              <label
                                htmlFor="email"
                                className="absolute left-0 -top-3.5 text-neutral-400 text-xs
                                  transition-all
                                  peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                                  peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black font-semibold uppercase tracking-widest"
                              >
                                Email Address
                              </label>
                            </div>

                            {/* Phone input */}
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="peer w-full bg-transparent border-b border-neutral-200 
                                  py-3 text-neutral-900 placeholder-transparent
                                  focus:border-black transition-colors outline-none font-medium"
                                placeholder="Phone"
                              />
                              <label
                                htmlFor="phone"
                                className="absolute left-0 -top-3.5 text-neutral-400 text-xs
                                  transition-all
                                  peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                                  peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black font-semibold uppercase tracking-widest"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>

                          {/* Service interest dropdown */}
                          <div className="relative">
                            <select
                              id="service"
                              required
                              value={formData.service}
                              onChange={(e) => setFormData({...formData, service: e.target.value})}
                              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl
                                py-4 px-5 text-neutral-900 font-medium
                                focus:border-black transition-colors outline-none appearance-none"
                            >
                              <option value="">Select Service Interest</option>
                              <option value="Digital Mastery">Digital Mastery</option>
                              <option value="Visual Storytelling">Visual Storytelling</option>
                              <option value="Physical Presence">Physical Presence</option>
                              <option value="Digital Architecture">Digital Architecture</option>
                              <option value="Custom Mandate">Custom Mandate</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 font-light">
                              ↓
                            </div>
                          </div>

                          {/* Message textarea */}
                          <div className="relative">
                            <textarea
                              id="message"
                              required
                              rows={5}
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className="peer w-full bg-neutral-50 border border-neutral-100 rounded-2xl
                                py-4 px-5 text-neutral-900 placeholder-transparent
                                focus:border-black transition-colors outline-none resize-none font-medium"
                              placeholder="Message"
                            />
                            <label
                              htmlFor="message"
                              className="absolute left-5 top-4 text-neutral-400 text-sm
                                transition-all
                                peer-placeholder-shown:text-base
                                peer-focus:text-xs peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-white peer-focus:px-2 peer-focus:text-black font-semibold uppercase tracking-widest"
                            >
                              Tell us about your objectives...
                            </label>
                          </div>

                          {/* Submit button */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full magnetic-btn bg-black text-white py-5 rounded-full
                              font-bold text-sm tracking-[0.1em] uppercase
                              disabled:opacity-50 disabled:cursor-not-allowed
                              transition-all duration-300 active:scale-[0.98]
                              hover:bg-neutral-800 shadow-xl"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Sending...
                              </span>
                            ) : submitStatus === 'error' ? (
                              'Failed - Please Try Again'
                            ) : (
                              'Submit Project Brief →'
                            )}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>

            {/* INFO COLUMN */}
            <ScrollReveal direction="up" delay={0.15} className="lg:col-span-2">
              <div className="bg-neutral-900 text-white rounded-[2.5rem] p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-8 block">
                    Questions? Reach Us.
                  </span>
                  
                  <div className="space-y-10">
                    <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <Mail className="w-5 h-5 text-white/60 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-500 font-bold tracking-widest mb-1 uppercase">Email Address</p>
                        <a href="mailto:hello@360marketing.in" 
                          className="text-lg font-medium hover:text-neutral-300 transition-colors">
                          hello@360marketing.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <Phone className="w-5 h-5 text-white/60 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-500 font-bold tracking-widest mb-1 uppercase">Direct Line</p>
                        <a href="tel:+919876543210" 
                          className="text-lg font-medium hover:text-neutral-300 transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <MapPin className="w-5 h-5 text-white/60 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-500 font-bold tracking-widest mb-1 uppercase">HQ Location</p>
                        <p className="text-lg font-medium text-neutral-200">
                          Level 5, Sky Tower Place<br />
                          Pune, Maharashtra 400001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <Clock className="w-5 h-5 text-white/60 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-500 font-bold tracking-widest mb-1 uppercase">Office Hours</p>
                        <p className="text-lg font-medium text-neutral-200">Mon - Fri | 09:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-6 block">
                    Connect Socially
                  </span>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 
                      flex items-center justify-center border border-white/10
                      hover:bg-white/10 transition-colors">
                      <Linkedin className="w-5 h-5 text-white/80" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 
                      flex items-center justify-center border border-white/10
                      hover:bg-white/10 transition-colors">
                      <Twitter className="w-5 h-5 text-white/80" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS SECTION */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="bg-white rounded-[3rem] overflow-hidden border border-neutral-100 shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Map */}
                <div className="h-[400px] lg:h-[500px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0184766799394!2d73.85674631489754!3d18.52043098741778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06f6b8e1e91%3A0x6f5e1e1e1e1e1e1e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2) brightness(1) grayscale(1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Call to action */}
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold mb-6 tracking-tight">Visit the Studio.</h3>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed mb-10">
                    Our creative HQ is open for strategy Monday to Friday. 
                    Feel free to schedule a consultation or just drop by 
                    for a coffee and conversation.
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="magnetic-btn bg-black text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest w-fit hover:bg-neutral-800 transition-all active:scale-95 hover:scale-[1.02] shadow-lg"
                  >
                    LAUNCH MAPS →
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-32 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
              Common Questions.
            </h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <details className="group border border-neutral-100 rounded-3xl p-6 md:p-8 cursor-pointer hover:bg-neutral-50 transition-all duration-300">
                  <summary className="flex justify-between items-center font-bold text-lg md:text-xl tracking-tight list-none">
                    {faq.question}
                    <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                      <Plus className="w-5 h-5 text-neutral-400" />
                    </div>
                  </summary>
                  <p className="text-neutral-500 font-light text-base md:text-lg mt-6 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
