import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MessageCircle, Calendar, Check } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Shopify Call | Olumide Digital Solution" },
      { name: "description", content: "Book a free 30-minute discovery call to scope your Shopify project — design, migration, speed, or CRO." },
      { property: "og:title", content: "Contact Olumide — Book a Free Shopify Call" },
      { property: "og:description", content: "Free 30-minute discovery call. No pitch — just a clear roadmap." },
    ],
  }),
});

function ContactPage() {
  useReveal();
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Let's talk"
        title={<>Tell me about <span className="text-gradient">your store.</span></>}
        subtitle="Free 30-minute discovery call. No pitch — just a clear, honest roadmap for your project."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <div className="reveal lg:col-span-3 rounded-3xl border border-border bg-surface/40 p-8 lg:p-10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  <Check className="w-7 h-7" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold">Message received.</h2>
                <p className="mt-2 text-muted-foreground">I'll reply within 24 hours, usually faster.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <h2 className="font-display text-2xl font-bold mb-2">Project brief</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name" name="name" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@brand.com" required />
                </div>
                <Field label="Brand / Store URL" name="brand" placeholder="https://yourbrand.com (optional)" />
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Budget</label>
                  <select className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition">
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Tell me about the project</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="What are you trying to build, fix, or grow?"
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:opacity-90 transition glow-ring"
                >
                  Send brief <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* SIDE */}
          <div className="lg:col-span-2 space-y-5">
            <ContactCard icon={Mail} label="Email" value="hello@olumide.digital" href="mailto:hello@olumide.digital" />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="+234 800 000 0000" href="#" />
            <ContactCard icon={Calendar} label="Book a slot" value="calendly.com/olumide" href="#" />

            <div className="reveal rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">Response time</p>
              <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                I personally reply to every message within <strong>24 hours</strong>, Monday – Friday.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-5 hover:border-primary/60 hover:bg-surface transition"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-semibold text-sm">{value}</div>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </a>
  );
}
