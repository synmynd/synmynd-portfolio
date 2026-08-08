import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 sm:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Card({
  className,
  children,
  as: Tag = "div",
  interactive = false,
  ...props
}: {
  className?: string;
  children: ReactNode;
  as?: ElementType;
  interactive?: boolean;
} & Omit<ComponentProps<"div">, "className" | "children">) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-border bg-surface p-6",
        interactive &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_32px_-12px_var(--glow)]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Badge({
  className,
  children,
  tone = "muted",
}: {
  className?: string;
  children: ReactNode;
  tone?: "accent" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-medium",
        tone === "accent"
          ? "bg-accent-soft text-accent"
          : "border border-border text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-surface/40">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-col gap-5">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {description}
            </p>
          )}
          {children && <div className="mt-2 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </header>
  );
}

export function Prose({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 text-base leading-relaxed text-muted [&_strong]:text-text",
        className,
      )}
      {...props}
    />
  );
}
