import { NextResponse } from "next/server";
import { buildOpenSlots } from "@/lib/booking";
import { getHeldBookingStarts } from "@/lib/stripe";
import { SESSION } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const held = await getHeldBookingStarts();
  const slots = buildOpenSlots(held);
  return NextResponse.json({
    timezone: SESSION.timezone,
    timezoneLabel: SESSION.timezoneLabel,
    durationMin: SESSION.durationMin,
    priceLabel: SESSION.priceLabel,
    slots,
  });
}
