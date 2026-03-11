"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTASection from "@/components/CTASection";

type Tag = "All" | "Dining" | "Music" | "Brunch";

interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  ticketUrl: string;
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day:   d.getDate(),
    full:  d.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
    weekday: d.toLocaleString("en-US", { weekday: "short" }).toUpperCase(),
  };
}

const TAG_COLORS: Record<string, string> = {
  Dining: "bg-burgundy/10 text-burgundy",
  Music:  "bg-charcoal/8 text-charcoal/80",
  Brunch: "bg-amber-50 text-amber-800",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function EventsClient({ events }: { events: Event[] }) {
  const [activeTag, setActiveTag] = useState<Tag>("All");

  const tags: Tag[] = ["All", "Dining", "Music", "Brunch"];

  const filtered = activeTag === "All"
    ? events
    : events.filter((e) => e.tag === activeTag);

  return (
    <>
      {/* ── Page header ── */}
      <div className="bg-charcoal text-ivory pt-16 pb-0 px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-burgundy/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
            <div className="h-px w-10 bg-burgundy/70" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-light text-white mb-3">
            Events
          </h1>
          <p className="text-sm tracking-widest uppercase text-ivory/55 mb-10">
            The Social Affair · East Troy, Wisconsin
          </p>
        </motion.div>

        {/* Tab filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-0">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all ${
                activeTag === tag
                  ? "bg-burgundy text-white shadow-lg shadow-burgundy/30"
                  : "bg-white/8 text-ivory/60 hover:bg-white/15 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Bottom tab bar connector */}
        <div className="h-8" />
      </div>

      {/* ── Upcoming Events ── */}
      <section className="bg-cream px-5 sm:px-6 md:px-10 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="space-y-5"
            >
              {filtered.length === 0 && (
                <motion.p
                  variants={fadeUp}
                  className="text-center text-charcoal/50 py-16 text-sm tracking-widest uppercase"
                >
                  No upcoming events in this category — check back soon.
                </motion.p>
              )}

              {filtered.map((event) => {
                const d = formatDate(event.date);
                return (
                  <motion.article
                    key={event.id}
                    variants={fadeUp}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-charcoal/8 transition-all duration-300 flex flex-col sm:flex-row"
                  >
                    {/* Date column */}
                    <div className="flex sm:flex-col items-center justify-center gap-4 sm:gap-1 px-6 sm:px-0 py-4 sm:py-0 sm:w-28 shrink-0 bg-charcoal text-white">
                      <div className="text-center">
                        <p className="text-[11px] tracking-widest font-semibold text-ivory/50 mb-0.5">{d.weekday}</p>
                        <p className="font-playfair text-4xl sm:text-5xl font-light leading-none">{d.day}</p>
                        <p className="text-[11px] tracking-widest font-semibold text-ivory/60 mt-1">{d.month}</p>
                      </div>
                    </div>

                    {/* Photo */}
                    <div className="hidden sm:block w-48 shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 py-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[event.tag] ?? "bg-charcoal/8 text-charcoal/70"}`}>
                            {event.tag}
                          </span>
                          <span className="text-xs text-charcoal/45 tracking-wide">{event.time}</span>
                        </div>
                        <h2 className="font-playfair text-xl md:text-2xl text-charcoal font-light mb-2">
                          {event.title}
                        </h2>
                        <p className="text-sm text-charcoal/70 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mt-5">
                        <Link
                          href={event.ticketUrl}
                          className="inline-flex items-center justify-center rounded-full bg-burgundy text-white px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-burgundy-700 active:scale-95 transition-all shadow-md shadow-burgundy/20"
                        >
                          Reserve a Spot
                        </Link>
                        <a
                          href="tel:2623702994"
                          className="text-xs tracking-widest uppercase text-charcoal/45 hover:text-burgundy transition-colors font-medium"
                        >
                          Call to inquire
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-0.5">
        {[
          "/images/rooftop-setup.jpg",
          "/images/live-music-1.jpg",
          "/images/drinks-rooftop.jpg",
          "/images/dinner-setting.jpg",
          "/images/bloody-mary.jpg",
        ].map((src, i) => (
          <div key={src} className={`aspect-square overflow-hidden ${i >= 3 ? "hidden sm:block" : ""}`}>
            <div
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        ))}
      </div>

      {/* ── Private Events ── */}
      <section className="bg-ivory px-5 sm:px-6 md:px-10 py-14 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-burgundy/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
              <div className="h-px w-8 bg-burgundy/60" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-charcoal mb-3">
              Host a Private Event
            </h2>
            <p className="text-sm tracking-wider uppercase text-charcoal/55 max-w-md mx-auto">
              The whole venue is yours — from the bar to the rooftop
            </p>
          </div>

          {/* Capacity cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                label: "Indoor Space",
                cap: "40 guests",
                icon: "🏠",
                desc: "Warm lighting, full bar, farm tables, and large windows overlooking Main Street.",
              },
              {
                label: "Rooftop Terrace",
                cap: "40 guests",
                icon: "🌃",
                desc: "Open-air deck with pergola, string lights, and patio heaters — usable year-round.",
              },
              {
                label: "Full Venue Buy-Out",
                cap: "Up to 80",
                icon: "✨",
                desc: "Rent both floors with full bar, Toothpicks catering, and live music capability.",
              },
            ].map((block) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center border border-charcoal/8 rounded-2xl p-7 bg-white hover:border-burgundy/25 hover:shadow-md hover:shadow-burgundy/6 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{block.icon}</div>
                <p className="font-playfair text-3xl text-burgundy mb-1">{block.cap}</p>
                <p className="text-xs tracking-widest uppercase text-charcoal/55 mb-4">{block.label}</p>
                <div className="h-px w-8 bg-burgundy/35 mx-auto mb-4" />
                <p className="text-sm text-charcoal/70 leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Inquiry actions */}
          <div className="text-center space-y-4">
            <p className="text-charcoal/65 text-sm max-w-md mx-auto leading-relaxed">
              Ready to start planning? Get in touch and we'll walk you through everything.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full bg-burgundy text-white px-9 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-burgundy-700 active:scale-95 transition-all shadow-lg shadow-burgundy/25"
              >
                Inquire About Your Event
              </Link>
              <a
                href="tel:2623702994"
                className="flex items-center justify-center gap-2 rounded-full border border-charcoal/15 text-charcoal/70 px-9 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-cream active:scale-95 transition-all"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (262) 370-2994
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Something special is always happening here."
        subtitle="Follow us on social or call to stay in the loop."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View the Venue", href: "/venue" }}
      />
    </>
  );
}
