"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      } border-b border-black/10`}
      style={{ height: "64px" }}
    >
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="10" cy="10" r="5" fill="#FF0090" />
            <circle cx="18" cy="10" r="5" fill="#FF0090" opacity="0.6" />
            <circle cx="14" cy="18" r="5" fill="#FF0090" opacity="0.8" />
          </svg>
          <span className="font-display font-black text-xl uppercase tracking-tight text-black">
            GROUPTEA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["About Us", "How It Works", "Categories"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-display font-semibold text-sm uppercase tracking-wide text-black hover:text-[#FF0090] transition-colors duration-200 no-underline"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#rsvp"
          className="font-display font-black text-sm uppercase tracking-widest bg-[#FF0090] text-white px-6 py-2.5 hover:bg-black transition-colors duration-200 cursor-pointer"
        >
          JOIN NOW
        </a>
      </div>
    </nav>
  );
}
