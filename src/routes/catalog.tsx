import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/Reveal";
import { packages, services } from "@/lib/site-data";

export const Route = createFileRoute("/catalog")({
  component: CatalogPage,
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Shopify Services | Olumide Digital Solution" },
      { name: "description", content: "Transparent Shopify packages — from starter launches to full premium DTC builds with CRO and ongoing support." },
      { property: "og:title", content: "Packages & Pricing — Shopify Services" },
      { property: "og:description", content: "Transparent Shopify packages from $300 to $1,500+." },
    ],
  }),
});

function CatalogPage() {
  useReveal();
  return (
    <div>
      <PageHero
        eyebrow="Catalog & Pricing"
        title={<>Pick the package that <span className="text-gradient">fits your stage.</span></>}
        subtitle="Transparent pricing. No surprises. Everything you need to launch and scale on Shopify."
      />

      {/* PACKAGES */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl p-8 lg:p-10 flex flex-col ${
                p.popular
                  ? "border-2 border-primary bg-gradient-to-b from-primary/15 via-surface/40 to-transparent shadow-[0_0_80px_-20px_oklch(0.78_0.18_135/0.5)] lg:-translate-y-3"
                  : "border border-border bg-surface/40"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold text-primary-foreground uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-6 font-display text-4xl lg:text-5xl font-bold text-gradient">{p.price}</div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow-ring"
                    : "border border-border bg-surface/50 hover:border-primary/50"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED — services list */}
      <section className="py-24 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-2xl mb-14">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.25em]">Every package includes</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">Full-stack Shopify expertise.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal rounded-2xl border border-border bg-background/40 p-7 hover:border-primary/60 transition"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="reveal rounded-3xl border border-border bg-surface/40 p-10 lg:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Need something custom?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Headless, complex migrations, marketplace, or B2B? Let's scope it together.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition glow-ring">
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
