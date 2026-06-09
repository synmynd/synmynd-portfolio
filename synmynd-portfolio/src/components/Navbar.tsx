"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 sm:px-10">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-primary">Syn</span>
          <span className="text-foreground">Mynd</span>
        </button>

        {/* Desktop: Get Started Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass border-t border-border/50 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-primary/90"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
