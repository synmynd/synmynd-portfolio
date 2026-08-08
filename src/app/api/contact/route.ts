import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().min(3).max(200).includes("@"),
  company: z.string().max(120).optional().default(""),
  interest: z.string().max(120).optional().default(""),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional().default(""),
});

/*
  In-memory limiter. Adequate for a single instance; swap for Upstash Redis
  before this runs on more than one serverless region.
*/
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Try again in a minute." },
      { status: 429 },
    );
  }

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const { website, ...submission } = parsed.data;
  // Honeypot filled means a bot. Return success so it doesn't retry.
  if (website) return NextResponse.json({ success: true });

  const webhook = process.env.N8N_WEBHOOK_URL;
  if (!webhook) {
    console.error("N8N_WEBHOOK_URL is not set; contact submission dropped.");
    return NextResponse.json(
      { error: "Contact form isn't configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...submission,
        source: "synmynd.com contact form",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact webhook failed:", error);
    return NextResponse.json(
      { error: "We couldn't send that. Please try again or email us." },
      { status: 502 },
    );
  }
}
