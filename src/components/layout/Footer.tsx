"use client";

import { Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-5 sm:px-10">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold tracking-tighter">
            <span className="text-primary">Syn</span>
            <span className="text-foreground">Mynd</span>
          </p>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <p className="hidden text-xs text-muted sm:block">
            AI Agents • Intelligent Automation • SaaS Solutions
          </p>
        </div>

        {/* Social + copyright */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary hover:text-primary"
              >
                <link.icon size={14} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <span className="h-4 w-px bg-border" />
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-primary">Syn</span>
            <span className="font-bold text-foreground">Mynd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
