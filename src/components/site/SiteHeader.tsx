import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sales-proof", label: "Sales Proof" },
  { to: "/projects", label: "Projects" },
  { to: "/catalog", label: "Catalog" },
  { to: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-24 md:h-28 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="ODS Shopify Agency Home">
          <img src={logo} alt="ODS Shopify Agency" className="h-16 w-auto md:h-20 drop-shadow-[0_4px_20px_oklch(0.78_0.13_85/0.4)]" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Free Audit <ArrowRight className="w-4 h-4" />
        </Link>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-border/60 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}
