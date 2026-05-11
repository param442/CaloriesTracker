"use client";

import { usePathname } from "next/navigation";
import FloatingNavbar from "@/components/navbar/floatingNavbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

  return <FloatingNavbar />;
}
