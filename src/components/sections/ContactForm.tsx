"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { projectPlans } from "@/content/pricing";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Something went wrong.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 size={44} className="text-accent" strokeWidth={1.5} />
        <h2 className="text-xl font-semibold">Message received.</h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          We&apos;ll reply within one business day, usually with a couple of
          times for a call and any questions we have about your setup.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {/* Honeypot — real users never see or fill this. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" placeholder="Company name" />
        <div className="flex flex-col gap-2">
          <label htmlFor="interest" className="text-sm font-medium">
            What are you after?
          </label>
          <select id="interest" name="interest" className={fieldClass}>
            <option value="">Not sure yet</option>
            {projectPlans.map((plan) => (
              <option key={plan.slug} value={plan.name}>
                {plan.name}
              </option>
            ))}
            <option value="Retainer">Ongoing retainer</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          What&apos;s taking up your team&apos;s time?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the process you'd like to automate — the more specific, the more useful our first reply will be."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full sm:w-fit"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <ArrowRight size={16} />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}
