import { NextResponse } from "next/server";

const FORMS_ENDPOINT = "https://forms.caltechweb.com/api/submit";
const SITE_KEY = "xpertdairysystems";

export async function POST(request: Request) {
  let payload: Record<string, string>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    const subject = (payload.subject || "General Inquiry").trim();
    const phone = (payload.phone || "").trim();
    const company = (payload.company || "").trim();
    const composedMessage = [
      `Subject: ${subject}`,
      company && `Company: ${company}`,
      phone && `Phone: ${phone}`,
      "",
      message,
    ].filter(Boolean).join("\n");

    const res = await fetch(FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://xpertdairysystems.vercel.app",
      },
      body: JSON.stringify({
        site: SITE_KEY,
        name,
        email,
        phone,
        subject,
        source: "contact",
        message: composedMessage,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return NextResponse.json(
        { error: "Form service returned an error", details: body.slice(0, 200) },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Network error" },
      { status: 502 }
    );
  }
}
