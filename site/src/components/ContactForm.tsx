"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      subject: String(formData.get("subject") || "General Inquiry"),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Submission failed");
      }
      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-xds-line rounded-xl p-10 text-center">
        <CheckCircle2 size={48} className="text-xds-blue mx-auto" />
        <h3 className="mt-4 font-display font-bold text-2xl text-xds-ink">Message sent</h3>
        <p className="mt-3 text-xds-slate">
          Thanks for reaching out. We will get back to you as soon as possible. For emergencies call (559) 946-6131.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-xds-blue hover:text-xds-blue-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white border border-xds-line rounded-xl p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Company / Dairy" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-xds-charcoal mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue="Service Request"
          className="w-full rounded-lg border border-xds-line bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-xds-blue focus:border-xds-blue"
        >
          <option>Service Request</option>
          <option>Emergency Service</option>
          <option>Parts Inquiry</option>
          <option>Dealer Partnership</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-xds-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what's going on with your equipment, your timeline, and how to reach you."
          className="w-full rounded-lg border border-xds-line bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-xds-blue focus:border-xds-blue resize-y"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">Could not send message</div>
            <div>{errorMessage}. Please call (559) 946-6131 directly.</div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : (<>Send Message <Send size={16} /></>)}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-xds-charcoal mb-1.5">
        {label}{required && <span className="text-xds-blue"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-xds-line bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-xds-blue focus:border-xds-blue"
      />
    </div>
  );
}
