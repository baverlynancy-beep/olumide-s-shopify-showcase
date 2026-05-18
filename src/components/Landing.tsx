import { useEffect, useRef, useState } from "react";
import {
  ShoppingBag, Zap, RefreshCw, Palette, TrendingUp, Wrench,
  Star, Check, ArrowRight, Menu, X, Linkedin, Twitter, MessageCircle,
} from "lucide-react";

// Scroll reveal hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Animated counter
function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(end * eased));
            if (p < 1) requestAnimationFrame(tick);
            else setVal(end);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const services = [
  { icon: ShoppingBag, title: "Custom Shopify Store Design", desc: "Distinct, brand-first storefronts engineered to convert from the first scroll." },
  { icon: Zap, title: "Speed & Performance Optimization", desc: "Cut load times, boost Core Web Vitals, and recover lost revenue." },
  { icon: RefreshCw, title: "Shopify Migration", desc: "Seamless moves from WooCommerce, Wix, Magento — zero data loss." },
  { icon: Palette, title: "Theme Customization & Development", desc: "Custom Liquid, sections, and components tailored to your brand." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", desc: "Data-driven CRO audits and tests that lift AOV and checkout rates." },
  { icon: Wrench, title: "App Integration & Automation", desc: "Connect your stack — Klaviyo, ReCharge, Gorgias — and automate ops." },
];

const stats = [
  { value: 50, suffix: "+", label: "Shopify Stores Delivered" },
  { value: 2, suffix: "M+", label: "Revenue Generated", prefix: "$" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "★", label: "Average Rating" },
];

const testimonials = [
  { name: "Sarah M.", role: "CEO, Lunar Apparel", text: "Olumide transformed our Shopify store completely. Sales increased by 40% in the first month!" },
  { name: "James K.", role: "Founder, Hyde Beauty", text: "Pixel-perfect design, lightning speed, and a team that actually cares. Best investment we made." },
  { name: "Priya R.", role: "Owner, NorthCharge", text: "From migration to launch in 3 weeks. Our checkout conversion is up 28% — and still climbing." },
];

const projects = [
  { name: "Lunar Apparel", niche: "Fashion", result: "Increased conversion by 35%" },
  { name: "Hyde Beauty", niche: "Beauty", result: "Doubled monthly revenue in 60 days" },
  { name: "NorthCharge", niche: "Electronics", result: "Reduced load time by 62%" },
  { name: "Verde Goods", niche: "Lifestyle", result: "Migration + redesign, +48% AOV" },
];

const packages = [
  {
    name: "Starter", price: "From $300", popular: false,
    features: ["Basic Shopify setup", "Theme install & config", "Up to 20 product uploads", "Payment & shipping setup", "Basic SEO setup"],
  },
  {
    name: "Growth", price: "From $700", popular: true,
    features: ["Custom theme design", "Full product setup (up to 100)", "Speed optimization", "App integrations", "Email automation setup", "30 days post-launch support"],
  },
  {
    name: "Premium", price: "From $1,500", popular: false,
    features: ["Full custom store build", "Brand identity & assets", "Advanced CRO setup", "A/B testing framework", "Unlimited products", "90 days ongoing support"],
  },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#proof", label: "Sales Proof" },
  { href: "#projects", label: "Projects" },
  { href: "#catalog", label: "Catalog" },
  { href: "#contact", label: "Contact" },
];

export default function Landing() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border/60" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-xl tracking-tight">
            Olumide<span className="text-primary">.</span>
            <span className="hidden sm:inline text-muted-foreground font-normal ml-1">Digital Solution</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden glass border-t border-border/60 px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Hire Me
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Certified Shopify Partner
            </span>
            <h1 className="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              I Build Shopify Stores <br />
              That <span className="text-gradient">Sell</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Certified Shopify Partner helping brands launch, grow, and scale their eCommerce store —
              with custom design, speed optimization, and conversion-focused strategy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-7 py-3.5 font-semibold text-foreground hover:border-primary/50 hover:bg-surface transition">
                Book a Free Call
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Shopify Partner</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />50+ Stores Built</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />5★ Reviews</div>
            </div>
          </div>

          <div className="reveal relative flex justify-center lg:justify-end">
            <div className="absolute -top-10 -left-6 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/30 animate-float" />
            <div className="absolute bottom-0 -right-4 w-20 h-20 rounded-full bg-primary/10 border border-primary/30 animate-float" style={{ animationDelay: "1.5s" }} />

            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-primary/60 p-3 animate-pulse-ring">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-surface-elevated border border-border flex items-center justify-center text-center text-muted-foreground text-sm px-8">
                  [ YOUR PHOTO HERE ]
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full border border-primary/40 px-5 py-2 text-sm font-semibold whitespace-nowrap">
                <span className="text-primary">●</span> Shopify Expert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-2xl">
            <p className="text-primary text-sm font-medium uppercase tracking-widest">What I Do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Here's How I Help Shopify Brands Win</h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal group relative rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:border-primary/60 hover:bg-surface hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ boxShadow: "0 0 30px oklch(0.78 0.18 135 / 0.2)" }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALES PROOF */}
      <section id="proof" className="py-24 lg:py-32 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-medium uppercase tracking-widest">Sales Proof</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Results That Speak for Themselves</h2>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="reveal rounded-2xl border border-border bg-background/40 p-8 text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-gradient">
                  {(s as any).prefix ?? ""}<Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal rounded-2xl border border-border bg-background/40 p-7">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="mt-5 text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center font-semibold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Work I'm Proud Of</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Recent Shopify builds, redesigns, and growth projects across fashion, beauty, and DTC.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className={`reveal group rounded-2xl overflow-hidden border border-border bg-surface/50 ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-[420px]" : "aspect-[4/3]"}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface flex items-center justify-center text-muted-foreground text-sm transition-transform duration-500 group-hover:scale-105">
                    [ PROJECT SCREENSHOT ]
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-primary-foreground inline-flex items-center gap-2">
                      View <ArrowRight />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl">{p.name}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">{p.niche}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.result}</p>
                  <button className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 lg:py-32 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-medium uppercase tracking-widest">Packages</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Pick a Package That Fits Your Goals</h2>
            <p className="mt-4 text-muted-foreground">Transparent pricing. No surprises. Everything you need to launch and scale.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`reveal relative rounded-3xl p-8 flex flex-col ${
                  p.popular
                    ? "border-2 border-primary bg-gradient-to-b from-primary/10 to-transparent shadow-[0_0_60px_-15px_oklch(0.78_0.18_135/0.4)]"
                    : "border border-border bg-background/40"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <div className="mt-4 font-display text-4xl font-bold">{p.price}</div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-surface/50 hover:border-primary/50"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Ready to Build a Shopify Store That <span className="text-gradient">Actually Converts?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Let's talk about your project. First consultation is FREE.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-lg font-bold text-primary-foreground hover:opacity-90 transition glow-ring"
            >
              Book Your Free Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary transition w-fit">
                {l.label}
              </a>
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
    </div>
  );
}
