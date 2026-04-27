"use client";

import { useState, useRef } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const SUBJECTS = [
  "GIS Project Inquiry",
  "Web GIS Development",
  "Geospatial API Development",
  "ArcGIS / QGIS Consulting",
  "Remote Sensing Analysis",
  "Full-Stack Development",
  "Collaboration / Partnership",
  "Other",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: Record<string, string>) {
    const errs: Record<string, string> = {};
    if (!data.name || data.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address.";
    if (!data.subject) errs.subject = "Please select a subject.";
    if (!data.message || data.message.trim().length < 20) errs.message = "Message must be at least 20 characters.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    };

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setState("error");
      } else {
        setState("success");
        formRef.current?.reset();
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  const inputCls =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.07] transition-all duration-200";
  const errCls = "text-red-400 text-xs mt-1.5 flex items-center gap-1";

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
        <p className="text-slate-400 text-sm max-w-xs">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact Talha Waheed"
      className="space-y-5"
    >
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
            Name <span className="text-yellow-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`${inputCls} ${fieldErrors.name ? "border-red-500/50" : ""}`}
            disabled={state === "submitting"}
          />
          {fieldErrors.name && (
            <p className={errCls} role="alert">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
            Email <span className="text-yellow-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`${inputCls} ${fieldErrors.email ? "border-red-500/50" : ""}`}
            disabled={state === "submitting"}
          />
          {fieldErrors.email && (
            <p className={errCls} role="alert">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
          Subject <span className="text-yellow-500">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-subject"
            name="subject"
            defaultValue=""
            className={`${inputCls} appearance-none pr-10 cursor-pointer ${fieldErrors.subject ? "border-red-500/50" : ""}`}
            disabled={state === "submitting"}
          >
            <option value="" disabled className="bg-[#0a0a0a] text-slate-500">Select a topic…</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s} className="bg-[#0a0a0a] text-white">{s}</option>
            ))}
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {fieldErrors.subject && (
          <p className={errCls} role="alert">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            {fieldErrors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
          Message <span className="text-yellow-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Describe your project or question in a few sentences…"
          className={`${inputCls} resize-none leading-relaxed ${fieldErrors.message ? "border-red-500/50" : ""}`}
          disabled={state === "submitting"}
        />
        {fieldErrors.message && (
          <p className={errCls} role="alert">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* API error */}
      {state === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30"
      >
        {state === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-600">
        No spam. I reply within 24 hours — usually faster.
      </p>
    </form>
  );
}
