import { platforms } from "@/content/platforms";
import { Container } from "@/components/ui";

/*
  Two tracks scrolling opposite directions. Each track duplicates its list so the
  -50% keyframe lands exactly on the seam. Paused entirely under reduced motion
  by the global media query in globals.css.
*/
function Track({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex shrink-0 gap-12 pr-12 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PlatformMarquee() {
  const names = platforms.map((platform) => platform.name);
  const half = Math.ceil(names.length / 2);

  return (
    <section className="border-y border-border bg-surface/40 py-10">
      <Container className="mb-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          We build on the tools you already use
        </p>
      </Container>
      <div className="flex flex-col gap-5">
        <Track items={names.slice(0, half)} />
        <Track items={names.slice(half)} reverse />
      </div>
    </section>
  );
}
