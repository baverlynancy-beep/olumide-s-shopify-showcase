import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MessageCircle, Check, Loader2 } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/Reveal";
import { EMAIL, FORM_ENDPOINT, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Request a Free Shopify Audit | Olumide" },
      { name: "description", content: "Send a brief and get a free Shopify store audit. PDP, trust, mobile CRO, upsells, branding and speed. Reply within 24 hours." },
      { property: "og:title", content: "Contact Olumide. Free Shopify Audit" },
      { property: "og:description", content: "Send a brief. Get a free audit. No pitch, just clear next steps." },
    ],
  }),
});

function ContactPage() {
  useReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("sent");
        form.reset();
      } else {
        throw new Error(data.message || "Could not send. Please try again or WhatsApp me.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Network error. Please try WhatsApp.");
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Let's talk"
        title={<>Tell me about <span className="text-gradient">your store.</span></>}
        subtitle="Send a short brief and I'll reply with a free audit plus next steps within 24 hours."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <div className="reveal lg:col-span-3 rounded-3xl border border-border bg-surface/40 p-8 lg:p-10">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  <Check className="w-7 h-7" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold">Message delivered.</h2>
                <p className="mt-2 text-muted-foreground">
                  Your brief just landed in my inbox. I'll reply within 24 hours, usually faster.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold mb-2">Project brief</h2>

                {/* FormSubmit config (hidden) */}
                <input type="hidden" name="_subject" value="New Shopify Brief from Portfolio" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name" name="name" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@brand.com" required />
                </div>
                <Field label="Brand / Store URL" name="brand" placeholder="https://yourbrand.com (optional)" />
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Budget</label>
                  <select name="budget" defaultValue="$500 to $1,500" className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition">
                    <option>Under $500</option>
                    <option>$500 to $1,500</option>
                    <option>$1,500 to $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Tell me about the project</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="What are you trying to build, fix, or grow?"
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:opacity-90 transition glow-ring disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send brief <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
                <p className="text-[11px] text-muted-foreground text-center">
                  Goes straight to my inbox. No spam, no list. Just a reply.
                </p>
              </form>
            )}
          </div>

          {/* SIDE */}
          <div className="lg:col-span-2 space-y-5">
            <ContactCard icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value={WHATSAPP_DISPLAY} href={WHATSAPP_URL} />

            <div className="reveal rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">Response time</p>
              <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                I personally reply to every message within <strong>24 hours</strong>, Monday to Friday.
              </p>
            </div>

            <div className="reveal rounded-2xl border border-border bg-surface/40 p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">What you get</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> A free 5-minute audit of your store</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> The top 3 leaks costing you sales</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> A clear quote, or honest "not a fit"</li>
              </ul>
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
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-5 hover:border-primary/60 hover:bg-surface transition"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-semibold text-sm truncate">{value}</div>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </a>
  );
}
