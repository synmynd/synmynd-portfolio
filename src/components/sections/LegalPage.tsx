export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <article className="mx-auto max-w-3xl py-20">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        Last updated{" "}
        {new Date().toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
