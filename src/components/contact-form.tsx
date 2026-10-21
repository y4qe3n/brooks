"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string>;

const services = [
  "Social Media Marketing",
  "Paid Advertising",
  "Content Creation",
  "Brand Strategy",
  "Website Design",
  "Digital Growth Strategy",
];

const budgets = [
  "Not sure yet",
  "Under £1,000",
  "£1,000 – £2,500",
  "£2,500 – £5,000",
  "£5,000+",
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setMessage("Sending your enquiry securely…");
    setFieldErrors({});

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message ?? "Something went wrong. Please try again.");
        setFieldErrors(result.fieldErrors ?? {});
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(result.message ?? "Thanks — your enquiry has been received.");
    } catch {
      setStatus("error");
      setMessage("We couldn’t connect just now. Check your connection and try again.");
    }
  }

  const errorFor = (name: string) => fieldErrors[name];

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full name <span>*</span></label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            placeholder="Your name"
            aria-invalid={Boolean(errorFor("fullName"))}
            aria-describedby={errorFor("fullName") ? "fullName-error" : undefined}
          />
          {errorFor("fullName") && <small id="fullName-error">{errorFor("fullName")}</small>}
        </div>

        <div className="field">
          <label htmlFor="businessName">Business name <span>*</span></label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            required
            minLength={2}
            maxLength={160}
            placeholder="Your business"
            aria-invalid={Boolean(errorFor("businessName"))}
            aria-describedby={errorFor("businessName") ? "businessName-error" : undefined}
          />
          {errorFor("businessName") && <small id="businessName-error">{errorFor("businessName")}</small>}
        </div>

        <div className="field">
          <label htmlFor="email">Email address <span>*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@business.com"
            aria-invalid={Boolean(errorFor("email"))}
            aria-describedby={errorFor("email") ? "email-error" : undefined}
          />
          {errorFor("email") && <small id="email-error">{errorFor("email")}</small>}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone number <em>Optional</em></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="Your phone number"
          />
        </div>

        <div className="field">
          <label htmlFor="service">Service of interest <span>*</span></label>
          <div className="select-wrap">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              aria-invalid={Boolean(errorFor("service"))}
              aria-describedby={errorFor("service") ? "service-error" : undefined}
            >
              <option value="" disabled>Choose a service</option>
              {services.map((service) => <option key={service}>{service}</option>)}
            </select>
          </div>
          {errorFor("service") && <small id="service-error">{errorFor("service")}</small>}
        </div>

        <div className="field">
          <label htmlFor="budget">Project budget <em>Optional</em></label>
          <div className="select-wrap">
            <select id="budget" name="budget" defaultValue="">
              <option value="">Select a range</option>
              {budgets.map((budget) => <option key={budget}>{budget}</option>)}
            </select>
          </div>
        </div>

        <div className="field field-full">
          <label htmlFor="message">Tell us about the project <span>*</span></label>
          <textarea
            id="message"
            name="message"
            required
            minLength={15}
            maxLength={3000}
            rows={5}
            placeholder="What are you working on, and what would a win look like?"
            aria-invalid={Boolean(errorFor("message"))}
            aria-describedby={errorFor("message") ? "message-error" : undefined}
          />
          {errorFor("message") && <small id="message-error">{errorFor("message")}</small>}
        </div>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-submit-row">
        <button className="button button-blue button-submit" type="submit" disabled={status === "submitting"}>
          <span>{status === "submitting" ? "Sending…" : "Send My Enquiry"}</span>
          <span className="button-arrow" aria-hidden="true">↗</span>
        </button>
        <p
          className={`form-status ${status === "error" ? "is-error" : ""} ${status === "success" ? "is-success" : ""}`}
          role="status"
          aria-live="polite"
        >
          {message || "Fields marked * are required."}
        </p>
      </div>
    </form>
  );
}
