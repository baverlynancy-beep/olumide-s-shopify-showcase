import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Shopify Store Portfolio | Olumide Digital Solution" },
      { name: "description", content: "Recent Shopify stores I've designed and built across fashion, beauty, electronics, and lifestyle." },
      { property: "og:title", content: "Projects — Shopify Store Portfolio" },
      { property: "og:description", content: "Recent Shopify builds, redesigns, and growth projects." },
    ],
  }),
});

function ProjectsPage() {
  useReveal();
  return (
    <div>
      <PageHero
        eyebrow="Selected work"
        title={<>Stores I'm <span className="text-gradient">proud of.</span></>}
        subtitle="A small selection of recent Shopify builds across fashion, beauty, and DTC."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`reveal group rounded-3xl overflow-hidden border border-border bg-surface/40 hover:border-primary/60 transition-all ${
                i === 0 ? "md:col-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated via-surface to-background flex items-center justify-center text-muted-foreground text-sm tracking-widest uppercase transition-transform duration-700 group-hover:scale-[1.03]">
                  {p.name} — Preview
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] px-3 py-1 rounded-full border border-primary/30 bg-primary/15 text-primary uppercase tracking-widest font-semibold">
                    {p.niche}
                  </span>
                </div>
              </div>
              <div className="p-7 lg:p-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground">{p.result}</p>
                </div>
                <button className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  View case study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition glow-ring">
            Start your project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
