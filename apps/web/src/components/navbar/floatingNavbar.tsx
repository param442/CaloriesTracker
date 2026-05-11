"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Navbar from "./navbar";

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < lastScroll) {
      setShowNavbar(true);
    } else if (current > lastScroll + 10) {
      setShowNavbar(false);
    }
    setLastScroll(current);
  });

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: showNavbar ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 w-full z-50">
      <Navbar className="text-black bg-white border-t border-gray-300 p-4" />
    </motion.div>
  );
}
