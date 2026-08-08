import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="max-w-lg text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        That page doesn&apos;t exist.
      </h1>
      <p className="max-w-md text-base text-muted">
        The link may be out of date. Try the services or agents pages, or get in
        touch and we&apos;ll point you the right way.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
