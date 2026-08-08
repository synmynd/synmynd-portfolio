"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/*
  Which icon shows is decided by CSS off the `.light` class rather than React
  state, so there's nothing for the server and client to disagree about and no
  mount flicker.
*/
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Toggle colour theme"
      className="flex h-9 w-9 items-center justify-center rounded-pill border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <Sun size={16} className="block light:hidden" />
      <Moon size={16} className="hidden light:block" />
    </button>
  );
}
