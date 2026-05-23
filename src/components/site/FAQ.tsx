import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does a free Shopify audit include?",
    a: "A short walkthrough of your store covering homepage clarity, product page structure, mobile flow, trust signals, speed, and the top 3 leaks costing you sales. You get clear next steps with no obligation.",
  },
  {
    q: "How long does an audit take to deliver?",
    a: "Most audits are delivered within 48 hours of receiving your brief. For deeper paid audits with video walkthrough and prioritised action plan, allow up to 5 working days.",
  },
  {
    q: "Will the changes really increase my sales?",
    a: "Conversion gains depend on your traffic quality and current baseline. Clients typically see lifts between 15% and 60% on key metrics like add-to-cart, AOV, and checkout completion after the fixes ship.",
  },
  {
    q: "Do I need to switch themes or break my store?",
    a: "No. I work inside your existing theme and copy your live theme to a draft first. Nothing goes live until you approve it, so your store keeps running while we build.",
  },
  {
    q: "What if my store is brand new with no traffic?",
    a: "Even better. We start with a foundation built for conversion so when traffic arrives, it converts. New stores get the same structure premium DTC brands use from day one.",
  },
  {
    q: "How do we work together and pay?",
    a: "We start on WhatsApp or email, agree on scope, and I send a simple invoice. Payment is split 50% to start and 50% on delivery. No long contracts, no surprises.",
  },
  {
    q: "Do you work with apps like Klaviyo, Judge.me, and Recharge?",
    a: "Yes. I install and configure the apps that move revenue and remove the ones slowing your store down. The stack stays lean and focused on what actually converts.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="reveal text-center mb-12">
          <p className="text-primary text-xs font-medium uppercase tracking-[0.25em]">Frequently asked</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Answers before you ask.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The questions store owners send me most often, answered up front.
          </p>
        </div>
        <div className="reveal space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-surface/40 transition-all ${
                  isOpen ? "border-primary/50 bg-surface/60" : "border-border hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">{f.q}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-surface border border-border text-primary"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
