import Link from "next/link";
import { footerNav, site, socials } from "@/content/site";
import { Container } from "@/components/ui";
import { Icon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-extrabold tracking-tighter">
              <span className="text-accent">Syn</span>
              <span>Mynd</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="text-sm text-muted">{site.location}</p>
            <div className="mt-2 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-pill border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.heading} className="flex flex-col gap-3">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text">
                  {group.heading}
                </h3>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
