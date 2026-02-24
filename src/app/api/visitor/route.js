import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getRedis } from "@/lib/redis";

function getVisitorIP(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const real = request.headers.get("x-real-ip");
  const ip = request.headers.get("x-client-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  if (real) {
    return real.trim();
  }
  if (ip) {
    return ip.trim();
  }
  return null;
}

export async function GET(request) {
  const cookieStore = request.cookies;
  let visitorId = cookieStore.get("visitor-id")?.value;
  const isNewVisitor = !visitorId;

  if (!visitorId) {
    visitorId = randomUUID();
  }

  const ip = getVisitorIP(request);
  const identity = ip ? `${visitorId}:${ip}` : visitorId;

  const redis = getRedis();

  try {
    await redis.pfadd("site:unique-visitors", identity);
    const count = await redis.pfcount("site:unique-visitors");

    const response = NextResponse.json({ count, visitorId });

    if (isNewVisitor) {
      response.cookies.set("visitor-id", visitorId, {
        maxAge: 365 * 24 * 60 * 60, // 1 year
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch (error) {
    return NextResponse.json({ count: 0, visitorId });
  }
}
