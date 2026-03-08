import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-6 pt-24 pb-12">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-bold text-lg transition-transform group-hover:rotate-12">
                360
              </div>
              <span className="font-bold tracking-tighter text-2xl text-white">
                Marketing<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
              A bespoke digital collective dedicated to transforming brands into industry leaders through data-driven artistry.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-neutral-800/50 p-8 rounded-[2rem] border border-neutral-700/50 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Join the inner circle</h4>
                <p className="text-neutral-400 text-sm font-light">Bi-weekly insights on market dominance.</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-neutral-900 border-none ring-1 ring-neutral-700 rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all w-full md:w-64"
                />
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: NAVIGATION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-neutral-800 pt-16 mb-16">
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Experience</h4>
            <ul className="space-y-4">
              {["Services", "Plans", "Portfolio", "About"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                  >
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">Direct</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <a href="mailto:hello@360marketing.in" className="hover:text-white transition-colors">
                  hello@360marketing.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed font-light">
                  Level 5, Sky Tower, Business District,<br /> Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: SOCIAL & COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-8">
          <p className="text-neutral-500 text-xs font-light tracking-wide">
            © {currentYear} 360 Marketing Agency. Crafted for Excellence.
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Facebook, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="h-10 w-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;