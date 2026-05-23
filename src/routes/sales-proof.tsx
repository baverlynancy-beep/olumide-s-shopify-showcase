import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { useReveal, Counter, PageHero } from "@/components/site/Reveal";
import { proofImages, stats, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/sales-proof")({
  component: SalesProofPage,
  head: () => ({
    meta: [
      { title: "Sales Proof — Real Shopify Results | Olumide Digital Solution" },
      { name: "description", content: "Real screenshots and metrics from Shopify stores I've built. $41K+ single day sales, PKR 261M total, and more." },
      { property: "og:title", content: "Sales Proof — Real Shopify Results" },
      { property: "og:description", content: "Real screenshots from stores I've built. The numbers speak for themselves." },
      { property: "og:image", content: proofImages[1].src },
    ],
  }),
});

function SalesProofPage() {
  useReveal();
  return (
    <div>
      <PageHero
        eyebrow="Sales Proof"
        title={<>The numbers <span className="text-gradient">don't lie.</span></>}
        subtitle="Real revenue, real screenshots, from real Shopify stores I've designed and optimized."
      />

      {/* STATS */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="reveal rounded-2xl border border-border bg-surface/40 p-7 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                {(s as any).prefix ?? ""}<Counter end={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF GRID — editorial, no marquee */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Live store screenshots</h2>
            <p className="text-sm text-muted-foreground">Tap any image to view full size</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {proofImages.map((p, i) => (
              <figure
                key={i}
                className="reveal group relative rounded-3xl border border-border bg-background overflow-hidden hover:border-primary/60 transition shadow-xl"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={p.src}
                    alt={p.label}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 p-5 bg-surface/60 border-t border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-sm">{p.label}</div>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Verified</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 section-warm border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.25em]">Client words</p>
            <h2 className="mt-3 text-4xl font-bold">What founders say after launch</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition glow-ring">
              Get results like these <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
