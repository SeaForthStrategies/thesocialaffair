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
    month:   d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day:     d.getDate(),
    full:    d.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
    weekday: d.toLocaleString("en-US", { weekday: "short" }).toUpperCase(),
  };
}

const TAG_COLORS: Record<string, string> = {
  Dining: "bg-[#7D0A1E]/10 text-[#7D0A1E]",
  Music:  "bg-[#2C1A0E]/8 text-[#2C1A0E]/70",
  Brunch: "bg-amber-50 text-amber-800",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function EventsClient({ events }: { events: Event[] }) {
  const [activeTag, setActiveTag] = useState<Tag>("All");
  const tags: Tag[] = ["All", "Dining", "Music", "Brunch"];
  const filtered = activeTag === "All" ? events : events.filter((e) => e.tag === activeTag);

  return (
    <>
      {/* Page header */}
      <div className="bg-[#1C0A00] text-[#FAF7F2] pt-16 pb-0 px-5 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A96A]/50" />
            <span className="text-[#D4A96A]/65 text-xs">✦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A96A]/50" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-light text-[#FAF7F2] mb-3">Events</h1>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#FAF7F2]/50 mb-10">
            The Social Affair · East Troy, Wisconsin
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 flex-wrap pb-0">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all ${
                activeTag === tag
                  ? "bg-[#B8935A] text-white shadow-lg shadow-[#B8935A]/30"
                  : "bg-white/8 text-[#FAF7F2]/55 hover:bg-white/15 hover:text-[#FAF7F2]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="h-8" />
      </div>

      {/* Events list */}
      <section className="bg-[#F2EAE0] px-5 sm:px-6 md:px-10 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="space-y-4"
            >
              {filtered.length === 0 && (
                <motion.p variants={fadeUp} className="text-center text-[#2C1A0E]/45 py-16 text-sm tracking-[0.18em] uppercase">
                  No upcoming events in this category — check back soon.
                </motion.p>
              )}

              {filtered.map((event) => {
                const d = formatDate(event.date);
                return (
                  <motion.article
                    key={event.id}
                    variants={fadeUp}
                    className="group bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-sm shadow-[#2C1A0E]/5 border border-[#D4A96A]/12 hover:shadow-lg hover:shadow-[#B8935A]/8 hover:border-[#B8935A]/25 transition-all duration-300 flex flex-col sm:flex-row"
                  >
                    <div className="flex sm:flex-col items-center justify-center gap-4 sm:gap-1 px-6 sm:px-0 py-4 sm:py-0 sm:w-28 shrink-0 bg-[#1C0A00] text-[#FAF7F2]">
                      <div className="text-center">
                        <p className="text-[10px] tracking-[0.2em] font-semibold text-[#D4A96A]/60 mb-0.5">{d.weekday}</p>
                        <p className="font-playfair text-4xl sm:text-5xl font-light leading-none">{d.day}</p>
                        <p className="text-[10px] tracking-[0.2em] font-semibold text-[#D4A96A]/70 mt-1">{d.month}</p>
                      </div>
                    </div>

                    <div className="hidden sm:block w-48 shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                    </div>

                    <div className="flex-1 px-6 py-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[event.tag] ?? "bg-[#2C1A0E]/8 text-[#2C1A0E]/70"}`}>
                            {event.tag}
                          </span>
                          <span className="text-xs text-[#2C1A0E]/40 tracking-wide">{event.time}</span>
                        </div>
                        <h2 className="font-playfair text-xl md:text-2xl text-[#2C1A0E] font-light mb-2">{event.title}</h2>
                        <p className="text-sm text-[#3B2012]/65 leading-relaxed">{event.description}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-5">
                        <Link
                          href={event.ticketUrl}
                          className="inline-flex items-center justify-center rounded-full bg-[#B8935A] text-white px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#D4A96A] active:scale-95 transition-all shadow-md shadow-[#B8935A]/20"
                        >
                          Reserve a Spot
                        </Link>
                        <a href="tel:2623702994" className="text-xs tracking-[0.18em] uppercase text-[#2C1A0E]/40 hover:text-[#7D0A1E] transition-colors font-medium">
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

      {/* Photo strip */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-0.5">
        {[
          "/images/rooftop-setup.jpg",
          "/images/live-music-1.jpg",
          "/images/drinks-rooftop.jpg",
          "/images/dinner-setting.jpg",
          "/images/bloody-mary.jpg",
        ].map((src, i) => (
          <div key={src} className={`aspect-square overflow-hidden ${i >= 3 ? "hidden sm:block" : ""}`}>
            <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${src})` }} />
          </div>
        ))}
      </div>

      {/* Private Events */}
      <section className="bg-[#FAF7F2] px-5 sm:px-6 md:px-10 py-14 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A96A]/50" />
              <span className="text-[#D4A96A]/65 text-xs">✦</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A96A]/50" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-[#2C1A0E] mb-3">Host a Private Event</h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C1A0E]/50 max-w-md mx-auto">
              The whole venue is yours — from the bar to the rooftop
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Indoor Space",       cap: "40 guests", desc: "Warm lighting, full bar, farm tables, and large windows overlooking Main Street." },
              { label: "Rooftop Terrace",    cap: "40 guests", desc: "Open-air deck with pergola, string lights, and patio heaters — usable year-round." },
              { label: "Full Venue Buy-Out", cap: "Up to 80",  desc: "Rent both floors with full bar, Toothpicks catering, and live music capability." },
            ].map((block) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center border border-[#D4A96A]/18 rounded-2xl p-7 bg-[#FAF7F2] hover:border-[#B8935A]/35 hover:shadow-md hover:shadow-[#B8935A]/8 transition-all duration-300"
              >
                <p className="font-playfair text-3xl text-[#7D0A1E] mb-1 font-light">{block.cap}</p>
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#2C1A0E]/50 mb-5">{block.label}</p>
                <div className="h-px w-8 bg-[#D4A96A]/40 mx-auto mb-4" />
                <p className="text-sm text-[#3B2012]/70 leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-[#3B2012]/60 text-sm max-w-md mx-auto leading-relaxed">
              Ready to start planning? Get in touch and we'll walk you through everything.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full bg-[#B8935A] text-white px-9 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4A96A] active:scale-95 transition-all shadow-lg shadow-[#B8935A]/25"
              >
                Inquire About Your Event
              </Link>
              <a
                href="tel:2623702994"
                className="flex items-center justify-center gap-2 rounded-full border border-[#2C1A0E]/15 text-[#2C1A0E]/65 px-9 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#F2EAE0] active:scale-95 transition-all"
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
