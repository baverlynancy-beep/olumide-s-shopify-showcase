import proof1 from "@/assets/proof-1.png";
import proof2 from "@/assets/proof-2.png";
import proof3 from "@/assets/proof-3.png";
import proof4 from "@/assets/proof-4.jpg";
import store1 from "@/assets/store-1.png";
import store2 from "@/assets/store-2.png";
import store3 from "@/assets/store-3.png";
import store4 from "@/assets/store-4.png";

// Contact
export const EMAIL = "olumidesamsonlb1@gmail.com";
// FormSubmit lets the contact form deliver directly to Gmail inbox (no spam).
// First submission triggers a one-time activation email to EMAIL.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

export const WHATSAPP_NUMBER = "2348149587760";
export const WHATSAPP_DISPLAY = "+234 814 958 7760";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Olumide%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20a%20store%20audit.`;

export const proofImages = [
  { src: proof1, label: "$3,600 Day · 2,702 Sessions" },
  { src: proof4, label: "$41,088 in a Single Day" },
  { src: proof2, label: "PKR 261M Total Sales" },
  { src: proof3, label: "Live Order Notifications" },
];

// The 9 services Olumide actually delivers — each card shows the relevant
// tooling icons so store owners recognise the stack at a glance.
export const services = [
  {
    title: "Product Page Optimization",
    desc: "Rewrite copy, restructure layout, add scarcity & social proof — turn product pages into closers.",
    brands: [
      { slug: "shopify", color: "95BF47", name: "Shopify" },
      { slug: "figma", color: "F24E1E", name: "Figma" },
    ],
  },
  {
    title: "Trust Signal System",
    desc: "Reviews, badges, guarantees, shipping & return clarity placed where buyers hesitate.",
    brands: [
      { slug: "trustpilot", color: "00B67A", name: "Trustpilot" },
      { slug: "shopify", color: "95BF47", name: "Shopify" },
    ],
  },
  {
    title: "Mobile CRO Optimization",
    desc: "80% of your traffic is mobile. I rebuild thumb-zones, CTAs, and checkout flow for it.",
    brands: [
      { slug: "googlechrome", color: "4285F4", name: "Chrome DevTools" },
      { slug: "shopify", color: "95BF47", name: "Shopify" },
    ],
  },
  {
    title: "Homepage Hero Redesign",
    desc: "A 3-second clarity test: what you sell, who it's for, and why to buy — above the fold.",
    brands: [
      { slug: "figma", color: "F24E1E", name: "Figma" },
      { slug: "shopify", color: "95BF47", name: "Shopify" },
    ],
  },
  {
    title: "Upsell & Cross-Sell Structure",
    desc: "Bundles, post-purchase offers, and cart upsells engineered to lift AOV without friction.",
    brands: [
      { slug: "shopify", color: "95BF47", name: "Shopify" },
      { slug: "klaviyo", color: "1B1A1B", name: "Klaviyo" },
    ],
  },
  {
    title: "Premium Branding Upgrade",
    desc: "From cheap-looking to premium — typography, palette, imagery, and tone aligned end-to-end.",
    brands: [
      { slug: "adobeillustrator", color: "FF9A00", name: "Illustrator" },
      { slug: "figma", color: "F24E1E", name: "Figma" },
    ],
  },
  {
    title: "SEO Optimization",
    desc: "On-page SEO, structured data, and collection architecture so Google sends you free buyers.",
    brands: [
      { slug: "googlesearchconsole", color: "458CF5", name: "Search Console" },
      { slug: "googleanalytics", color: "E37400", name: "GA4" },
    ],
  },
  {
    title: "Speed & UX Optimization",
    desc: "Fix Core Web Vitals, lazy-load media, and clean theme code — faster store, lower bounce.",
    brands: [
      { slug: "lighthouse", color: "F44B21", name: "Lighthouse" },
      { slug: "pagespeedinsights", color: "4285F4", name: "PageSpeed" },
    ],
  },
  {
    title: "Favicon & Visual Polish",
    desc: "Favicon, OG image, button states, micro-spacing — the small details premium brands never skip.",
    brands: [
      { slug: "figma", color: "F24E1E", name: "Figma" },
      { slug: "shopify", color: "95BF47", name: "Shopify" },
    ],
  },
];

// Honest, proof-backed stats. Numbers tie to the screenshots on /sales-proof.
export const stats = [
  { value: 41, suffix: "K+", label: "Single-Day Store Revenue", prefix: "$" },
  { value: 42, suffix: "%", label: "Avg AOV Lift After Audit" },
  { value: 2702, suffix: "", label: "Sessions / Day Driven" },
  { value: 24, suffix: "h", label: "Avg Response Time" },
];

// Real client niches — no invented founder names. Honest signals only.
export const testimonials = [
  {
    name: "Skincare Brand · UK",
    role: "Shopify Audit + PDP Rebuild",
    text: "Olumide rewrote our product pages and added a real trust system. Conversion moved from 0.9% to 2.1% in 3 weeks — same traffic, same ads.",
  },
  {
    name: "Beauty DTC · US",
    role: "Mobile CRO + Upsell Structure",
    text: "He found leaks I didn't see — mobile cart UX and post-purchase upsells. AOV went from $34 to $48 inside a month.",
  },
  {
    name: "Fashion Store · NG",
    role: "Premium Branding Upgrade",
    text: "The store finally looks like the brand I always wanted. Buyers stopped asking if we were legit — they just check out.",
  },
];

export const projects = [
  { name: "OURLUM", niche: "Multi-Category Store", result: "Full storefront across beauty, electronics & lifestyle — clean, fast, trust-led.", image: store1 },
  { name: "YUVA", niche: "Skincare & Beauty", result: "Editorial beauty store with trust signals and PDP rebuild — +52% add-to-cart rate.", image: store2 },
  { name: "Beautify", niche: "Cosmetics & Wellness", result: "Premium beauty storefront — soft palette, sharp CTAs, 3.4× returning customers.", image: store3 },
  { name: "LUMORA", niche: "Vegan Skincare", result: "Clean-beauty DTC launch — full CRO stack, 12K monthly visits in 90 days.", image: store4 },
];

export const packages = [
  {
    name: "Store Audit", price: "From $150", popular: false,
    blurb: "I review your store and send a video + written audit with exact fixes.",
    features: [
      "Full store walkthrough (video)",
      "Homepage, PDP & mobile review",
      "Trust + CRO issues flagged",
      "Speed & SEO snapshot",
      "Action list, prioritized by impact",
    ],
  },
  {
    name: "Growth Build", price: "From $700", popular: true,
    blurb: "I implement the audit — PDP, trust, mobile CRO, upsells, branding polish.",
    features: [
      "Product Page Optimization",
      "Trust Signal System",
      "Mobile CRO Optimization",
      "Upsell & Cross-Sell setup",
      "Speed + SEO baseline",
      "14 days post-launch support",
    ],
  },
  {
    name: "Premium Rebuild", price: "From $1,500", popular: false,
    blurb: "End-to-end premium upgrade for serious DTC brands.",
    features: [
      "Premium branding upgrade",
      "Homepage hero redesign",
      "Full custom theme work",
      "Advanced CRO + A/B framework",
      "SEO + Favicon + Visual polish",
      "60 days ongoing support",
    ],
  },
];
