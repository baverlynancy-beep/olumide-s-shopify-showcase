import { ShoppingBag, Zap, RefreshCw, Palette, TrendingUp, Wrench } from "lucide-react";
import proof1 from "@/assets/proof-1.png";
import proof2 from "@/assets/proof-2.png";
import proof3 from "@/assets/proof-3.png";
import proof4 from "@/assets/proof-4.jpg";

export const proofImages = [
  { src: proof1, label: "$3,600 Day · 2,702 Sessions" },
  { src: proof4, label: "$41,088 in a Single Day" },
  { src: proof2, label: "PKR 261M Total Sales" },
  { src: proof3, label: "Live Order Notifications" },
];

export const services = [
  { icon: ShoppingBag, title: "Custom Shopify Store Design", desc: "Distinct, brand-first storefronts engineered to convert from the first scroll." },
  { icon: Zap, title: "Speed & Performance Optimization", desc: "Cut load times, boost Core Web Vitals, and recover lost revenue." },
  { icon: RefreshCw, title: "Shopify Migration", desc: "Seamless moves from WooCommerce, Wix, Magento — zero data loss." },
  { icon: Palette, title: "Theme Customization & Development", desc: "Custom Liquid, sections, and components tailored to your brand." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", desc: "Data-driven CRO audits and tests that lift AOV and checkout rates." },
  { icon: Wrench, title: "App Integration & Automation", desc: "Connect your stack — Klaviyo, ReCharge, Gorgias — and automate ops." },
];

export const stats = [
  { value: 50, suffix: "+", label: "Shopify Stores Delivered" },
  { value: 2, suffix: "M+", label: "Revenue Generated", prefix: "$" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "★", label: "Average Rating" },
];

export const testimonials = [
  { name: "Sarah M.", role: "CEO, Lunar Apparel", text: "Olumide transformed our Shopify store completely. Sales increased by 40% in the first month!" },
  { name: "James K.", role: "Founder, Hyde Beauty", text: "Pixel-perfect design, lightning speed, and a team that actually cares. Best investment we made." },
  { name: "Priya R.", role: "Owner, NorthCharge", text: "From migration to launch in 3 weeks. Our checkout conversion is up 28% — and still climbing." },
];

export const projects = [
  { name: "Lunar Apparel", niche: "Fashion", result: "Increased conversion by 35%" },
  { name: "Hyde Beauty", niche: "Beauty", result: "Doubled monthly revenue in 60 days" },
  { name: "NorthCharge", niche: "Electronics", result: "Reduced load time by 62%" },
  { name: "Verde Goods", niche: "Lifestyle", result: "Migration + redesign, +48% AOV" },
];

export const packages = [
  {
    name: "Starter", price: "From $300", popular: false,
    blurb: "Perfect for new brands launching their first store.",
    features: ["Basic Shopify setup", "Theme install & config", "Up to 20 product uploads", "Payment & shipping setup", "Basic SEO setup"],
  },
  {
    name: "Growth", price: "From $700", popular: true,
    blurb: "Built for brands ready to scale revenue and conversion.",
    features: ["Custom theme design", "Full product setup (up to 100)", "Speed optimization", "App integrations", "Email automation setup", "30 days post-launch support"],
  },
  {
    name: "Premium", price: "From $1,500", popular: false,
    blurb: "End-to-end build for serious DTC brands.",
    features: ["Full custom store build", "Brand identity & assets", "Advanced CRO setup", "A/B testing framework", "Unlimited products", "90 days ongoing support"],
  },
];
