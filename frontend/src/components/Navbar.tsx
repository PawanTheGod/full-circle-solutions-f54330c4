import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Plans", path: "/plans" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 md:px-8 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between h-16 px-6 transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform hover:scale-[1.02]"
        >
          <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            360
          </div>
          <span className="font-bold tracking-tighter text-xl text-neutral-900">
            Marketing<span className="text-primary">.</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-[12px] uppercase tracking-widest font-bold transition-all duration-300 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ACTION BUTTON */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="group rounded-full bg-neutral-900 hover:bg-black text-white px-6 h-10 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:shadow-2xl active:scale-95"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Start Project{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>

        {/* MOBILE TRIGGER */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-neutral-100"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[400px] border-l-0 p-0 overflow-hidden"
          >
            <div className="flex flex-col h-full bg-white p-8 md:p-12">
              <SheetTitle className="flex items-center gap-2 font-bold text-2xl mb-16">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-xs">
                  360
                </div>
                Marketing<span className="text-primary">.</span>
              </SheetTitle>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      style={{ transitionDelay: `${i * 50}ms` }}
                      className={`group flex items-center justify-between py-2 text-3xl font-extrabold tracking-tighter transition-all ${
                        isActive
                          ? "text-neutral-900 translate-x-4"
                          : "text-neutral-300 hover:text-neutral-900 hover:translate-x-4"
                      }`}
                    >
                      {link.label}
                      <ArrowRight
                        size={28}
                        className={`transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"}`}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-12">
                <p className="text-neutral-400 text-xs uppercase tracking-[0.3em] font-bold mb-6">
                  Let's build something
                </p>
                <Button
                  asChild
                  className="w-full h-20 bg-neutral-900 hover:bg-black text-white rounded-3xl font-bold text-xl transition-all shadow-2xl"
                >
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
