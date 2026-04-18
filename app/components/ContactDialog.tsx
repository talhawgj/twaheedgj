"use client";

import { useState } from "react";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  if (!isOpen) return null;

  const contacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      value: "talhawaheed7807@gmail.com",
      href: "mailto:talhawaheed7807@gmail.com",
      color: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+92 309 6444 416",
      href: "https://wa.me/923096444416?text=Hi%20Talha%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: (
        <img src="/upwork-svgrepo-com.svg" alt="Upwork" className="w-6 h-6" />
      ),
      label: "Upwork",
      value: "talhawaheed",
      href: "https://www.upwork.com/freelancers/talhawaheed",
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-black border border-white/10 rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            <p className="text-slate-400 text-sm mb-8">
              Choose your preferred way to get in touch. I'll get back to you as soon as possible.
            </p>

            {/* Contact Options */}
            <div className="space-y-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel={contact.label !== "Email" ? "noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${
                    contact.label === "GitHub"
                      ? "text-white " + contact.color
                      : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                  } group`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      contact.label === "GitHub"
                        ? "bg-white text-black"
                        : contact.color
                    } text-white flex items-center justify-center flex-shrink-0`}
                  >
                    {contact.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">{contact.label}</div>
                    <div className="text-xs text-slate-400 truncate">{contact.value}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-slate-500">
                Or copy and share my details from any contact above.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="px-8 py-4 border-t border-white/5 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
