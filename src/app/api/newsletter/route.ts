import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { isValidLocale } from "@/lib/i18n/config";

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase credentials not configured");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, locale, consent } = body as {
      email?: string;
      locale?: string;
      consent?: boolean;
    };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }

    const validLocale = locale && isValidLocale(locale) ? locale : "nl";

    const supabase = getSupabase();

    const { error } = await supabase.from("belgium_vignette_subscribers").upsert(
      {
        email: email.toLowerCase().trim(),
        locale: validLocale,
        consent_given_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
