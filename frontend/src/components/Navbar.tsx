import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Plans", path: "/plans" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/40 backdrop-blur-xl shadow-sm border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 container-padding">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-foreground">
          360<span className="text-secondary">Marketing</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-display text-lg font-bold">
              360<span className="text-secondary">Marketing</span>
            </SheetTitle>
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                      ? "bg-secondary/10 text-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
