"use server";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function requireAuth(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
}
