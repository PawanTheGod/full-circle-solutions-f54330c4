import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              360<span className="text-secondary">Marketing</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Complete digital & offline growth solutions for businesses of all sizes. Data-driven marketing that delivers results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Services", "Plans", "Portfolio", "About"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:hello@360marketing.in" className="hover:text-secondary transition-colors">
                  hello@360marketing.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} 360 Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
