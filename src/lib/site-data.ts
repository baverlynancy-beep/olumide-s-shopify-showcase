import proof1 from "@/assets/proof-1.png";
import proof2 from "@/assets/proof-2.png";
import proof3 from "@/assets/proof-3.png";
import proof4 from "@/assets/proof-4.jpg";
import store1 from "@/assets/store-1.png";
import store2 from "@/assets/store-2.png";
import store3 from "@/assets/store-3.png";
import store4 from "@/assets/store-4.png";

export const WHATSAPP_NUMBER = "2348149587760";
export const WHATSAPP_DISPLAY = "+234 814 958 7760";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Olumide%2C%20I%27d%20like%20to%20discuss%20a%20Shopify%20project.`;

export const proofImages = [
  { src: proof1, label: "$3,600 Day · 2,702 Sessions" },
  { src: proof4, label: "$41,088 in a Single Day" },
  { src: proof2, label: "PKR 261M Total Sales" },
  { src: proof3, label: "Live Order Notifications" },
];

// Each service maps to recognizable brand logos (Simple Icons CDN) so visitors
// instantly recognise the tech stack even before reading the title.
export const services = [
  {
    title: "Custom Shopify Store Design",
    desc: "Distinct, brand-first storefronts engineered to convert from the first scroll.",
    brands: [{ slug: "shopify", color: "95BF47", name: "Shopify" }],
  },
  {
    title: "Speed & Performance Optimization",
    desc: "Cut load times, boost Core Web Vitals, and recover lost revenue.",
    brands: [
      { slug: "lighthouse", color: "F44B21", name: "Lighthouse" },
      { slug: "pagespeedinsights", color: "4285F4", name: "PageSpeed" },
    ],
  },
  {
    title: "Shopify Migration",
    desc: "Seamless moves from WooCommerce, Wix, Magento — zero data loss.",
    brands: [
      { slug: "woocommerce", color: "96588A", name: "WooCommerce" },
      { slug: "wix", color: "0C6EFC", name: "Wix" },
      { slug: "magento", color: "EE672F", name: "Magento" },
    ],
  },
  {
    title: "Theme Customization & Development",
    desc: "Custom Liquid, sections, and components tailored to your brand.",
    brands: [
      { slug: "shopify", color: "95BF47", name: "Liquid" },
      { slug: "css3", color: "1572B6", name: "CSS" },
      { slug: "javascript", color: "F7DF1E", name: "JavaScript" },
    ],
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Data-driven CRO audits and tests that lift AOV and checkout rates.",
    brands: [
      { slug: "googleanalytics", color: "E37400", name: "GA4" },
      { slug: "hotjar", color: "FD3A5C", name: "Hotjar" },
    ],
  },
  {
    title: "App Integration & Automation",
    desc: "Connect your stack — Klaviyo, ReCharge, Gorgias — and automate ops.",
    brands: [
      { slug: "klaviyo", color: "1B1A1B", name: "Klaviyo" },
      { slug: "zapier", color: "FF4F00", name: "Zapier" },
      { slug: "mailchimp", color: "FFE01B", name: "Mailchimp" },
    ],
  },
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
  { name: "OURLUM", niche: "Multi-Category Marketplace", result: "Full-scale storefront — 1,000+ SKUs across beauty, electronics & lifestyle.", image: store1 },
  { name: "YUVA", niche: "Skincare & Beauty", result: "Editorial beauty store with timed launches — +52% add-to-cart rate.", image: store2 },
  { name: "Beautify", niche: "Cosmetics & Wellness", result: "Soft, premium beauty storefront — 3.4× returning customer rate.", image: store3 },
  { name: "LUMORA", niche: "Vegan Skincare", result: "Clean-beauty DTC launch — 12K monthly visits in 90 days.", image: store4 },
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
