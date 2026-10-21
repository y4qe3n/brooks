import { getDb } from "@/db";
import { enquiries } from "@/db/schema";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type EnquiryPayload = {
  fullName?: unknown;
  businessName?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

const services = new Set([
  "Social Media Marketing",
  "Paid Advertising",
  "Content Creation",
  "Brand Strategy",
  "Website Design",
  "Digital Growth Strategy",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: EnquiryPayload;

  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  if (clean(body.website, 100)) {
    return NextResponse.json({ ok: true, message: "Thanks — your enquiry has been received." });
  }

  const fullName = clean(body.fullName, 120);
  const businessName = clean(body.businessName, 160);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40);
  const service = clean(body.service, 100);
  const budget = clean(body.budget, 80);
  const message = clean(body.message, 3000);

  const fieldErrors: Record<string, string> = {};

  if (fullName.length < 2) fieldErrors.fullName = "Enter your full name.";
  if (businessName.length < 2) fieldErrors.businessName = "Enter your business name.";
  if (!isEmail(email)) fieldErrors.email = "Enter a valid email address.";
  if (!services.has(service)) fieldErrors.service = "Choose a service.";
  if (message.length < 15) fieldErrors.message = "Tell us a little more (at least 15 characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  try {
    await getDb().insert(enquiries).values({
      fullName,
      businessName,
      email,
      phone: phone || null,
      service,
      budget: budget || null,
      message,
    });

    return NextResponse.json(
      { ok: true, message: "Thanks — your enquiry has been received. We’ll be in touch soon." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to store enquiry", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn’t save your enquiry just now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
