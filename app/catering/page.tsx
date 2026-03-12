"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";
import Image from "next/image";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Small bites & starters",
    items: [
      "Bruschetta with heirloom tomato & basil",
      "Hill Valley Dairy local cheese boards",
      "Ahi poke bowls",
      "Charcuterie & artisan bread boards",
      "Seasonal vegetable tartlets",
    ],
  },
  {
    title: "Plated & buffet",
    items: [
      "Pan-seared salmon with seasonal vegetables",
      "Herb-roasted chicken",
      "Braised short rib with mashed potatoes",
      "Vegetarian risotto",
      "Custom multi-course pop-up dinner menus",
    ],
  },
  {
    title: "Brunch & specialty",
    items: [
      "Brunch & Bingo buffet spreads",
      "Eggs Benedict & morning stations",
      "Local pizza (East Troy favorites)",
      "Dessert bars & sweet stations",
      "Coffee, tea & specialty beverage service",
    ],
  },
];

const foodImages = [
  { src: "/images/food-salmon.jpg",    alt: "Pan-seared salmon plated on the rooftop" },
  { src: "/images/dinner-popup.jpg",   alt: "Multi-course pop-up dinner" },
  { src: "/images/dinner-setting.jpg", alt: "Artisan dinner table setting" },
  { src: "/images/catering-boxed.jpg", alt: "Toothpicks boxed charcuterie board" },
  { src: "/images/catering-train.jpg", alt: "Toothpicks Catering on the East Troy Dinner Train" },
  { src: "/images/drinks-rooftop.jpg", alt: "Craft cocktails on the rooftop" },
];

export default function CateringPage() {
  return (
    <>
      <Hero
        headline="Catering by Toothpicks"
        subheadline="Fresh, seasonal menus crafted for every event at The Social Affair."
        primaryCta={{ label: "Request catering info", href: "/contact" }}
        backgroundImage="/images/food-salmon.jpg"
      />

      <Section title="Toothpicks Catering" subtitle="Your in-house catering partner at The Social Affair" className="bg-[#F2EAE0]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 text-[15px] text-[#3B2012]/80 leading-relaxed">
            <p>
              <strong className="text-[#7D0A1E]">The Social Affair</strong> is
              the venue — and{" "}
              <strong className="text-[#7D0A1E]">Toothpicks Catering</strong>{" "}
              is our dedicated in-house culinary partner. When you host your
              event with us, you'll work directly with the Toothpicks team to
              build a custom menu that fits your style and your crowd.
            </p>
            <p>
              Known across East Troy for their pop-up dinners, rooftop bites,
              and community events, Toothpicks uses fresh, seasonal
              ingredients to create menus that range from casual small bites to
              elegant five-course experiences.
            </p>
            <p>
              Toothpicks also caters off-site events including the{" "}
              <strong className="text-[#7D0A1E]">
                East Troy Electric Railroad Dinner Train
              </strong>{" "}
              — a beloved local tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:2623702994"
                className="inline-flex items-center gap-2 rounded-full bg-[#B8935A] text-white px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#D4A96A] transition-colors shadow-md shadow-[#B8935A]/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (262) 370-2994
              </a>
              <a
                href="sms:2623702994"
                className="inline-flex items-center gap-2 rounded-full bg-[#2C1A0E] text-[#FAF7F2] px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#3B2012] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text us
              </a>
              <a
                href="mailto:toothpicks_catering@yahoo.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4A96A]/30 text-[#2C1A0E] px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#FAF7F2] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-[#2C1A0E]/10 w-full aspect-[4/3]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/images/dinner-popup.jpg)` }}
              />
            </div>
            <div className="bg-[#FAF7F2] rounded-xl px-4 py-3 shadow-sm border border-[#D4A96A]/15">
              <Image
                src="/images/toothpicks-logo.jpg"
                alt="Toothpicks Catering"
                width={180}
                height={90}
                className="object-contain h-12 w-auto"
              />
            </div>
          </div>
        </motion.div>
      </Section>

      <Section title="Menu ideas" subtitle="Custom menus available — this is just a taste" className="bg-[#FAF7F2]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuSections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[#D4A96A]/18 bg-[#F2EAE0] p-8 hover:border-[#B8935A]/35 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-6 bg-[#D4A96A]/45" />
                <span className="text-[#D4A96A]/65 text-xs">✦</span>
              </div>
              <h3 className="font-playfair text-xl text-[#7D0A1E] mb-4">{sec.title}</h3>
              <ul className="space-y-2 text-[#3B2012]/80 text-sm">
                {sec.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#B8935A] font-bold shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Food gallery" subtitle="A glimpse of what Toothpicks creates" className="bg-[#F2EAE0]">
        <GalleryGrid images={foodImages} columns={3} />
      </Section>

      <CTASection
        title="Ready to plan your menu?"
        subtitle="Reach out and we'll connect you with Toothpicks Catering for your event."
        primaryCta={{ label: "Request catering info", href: "/contact" }}
        secondaryCta={{ label: "View the venue", href: "/venue" }}
      />
    </>
  );
}
