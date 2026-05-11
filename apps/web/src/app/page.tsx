"use client";

import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-white ">
      <Dashboard />

      {/* Wrap Navbar in motion.div for smooth slide */}
    </div>
  );
}
