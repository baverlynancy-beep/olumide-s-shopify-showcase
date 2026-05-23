import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/lib/site-data";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(
    "Hi Olumide, I saw your portfolio and I'd like a free Shopify audit for my store.",
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] transition-all duration-500 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {open && (
        <div className="mb-3 w-[300px] rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between gap-3 bg-[#25D366] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Chat with Olumide</div>
                <div className="text-[11px] opacity-90">Replies within 24h</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="opacity-80 hover:opacity-100">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-xs text-muted-foreground">Send a quick message and I'll get back to you on WhatsApp.</p>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
            />
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Send on WhatsApp <Send className="w-4 h-4" />
            </a>
            <p className="text-[10px] text-center text-muted-foreground">{WHATSAPP_DISPLAY}</p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.55)] flex items-center justify-center hover:scale-105 transition"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {open ? <X className="w-6 h-6 relative" /> : <MessageCircle className="w-7 h-7 relative" />}
      </button>
    </div>
  );
}
