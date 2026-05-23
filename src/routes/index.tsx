import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star, TrendingUp } from "lucide-react";
import portrait from "@/assets/olumide-portrait.png";
import proof4 from "@/assets/proof-4.jpg";
import { useReveal, Counter } from "@/components/site/Reveal";
import { BrandLogos } from "@/components/site/BrandLogos";
import FAQ from "@/components/site/FAQ";
import { services, stats, testimonials, projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Olumide — Shopify CRO & Growth Specialist" },
      { name: "description", content: "I help Shopify store owners get more sales. Product page optimization, trust signals, mobile CRO, upsells, branding, SEO and speed. Real audits, real results." },
      { property: "og:title", content: "Olumide — Shopify CRO & Growth Specialist" },
      { property: "og:description", content: "Real audits. Real fixes. Real sales. $41,088 in a single day for a client store." },
      { property: "og:image", content: portrait },
    ],
  }),
});

const brands = projects.map((p) => p.name);

function HomePage() {
  useReveal();

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden section-noir">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_20%,oklch(0.78_0.13_85/0.14),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_85%,oklch(0.88_0.11_88/0.06),transparent_70%)]" />
          <div className="absolute inset-0 grid-bg opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="reveal lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Shopify CRO Specialist. Booking Q3 audits.
            </span>
            <h1 className="mt-6 font-display text-[36px] sm:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.025em]">
              More buyers.<br />
              From the <span className="text-gradient italic">same traffic.</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              I help Shopify store owners fix the leaks killing their sales. Product pages, trust signals, mobile UX, upsells, branding and speed. You don't need more ads. You need a store that converts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition glow-ring"
              >
                Get a free store audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/sales-proof"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 font-semibold text-foreground hover:border-primary/50 hover:bg-surface transition"
              >
                See real sales proof
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Shopify Specialist</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Audit driven</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Reply in 24h</div>
            </div>
          </div>

          {/* Portrait */}
          <div className="reveal lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[320px] lg:w-[360px]">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-border bg-surface/60 backdrop-blur-sm p-3 shadow-[0_30px_80px_-30px_oklch(0_0_0/0.6)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-surface-elevated">
                  <img
                    src={portrait}
                    alt="Olumide, Certified Shopify Partner"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1.5 text-[11px] font-semibold border border-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Online
                  </div>
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-background/85 backdrop-blur border border-border p-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-base">Olumide A.</div>
                      <div className="text-[11px] text-muted-foreground">Shopify Expert. Lagos, NG</div>
                    </div>
                    <div className="flex gap-0.5 text-primary">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary" />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 sm:-left-10 top-1/3 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-background/90 backdrop-blur px-4 py-3 shadow-xl">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm">+42% AOV</div>
                  <div className="text-[10px] text-muted-foreground">last client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-7 flex flex-wrap items-center justify-between gap-x-12 gap-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Recent client stores</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-muted-foreground/70 font-display text-lg tracking-widest">
            {brands.map((b) => <span key={b} className="hover:text-foreground transition">{b}</span>)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 section-noir">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-medium uppercase tracking-[0.25em]">What I fix</p>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl leading-tight">The 9 things killing your Shopify sales.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every store owner I work with has the same 9 leaks. I find them, prioritise them by revenue impact, and fix them in that order.
              </p>
            </div>
            <Link to="/catalog" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal group rounded-2xl border border-border bg-surface/40 p-7 transition-all hover:border-primary/60 hover:bg-surface hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <BrandLogos brands={s.brands} />
                  <span className="text-xs font-display text-primary/70">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROOF */}
      <section className="py-20 lg:py-28 section-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.25em]">Real results</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl leading-tight">
              $41,088 in a <span className="text-gradient italic">single day.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              The stores I build aren't just pretty. They perform. From new launches to scale ups, clients consistently see breakthrough numbers in their first 90 days.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background/40 p-5">
                  <div className="font-display text-3xl text-gradient">
                    {(s as any).prefix ?? ""}<Counter end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <Link to="/sales-proof" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              See all sales proof <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
            <div className="relative rounded-3xl border border-border bg-background overflow-hidden shadow-2xl">
              <img src={proof4} alt="$41,088 Shopify single day sales" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 lg:py-24 section-noir">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center reveal">
          <div className="flex justify-center gap-1 text-primary mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary" />)}
          </div>
          <blockquote className="font-display text-xl md:text-3xl leading-snug tracking-tight">
            "{testimonials[0].text}"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center font-semibold text-primary">
              {testimonials[0].name[0]}
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">{testimonials[0].name}</div>
              <div className="text-xs text-muted-foreground">{testimonials[0].role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="section-warm">
        <FAQ />
      </div>

      {/* CTA */}
      <section className="pb-24 pt-20 lg:pb-32 section-noir">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="reveal relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-background p-10 lg:p-14 overflow-hidden text-center">
            <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
                Ready to launch a store that <span className="text-gradient italic">actually converts?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Free 30 minute discovery call. No pitch. Just a clear roadmap for your store.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground hover:opacity-90 transition glow-ring"
              >
                Book your free call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
