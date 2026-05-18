import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Olumide Digital Solution — Shopify Partner & Store Builder" },
      { name: "description", content: "Certified Shopify Partner helping brands launch, grow, and scale eCommerce stores with custom design, speed optimization, and CRO." },
      { property: "og:title", content: "Olumide Digital Solution — Shopify Partner" },
      { property: "og:description", content: "I build Shopify stores that sell. 50+ stores delivered, $2M+ revenue generated." },
    ],
  }),
});
