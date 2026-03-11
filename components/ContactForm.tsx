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
    // Simulate form submission; replace with your API/endpoint
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
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
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-2">
            Event type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors bg-white"
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
          <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-2">
            Event date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-charcoal mb-2">
            Guest count
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            min={1}
            placeholder="Approximate number"
            className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-charcoal/20 px-4 py-3 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors resize-y"
          placeholder="Tell us about your event..."
        />
      </div>

      {status === "sent" && (
        <p className="text-green-700 font-medium">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-700 font-medium">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto rounded-full bg-burgundy text-ivory px-8 py-3 font-semibold hover:bg-burgundy-700 disabled:opacity-70 transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
    </motion.form>
  );
}
