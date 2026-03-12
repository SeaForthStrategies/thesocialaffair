"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const eventTypes = [
  "Wedding",
  "Engagement party",
  "Corporate event",
  "Holiday party",
  "Private celebration",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#2C1A0E] mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2C1A0E] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#2C1A0E] mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-[#2C1A0E] mb-2">
            Event type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors bg-white"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-[#2C1A0E] mb-2">
            Event date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-[#2C1A0E] mb-2">
            Guest count
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            min={1}
            placeholder="Approximate number"
            className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2C1A0E] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-[#2C1A0E]/15 bg-[#FAF7F2] px-4 py-3 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A] outline-none transition-colors resize-y"
          placeholder="Tell us about your event..."
        />
      </div>

      {status === "sent" && (
        <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4">
          <p className="text-green-800 font-medium text-sm">
            Thank you! We&apos;ll be in touch soon.
          </p>
          <p className="text-green-700 text-xs mt-1">
            In the meantime, feel free to call or text us at{" "}
            <a href="tel:2623702994" className="underline">(262) 370-2994</a>.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-5 py-4">
          <p className="text-red-800 font-medium text-sm">
            Something went wrong — please try again or reach us directly at{" "}
            <a href="tel:2623702994" className="underline">(262) 370-2994</a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto rounded-full bg-[#B8935A] text-white px-8 py-3 font-semibold hover:bg-[#D4A96A] disabled:opacity-70 transition-colors tracking-[0.1em]"
      >
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
    </motion.form>
  );
}
