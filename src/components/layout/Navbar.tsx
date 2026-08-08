"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-base/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link href="/" className="text-xl font-extrabold tracking-tighter">
          <span className="text-accent">Syn</span>
          <span>Mynd</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-pill px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "text-accent"
                    : "text-muted hover:bg-surface hover:text-text",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Book a call
          </ButtonLink>
          <button
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-pill border border-border text-text lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-base lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-text transition-colors hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              size="lg"
              className="mt-3"
              onClick={() => setOpen(false)}
            >
              Book a call
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
