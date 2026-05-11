"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { LayoutDashboard } from "lucide-react";
const Navbar = ({ className }: { className?: string }) => {
  return (
    <>
      <nav className={cn("", className)}>
        <ul className=" flex items-center justify-around">
          <li className="inline-block mr-4">
            <Link href="/">
              <span className="flex flex-col items-center gap-1">
                <LayoutDashboard className="w-6 h-6" />
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Dashboard
                </p>
              </span>
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/log-food">
              <span className="flex flex-col items-center gap-1">
                <LayoutDashboard className="w-6 h-6" />
                <p className="text-muted-foreground text-xs sm:text-sm">
                  LogFood
                </p>
              </span>
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/shortcuts">
              <span className="flex flex-col items-center gap-1">
                <LayoutDashboard className="sm:w-6  w-3h-6" />
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Shortcuts
                </p>
              </span>
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/settings">
              <span className="flex flex-col items-center gap-1">
                <LayoutDashboard className="w-6 h-6" />
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Settings
                </p>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
