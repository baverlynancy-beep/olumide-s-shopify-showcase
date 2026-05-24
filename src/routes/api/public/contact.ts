import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  brand: z.string().trim().max(300).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(1).max(4000),
  _honey: z.string().optional(),
});

const TARGET_EMAIL = "olumidesamsonlb1@gmail.com";

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }),
      POST: async ({ request }) => {
        const cors = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        };
        try {
          const json = await request.json().catch(() => null);
          const parsed = ContactSchema.safeParse(json);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ success: false, message: "Invalid input. Please check the form fields." }),
              { status: 400, headers: cors },
            );
          }
          // Honeypot — silently succeed
          if (parsed.data._honey) {
            return new Response(JSON.stringify({ success: true }), { status: 200, headers: cors });
          }

          const { name, email, brand, budget, message } = parsed.data;
          const payload = {
            _subject: "New Shopify Brief from Portfolio",
            _template: "table",
            _captcha: "false",
            name,
            email,
            brand,
            budget,
            message,
          };

          const upstream = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
          });
          const data: any = await upstream.json().catch(() => ({}));
          const ok = upstream.ok && (data.success === "true" || data.success === true);

          if (!ok) {
            return new Response(
              JSON.stringify({
                success: false,
                message:
                  data?.message ||
                  "Email service did not accept the brief. If this is the first message, check your inbox to activate the form, then try again.",
              }),
              { status: 502, headers: cors },
            );
          }
          return new Response(JSON.stringify({ success: true }), { status: 200, headers: cors });
        } catch (err: any) {
          return new Response(
            JSON.stringify({ success: false, message: "Server error. Please WhatsApp me instead." }),
            { status: 500, headers: cors },
          );
        }
      },
    },
  },
});
