import { useState, useEffect, type ComponentType, type SVGProps } from "react"
import { Helmet } from "react-helmet"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Loader2,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }>

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const faqs = [
  { q: "How quickly can you start?", a: "Most strategic projects commence within 2–3 business days following our initial alignment call." },
  { q: "Do you work with startups?", a: "Exclusively. We offer bespoke growth packages tailored for high-potential emerging enterprises." },
  { q: "What is the typical timeline?", a: "High-impact campaigns typically transition from concept to market launch within 7–14 days." },
  { q: "Can I review your portfolio?", a: "Certainly. Our curated collection of global success stories is available on the Portfolio page." }
]

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }) 
  }, [])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name) e.name = "Identity is required"
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid professional email required"
    if (!form.message) e.message = "Please share your project vision"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      setForm({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (err) {
      alert("Connectivity issue. Please reach us via direct email.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-black selection:text-white">
      <Helmet><title>Contact | 360 Marketing Agency</title></Helmet>

      {/* LUXE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-6 block">Direct Channel</span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500">
            Let's build <br className="hidden md:block" /> something legendary.
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            Elevate your market presence with 360° strategy. Our elite team is ready to transform your vision into global dominance.
          </p>
        </div>
      </section>

      {/* MAIN INTERACTION SECTION */}
      <section className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 pb-32">
        
        {/* PREMIUM FORM CARD */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-neutral-100 relative">
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Project Inquiry</h2>
            
            <form onSubmit={submit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Full Name *</label>
                  <Input 
                    className="h-14 border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all rounded-xl border-none ring-1 ring-neutral-200 focus:ring-2 focus:ring-primary"
                    placeholder="E.g. Alexander Hamilton" 
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tighter">{errors.name}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Email Address *</label>
                  <Input 
                    className="h-14 border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all rounded-xl border-none ring-1 ring-neutral-200 focus:ring-2 focus:ring-primary"
                    placeholder="name@company.com" 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tighter">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Phone</label>
                  <Input className="h-14 border-none ring-1 ring-neutral-200 bg-neutral-50/50 rounded-xl" placeholder="+1 (000) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Desired Service</label>
                  <Input className="h-14 border-none ring-1 ring-neutral-200 bg-neutral-50/50 rounded-xl" placeholder="E.g. Brand Scaling" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Message *</label>
                <Textarea 
                  className="min-h-[160px] border-none ring-1 ring-neutral-200 bg-neutral-50/50 rounded-xl resize-none p-4"
                  placeholder="Tell us about your objectives..." 
                  value={form.message} 
                  onChange={(e) => setForm({ ...form, message: e.target.value })} 
                />
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tighter">{errors.message}</p>}
              </div>

              <Button className="w-full h-16 rounded-xl bg-neutral-900 text-white hover:bg-black transition-all text-lg font-semibold group" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : (
                  <span className="flex items-center gap-2">
                    Submit Project Brief <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* INFO CONCIERGE */}
        <div className="lg:col-span-5 flex flex-col justify-between py-6">
          <div className="space-y-14">
            <div>
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-10">Concierge Services</h3>
              <div className="grid gap-10">
                <Info icon={Mail} title="General Inquiries" text="hello@360marketing.com" />
                <Info icon={Phone} title="Priority Line" text="+91 98765 43210" />
                <Info icon={MapPin} title="The Studio" text="Level 5, Sky Tower, Pune" />
                <Info icon={Clock} title="Operating Hours" text="Mon – Fri | 09:00 – 19:00" />
              </div>
            </div>

            <div className="pt-10 border-t border-neutral-200/60">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-6">Connect Digitally</h3>
              <div className="flex gap-4">
                <Social icon={Linkedin} link="#" />
                <Social icon={Instagram} link="#" />
                <Social icon={Twitter} link="#" />
                <Social icon={Facebook} link="#" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY LOCATION SECTION */}
      <section className="container mx-auto px-6 pb-32">
        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3.5rem] blur-3xl opacity-40 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative grid lg:grid-cols-3 gap-0 border border-neutral-100 rounded-[3rem] overflow-hidden bg-white shadow-[0_40px_100px_rgba(0,0,0,0.06)]">
            
            <div className="lg:col-span-2 h-[550px] relative grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03447396989!2d73.7898031!3d18.5248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100c34f33!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/50 shadow-xl">
                <p className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  Headquarters Active
                </p>
              </div>
            </div>

            <div className="p-12 md:p-16 flex flex-col justify-center bg-neutral-900 text-white">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">Visit the Studio</h2>
              <p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">
                Our creative lab is where strategy meets art. Private consultations available by appointment for select clients.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium tracking-wide">Level 5, Sky Tower, Pune, MH 411001</p>
                </div>
              </div>

              <Button className="mt-12 w-full bg-white text-black hover:bg-neutral-200 h-14 rounded-xl font-bold transition-all flex items-center gap-2">
                Open in Maps <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY FAQ SECTION */}
      <section className="bg-white py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Knowledge</span>
              <h2 className="text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">Common <br />Questions.</h2>
              <p className="text-neutral-500 font-light text-lg">Detailed insights into our operational philosophy and client engagement process.</p>
            </div>
            <div className="lg:w-2/3 grid gap-6">
              {faqs.map((f, i) => (
                <details key={i} className="group border-b border-neutral-100 pb-6">
                  <summary className="list-none cursor-pointer flex justify-between items-center py-6 text-xl font-semibold hover:text-primary transition-colors">
                    {f.q}
                    <span className="text-3xl font-extralight group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="text-neutral-500 font-light text-lg leading-relaxed pb-6 max-w-3xl">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL OVERLAY */}
      {success && (
        <div className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center z-[100] p-6">
          <div className="bg-white p-16 rounded-[3rem] text-center max-w-xl shadow-2xl animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={50} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900">Inquiry Authenticated</h3>
            <p className="text-neutral-500 mb-10 text-lg font-light">Our strategy team has been alerted. We will reach out to schedule your private alignment session shortly.</p>
            <Button onClick={() => setSuccess(false)} className="px-12 h-16 rounded-2xl bg-black text-white hover:scale-105 transition-transform">Return to Portal</Button>
          </div>
        </div>
      )}
    </div>
  )
}

function Info({ icon: Icon, title, text }: { icon: IconType; title: string; text: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center shadow-sm group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
        <Icon size={22} className="text-neutral-400 group-hover:text-primary transition-colors duration-500" strokeWidth={1.2} />
      </div>
      <div className="pt-1">
        <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">{title}</p>
        <p className="text-xl font-medium text-neutral-800 tracking-tight">{text}</p>
      </div>
    </div>
  )
}

function Social({ icon: Icon, link }: { icon: IconType; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-14 h-14 rounded-2xl border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-neutral-900 transition-all duration-500 shadow-sm"
    >
      <Icon size={20} strokeWidth={1.5} />
    </a>
  )
}