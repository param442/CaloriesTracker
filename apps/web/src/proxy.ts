import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirectAuth } from "./middlewares/redirectAuth";
// import { requireAuth } from "./middlewares/requireAuth";

type MW = (req: NextRequest) => NextResponse | void;

function run(req: NextRequest, mws: MW[]) {
  for (const mw of mws) {
    const res = mw(req);
    if (res) return res;
  }
  return NextResponse.next();
}

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // auth rules
  if (pathname.startsWith("/auth")) {
    return run(req, [redirectAuth]);
  }

  // protect ONLY home (dashboard)
  if (pathname === "/") {
    // return run(req, [requireAuth]);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
