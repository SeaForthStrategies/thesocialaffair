"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedDivider from "@/components/AnimatedDivider";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The rooftop was absolutely stunning for our rehearsal dinner. The team was so attentive and the food from Toothpicks was incredible.",
    author: "Megan & Tyler",
    role: "Rehearsal Dinner, 2024",
  },
  {
    quote: "We hosted a pop-up dinner here and it was one of the best nights East Troy has seen. The space is magical.",
    author: "Lisa R.",
    role: "Pop-Up Dinner Guest",
  },
  {
    quote: "From the first tour to the last song, The Social Affair delivered. A truly special place for a truly special day.",
    author: "Amanda & David",
    role: "Private Event, 2024",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HomePage() {
  return (
    <>
      <Hero
        headline="The Social Affair"
        subheadline="East Troy's intimate rooftop events venue — private dinners, live music, and unforgettable celebrations."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
        secondaryCta={{ label: "See Events", href: "/events" }}
      />

      {/* ── At a glance ── */}
      <div className="bg-white border-b border-charcoal/8">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-charcoal/8">
            {[
              { icon: "🌃", label: "Rooftop Terrace",   detail: "Open-air, year-round" },
              { icon: "🍽️", label: "Private Events",    detail: "Up to 80 guests"      },
              { icon: "🎵", label: "Live Music",         detail: "Regular performances" },
              { icon: "🍸", label: "Full Bar",           detail: "Craft cocktails & wine" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col sm:items-center sm:text-center px-0 sm:px-6 gap-1">
                <span className="text-xl mb-0.5">{item.icon}</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-charcoal">{item.label}</p>
                <p className="text-xs text-charcoal/50">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── The Venue ── */}
      <Section title="The Venue" subtitle="Indoor warmth meets open-air rooftop" className="bg-ivory">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { src: "/images/outside.jpg",      label: "The Building",     href: "/venue" },
            { src: "/images/rooftop-setup.jpg", label: "Rooftop Terrace", href: "/venue" },
            { src: "/images/dinner-setting.jpg",label: "Private Dining",  href: "/venue" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={card.href} className="group block rounded-xl overflow-hidden">
                {/* landscape on mobile, portrait on desktop */}
                <div className="aspect-video sm:aspect-[3/4] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url(${card.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="text-xs tracking-widest uppercase text-white/70 mb-1">The Social Affair</p>
                    <span className="font-playfair text-lg sm:text-xl text-white">{card.label}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <AnimatedDivider />

      {/* ── Capacity ── */}
      <Section title="Host a Private Event" subtitle="Intimate enough to feel personal — stunning enough to impress" className="bg-cream">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Indoor Space",       cap: "40 guests",   desc: "Warm lighting, full bar, farm tables, large windows overlooking Main Street." },
            { label: "Rooftop Terrace",    cap: "40 guests",   desc: "Open-air deck with pergola, string lights, and patio heaters — usable year-round." },
            { label: "Full Venue Buy-Out", cap: "Up to 80",    desc: "Rent both floors with full bar, Toothpicks catering, and live music capability." },
          ].map((block) => (
            <motion.div
              key={block.label}
              variants={fadeUp}
              className="text-center border border-charcoal/8 rounded-2xl p-8 bg-ivory hover:border-burgundy/20 hover:shadow-md hover:shadow-burgundy/5 transition-all duration-300"
            >
              <p className="font-playfair text-3xl text-burgundy mb-1">{block.cap}</p>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-4">{block.label}</p>
              <div className="h-px w-8 bg-burgundy/40 mx-auto mb-4" />
              <p className="text-sm text-charcoal/75 leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below capacity cards */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-burgundy text-white px-9 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-burgundy-700 active:scale-95 transition-all shadow-lg shadow-burgundy/25"
          >
            Inquire About Your Event
          </Link>
          <p className="mt-3 text-xs text-charcoal/40 tracking-wide">
            Call or text us at{" "}
            <a href="tel:2623702994" className="text-burgundy hover:underline">(262) 370-2994</a>
          </p>
        </div>
      </Section>

      {/* ── How to Book ── */}
      <div className="bg-charcoal px-5 sm:px-6 md:px-10 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-burgundy/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
            <div className="h-px w-8 bg-burgundy/60" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-white mb-3">How It Works</h2>
          <p className="text-sm tracking-wider uppercase text-ivory/50 mb-12">Simple from start to finish</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {[
              { step: "01", title: "Schedule a Tour",   body: "Call, text, or fill out our form to arrange a walkthrough of the space — rooftop and all."     },
              { step: "02", title: "Plan Your Event",   body: "Work with our team and Toothpicks Catering to design your menu, layout, and timeline."           },
              { step: "03", title: "Show Up & Celebrate", body: "We handle the setup, the bar, and the food. All you have to do is enjoy the night."           },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="relative text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Connector line between steps */}
                {i < 2 && (
                  <div className="hidden sm:block absolute top-4 left-[calc(50%+2rem)] right-0 h-px bg-white/8" />
                )}
                <p className="font-playfair text-5xl text-burgundy/25 leading-none mb-3">{s.step}</p>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-3">{s.title}</h3>
                <p className="text-sm text-ivory/55 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white px-9 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-white/10 hover:border-white/60 active:scale-95 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* ── Drinks & Rooftop photo strip ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[
          { src: "/images/drinks-rooftop.jpg",  alt: "Cocktails on the rooftop" },
          { src: "/images/live-music-1.jpg",     alt: "Live music at the venue" },
          { src: "/images/food-salmon.jpg",      alt: "Plated dinner" },
          { src: "/images/bloody-mary.jpg",      alt: "Bloody mary on the rooftop" },
        ].map((img) => (
          <div key={img.src} className="aspect-square overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${img.src})` }}
            />
          </div>
        ))}
      </div>

      <AnimatedDivider />

      {/* ── Catering ── */}
      <Section title="Catering by Toothpicks" subtitle="Our dedicated in-house culinary partner" className="bg-ivory">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto"
        >
          <div className="space-y-5">
            <p className="text-charcoal/85 leading-relaxed">
              When you host at The Social Affair,{" "}
              <strong className="text-charcoal font-semibold">Toothpicks Catering</strong> brings
              everything to the table — custom menus, seasonal ingredients, and genuine hospitality.
              From small bites and craft cocktail pairings to five-course pop-up dinners, they make
              every event delicious.
            </p>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 rounded-full bg-burgundy text-white px-7 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-burgundy-700 transition-colors shadow-md shadow-burgundy/25"
            >
              View catering menu
            </Link>
          </div>
          <div className="relative pb-2">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/images/dinner-popup.jpg)" }}
              />
            </div>
            {/* Badge — absolute on md+, inline flex on mobile */}
            <div className="mt-3 md:mt-0 md:absolute md:-bottom-4 md:-left-4 flex items-center bg-white rounded-xl shadow-lg p-3 w-fit">
              <Image
                src="/images/toothpicks-logo.jpg"
                alt="Toothpicks Catering"
                width={100}
                height={50}
                className="object-contain h-10 w-auto"
              />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── Full photo moment strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0.5 bg-charcoal/10">
        {[
          { src: "/images/rooftop-setup.jpg",   alt: "Rooftop event", tall: true  },
          { src: "/images/dinner-setting.jpg",   alt: "Candlelit dinner",          tall: false },
          { src: "/images/food-salmon.jpg",      alt: "Plated dinner",             tall: false },
          { src: "/images/live-music-1.jpg",     alt: "Live music",                tall: false },
          { src: "/images/drinks-rooftop.jpg",   alt: "Cocktails on the rooftop",  tall: false },
          { src: "/images/dinner-popup.jpg",     alt: "Pop-up dinner",             tall: true  },
        ].map((img, i) => (
          <motion.div
            key={img.src}
            className={`overflow-hidden ${img.tall ? "aspect-[3/4]" : "aspect-square"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <div
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${img.src})` }}
              role="img"
              aria-label={img.alt}
            />
          </motion.div>
        ))}
      </div>

      <AnimatedDivider />

      {/* ── Upcoming Events teaser ── */}
      <Section title="Upcoming Events" subtitle="Join us for our next gathering" className="bg-cream">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {[
            { date: "Mar 22", tag: "Dining",  title: "Spring Pop-Up Dinner",    time: "6:00 PM – 9:00 PM" },
            { date: "Mar 29", tag: "Music",   title: "Live Music Night",         time: "7:00 PM – 10:00 PM" },
            { date: "Apr 12", tag: "Brunch",  title: "Rooftop Brunch",           time: "11:00 AM – 2:00 PM" },
          ].map((ev) => (
            <motion.div
              key={ev.title}
              variants={fadeUp}
              className="flex items-center gap-5 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:shadow-charcoal/8 transition-all duration-300"
            >
              <div className="text-center shrink-0 w-12">
                <p className="font-playfair text-2xl text-burgundy leading-none">{ev.date.split(" ")[1]}</p>
                <p className="text-[10px] tracking-widest uppercase text-charcoal/45 mt-0.5">{ev.date.split(" ")[0]}</p>
              </div>
              <div className="h-8 w-px bg-charcoal/8 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs tracking-widest uppercase text-burgundy/80 font-medium mb-0.5">{ev.tag}</p>
                <p className="font-playfair text-lg text-charcoal font-light truncate">{ev.title}</p>
                <p className="text-xs text-charcoal/50 mt-0.5">{ev.time}</p>
              </div>
              <Link
                href="/events"
                className="shrink-0 text-xs tracking-widest uppercase font-medium text-charcoal/40 hover:text-burgundy transition-colors hidden sm:block"
              >
                Details →
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-full bg-burgundy text-white px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-burgundy-700 transition-colors shadow-md shadow-burgundy/20"
          >
            View All Events
          </Link>
        </div>
      </Section>

      <AnimatedDivider />

      {/* ── Testimonials ── */}
      <Section title="What People Say" subtitle="Stories from our guests" className="bg-ivory">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={fadeUp}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Follow us ── */}
      <div className="bg-ivory border-y border-charcoal/8 px-5 sm:px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-widest uppercase text-charcoal/45 mb-4">Follow Along</p>
          <h3 className="font-playfair text-2xl font-light text-charcoal mb-5">
            Stay in the loop on events, food, and nights out in East Troy
          </h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://www.instagram.com/thesocialaffairevents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal text-white px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-charcoal/80 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @thesocialaffairevents
            </a>
            <a
              href="https://www.facebook.com/TheSocialAffairEastTroy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 text-charcoal/70 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-cream hover:border-charcoal/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      <CTASection
        title="Ready to plan your affair?"
        subtitle="Schedule a tour and see the rooftop for yourself."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
        secondaryCta={{ label: "View Venue", href: "/venue" }}
      />
    </>
  );
}
