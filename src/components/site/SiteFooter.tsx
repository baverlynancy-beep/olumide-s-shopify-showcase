import { Link } from "@tanstack/react-router";
import { Check, Linkedin, Twitter, MessageCircle } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sales-proof", label: "Sales Proof" },
  { to: "/projects", label: "Projects" },
  { to: "/catalog", label: "Catalog" },
  { to: "/contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display font-bold text-xl">
            Olumide<span className="text-primary">.</span> Digital Solution
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Your Shopify Growth Partner — building stores that perform.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-primary font-semibold">
            <Check className="w-3.5 h-3.5" /> Shopify Partner
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="font-semibold mb-1">Navigate</div>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-primary transition w-fit">
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-3 text-sm">Connect</div>
          <div className="flex gap-3">
            {[Linkedin, Twitter, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground text-center">
          © 2025 Olumide Digital Solution. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
