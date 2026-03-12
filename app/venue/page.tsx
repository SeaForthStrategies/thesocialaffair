"use client";

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const amenities = [
  "Indoor event space with full bar",
  "Open rooftop with pergola & string lights",
  "Patio heaters for year-round rooftop use",
  "Live music ready (sound system)",
  "In-house catering by Toothpicks",
  "Craft cocktails & beverage service",
  "Flexible table & layout options",
  "Downtown East Troy location",
];

const spaces = [
  {
    name: "Indoor Space",
    cap: "40 guests",
    desc: "Comfortably seats 40 guests. Warm pendant lighting, farm tables, full bar, and large windows overlooking Main Street.",
  },
  {
    name: "Rooftop Terrace",
    cap: "40 guests",
    desc: "Open-air deck for up to 40 guests. Pergola, string lights, patio heaters, and open views over downtown East Troy.",
  },
  {
    name: "Full Venue Buy-Out",
    cap: "Up to 80",
    desc: "Rent both floors for up to 80 guests total. Includes full bar access, Toothpicks catering, and live music capability.",
  },
];

export default function VenuePage() {
  return (
    <>
      <Hero
        headline="Our Venue"
        subheadline="East Troy's intimate events venue — a warm indoor space and an open rooftop, all in one."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
        secondaryCta={{ label: "See Events", href: "/events" }}
        backgroundImage="/images/rooftop-setup.jpg"
      />

      {/* ── The Space ── */}
      <Section title="The Space" subtitle="Indoor warmth meets open-air rooftop" className="bg-[#F2EAE0]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="space-y-5 text-[#3B2012]/80 leading-relaxed text-[15px]">
            <p>
              The Social Affair is a two-story events venue at{" "}
              <strong className="text-[#7D0A1E]">2919 Main Street</strong> in
              the heart of East Troy, Wisconsin. Our{" "}
              <strong>indoor space</strong> seats up to{" "}
              <strong className="text-[#7D0A1E]">40 guests</strong> — warm
              pendant lighting, farm-style tables, large street-facing
              windows, and a full bar.
            </p>
            <p>
              Head upstairs to our{" "}
              <strong className="text-[#7D0A1E]">rooftop terrace</strong>,
              which also accommodates up to{" "}
              <strong className="text-[#7D0A1E]">40 guests</strong> — an
              open-air deck with a pergola, string lights, patio heaters, and
              views over downtown East Troy. Buy out both floors for events of
              up to <strong className="text-[#7D0A1E]">80 guests</strong>.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg shadow-[#2C1A0E]/10">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(/images/dinner-setting.jpg)` }}
            />
          </div>
        </motion.div>
      </Section>

      {/* ── Rooftop ── */}
      <Section title="The Rooftop" subtitle="East Troy's only rooftop events space" className="bg-[#FAF7F2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-[#2C1A0E]/10 aspect-video md:order-first">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(/images/rooftop-setup.jpg)` }}
            />
          </div>
          <div className="space-y-5 text-[#3B2012]/80 leading-relaxed text-[15px]">
            <p>
              Our rooftop is the heart of The Social Affair experience. With a
              full pergola, patio heaters, and string lights, it's an
              unforgettable setting for cocktail hours, summer dinners,
              engagement parties, and live music events.
            </p>
            <p>
              Each season we host{" "}
              <strong className="text-[#7D0A1E]">Rooftop Rendezvous</strong>{" "}
              evenings — live music, craft cocktails, fine wine, and elevated
              bites with views over East Troy's Main Street. Open to the
              community and available for private buy-out.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* ── Space Options ── */}
      <Section title="Space Options" subtitle="We adapt to your event style" className="bg-[#F2EAE0]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {spaces.map((space, i) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-[#FAF7F2] border border-[#D4A96A]/18 p-8 hover:border-[#B8935A]/35 hover:shadow-md hover:shadow-[#B8935A]/8 transition-all duration-300 text-center"
            >
              <p className="font-playfair text-3xl text-[#7D0A1E] mb-1 font-light">{space.cap}</p>
              <h3 className="text-[9px] tracking-[0.22em] uppercase text-[#2C1A0E]/50 font-semibold mb-5">{space.name}</h3>
              <div className="h-px w-8 bg-[#D4A96A]/45 mx-auto mb-5" />
              <p className="text-sm text-[#3B2012]/70 leading-relaxed">{space.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Amenities ── */}
      <Section title="Amenities" subtitle="Everything you need for a seamless event" className="bg-[#FAF7F2]">
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.05 } },
            hidden: {},
          }}
        >
          {amenities.map((a) => (
            <motion.li
              key={a}
              variants={{ show: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
              className="flex items-start gap-3 text-sm text-[#3B2012]/75 bg-[#FAF7F2] rounded-xl px-4 py-3 border border-[#D4A96A]/15"
            >
              <span className="text-[#B8935A] font-bold mt-0.5 shrink-0">✦</span>
              {a}
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* ── Venue in photos ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0.5 bg-[#F2EAE0]">
        {[
          { src: "/images/outside.jpg",        alt: "The Social Affair at night"         },
          { src: "/images/dinner-setting.jpg",  alt: "Indoor dinner with candles"         },
          { src: "/images/rooftop-setup.jpg",   alt: "Rooftop set for a private dinner"  },
          { src: "/images/front.jpg",           alt: "Front of The Social Affair"         },
          { src: "/images/dinner-popup.jpg",    alt: "Pop-up dinner table setting"        },
          { src: "/images/door.jpg",            alt: "The Social Affair entrance"         },
        ].map((img) => (
          <div key={img.src} className="aspect-square overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${img.src})` }}
              role="img"
              aria-label={img.alt}
            />
          </div>
        ))}
      </div>

      <CTASection
        title="See it in person"
        subtitle="Schedule a tour of our venue and rooftop in East Troy."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
        secondaryCta={{ label: "Host a Private Event", href: "/events" }}
      />
    </>
  );
}
