"use server";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const ALLOWED_AUTH_ROUTES = ["/auth/login", "/auth/signup"];

export function redirectAuth(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // If user is on allowed auth routes, do nothing
  if (ALLOWED_AUTH_ROUTES.includes(pathname)) {
    return;
  }

  // If user is on /auth or any other /auth/*
  if (pathname.startsWith("/auth")) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
}
